/*
Description

You're given a map and you have only one jump before the frog notices any movement. Determine if the snake can catch the frog.

Rules:
Horizontal/Vertical moves take 1 jump points
Diagonal moves take 2 jump points

Example of snake moves, so you can see how the steps are counted
const map = [
      ["0", "0", "0", "5", "0"],
      ["0", "0", "0", "4", "0"],
      ["0", "0", "0", "3", "0"],
      ["0", "🐍","1", "2", "0"],
      ["0", "0", "0", "0", "0"],
    ];
*/

type Map = string[][];

export function canSnakeCatchTheFrog(map: Map, jump: number): boolean {
  const pos = (x: string, i = map.findIndex((r) => r.includes(x))) => [
    i,
    map[i].indexOf(x)
  ];
  const [i1, j1] = pos("🐍");
  const [i2, j2] = pos("🐸");
  return Math.abs(i2 - i1) + Math.abs(j2 - j1) <= jump;
}
