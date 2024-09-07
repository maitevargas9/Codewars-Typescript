/*
Description

Write function parseFloat which takes an input and returns a number or Nothing if conversion is not possible.
*/

export function parseF(s: string): number | null {
  return Number.isNaN(parseFloat(s)) ? null : parseFloat(s);
}
