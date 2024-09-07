/*
Description

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting 
string.

Note: input will never be an empty string
*/

// Solution 1
export const fakeBin = (x: string): string => {
  return x.replace(/\d/g, (n) => (Number(n) < 5 ? "0" : "1"));
};

// Solution 2
export const fakeBin2 = (x: string): string => {
  let outputString = "";
  for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) <= 4) {
      outputString += "0";
    } else if (Number(x[i]) >= 5) {
      outputString += "1";
    }
  }
  return outputString;
};
