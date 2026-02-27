/*
Description

For this kata you will have to forget how to add two numbers.

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples

  1 6
+ 1 8
  2 14
 
  2 6
+ 3 9
  5 15
​	
  1 2  2
​+   8  1
  1 10 3
​	
  7 2
+   9
  7 11
*/

export function add(num1: number, num2: number): number {
  const a = num1.toString().split("").reverse();
  const b = num2.toString().split("").reverse();
  const maxLength = Math.max(a.length, b.length);

  let result = "";

  for (let i = 0; i < maxLength; i++) {
    const digit1 = parseInt(a[i] || "0", 10);
    const digit2 = parseInt(b[i] || "0", 10);
    result = (digit1 + digit2).toString() + result;
  }

  return parseInt(result, 10);
}
