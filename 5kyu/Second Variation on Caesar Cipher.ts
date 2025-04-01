/*
Description

In this country soldiers are poor but they need a certain level of secrecy for their communications so, though they do 
not know Caesar cypher, they reinvent it in the following way.

The action of a Caesar cipher is to replace each plaintext letter (plaintext letters are from 'a' to 'z' or from 'A' 
to 'Z') with a different one a fixed number of places up or down the alphabet. This displacement of a number of places 
is called the "shift" or the "rotate" of the message. For example, if the shift is 1 letter a becomes b and A becomes 
B; the shift is cyclic so, with a shift of 1, z becomes a and Z becomesA.

They use ASCII, without really knowing it, but code only letters a-z and A-Z. Other characters are kept such as.

They change the "rotate" each new message. This "rotate" is a prefix for their message once the message is coded. The 
prefix is built of 2 letters, the second one being shifted from the first one by the "rotate", the first one is the 
first letter, after being downcased, of the uncoded message.

For example if the "rotate" is 2, if the first letter of the uncoded message is 'J' the prefix should be 'jl'.

To lessen risk they cut the coded message and the prefix in five pieces since they have only five runners and each 
runner has only one piece.

If possible the message will be evenly split between the five runners; if not possible, parts 1, 2, 3, 4 will be 
longer and part 5 shorter. The fifth part can have length equal to the other ones or shorter. If there are many 
options of how to split, choose the option where the fifth part has the longest length, provided that the previous 
conditions are fulfilled. If the last part is the empty string don't put this empty string in the resulting array.

For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 
2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 
4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty 
string and is not kept.

Could you ease them in programming their coding?

Example with shift = 1 :
message: "I should have known that you would have a perfect answer for me!!!"
code: => ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]

By the way, maybe could you give them a hand to decode?
*/

export const encodeStr = (s: string, shift: number): string[] => {
  if (s.length === 0) {
    return [];
  }
  const firstChar = s[0].toLowerCase();
  const secondChar = String.fromCharCode(firstChar.charCodeAt(0) + shift);
  const prefix = firstChar + secondChar;
  const encodedMessage = s
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        return String.fromCharCode(
          ((char.charCodeAt(0) - 97 + shift) % 26) + 97
        );
      } else if (char >= "A" && char <= "Z") {
        return String.fromCharCode(
          ((char.charCodeAt(0) - 65 + shift) % 26) + 65
        );
      } else {
        return char;
      }
    })
    .join("");
  const fullMessage = prefix + encodedMessage;
  const partLength = Math.ceil(fullMessage.length / 5);
  const parts = [];
  for (let i = 0; i < 5; i++) {
    const part = fullMessage.slice(i * partLength, (i + 1) * partLength);
    if (part.length > 0) {
      parts.push(part);
    }
  }
  return parts;
};

export const decode = (arr: string[]): string => {
  if (arr.length === 0) {
    return "";
  }
  const fullMessage = arr.join("");
  const prefix = fullMessage.slice(0, 2);
  const encodedMessage = fullMessage.slice(2);
  const shift = prefix.charCodeAt(1) - prefix.charCodeAt(0);
  const decodedMessage = encodedMessage
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        return String.fromCharCode(
          ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97
        );
      } else if (char >= "A" && char <= "Z") {
        return String.fromCharCode(
          ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65
        );
      } else {
        return char;
      }
    })
    .join("");

  return decodedMessage;
};
