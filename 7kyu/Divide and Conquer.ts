/*
Description

Given a mixed array of number and string representations of integers, add up the non-string 
integers and subtract the total of the string integers.

Return as a number.
*/

export function divCon(x: (string | number)[]): number {
  return x.reduce((sum: number, a: any) => {
    if (typeof a != "string") {
      return (sum += a);
    } else {
      return (sum -= parseInt(a));
    }
  }, 0);
}
