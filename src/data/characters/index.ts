import { createPerson, type MythicPerson } from '../../core/entities';
import { framingCharacters } from './framing';
import { rootCharacters } from './roots';
import { ancestorCharacters } from './ancestors';
import { deepRootCharacters } from './deep-roots';
import { bharataCharacters } from './bharata';
import { hastinapurCharacters } from './hastinapur';
import { parentCharacters } from './parents';
import { pandavaCharacters } from './pandavas';
import { mentorCharacters } from './mentors';
import { wildernessCharacters } from './wilderness';
import { khandavaCharacters } from './khandava';
import { allyCharacters } from './allies';
import { lineageExtraCharacters } from './lineage-extras';
import type { CharacterRecord } from './helpers';

const ALL_RECORDS: readonly CharacterRecord[] = [
  ...framingCharacters,
  ...rootCharacters,
  ...ancestorCharacters,
  ...deepRootCharacters,
  ...bharataCharacters,
  ...hastinapurCharacters,
  ...parentCharacters,
  ...pandavaCharacters,
  ...mentorCharacters,
  ...wildernessCharacters,
  ...khandavaCharacters,
  ...allyCharacters,
  ...lineageExtraCharacters,
];

/** Concrete, polymorphic instances of every person in the archive. */
export const CHARACTERS: readonly MythicPerson[] = ALL_RECORDS.map((record) =>
  createPerson(record.kind, record),
);
