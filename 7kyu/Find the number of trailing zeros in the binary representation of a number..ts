/*
Description

Given a number n, find the number of trailing zeros in its binary representation.

Examples:
4  ->  2, because 4 is represented as 100
5  ->  0, because 5 is represented as 101

Limits:
0 < n <= 10^4
*/

export function trailingZeros(n: number): number {
  return n % 2 == 0 ? 1 + trailingZeros(Math.floor(n / 2)) : 0;
}
