/*
Description

Given a 2D array of some suspended blocks (represented as hastags), return another 2D array which shows the end result 
once gravity is switched on.

Examples

switch_gravity([
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
]) ➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "#", "#", "-"]
]

switch_gravity([
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"],
]) ➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "#", "-"],
  ["-", "#", "#", "-"]
]

switch_gravity([
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]) ➞ [
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "#", "-", "#", "#", "-"],
  ["#", "#", "#", "#", "#", "-"]
]

Notes
Input array is guaranteed to always be rectangular and only contain - and #.
Each block falls individually, meaning there are no rigid objects. Think about it like falling sand in Minecraft as opposed 
to the rigid blocks in Tetris.
*/

export function switchGravity(arr: ("-" | "#")[][]): ("-" | "#")[][] {
  const counts = arr.reduce((acc, row) => {
    row.forEach((col, i) => col === "#" && acc[i]--);
    return acc;
  }, new Array(arr.at(0)?.length).fill(arr.length));

  return arr.map((row, i) => row.map((_, j) => (i >= counts[j] ? "#" : "-")));
}
