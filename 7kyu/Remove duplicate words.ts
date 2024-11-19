/*
Description

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
Output:
'alpha beta gamma delta'
*/

export function removeDuplicateWords(s: string): string {
  return [...new Set(s.split(" "))].join(" ");
}
