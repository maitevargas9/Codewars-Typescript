/*
Description

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, 
otherwise returns false.

Notes:
Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

export function scramble(str1: string, str2: string): boolean {
  const counts = new Array(26).fill(0);

  for (const char of str1) {
    counts[char.charCodeAt(0) - 97]++;
  }

  for (const char of str2) {
    const index = char.charCodeAt(0) - 97;
    counts[index]--;
    if (counts[index] < 0) {
      return false;
    }
  }

  return true;
}
