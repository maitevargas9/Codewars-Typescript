/*
Description

No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!
*/

export function equalize(array: number[]): string[] {
  if (array.length === 0) {
    return [];
  }

  const base = array[0];

  return array.map((num) => {
    const diff = num - base;
    return diff >= 0 ? `+${diff}` : `${diff}`;
  });
}
