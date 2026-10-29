import type { Bilingual } from './i18n';
import { bi, normalise, stripTitles } from './i18n';
import { ParvaStory, type MythicPerson } from './entities';

/** Generic in-memory collection with id uniqueness enforced at insert time. */
export class Repository<T extends { readonly id: string }> {
  protected readonly store: Map<string, T> = new Map();

  constructor(readonly name: string, seed: readonly T[]) {
    for (const item of seed) this.insert(item);
  }

  insert(item: T): this {
    if (this.store.has(item.id)) {
      throw new Error(`[${this.name}] duplicate id "${item.id}"`);
    }
    this.store.set(item.id, item);
    return this;
  }

  byId(id: string): T | undefined {
    return this.store.get(id);
  }

  all(): readonly T[] {
    return [...this.store.values()];
  }

  where(predicate: (item: T) => boolean): readonly T[] {
    return this.all().filter(predicate);
  }

  get size(): number {
    return this.store.size;
  }
}

/**
 * Prefix index (trie) used by the search box.
 *
 * Typing "k" has to return *every* entry whose name, alias or epithet begins
 * with "k" — a linear scan would do it, but the trie keeps the dropdown
 * instant as the character set grows and mirrors how a real document store
 * keeps a text index on the side.
 */
export class PrefixIndex {
  private readonly root: TrieNode = { children: new Map(), values: new Set() };

  insert(term: string, id: string): void {
    const key = normalise(term);
    if (!key) return;
    let node = this.root;
    for (const char of key) {
      let next = node.children.get(char);
      if (!next) {
        next = { children: new Map(), values: new Set() };
        node.children.set(char, next);
      }
      node = next;
      node.values.add(id);
    }
  }

  /** All ids registered under keys beginning with the given prefix. */
  startsWith(prefix: string): ReadonlySet<string> {
    const key = normalise(prefix);
    if (!key) return new Set();
    let node: TrieNode | undefined = this.root;
    for (const char of key) {
      node = node.children.get(char);
      if (!node) return new Set();
    }
    return node.values;
  }
}

interface TrieNode {
  readonly children: Map<string, TrieNode>;
  readonly values: Set<string>;
}

export interface SearchHit {
  readonly person: MythicPerson;
  readonly score: number;
  readonly matched: string;
}

const tokenize = (value: string): string[] =>
  normalise(value)
    .split(/[\s/()]+/)
    .filter((token) => token.length > 0);

/**
 * Person collection with a maintained prefix index.
 * `search()` implements the behaviour the archive promises: progressive,
 * prefix-based matching across both scripts.
 */
export class PersonRepository extends Repository<MythicPerson> {
  private readonly index = new PrefixIndex();

  constructor(seed: readonly MythicPerson[]) {
    super('persons', seed);
    for (const person of this.all()) this.indexPerson(person);
  }

  private indexPerson(person: MythicPerson): void {
    // Names and aliases are indexed whole and word by word. Epithets stay out
    // of the prefix index on purpose: "King of the gods" would otherwise make
    // Indra appear for the letter "k", which is not what a reader expects.
    const coreEn = stripTitles(person.name.en);
    for (const key of [coreEn, person.name.en, person.name.te, ...person.aliases]) {
      this.index.insert(key, person.id);
      for (const token of tokenize(key)) this.index.insert(token, person.id);
    }
  }

  byKind(kind: MythicPerson['kind']): readonly MythicPerson[] {
    return this.where((person) => person.kind === kind);
  }

  byInitial(letter: string): readonly MythicPerson[] {
    return this.where((person) => person.initial === letter.toUpperCase());
  }

  /** Sorted cast list for the character index page. */
  alphabetical(): readonly MythicPerson[] {
    return [...this.all()].sort((a, b) => a.name.en.localeCompare(b.name.en));
  }

  /** Prefix search: every query term must prefix some indexed token. */
  search(query: string, limit = 12): readonly SearchHit[] {
    const terms = normalise(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];

    const candidateSets = terms.map((term) => this.index.startsWith(term));
    const [first, ...rest] = candidateSets;
    const hits: SearchHit[] = [];

    for (const id of first) {
      if (rest.some((set) => !set.has(id))) continue;
      const person = this.byId(id);
      if (!person) continue;
      hits.push(this.score(person, terms[0]));
    }

    return hits
      .sort((a, b) => a.score - b.score || a.person.name.en.localeCompare(b.person.name.en))
      .slice(0, limit);
  }

  private score(person: MythicPerson, term: string): SearchHit {
    const nameEn = normalise(stripTitles(person.name.en));
    const nameTe = normalise(person.name.te);
    const alias = person.aliases.map(normalise).sort((a, b) => a.length - b.length)[0] ?? '';
    const epithet = normalise(person.epithets[0]?.en ?? '');

    if (nameEn.startsWith(term)) return { person, score: nameEn === term ? 0 : 1, matched: person.name.en };
    if (nameTe.startsWith(term)) return { person, score: 2, matched: person.name.te };
    if (alias.startsWith(term)) return { person, score: 3, matched: person.aliases[0] };
    if (epithet.startsWith(term)) return { person, score: 4, matched: person.epithets[0].en };
    return { person, score: 5, matched: person.summary.en };
  }
}

