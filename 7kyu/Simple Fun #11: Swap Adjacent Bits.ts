/*
Description

Task

You are given a 32-bit integer n. Swap each pair of adjacent bits in its binary representation and return the result as a 
decimal number.

The potential leading zeroes of the binary representations have to be taken into account, e.g. 0b100 as a 32-bit integer is 
0b00000000000000000000000000000100 and is reversed to 0b1000.

Examples
For n = 13, the output should be 14:
1310 = 11012 --> 11102 = 1410
For n = 74, the output should be 133:
7410 = 010010102 --> 100001012 = 13310

Input/Output
[input] integer n 0 ≤ n < 2^30.
[output] an integer
*/

export function swapAdjacentBits(n: number): number {
  let s = n.toString(2);
  if (s.length % 2 !== 0) {
    s = "0" + s;
  }
  let arr = [];
  for (let i = 0; i < s.length; i += 2) {
    arr.push(s.slice(i, i + 2));
  }
  return parseInt(
    arr
      .map((x) => x.replace(/(01|10)/, (y) => (y === "01" ? "10" : "01")))
      .join(""),
    2
  );
}
