/*
Description

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:

case	           return
name equals owner  'Hello boss'
otherwise	       'Hello guest'
*/

export function greet(name: string, owner: string): string {
  let message = "";
  if (name === owner) {
    message = "Hello boss";
  } else {
    message = "Hello guest";
  }
  return message;
}
