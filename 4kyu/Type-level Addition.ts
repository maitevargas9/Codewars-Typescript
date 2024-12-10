/*
Description

Define a type Add<M extends number, N extends number> such that Add<M, N> is equal to M + N at the type level for non-negative 
integer literal types M and N. Add<M, N> should work for sufficiently large values of M and N (up to 10^12).

Examples:
const x: Add<3, 4> = 7;
const y: Add<176458299990, 614461515880> = 790919815870;
// Should be invalid:
const z: Add<5, 7> = 11;

Note: If you get an error "Type instantiation is excessively deep and possibly infinite." then the following trick may help. 
The type X<Y<Z>> could be rewritten as Y<Z> extends infer R extends T ? X<R> : never where T is the type of Y<Z>.

// Trivial solutions like Add<M, N> = any or Add<M, N> = number
// will fail real tests
export type Add<M extends number, N extends number> = never;
*/

type ToStr<N extends number> = `${N}`;

type ToNum<S extends string> = S extends `${infer N extends number}`
  ? N
  : never;

type ToTuple<N extends number, Acc extends any[] = []> = N extends Acc["length"]
  ? Acc
  : ToTuple<N, [1, ...Acc]>;

type ToDigits<S extends string, Acc extends any[][] = []> = S extends ""
  ? Acc
  : S extends `${infer D extends number}${infer R}`
  ? ToTuple<D> extends infer X extends any[]
    ? ToDigits<R, [X, ...Acc]>
    : never
  : never;

type AddWithCarry<A extends any[], B extends any[], C extends any[] = []> = [
  ...A,
  ...B,
  ...C
] extends [any, any, any, any, any, any, any, any, any, any, ...infer R]
  ? [R, [1]]
  : [[...A, ...B, ...C], []];

type SumDigits<
  A extends any[][],
  B extends any[][],
  Carry extends any[] = []
> = A extends [infer X extends any[], ...infer Xs extends any[][]]
  ? B extends [infer Y extends any[], ...infer Ys extends any[][]]
    ? AddWithCarry<X, Y, Carry> extends [
        infer S extends any[],
        infer C extends any[]
      ]
      ? [S, ...SumDigits<Xs, Ys, C>]
      : never
    : Carry extends []
    ? A
    : SumDigits<A, [Carry]>
  : Carry extends []
  ? B
  : SumDigits<[Carry], B>;

type DigitsToString<Ds extends any[][]> = Ds extends [
  infer D extends any[],
  ...infer R extends any[][]
]
  ? `${DigitsToString<R>}${D["length"]}`
  : "";

export type Add<M extends number, N extends number> = ToDigits<
  ToStr<M>
> extends infer A extends any[][]
  ? ToDigits<ToStr<N>> extends infer B extends any[][]
    ? ToNum<DigitsToString<SumDigits<A, B>>>
    : never
  : never;
