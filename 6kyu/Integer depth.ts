/*
Description

The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits 
have appeared at least once in some multiple.

Example:
let see n = 42
Multiple         value         digits     comment
42*1              42            2,4 
42*2              84             8         4 existed
42*3              126           1,6        2 existed
42*4              168            -         all existed
42*5              210            0         2,1 existed
42*6              252            5         2 existed
42*7              294            9         2,4 existed
42*8              336            3         6 existed 
42*9              378            7         3,8 existed
Looking at the above table under digits column you can find all the digits from 0 to 9, Hence it required 9 multiples 
of 42 to get all the digits. So the depth of 42 is 9. Write a function which computes the depth of its integer argument. 
Only strictly positive integers will be passed as an input.
*/

export function computeDepth(n: number): number {
  const seenDigits = new Set<string>();
  let multiplier = 0;

  while (seenDigits.size < 10) {
    multiplier += 1;
    const multiple = n * multiplier;
    multiple
      .toString()
      .split("")
      .forEach((digit) => seenDigits.add(digit));
  }

  return multiplier;
}
