/*
Description

Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .
*/

export function disariumNumber(n: number) {
  return String(n)
    .split("")
    .reduce((sum, x, i) => sum + parseInt(x) ** (i + 1), 0) === n
    ? "Disarium !!"
    : "Not !!";
}
