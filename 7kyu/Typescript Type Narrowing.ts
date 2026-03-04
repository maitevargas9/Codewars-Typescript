/*
Description

The new intern needs help! He has been learning Typescript for the first time, but is having trouble convincing the compiler that his 
types are ok. Can you help him make his code compile?

Making the code typecheck and compile correctly is all you need to do to pass this kata. The full tests are identical to the sample tests.

export function isPair(arr: any[]): boolean {
  return arr.length == 2;
}
*/

export function isPair(arr: unknown[]): arr is [unknown, unknown] {
  return arr.length === 2;
}
