/*
Description

Create a combat function that takes the player's current health and the amount of damage received, 
and returns the player's new health. Health can't be less than 0.
*/

export function combat(health: number, damage: number): number {
  const newHealth = health - damage;
  return newHealth < 0 ? 0 : newHealth;
}
