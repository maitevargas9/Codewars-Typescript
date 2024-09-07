/*
Description

Your task is to write function factorial.
*/

export function factorial(n: number) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
