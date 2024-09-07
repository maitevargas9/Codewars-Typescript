/*
Description

Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in 
addition to their radii:

function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
}
If a collision is detected, return true. If not, return false.
*/

export function collision(
  x1: number,
  y1: number,
  r1: number,
  x2: number,
  y2: number,
  r2: number
): boolean {
  return Math.hypot(x1 - x2, y1 - y2) < r1 + r2;
}
