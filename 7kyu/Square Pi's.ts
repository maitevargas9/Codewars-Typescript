export function squarePi(digits: number): number {
  const piDigits =
    "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

  let sum = 0;

  for (let i = 0; i < digits; i++) {
    const digit = Number(piDigits[i]);
    sum += digit * digit;
  }

  return Math.ceil(Math.sqrt(sum));
}
