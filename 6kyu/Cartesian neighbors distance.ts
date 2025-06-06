/*
Description

In previous kata we have been searching for all the neighboring points in a Cartesian coordinate system. 
As we know each point in a coordinate system has eight neighboring points when we search it by range equal 
to 1, but now we will change range by third argument of our function (range is always greater than zero). 
For example if range = 2, count of neighboring points = 24. In this kata grid step is the same (= 1).

It is necessary to write a function that returns array of unique distances between given point and all 
neighboring points. You can round up the distance to 10 decimal places (as shown in the example). Distances 
inside list don't have to been sorted (any order is valid).

For Example:
cartesianNeighborsDistance(3, 2, 1) -> [1.4142135624, 1.0]
cartesianNeighborsDistance(0, 0, 2) -> [1.0, 1.4142135624, 2.0, 2.2360679775, 2.8284271247]
*/

export function cartesianNeighborsDistance(
  x: number,
  y: number,
  range: number
): number[] {
  const distances = new Set<number>();
  for (let dx = -range; dx <= range; dx++) {
    for (let dy = -range; dy <= range; dy++) {
      if (dx === 0 && dy === 0) {
        continue;
      }
      const dist = Math.sqrt(dx * dx + dy * dy);
      distances.add(Number(dist.toFixed(10)));
    }
  }
  return Array.from(distances);
}
