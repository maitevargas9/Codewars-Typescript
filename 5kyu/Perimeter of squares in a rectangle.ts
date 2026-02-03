/*
Description

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of 
these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed

Hint:
See Fibonacci sequence

Ref:
http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total 
perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216
*/

export const perimeter = (n: number): number => {
  let a = 1,
    b = 1;
  let sum = a + b;

  if (n === 0) {
    return 4 * a;
  }
  if (n === 1) {
    return 4 * sum;
  }

  for (let i = 2; i <= n; i++) {
    let next = a + b;
    sum += next;
    a = b;
    b = next;
  }

  return 4 * sum;
};
