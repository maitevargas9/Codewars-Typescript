/*
Description

Imagine that you are given two sticks. You want to end up with three sticks of equal length. You are allowed to cut either or 
both of the sticks to accomplish this, and can throw away leftover pieces.

Write a function, maxlen, that takes the lengths of the two sticks (L1 and L2, both positive values), that will return the 
maximum length you can make the three sticks.
*/

export function maxlen(l1: number, l2: number): number {
  return Math.max(
    Math.min(l1, l2 / 2),
    Math.min(l1 / 2, l2),
    Math.max(l1 / 3, l2 / 3)
  );
}
