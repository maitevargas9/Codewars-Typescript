/*
Description

Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form
"(p1**n1)(p2**n2)...(pk**nk)" with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

export const primeFactors = (n: number): string => {
  const factors: number[] = [];
  let arr: number[] = [];
  let count = 0;
  let primes = "";
  let divisor = 2;
  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  for (let i = 0; i < factors.length; i++) {
    if (!arr.includes(factors[i])) {
      arr.push(factors[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (factors.includes(arr[i])) {
      let x: number = arr[i];
      count = factors.filter((x) => x === arr[i]).length;
      if (count > 1) {
        primes += `(${arr[i]}**${count})`;
      } else {
        primes += `(${arr[i]})`;
      }
      count = 0;
    }
  }
  return primes;
};
