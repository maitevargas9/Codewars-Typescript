/*
Description

The Collatz Conjecture states that for any positive natural number n, this process:
if n is even, divide it by 2
if n is odd, multiply it by 3 and add 1
repeat will eventually reach n = 1.

For example, if n = 20, the resulting sequence will be:
[ 20, 10, 5, 16, 8, 4, 2, 1 ]
Write a program that will output the length of the Collatz Conjecture for any given n.
In the example above, the output would be 8.

For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture
*/

export function collatz(n: number): number {
  let count = 1;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    count++;
  }

  return count;
}
