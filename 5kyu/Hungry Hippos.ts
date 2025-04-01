/*
Description

Introduction
Hungry Hungry Hippos is a tabletop game made for 2–4 players, produced by Hasbro, under the brand of its subsidiary, 
Milton Bradley. The idea for the game was published in 1967 by toy inventor Fred Kroll and it was introduced in 1978.
The objective of the game is for each player to collect as many marbles as possible with their 'hippo' (a toy hippo 
model). (Source Wikipedia)

Task
Your task is to write a simple class called Game that checks how many times a hippo has to leap into the centre of the 
arena to collect some food. You will be given an integer array called board that defines where all the food can be 
found. You have to return an integer for the amount of leaps a hippo has to do to eat all of the food.

Rules
1. The board array contains 0’s for spaces and 1’s for food
2. The board is n x n in size, where n is between 5 and 50.
3. One leap consists of food items that are either horizontally or vertically connected to each other. If they are not 
connected, then another leap is needed.

Returns
Return an integer for the amount of leaps needed to collect all of the food.

Example
Initialise
board = [[1,1,0,0,0],
         [1,1,0,0,0],
         [0,0,0,0,0],
         [0,0,0,1,1],
         [0,0,0,1,1]]
game = Game.new(board)
game.play()
Result
There are 2 blocks of food connected horizontally or vertically so you must return 2.
*/

export class Game {
  constructor(private board: number[][]) {}

  play(): number {
    const n = this.board.length;
    let leaps = 0;
    const visited = Array.from({ length: n }, () => Array(n).fill(false));

    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0] // Rechts, Unten, Links, Oben
    ];

    const dfs = (x: number, y: number) => {
      if (
        x < 0 ||
        y < 0 ||
        x >= n ||
        y >= n ||
        visited[x][y] ||
        this.board[x][y] === 0
      ) {
        return;
      }

      visited[x][y] = true;
      for (const [dx, dy] of directions) {
        dfs(x + dx, y + dy);
      }
    };

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (this.board[i][j] === 1 && !visited[i][j]) {
          leaps++;
          dfs(i, j);
        }
      }
    }

    return leaps;
  }
}
