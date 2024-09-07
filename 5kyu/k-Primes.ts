/*
Description

A natural number is called k-prime if it has exactly k prime factors, counted with multiplicity. For example:
k = 2  -->  4, 6, 9, 10, 14, 15, 21, 22, ...
k = 3  -->  8, 12, 18, 20, 27, 28, 30, ...
k = 5  -->  32, 48, 72, 80, 108, 112, ...
A natural number is thus prime if and only if it is 1-prime.

Task:
Complete the function count_Kprimes (or countKprimes, count-K-primes, kPrimes) which is given parameters k, start, 
end (or nd) and returns an array (or a list or a string depending on the language - see "Solution" and "Sample Tests") 
of the k-primes between start (inclusive) and end (inclusive).

Example:
countKprimes(5, 500, 600) --> [500, 520, 552, 567, 588, 592, 594]

Notes:
The first function would have been better named: findKprimes or kPrimes :-)
In C some helper functions are given (see declarations in 'Solution').
For Go: nil slice is expected when there are no k-primes between start and end.
Second Task: puzzle (not for Shell)

Given a positive integer s, find the total number of solutions of the equation a + b + c = s, where a is 1-prime, b is 3-prime,
and c is 7-prime.

Call this function puzzle(s).

Examples:
puzzle(138)  -->  1  because [2 + 8 + 128] is the only solution
puzzle(143)  -->  2  because [3 + 12 + 128] and [7 + 8 + 128] are the solutions
*/

export const countKprimes = (
  k: number,
  start: number,
  nd: number
): number[] => {
  const isKPrime = (n: number, k: number): boolean => {
    let count = 0;
    let factor = 2;
    while (factor * factor <= n && count <= k) {
      while (n % factor === 0) {
        n /= factor;
        count++;
      }
      factor = factor === 2 ? 3 : factor + 2;
    }
    if (n > 1) {
      count++;
    }
    return count === k;
  };

  const kPrimes = [];
  for (let i = start; i <= nd; i++) {
    if (isKPrime(i, k)) {
      kPrimes.push(i);
    }
  }
  return kPrimes;
};
export const puzzle = (s: number): number => {
  const findKPrimes = (k: number, max: number) => countKprimes(k, 2, max);

  let solutions = 0;
  const ones = findKPrimes(1, s);
  const threes = findKPrimes(3, s);
  const sevens = findKPrimes(7, s);

  ones.forEach((a) => {
    threes.forEach((b) => {
      sevens.forEach((c) => {
        if (a + b + c === s) {
          solutions++;
        }
      });
    });
  });

  return solutions;
};
