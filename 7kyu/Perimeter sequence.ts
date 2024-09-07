/*
Description

Perimeter sequence

The first three stages of a sequence are shown.

The blocksize is a by a and a ≥ 1.

What is the perimeter of the nth shape in the sequence (n ≥ 1) ?
*/

export function perimeterSequence(a: number, n: number): number {
  return a * n * 4;
}
