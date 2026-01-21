/*
Description

In some ranking people collects points. The challenge is sort by points and calulate position for every person. 
But remember if two or more persons have same number of points, they should have same position number and sorted 
by name (name is unique).

For example: 

Input structure:
[
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 130,
  },
  {
    name: "Mary",
    points: 120,
  },
  {
    name: "Kate",
    points: 120,
  },
]

Output should be:
[
  {
    name: "Bob",
    points: 130,
    position: 1,
  },
  {
    name: "Kate",
    points: 120,
    position: 2,
  },
  {
    name: "Mary",
    points: 120,
    position: 2,
  },
  {
    name: "John",
    points: 100,
    position: 4,
  },
]

export type inputMan = {
  name: string,
  points: number,
};

export type outputMan = {
  name: string,
  points: number,
  position: number,
};

export function ranking(people: inputMan[]): outputMan[] {
  // your code here
}
*/

export type inputMan = {
  name: string;
  points: number;
};

export type outputMan = {
  name: string;
  points: number;
  position: number;
};

export function ranking(people: inputMan[]): outputMan[] {
  const sorted = [...people].sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    return a.name.localeCompare(b.name);
  });

  let position = 0;
  let prevPoints: number | null = null;

  return sorted.map((person, index) => {
    if (person.points !== prevPoints) {
      position = index + 1;
      prevPoints = person.points;
    }

    return {
      name: person.name,
      points: person.points,
      position
    };
  });
}
