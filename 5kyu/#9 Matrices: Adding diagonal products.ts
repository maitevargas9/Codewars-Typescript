/*
Description

We have a square matrix M of dimension n x n that has positive and negative numbers in the ranges [-9,-1] and [0,9],
(the value 0 is excluded).

We want to add up all the products of the elements of the diagonals UP-LEFT to DOWN-BOTTOM, that is the value ofsum1; 
and the elements of the diagonals UP-RIGHT to LEFT-DOWN and that is sum2. Then, as a final result, the value of sum1 - sum2.

E.g.
M = [[ 1,  4, 7,  6,  5],
[-3,  2, 8,  1,  3],
[ 6,  2, 9,  7, -4],
[ 1, -2, 4, -2,  6],
[ 3,  2, 2, -4,  7]]

Let's see how to get this result in the image below:
source: imgur.com

So the value of sum1 - sum2 is equal to:
1164 - 66 = 1098
Create the code to do this calculation.

Features of the random tests:
Numbers of tests = 150
5 <= dimension <= 25 (python, ruby and COBOL)
5 <= dimension <= 20 (javascript)
-10 < M[i,j] < 0 and 0 < M[i,j] < 10

This kata is available in Python2, Ruby, Typescript, D, Cobol, Julia, Rust and Javascript at the moment. 
Translations into another languages will be released soon. Enjoy it!
*/

export function sumProdDiags(matrix: number[][]): number {
  const n = matrix.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let start = 0; start < n; start++) {
    let product = 1;
    for (let i = 0, j = start; j < n; i++, j++) {
      product *= matrix[i][j];
    }
    sum1 += product;
  }

  for (let start = 1; start < n; start++) {
    let product = 1;
    for (let i = start, j = 0; i < n; i++, j++) {
      product *= matrix[i][j];
    }
    sum1 += product;
  }

  for (let start = 0; start < n; start++) {
    let product = 1;
    for (let i = 0, j = start; j >= 0; i++, j--) {
      product *= matrix[i][j];
    }
    sum2 += product;
  }

  for (let start = 1; start < n; start++) {
    let product = 1;
    for (let i = start, j = n - 1; i < n; i++, j--) {
      product *= matrix[i][j];
    }
    sum2 += product;
  }

  return sum1 - sum2;
}
