/*
Description

Task
Create a type Repeat that will receive a string / tuple T and a number R (Repeat<T, R extends number>). 
The type should give the repetition of items in T, R times. The given type must be in the same type as 
T (meaning that if T is string, then Repeat<T, R> should give a string, and a tuple if T is tuple).

Examples
type A = Repeat<"a", 7>;
// A should have type "aaaaaaa"
type B = Repeat<"abc", 5>;
// B should have type "abcabcabcabcabc"
type C = Repeat<["this", "is", "a", "tuple"], 3>;
// C should have type ["this", "is", "a", "tuple", "this", "is", "a", "tuple", "this", "is", "a", "tuple"]
type D = Repeat<"", 123>;
// D should have type ""
type E = Repeat<[], 123>;
// E should have type []
type F = Repeat<["mixed", 1, "type", 2], 2>;
// F should have type ["mixed", 1, "type", 2, "mixed", 1, "type", 2]
*/

type RepeatString<
  T extends string,
  R extends number,
  A extends string = "",
  C extends any[] = []
> = C["length"] extends R ? A : RepeatString<T, R, `${A}${T}`, [...C, unknown]>;

type RepeatArray<
  T extends any[],
  R extends number,
  A extends any[] = [],
  C extends any[][] = []
> = C["length"] extends R
  ? A
  : RepeatArray<T, R, [...A, ...T], [...C, unknown]>;

export type Repeat<T, N extends number> = T extends string
  ? RepeatString<T, N>
  : T extends unknown[]
  ? RepeatArray<T, N>
  : never;
