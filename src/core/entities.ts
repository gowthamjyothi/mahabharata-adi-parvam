import type { Bilingual } from './i18n';
import { bi, stripTitles } from './i18n';

/** Broad class of being in the epic. Drives labels, colour and sigil art. */
export type EntityKind =
  | 'divine'
  | 'sage'
  | 'royal'
  | 'warrior'
  | 'serpent'
  | 'demon'
  | 'celestial'
  | 'bard';

export type ArtKey =
  | 'chariot'
  | 'bow'
  | 'mace'
  | 'conch'
  | 'serpent'
  | 'flame'
  | 'axe'
  | 'scroll'
  | 'trident'
  | 'lotus'
  | 'peacock'
  | 'flag'
  | 'pot'
  | 'gem'
  | 'crown'
  | 'mountain'
  | 'sword';

/** Kinship links, always stored as ids so the graph stays navigable. */
export interface Relations {
  readonly father?: readonly string[];
  readonly mother?: readonly string[];
  readonly teachers?: readonly string[];
  readonly adoptedParents?: readonly string[];
  readonly spouses?: readonly string[];
  readonly sons?: readonly string[];
  readonly daughters?: readonly string[];
  readonly siblings?: readonly string[];
}

export interface PersonInit {
  readonly id: string;
  readonly name: Bilingual;
  readonly aliases?: readonly string[];
  readonly epithets?: readonly Bilingual[];
  readonly lineage?: Bilingual;
  readonly summary: Bilingual;
  readonly description: Bilingual;
  readonly relations?: Relations;
  readonly stories?: readonly string[];
  readonly art?: ArtKey;
}

/**
 * Abstract base of the archive's entity hierarchy.
 *
 * Subclasses only supply presentation metadata (`kindLabel`, `accent`,
 * `sigil`) — every piece of content lives here exactly once, which is what
 * keeps 90-odd characters consistent and lets the UI render them
 * polymorphically.
 */
export abstract class MythicPerson {
  readonly id: string;
  readonly name: Bilingual;
  readonly aliases: readonly string[];
  readonly epithets: readonly Bilingual[];
  readonly lineage: Bilingual;
  readonly summary: Bilingual;
  readonly description: Bilingual;
  readonly relations: Relations;
  readonly stories: readonly string[];
  readonly art: ArtKey;

  constructor(init: PersonInit) {
    this.id = init.id;
    this.name = init.name;
    this.aliases = init.aliases ?? [];
    this.epithets = init.epithets ?? [];
    this.lineage = init.lineage ?? bi('Adi Parva', 'ఆది పర్వం');
    this.summary = init.summary;
    this.description = init.description;
    this.relations = init.relations ?? {};
    this.stories = init.stories ?? [];
    this.art = init.art ?? 'lotus';
  }

  /** Category name shown on badges and detail headers. */
  abstract get kindLabel(): Bilingual;
  /** CSS custom property value used to tint this record's cards. */
  abstract get accent(): string;
  abstract get kind(): EntityKind;

  /** Latin initial used by the alphabetical index (Telugu records included). */
  get initial(): string {
    const latin = stripTitles(this.name.en);
    return (latin[0] ?? '#').toUpperCase();
  }

  /** Everything a prefix search may match against. */
  get searchKeys(): readonly string[] {
    return [this.name.en, this.name.te, ...this.aliases, ...this.epithets.map((e) => e.en)];
  }

  get relationCount(): number {
    return Object.values(this.relations).reduce((total, group) => total + (group?.length ?? 0), 0);
  }
}

abstract class TintedPerson extends MythicPerson {
  constructor(init: PersonInit) {
    super(init);
  }
}

export class Royal extends TintedPerson {
  get kind(): EntityKind {
    return 'royal';
  }
  get kindLabel(): Bilingual {
    return bi('Royalty', 'రాజవంశం');
  }
  get accent(): string {
    return 'var(--royal)';
  }
}

