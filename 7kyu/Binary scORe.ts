/*
Description

Given a number n, define its scORe to be 0 | 1 | 2 | 3 | .. | n, where | is the bitwise OR operator.

Write a function that takes n and finds its scORe.

        n |   scORe n
----------|----------
        0 |         0
        1 |         1
       49 |        63
1 000 000 | 1 048 575
*/

export function score(n: number): number {
  let result = 1;

  while (result <= n) {
    result <<= 1;
  }

  return result - 1;
}
