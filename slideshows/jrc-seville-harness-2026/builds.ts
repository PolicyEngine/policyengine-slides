// How many builds each multi-build slide has. This file holds plain data, so the server reads the numbers when it
// counts the deck's steps; a number exported from a client component reaches the server as a reference, not a value.
import { walkthrough } from './text';

/** One build per caption in text.walkthrough.steps. */
export const WALKTHROUGH_BUILDS = walkthrough.steps.length;
/** The models alone, then with the tool. */
export const POLICYBENCH_BUILDS = 2;
