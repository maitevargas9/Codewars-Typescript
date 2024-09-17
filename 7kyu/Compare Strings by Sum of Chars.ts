/*
Description

Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

export function compare(s1: string | null, s2: string | null): boolean {
  const x1: number =
    typeof s1 === "string" && !s1.match("[^a-zA-z]")
      ? s1
          .toUpperCase()
          .split("")
          .reduce((p, c) => p + c.charCodeAt(0), 0)
      : 0;
  const x2: number =
    typeof s2 === "string" && !s2.match("[^A-Za-z]")
      ? s2
          .toUpperCase()
          .split("")
          .reduce((p, c) => p + c.charCodeAt(0), 0)
      : 0;
  return x1 === x2;
}
