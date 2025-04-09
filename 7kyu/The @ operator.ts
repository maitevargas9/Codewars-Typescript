/*
Description

I invented a new operator, @, which is left associative.

a @ b = (a + b) + (a - b) + (a * b) + (a // b)

Side note: ~~ is shorthand for Math.floor.

Given a string containing only integers and the operators, find out the value of that string.

The strings will always be "well formed", meaning with a space on each side of the operators, except in TypeScript, 
where string may appear like this: 0@1@2

1 @ 1 = (1 + 1) + (1 - 1) + (1 * 1) + (1 // 1) = 4
3 @ 2 = 13
6 @ 9 = 66

4 @ -4 = -9
1 @ 1 @ -4 = -9 (1 @ 1 is 4, 4 @ -4 is -9)
2 @ 2 @ 2 = 40
0 @ 1 @ 2 = 0
5 @ 0 = None
*/

export function evaluate(equation: string): BigInt | null {
  const result = equation.replace(/ /g, "").split("@").map(BigInt);
  return result.indexOf(0n) > 0
    ? null
    : result.reduce((a, e) => 2n * a + a * e + a / e);
}
