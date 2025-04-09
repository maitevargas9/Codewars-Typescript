/*
Description

You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array the count of these numbers, their sum and their product.

For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]

If there are no numbers, which include the digit, return [0,0,0].
*/

export function numbersWithDigitInside(x: number, d: number): number[] {
  const nums = Array.from({ length: x }, (_, i) => i + 1).filter((n) =>
    n.toString().includes(d.toString())
  );
  return nums.length
    ? [
        nums.length,
        nums.reduce((a, b) => a + b),
        nums.reduce((a, b) => a * b, 1)
      ]
    : [0, 0, 0];
}

export function numbersWithDigitInside(x: number, d: number): number[] {
  const matches = [];

  for (let i = 1; i <= x; i++) {
    if (i.toString().includes(d.toString())) {
      matches.push(i);
    }
  }

  if (matches.length === 0) {
    return [0, 0, 0];
  }

  const count = matches.length;
  const sum = matches.reduce((a, b) => a + b, 0);
  const product = matches.reduce((a, b) => a * b, 1);

  return [count, sum, product];
}
