/*
Description

#What doesn't belong to these?

Write a method that takes an array of elements and returns the element that does not belong to these elements.

Example:
[1, 2, 2, 2, 2] -> 1
['1', 2, '4', '6', '8'] -> 2
[2, 2, -2, 6, 10] -> -2
['a', 'a', 'b', 'a', 'a', 'a', 'a'] -> 'b'
Look in the example tests. (The submit tests have no additional surprises!)

The elements will only be of the types:
boolean, char (or string with one char in JS/TS) or int (number in JS/TS).
The array will never be null and there will always more than 2 values in the array!
It is always exactly one element that does not belong to the other elements.
The values in the array will never be null or undefined or 0.
*/

export function findTheNotFittingElement(series: any[]): any {
  const findByPredicate = (predicate: (x: any) => any): any => {
    const x0 = predicate(series[0]);
    return series.filter((s) => predicate(s) !== x0).length > series.length / 2
      ? series[0]
      : series.find((s) => predicate(s) !== x0);
  };

  const s0 = series[0];
  if (!series.every((s) => typeof s === typeof s0)) {
    return findByPredicate((x) => typeof x);
  }

  if (series.every((s) => typeof s === "number")) {
    return (
      findByPredicate((x) => Math.sign(x)) ??
      findByPredicate((x) => x % 2) ??
      findByPredicate((x) => x)
    );
  }

  if (series.every((s) => typeof s === "string")) {
    return (
      findByPredicate((x) => x.charCodeAt(0) <= 64) ??
      findByPredicate((x) => x.charCodeAt(0) <= 90) ??
      findByPredicate((x) => x)
    );
  }

  return findByPredicate((x) => x);
}
