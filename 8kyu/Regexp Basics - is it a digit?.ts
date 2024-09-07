/*
Description

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), 
false otherwise.
*/

interface String {
  digit(): boolean;
}

String.prototype.digit = function (): boolean {
  return /^\d$/.test(this.valueOf());
};