export class Sage extends TintedPerson {
  get kind(): EntityKind {
    return 'sage';
  }
  get kindLabel(): Bilingual {
    return bi('Sage & Seer', 'ఋషి');
  }
  get accent(): string {
    return 'var(--sage)';
  }
}

export class Deity extends TintedPerson {
  get kind(): EntityKind {
    return 'divine';
  }
  get kindLabel(): Bilingual {
    return bi('Divine', 'దేవత');
  }
  get accent(): string {
    return 'var(--divine)';
  }
}

export class Warrior extends TintedPerson {
  get kind(): EntityKind {
    return 'warrior';
  }
  get kindLabel(): Bilingual {
    return bi('Warrior', 'యోధుడు');
  }
  get accent(): string {
    return 'var(--warrior)';
  }
}

export class Serpent extends TintedPerson {
  get kind(): EntityKind {
    return 'serpent';
  }
  get kindLabel(): Bilingual {
    return bi('Naga', 'నాగుడు');
  }
  get accent(): string {
    return 'var(--serpent)';
  }
}

export class Demon extends TintedPerson {
  get kind(): EntityKind {
    return 'demon';
  }
  get kindLabel(): Bilingual {
    return bi('Rakshasa', 'రాక్షసుడు');
  }
  get accent(): string {
    return 'var(--demon)';
  }
}

export class Celestial extends TintedPerson {
  get kind(): EntityKind {
    return 'celestial';
  }
  get kindLabel(): Bilingual {
    return bi('Celestial', 'అప్సర / గంధర్వ');
  }
  get accent(): string {
    return 'var(--celestial)';
  }
}

export class Bard extends TintedPerson {
  get kind(): EntityKind {
    return 'bard';
  }
  get kindLabel(): Bilingual {
    return bi('Narrator', 'కథకుడు');
  }
  get accent(): string {
    return 'var(--bard)';
  }
}

/** Factory: one `kind` field in the data files selects the concrete class. */
export const createPerson = (kind: EntityKind, init: PersonInit): MythicPerson => {
  switch (kind) {
    case 'royal':
      return new Royal(init);
    case 'sage':
      return new Sage(init);
    case 'divine':
      return new Deity(init);
    case 'warrior':
      return new Warrior(init);
    case 'serpent':
      return new Serpent(init);
    case 'demon':
      return new Demon(init);
    case 'celestial':
      return new Celestial(init);
    case 'bard':
      return new Bard(init);
    default:
      return new Royal(init);
  }
};

export interface StoryChapter {
  readonly heading: Bilingual;
  readonly body: readonly Bilingual[];
}

export interface StoryInit {
  readonly id: string;
  readonly index: number;
  readonly title: Bilingual;
  readonly sanskrit?: string;
  readonly summary: Bilingual;
  readonly chapters: readonly StoryChapter[];
  readonly characters?: readonly string[];
  readonly art?: ArtKey;
}

/** One narrative unit (a sub-parva) with its cast and chapter text. */
export class ParvaStory {
  readonly id: string;
  readonly index: number;
  readonly title: Bilingual;
  readonly sanskrit: string;
  readonly summary: Bilingual;
  readonly chapters: readonly StoryChapter[];
  readonly characters: readonly string[];
  readonly art: ArtKey;

  constructor(init: StoryInit) {
    this.id = init.id;
    this.index = init.index;
    this.title = init.title;
    this.sanskrit = init.sanskrit ?? '';
    this.summary = init.summary;
    this.chapters = init.chapters;
    this.characters = init.characters ?? [];
    this.art = init.art ?? 'scroll';
  }

  get wordCount(): number {
    return this.chapters.reduce(
      (total, chapter) => total + chapter.body.reduce((n, line) => n + line.en.split(/\s+/).length, 0),
      0,
    );
  }

  get sectionCount(): number {
    return this.chapters.length;
  }
}
