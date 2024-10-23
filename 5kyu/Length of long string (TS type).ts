/*
Description

Task
Create a type StrLen that will receive a string T. The type should give the length of the string.
Range of length of T: 0 <= length of T <= 5000

Additional notes:
Using T["length"] won't work
TS types have a recursion limit of 999 depth.

Examples
type A = StrLen<"">
// Should have type 0
type B = StrLen<"abc">
// Should have type 3
type C = StrLen<"this is a string">
// Should have type 16
// String of length 10
type S10 = "1234567890"
// String of length 100
type S100 = `${S10}${S10}${S10}${S10}${S10}${S10}${S10}${S10}${S10}${S10}`
// String of length 1000
type S1000 = `${S100}${S100}${S100}${S100}${S100}${S100}${S100}${S100}${S100}${S100}`
type D = StrLen<S1000>
// Should have type 1000

Good luck!
*/

export type StrLen<T extends string, A extends any[] = []> = T extends ""
  ? A["length"]
  : T extends `${infer F}${infer M}${infer D}${infer E}${infer F}${infer G}${infer R}`
  ? StrLen<R, [F, M, D, E, F, G, ...A]>
  : T extends `${infer F}${infer M}${infer D}${infer E}${infer F}${infer R}`
  ? StrLen<R, [F, M, D, E, F, ...A]>
  : T extends `${infer F}${infer M}${infer D}${infer E}${infer R}`
  ? StrLen<R, [F, M, D, E, ...A]>
  : T extends `${infer F}${infer M}${infer D}${infer R}`
  ? StrLen<R, [F, M, D, ...A]>
  : T extends `${infer F}${infer M}${infer R}`
  ? StrLen<R, [F, M, ...A]>
  : T extends `${infer F}${infer R}`
  ? StrLen<R, [F, ...A]>
  : never;
