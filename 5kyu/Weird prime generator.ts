/*
Description

Consider the sequence a(1) = 7, a(n) = a(n-1) + gcd(n, a(n-1)) for n >= 2:
7, 8, 9, 10, 15, 18, 19, 20, 21, 22, 33, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 69, 72, 73....

Let us take the differences between successive elements of the sequence and get a second sequence g: 
1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1....

For the sake of uniformity of the lengths of sequences we add a 1 at the head of g:
g: 1, 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1...

Removing the 1s gives a third sequence: p: 5, 3, 11, 3, 23, 3... where you can see prime numbers.

Task:
Write functions:
1: an(n) with parameter n: returns the first n terms of the series of a(n) (not tested)
2: gn(n) with parameter n: returns the first n terms of the series of g(n) (not tested)
3: countOnes(n) with parameter n: returns the number of 1 in the series gn(n) (don't forget to add a `1` at the head) # (tested)
4: p(n) with parameter n: returns an array filled with the n first distinct primes in the same order they are found in the 
sequence gn (not tested)
5: maxPn(n) with parameter n: returns the biggest prime number of the above p(n) # (tested)
6: anOver(n) with parameter n: returns an array (n terms) of the a(i)/i for every i such g(i) != 1 (not tested but interesting 
result)
7: anOverAverage(n) with parameter n: returns as an *integer* the average of anOver(n) # (tested)

Note:
You can write directly functions 3:, 5: and 7:. There is no need to write functions 1:, 2:, 4: 6: except out of pure curiosity.
*/

export function countOnes(n: number): number {
  const gSequence = gn(n);
  return gSequence.filter((x) => x === 1).length;
}

export function maxPn(n: number): number {
  const primeSequence = p(n);
  return Math.max(...primeSequence);
}

export function anOverAverage(n: number): number {
  const anOverValues = anOver(n);
  const sum = anOverValues.reduce((acc, val) => acc + val, 0);
  return Math.floor(sum / anOverValues.length);
}

export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

const an = (function () {
  const a: number[] = [7];
  return function (n: number): number[] {
    if (a[n - 1]) {
      return a.slice(0, n);
    }
    for (let i = a.length; i < n; i++) {
      a[i] = a[i - 1] + gcd(i + 1, a[i - 1]);
    }
    return a.slice(0, n);
  };
})();

const gn = (function () {
  const g = [1];
  return function (n: number): number[] {
    if (g[n - 1]) {
      return g.slice(0, n);
    }
    const a = an(n);
    for (let i = g.length; i < n; i++) {
      g[i] = a[i] - a[i - 1];
    }
    return g.slice(0, n);
  };
})();

export function isPrime(num: number): boolean {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export function p(n: number): number[] {
  let p: number[] = [];
  let i = 1;
  while (p.length < n) {
    p = [...new Set(gn(i).filter((e) => e !== 1))];
    i *= 2;
  }
  return p.slice(0, n);
}

export function anOver(n: number): number[] {
  let aOver: number[] = [];
  let i = 1;
  while (aOver.length < n) {
    aOver = [];
    const a = an(i);
    const g = gn(i).filter((e, j) => {
      if (e !== 1) {
        return aOver.push(a[j] / (j + 1));
      }
    });
    i *= 2;
  }
  return aOver.slice(0, n);
}
