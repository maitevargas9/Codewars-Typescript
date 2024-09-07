/*
Description

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between 
the input parameters, including them.

For example
a = 1
b = 4
--> [1, 2, 3, 4]
*/

export function between(a: number, b: number): number[] {
  let result: number[] = [];
  let count = 0;
  while (a <= b) {
    result[count] = a;
    count += 1;
    a += 1;
  }
  return result;
}
