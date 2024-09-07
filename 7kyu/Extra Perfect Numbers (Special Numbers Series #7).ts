/*
Description

Definition
Extra perfect number is the number that first and last bits are set bits.

Task
Given a positive integer  N , Return the extra perfect numbers in range from  1 to  N .
*/

export function extraPerfect(n: number) {
  return [...Array(n)].map((_, i) => i + 1).filter((n) => n % 2);
}
