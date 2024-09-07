/*
Description

My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example

predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/

export function predictAge(
  age1: number,
  age2: number,
  age3: number,
  age4: number,
  age5: number,
  age6: number,
  age7: number,
  age8: number
): number {
  const ages: number[] = [age1, age2, age3, age4, age5, age6, age7, age8];
  const mulSum = ages.reduce((a, x) => a + x ** 2, 0);
  return Math.floor(mulSum ** 0.5 / 2);
}
