/*
Description

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

export function sumMix(x: any[]): number {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      x[i] = Number(x[i]);
    }
    sum += x[i];
  }
  return sum;
}
