/*
Description

Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules
Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.

Examples: (Input --> Output)
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/

export function peopleWithAgeDrink(old: number): string {
  let result = "";
  if (old < 14) {
    result = "drink toddy";
  } else if (old < 18) {
    result = "drink coke";
  } else if (old < 21) {
    result = "drink beer";
  } else if (old >= 21) {
    result = "drink whisky";
  }
  return result;
}
