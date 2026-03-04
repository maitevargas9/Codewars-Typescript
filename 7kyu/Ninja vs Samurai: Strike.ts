/*
Description

Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:
let ninja = new Warrior('Ninja');
let samurai = new Warrior('Samurai');
samurai.strike(ninja, 3);
ninja.health should == 70
Can you figure out what is wrong?

export class Warrior {
  private name: string;
	public health: number;
  constructor(name: string) {
    this.name=name;
    this.health=100;
  }
}

Warrior.prototype.strike= function(enemy: Warrior, swings: number) {
  enemy.health = Math.max(0, enemy.health - (swings * 10));
}
*/

export class Warrior {
  private name: string;
  public health: number;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
  }

  public strike(enemy: Warrior, swings: number): void {
    enemy.health = Math.max(0, enemy.health - swings * 10);
  }
}

Warrior.prototype.strike = function (enemy: Warrior, swings: number) {
  enemy.health = Math.max(0, enemy.health - swings * 10);
};
