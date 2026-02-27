/*
Description

Given a number return the closest number to it that is divisible by 10.

Example input:
22
25
37

Expected output:
20
30
40
*/

export const closestMultiple10 = (num: number): number => {
  return Math.round(num / 10) * 10;
};
