/*
Description

Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) 
of strictly positive integers, and the reduced fraction must be returned as an array/tuple:
input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]

All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!
*/

export const reduce = (arr: number[]): number[] => {
  const [numerator, denominator] = arr;

  const gcd = (a: number, b: number): number => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const divisor = gcd(numerator, denominator);

  return [numerator / divisor, denominator / divisor];
};