export class StoryRepository extends Repository<ParvaStory> {
  constructor(seed: readonly ParvaStory[]) {
    super('stories', seed);
  }

  ordered(): readonly ParvaStory[] {
    return [...this.all()].sort((a, b) => a.index - b.index);
  }

  forCharacter(characterId: string): readonly ParvaStory[] {
    return this.ordered().filter((story) => story.characters.includes(characterId));
  }
}

export type RelationKey = keyof NonNullable<MythicPerson['relations']>;

export const RELATION_LABELS: Record<RelationKey, Bilingual> = {
  father: bi('Father', 'తండ్రి'),
  mother: bi('Mother', 'తల్లి'),
  teachers: bi('Teacher', 'గురువు'),
  adoptedParents: bi('Adopted Parents', 'పెంచిన తల్లిదండ్రులు'),
  spouses: bi('Spouse', 'భార్య / భర్త'),
  sons: bi('Son', 'కుమారుడు'),
  daughters: bi('Daughter', 'కుమార్తె'),
  siblings: bi('Sibling', 'సోదరుడు / సోదరి'),
};

export interface RelationEntry {
  readonly key: RelationKey;
  readonly label: Bilingual;
  readonly people: readonly MythicPerson[];
}

export interface ArchiveStats {
  readonly characters: number;
  readonly stories: number;
  readonly relations: number;
  readonly sections: number;
}

/**
 * Application database.
 *
 * A single seeded document store with three collections (people, stories and
 * derived relations). It is deliberately the only place the UI reads from, so
 * swapping the JSON seed for a real server or IndexedDB adapter later would
 * touch one file. Seed data is imported lazily inside `load()`.
 */
export class ScriptureDatabase {
  private static instance: ScriptureDatabase | null = null;

  readonly persons: PersonRepository;
  readonly stories: StoryRepository;

  private constructor(persons: PersonRepository, stories: StoryRepository) {
    this.persons = persons;
    this.stories = stories;
  }

  static get(): ScriptureDatabase {
    if (!ScriptureDatabase.instance) {
      ScriptureDatabase.instance = new ScriptureDatabase(peopleSeed(), storySeed());
    }
    return ScriptureDatabase.instance;
  }

  get stats(): ArchiveStats {
    const relations = this.persons.all().reduce((total, person) => total + person.relationCount, 0);
    const sections = this.stories.all().reduce((total, story) => total + story.sectionCount, 0);
    return { characters: this.persons.size, stories: this.stories.size, relations, sections };
  }

  person(id: string): MythicPerson | undefined {
    return this.persons.byId(id);
  }

  story(id: string): ParvaStory | undefined {
    return this.stories.byId(id);
  }

  /** Resolves id groups into labelled, navigable relation blocks. */
  relationsOf(id: string): readonly RelationEntry[] {
    const person = this.person(id);
    if (!person) return [];
    const entries: RelationEntry[] = [];
    for (const [key, label] of Object.entries(RELATION_LABELS) as [RelationKey, Bilingual][]) {
      const ids = person.relations[key];
      if (!ids || ids.length === 0) continue;
      const people = ids.map((relationId) => this.person(relationId)).filter((p): p is MythicPerson => Boolean(p));
      if (people.length > 0) entries.push({ key, label, people });
    }
    return entries;
  }

  castOf(storyId: string): readonly MythicPerson[] {
    const story = this.story(storyId);
    if (!story) return [];
    return story.characters.map((id) => this.person(id)).filter((p): p is MythicPerson => Boolean(p));
  }

  /** Simple two-way lookup used by the "appears in" panel. */
  storiesFor(characterId: string): readonly ParvaStory[] {
    return this.stories.forCharacter(characterId);
  }

  featured(ids: readonly string[]): readonly MythicPerson[] {
    return ids.map((id) => this.person(id)).filter((p): p is MythicPerson => Boolean(p));
  }

  neighbours(id: string): { previous?: MythicPerson; next?: MythicPerson } {
    const list = this.persons.alphabetical();
    const current = list.findIndex((person) => person.id === id);
    if (current < 0) return {};
    return { previous: list[current - 1], next: list[current + 1] };
  }
}

/** Tiny preference store for language + recent searches (localStorage). */
export class PreferenceStore {
  constructor(private readonly storage: Storage) {}

  read<T>(key: string, fallback: T): T {
    try {
      const raw = this.storage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
      return fallback;
    }
  }

  write<T>(key: string, value: T): void {
    try {
      this.storage.setItem(key, JSON.stringify(value));
    } catch {
      /* private mode — preferences simply do not persist */
    }
  }
}

/* ------------------------------------------------------------------ */
/* Seed wiring                                                         */
/* ------------------------------------------------------------------ */

import { CHARACTERS } from '../data/characters';
import { STORIES } from '../data/stories';

const peopleSeed = (): PersonRepository => new PersonRepository(CHARACTERS);
const storySeed = (): StoryRepository =>
  new StoryRepository(STORIES.map((story) => new ParvaStory(story)));

export const db = (): ScriptureDatabase => ScriptureDatabase.get();
