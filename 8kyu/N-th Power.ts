export function index(array: number[], n: number): number {
  return n < array.length ? Math.pow(array[n], n) : -1;
}
