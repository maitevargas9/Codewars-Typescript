/*
Description

Write the definition of the function "say" such that calling this:
say("Hello")("World")
returns "Hello World"
*/

export const say = (string1: string) => {
  return function (string2: string) {
    return `${string1} ${string2}`;
  };
};
