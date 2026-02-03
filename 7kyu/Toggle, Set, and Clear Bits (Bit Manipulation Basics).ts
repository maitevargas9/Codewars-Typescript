/*
Description

Toggle, Set, and Clear Bits
Your task is to implement a collection of utility functions that perform common bitwise operations on integers. 
All bit positions are zero-based, meaning position 0 refers to the least significant bit.

Toggles (flips) the bit at the given position. If the bit is 0, it becomes 1; if it is 1, it becomes 0.
console.log(toggleBit(5, 1)); // 7
Sets the bit at the given position to 1, without modifying other bits.
console.log(setBit(5, 1)); // 7
Clears (sets to 0) the bit at the given position, leaving all other bits unchanged.
console.log(clearBit(7, 1)); // 5
Checks whether the bit at the given position is set to 1. Returns true if it is set, otherwise false.
console.log(isBitSet(5, 0)); // true
Sets all bits to 1 wherever the mask has 1s.
console.log(setMultipleBits(5, 3)); // 7
Clears all bits wherever the mask has 1s.
console.log(clearMultipleBits(7, 2)); // 5
Toggles all bits wherever the mask has 1s.
console.log(toggleMultipleBits(5, 3)); // 6

Notes
All functions should return the resulting number (or a boolean for isBitSet).
*/

// 1. Toggle a bit at a given position
export const toggleBit = (n: number, position: number): number => {
  return n ^ (1 << position);
};

// 2. Set a bit at a given position
export const setBit = (n: number, position: number): number => {
  return n | (1 << position);
};

// 3. Clear a bit at a given position
export const clearBit = (n: number, position: number): number => {
  return n & ~(1 << position);
};

// 4. Check if a bit at a given position is set
export const isBitSet = (n: number, position: number): boolean => {
  return (n & (1 << position)) !== 0;
};

// 5. Set multiple bits using a mask
export const setMultipleBits = (n: number, mask: number): number => {
  return n | mask;
};

// 6. Clear multiple bits using a mask
export const clearMultipleBits = (n: number, mask: number): number => {
  return n & ~mask;
};

// 7. Toggle multiple bits using a mask
export const toggleMultipleBits = (n: number, mask: number): number => {
  return n ^ mask;
};
