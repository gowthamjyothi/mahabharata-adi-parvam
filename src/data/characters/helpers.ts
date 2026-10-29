import type { EntityKind, PersonInit } from '../../core/entities';

export interface CharacterRecord extends PersonInit {
  readonly kind: EntityKind;
}

/** Small builder so the seed files stay declarative. */
export const record = (kind: EntityKind, init: PersonInit): CharacterRecord => ({ kind, ...init });
