/* 
Description

Overview
Given an array of strings (to be interpreted as a 2D array of letters and spaces), find the groups of adjacent letters, 
remove all letters in the board that can be reached from any letter of another group and return the remaining letters 
in the array, in any order (see details below).

Details
All letters that form a group should have at least one vertical or horizontal link to any adjacent letter.
The number of characters in a group defines the range for each letter in that group.
A letter of one group can remove any letter from another group that is in range using Chebyshev distance 
(meaning: moving vertically, horizontally or diagonally at each step). All letters are removed simultaneously 
for all groups.
The output is a string containing all remaining characters at the end, in any order.

Notes
The strings in the list can be of different lengths.
Strings will only contain spaces and lowercase letters (possibly duplicated).

Examples
Input: ["axz", "tb", "ch", "  gt"]:
"axz"
"tb"
"ch"
"··gt"
The output would be "axz": axztbch and gt are two groups of adjacent letters, with respective sizes of 7 and 2.
Input ["z", "w", "", "     x  ", "agd", "", "", "", "klkp"]:
"z"
"w"
""
"·····x··"
"agd"
""
""
""
"klkp"
The output would be "zklkp" (in any order): zw, x, agd and klkp are four groups of adjacent letters. Note that:
Letters are removed even if they are reached through empty (parts of) strings
From the first group, only w is deleted since z is too far from any letter of the agd group of size 3
x is in range of d, hence is deleted too.
*/

export function survivors(arr: string[]): string {
  const rows = arr.length;

  const grid: (string | null)[][] = [];
  for (let r = 0; r < rows; r++) {
    grid[r] = [];
    for (let c = 0; c < arr[r].length; c++) {
      grid[r][c] = arr[r][c] === " " ? null : arr[r][c];
    }
  }

  const visited = new Set<string>();
  type Cell = { r: number; c: number; ch: string };
  const groups: Cell[][] = [];

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  const key = (r: number, c: number) => `${r},${c}`;

  function dfs(r: number, c: number, group: Cell[]) {
    if (r < 0 || r >= rows) return;
    if (c < 0 || c >= (arr[r]?.length ?? 0)) return;
    if (!grid[r][c]) return;
    if (visited.has(key(r, c))) return;

    visited.add(key(r, c));
    group.push({ r, c, ch: grid[r][c]! });

    for (let [dr, dc] of dirs) {
      dfs(r + dr, c + dc, group);
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < (arr[r]?.length ?? 0); c++) {
      if (grid[r][c] && !visited.has(key(r, c))) {
        const group: Cell[] = [];
        dfs(r, c, group);
        groups.push(group);
      }
    }
  }

  const removed = new Set<string>();

  function chebyshev(a: Cell, b: Cell) {
    return Math.max(Math.abs(a.r - b.r), Math.abs(a.c - b.c));
  }

  for (let i = 0; i < groups.length; i++) {
    for (let j = 0; j < groups.length; j++) {
      if (i === j) continue;
      const g1 = groups[i];
      const g2 = groups[j];
      const range = g1.length;
      for (let a of g1) {
        for (let b of g2) {
          if (chebyshev(a, b) <= range) {
            removed.add(key(b.r, b.c));
          }
        }
      }
    }
  }

  let result: string[] = [];
  for (let g of groups) {
    for (let cell of g) {
      if (!removed.has(key(cell.r, cell.c))) {
        result.push(cell.ch);
      }
    }
  }

  return result.join("");
}
