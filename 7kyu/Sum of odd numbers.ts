/*
Description

Given the triangle of consecutive odd numbers.
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
1 -->  1
2 --> 3 + 5 = 8
*/

export function rowSumOddNumbers(n: number): number {
  return Math.pow(n, 3);
}
