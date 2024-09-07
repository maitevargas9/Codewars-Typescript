/*
Description

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a l
owercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length 
of the longest vowel substring. Vowels are any of aeiou.

Good luck!
*/

export function solve(s: string) {
  return Math.max(...s.split(/[^aoeiu]/i).map((x) => x.length));
}
