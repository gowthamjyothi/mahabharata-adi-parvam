import { CHARACTERS } from '../src/data/characters';
import { STORIES } from '../src/data/stories';
import { ParvaStory } from '../src/core/entities';
import { PersonRepository, StoryRepository } from '../src/core/repository';
import { normalise } from '../src/core/i18n';

const personIds = new Set(CHARACTERS.map((p) => p.id));
const storyIds = new Set(STORIES.map((s) => s.id));
const problems: string[] = [];

for (const person of CHARACTERS) {
  for (const [key, ids] of Object.entries(person.relations)) {
    for (const id of ids ?? []) {
      if (!personIds.has(id)) problems.push(`relation ${person.id}.${key} -> missing ${id}`);
    }
  }
  for (const storyId of person.stories) {
    if (!storyIds.has(storyId)) problems.push(`story link ${person.id} -> missing ${storyId}`);
  }
  if (!person.description.en.trim() || !person.description.te.trim()) {
    problems.push(`missing description: ${person.id}`);
  }
  if (!person.summary.en.trim() || !person.summary.te.trim()) {
    problems.push(`missing summary: ${person.id}`);
  }
}

for (const story of STORIES) {
  for (const id of story.characters) {
    if (!personIds.has(id)) problems.push(`story ${story.id} cast -> missing ${id}`);
  }
  if (story.chapters.length === 0) problems.push(`story ${story.id} has no chapters`);
}

const repo = new PersonRepository(CHARACTERS);
const stories = new StoryRepository(STORIES.map((s) => new ParvaStory(s)));

console.log('characters:', CHARACTERS.length, 'stories:', stories.size);
console.log('duplicate ids:', CHARACTERS.length - personIds.size);
console.log('k prefix:', repo.search('k', 50).map((h) => h.person.name.en).join(', '));
console.log('bh prefix:', repo.search('bh', 50).map((h) => h.person.name.en).join(', '));
console.log('telugu క:', repo.search('క', 50).map((h) => h.person.name.te).join(', '));
console.log('multi-term "krishna vas":', repo.search('krishna vas', 20).map((h) => h.person.name.en).join(', '));
console.log('normalise test:', normalise('Śrī Kṛṣṇa'), normalise('శ్రీ'));
console.log('problems:', problems.length);
for (const problem of problems) console.log(' -', problem);
