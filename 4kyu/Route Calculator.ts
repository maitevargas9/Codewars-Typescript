/*
Description

This calculator takes values that could be written in a browsers route path as a single string. It then returns the result as 
a number (or an error message).

Route paths use the '/' symbol so this can't be in our calculator. Instead we are using the '$' symbol as our divide operator.

You will be passed a string of any length containing numbers and operators:
'+' = add
'-' = subtract
'*' = multiply
'$' = divide

Your task is to break the string down and calculate the expression using this order of operations. 
(division => multiplication => subtraction => addition)

If you are given an invalid input (i.e. any character except .0123456789+-*$) you should return the error message:'400: Bad request'

Remember:
The number of operations isn't limited
Order of operations is imperative
No eval or equivalent functions
convert the number to floats, not to integers

Examples:
calculate('1+1')     => '2'
calculate('10$2')    => '5'
calculate('1.5*3')   => '4.5'
calculate('5+5+5+5') => '20'
calculate('1000$2.5$5+5-5+6$6') =>'81'
calculate('10-9p')   =>  '400: Bad request'

Further Notes - Parameters outside of this challenge:
Brackets e.g. 10*(1+2)
Square root, log, % or any other operators
Unary minus (10*-1)
Bad mathematical input (10**$10 or 5+5$)
You may have to deal with floats
*/

export const calculate = (sum: string): string | number => {
  if (!/^[0-9.+*\-$]+$/.test(sum)) {
    return "400: Bad request";
  }

  const tokens: (string | number)[] = [];
  let numBuffer = "";

  for (let char of sum) {
    if ("0123456789.".includes(char)) {
      numBuffer += char;
    } else {
      if (numBuffer === "") {
        return "400: Bad request";
      }
      tokens.push(parseFloat(numBuffer));
      tokens.push(char);
      numBuffer = "";
    }
  }
  if (numBuffer !== "") {
    tokens.push(parseFloat(numBuffer));
  }

  const processOperator = (
    arr: (string | number)[],
    ops: string[]
  ): (string | number)[] | string => {
    let i = 0;
    while (i < arr.length) {
      if (typeof arr[i] === "string" && ops.includes(arr[i] as string)) {
        const op = arr[i] as string;
        const left = arr[i - 1] as number;
        const right = arr[i + 1] as number;
        if (right === undefined) {
          return "400: Bad request";
        }
        let result: number;
        switch (op) {
          case "$":
            result = left / right;
            break;
          case "*":
            result = left * right;
            break;
          case "+":
            result = left + right;
            break;
          case "-":
            result = left - right;
            break;
          default:
            return "400: Bad request";
        }
        arr.splice(i - 1, 3, result);
        i = i - 1;
      } else {
        i++;
      }
    }
    return arr;
  };

  let intermediate = processOperator(tokens, ["$"]);
  if (typeof intermediate === "string") {
    return intermediate;
  }

  intermediate = processOperator(intermediate, ["*"]);
  if (typeof intermediate === "string") {
    return intermediate;
  }

  intermediate = processOperator(intermediate, ["-"]);
  if (typeof intermediate === "string") {
    return intermediate;
  }

  intermediate = processOperator(intermediate, ["+"]);
  if (typeof intermediate === "string") {
    return intermediate;
  }

  if (intermediate.length !== 1 || typeof intermediate[0] !== "number") {
    return "400: Bad request";
  }

  return intermediate[0];
};
