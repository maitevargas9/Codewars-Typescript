/*
Description

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a 
computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make 
mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1

The test cases contain numbers only by mistake.
*/

/* 
Solution 1
export function correct(s: string): string {
  return s.replaceAll('1','I').replaceAll('0','O').replaceAll('5','S');
}
*/

// Solution 2
export function correct2(s: string): string {
  return s.replace(/1/g, "I").replace(/5/g, "S").replace(/0/g, "O");
}
