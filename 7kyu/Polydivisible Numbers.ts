export function polydivisible(x: number): boolean {
  const str = x.toString();
  let prefix = 0;

  for (let i = 0; i < str.length; i++) {
    prefix = prefix * 10 + Number(str[i]);
    const divisor = i + 1;
    if (prefix % divisor !== 0) {
      return false;
    }
  }

  return true;
}
