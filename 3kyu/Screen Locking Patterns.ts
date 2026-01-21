/*
Description

Screen Locking Patterns
You might already be familiar with many smartphones that allow you to use a geometric pattern as a security measure. 
To unlock the device, you need to connect a sequence of dots/points in a grid by swiping your finger without lifting 
it as you trace the pattern through the screen.

For this kata, your job is to implement a function that returns the number of possible patterns starting from a given 
first point, that have a given length.

More specifically, for a function countPatternsFrom(firstPoint, length), the parameter firstPoint is a single-character 
string corresponding to the point in the grid (e.g.: 'A') where your patterns start, and the parameter length is an integer 
indicating the number of points (length) every pattern must have.

For example, countPatternsFrom("C", 2), should return the number of patterns starting from 'C' that have 2 two points. 
The return value in this case would be 5, because there are 5 possible patterns:
(C -> B), (C -> D), (C -> E), (C -> F) and (C -> H).

Bear in mind that this kata requires returning the number of patterns, not the patterns themselves, so you only need to count them. 
Also, the name of the function might be different depending on the programming language used, but the idea remains the same.

Rules
In a pattern, the dots/points cannot be repeated: they can only be used once, at most.
In a pattern, any two subsequent dots/points can only be connected with direct straight lines in either of these ways:
Horizontally: like (A -> B) in the example pattern image.
Vertically: like (D -> G) in the example pattern image.
Diagonally: like (I -> E), as well as (B -> I), in the example pattern image.
Passing over a point between them that has already been 'used': like (G -> C) passing over E, in the example pattern image. 
This is the trickiest rule. Normally, you wouldn't be able to connect G to C, because E is between them, however when E has 
already been used as part the pattern you are tracing, you can connect G to C passing over E, because E is ignored, as it was 
already used once.

Fun fact:
In case you're wondering out of curiosity, for the Android lock screen, the valid patterns must have between 4 and 9 dots/points. 
There are 389112 possible valid patterns in total; that is, patterns with a length between 4 and 9 dots/points.
*/

export function calculateCombinations(
  startPosition: string,
  patternLength: number
): number {
  if (patternLength <= 0) {
    return 0;
  }
  if (patternLength === 1) {
    return 1;
  }

  const index = (c: string) => c.charCodeAt(0) - 65;

  const jump: number[][] = Array.from({ length: 9 }, () => Array(9).fill(-1));

  const setJump = (a: string, b: string, mid: string) => {
    jump[index(a)][index(b)] = index(mid);
    jump[index(b)][index(a)] = index(mid);
  };

  setJump("A", "C", "B");
  setJump("A", "G", "D");
  setJump("A", "I", "E");
  setJump("B", "H", "E");
  setJump("C", "G", "E");
  setJump("C", "I", "F");
  setJump("D", "F", "E");
  setJump("G", "I", "H");

  const used = Array(9).fill(false);

  function dfs(pos: number, remaining: number): number {
    if (remaining === 0) {
      return 1;
    }

    let count = 0;
    used[pos] = true;

    for (let next = 0; next < 9; next++) {
      if (used[next]) {
        continue;
      }

      const mid = jump[pos][next];
      if (mid === -1 || used[mid]) {
        count += dfs(next, remaining - 1);
      }
    }

    used[pos] = false;
    return count;
  }

  return dfs(index(startPosition), patternLength - 1);
}
