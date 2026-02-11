/*
Description

Problem statement:
Given a BigInt n and a BigInt k, return the k-th number greater than n that has the same number of 1s in its binary representation as n.

Examples:
Input: n = 9, k = 2
Binary of 9: 1001 (two 1s)
Numbers greater than 9 with exactly two 1s: 10 (1010), 12 (1100), 17 (10001), ...
The 2nd such number is 12.
Output: 12
n = 31, k = 5
Binary of 31: 11111 (five 1s)
Numbers greater than 31 with five 1s: 47 (101111), 55 (110111), 59 (111011), 61 (111101), 62 (111110), ...
The 5th such number is 62.
Output: 62

Constraints:
n range for the test cases : 2^9 < n < 2^74.
k range for the test cases: 2^9 < k < 2^21.

Inputs and output are BigInt.
Performances:
Naive solutions will time out.
A combinatorial approach is needed to handle large n and k values.
*/

export function findKthNumber(n: bigint, k: bigint): bigint {
  const popcount = (x: bigint): number => {
    let c = 0;
    while (x) {
      x &= x - 1n;
      c++;
    }
    return c;
  };

  const bitLength = (x: bigint): number => x.toString(2).length;

  const comb = (n: bigint, k: number): bigint => {
    if (k < 0) {
      return 0n;
    }
    if (k === 0) {
      return 1n;
    }
    let kk = BigInt(k);
    if (kk > n) {
      return 0n;
    }
    if (kk > n - kk) {
      kk = n - kk;
    }
    let num = 1n,
      den = 1n;
    for (let i = 1n; i <= kk; i++) {
      num *= n - kk + i;
      den *= i;
    }
    return num / den;
  };

  const m = popcount(n);
  const L = bitLength(n);

  if (m === 1) {
    return 1n << (BigInt(L - 1) + k);
  }

  const rankSameLen = (x: bigint, L: number, m: number): bigint => {
    let r = 0n;
    let onesLeft = m;
    for (let i = L - 1; i >= 0; i--) {
      const bit = (x >> BigInt(i)) & 1n;
      if (bit === 1n) {
        r += comb(BigInt(i), onesLeft);
        onesLeft--;
        if (onesLeft === 0) {
          break;
        }
      }
    }
    return r;
  };

  const unrankSameLen = (rank: bigint, L: number, m: number): bigint => {
    let r = rank;
    let onesLeft = m;
    let result = 0n;

    for (let i = L - 1; i >= 0; i--) {
      if (onesLeft === 0) {
        break;
      }
      const cnt0 = comb(BigInt(i), onesLeft);
      if (r >= cnt0) {
        r -= cnt0;
        result |= 1n << BigInt(i);
        onesLeft--;
      }
    }
    return result;
  };

  const totalSameLen = comb(BigInt(L), m);
  const r0 = rankSameLen(n, L, m);
  const greaterCount = totalSameLen - r0 - 1n;

  if (k <= greaterCount) {
    return unrankSameLen(r0 + k, L, m);
  }

  let remainingK = k - greaterCount;

  for (let len = L + 1; ; len++) {
    const cnt = comb(BigInt(len - 1), m - 1);
    if (remainingK > cnt) {
      remainingK -= cnt;
      continue;
    }

    let result = 1n << BigInt(len - 1);
    let onesLeft = m - 1;
    let r = remainingK - 1n;

    for (let i = len - 2; i >= 0; i--) {
      if (onesLeft === 0) {
        break;
      }
      const cnt0 = comb(BigInt(i), onesLeft);
      if (r >= cnt0) {
        r -= cnt0;
        result |= 1n << BigInt(i);
        onesLeft--;
      }
    }

    return result;
  }
}
