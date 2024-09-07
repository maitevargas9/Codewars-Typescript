/**
Description

Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) 
in order of appearance that add up to form the sum.
If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

Negative numbers and duplicate numbers can and will appear.
NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/

export function sumPairs(ints: number[], s: number): [number, number] | void {
  if (ints.length < 2) {
    return undefined;
  }
  let intSet = new Set();
  intSet.add(ints[0]);
  for (let i = 1; i < ints.length; ++i) {
    let needed = s - ints[i];
    if (intSet.has(needed)) {
      return [needed, ints[i]];
    }
    intSet.add(ints[i]);
  }
  return undefined;
}
