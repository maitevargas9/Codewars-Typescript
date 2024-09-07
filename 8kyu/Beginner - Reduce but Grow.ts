/*
Description

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

export function grow(arr: number[]): number {
  return arr.reduce((x, y) => x * y, 1);
}
