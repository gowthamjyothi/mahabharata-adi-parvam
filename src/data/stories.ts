import type { StoryInit } from '../core/entities';
import { STORIES_PART_1 } from './stories-part1';
import { STORIES_PART_2 } from './stories-part2';

/** The nineteen sub-parvas of the Adi Parva, in recitation order. */
export const STORIES: readonly StoryInit[] = [...STORIES_PART_1, ...STORIES_PART_2];
