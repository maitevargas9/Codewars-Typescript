/*
Description

Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters).

Then add the letters in a clockwise direction: Then remove the circle.

If we read the result from left to right, we get csordaew.

Decoding is the same process in reverse. If we decode csordaew, we get codewars.

Examples:
encode "codewars" -> "csordaew"
decode "csordaew" -> "codewars"
encode "white" -> "wehti"
decode "wehti" -> "white"
*/

export function encode(s: string): string {
  let ans: string = "";
  let l: number = s.length;

  for (let i: number = 0; i < Math.floor(l / 2); i++) {
    ans += s[i];
    ans += s[l - i - 1];
  }

  return l % 2 ? (ans += s[Math.floor(l / 2)]) : ans;
}

export function decode(s: string): string {
  return (
    [...s].map((x, y) => (y % 2 < 1 ? x : "")).join("") +
    [...s]
      .map((x, y) => (y % 2 ? x : ""))
      .reverse()
      .join("")
  );
}