/*
Description

Given an array of positive or negative integers I = [i1, ... , in] you have to produce a sorted array P of the form
[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, 
C, C++ and as an array of arrays in other languages.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:
It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 
is a factor is 0 so we have [5, 0] in the result amongst others.
In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing 
whitespace: you can use dynamically allocated character strings.
*/

export function sumOfDivided(lst: number[]): number[][] {
  const primeSumMap: { [key: number]: number } = {};

  function primeFactors(n: number): number[] {
    const factors: number[] = [];

    n = Math.abs(n);

    while (n % 2 === 0) {
      factors.push(2);
      n /= 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }

    if (n > 2) {
      factors.push(n);
    }

    return factors;
  }

  for (const num of lst) {
    const factors = primeFactors(num);

    const uniqueFactors = new Set(factors);
    for (const factor of uniqueFactors) {
      if (!primeSumMap[factor]) {
        primeSumMap[factor] = 0;
      }
      primeSumMap[factor] += num;
    }
  }

  const result = Object.entries(primeSumMap)
    .map(([prime, sum]) => [parseInt(prime), sum])
    .sort((a, b) => a[0] - b[0]);

  return result;
}
