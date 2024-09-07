/*
Description

Write a function that checks if a given string (case insensitive) is a palindrome.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or 
racecar.
*/

export function isPalindrome(x: string): boolean {
  const original = x.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  const reversed = original.split("").reverse().join("");
  return original === reversed;
}
