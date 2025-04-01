export function decipherThis(str: string): string {
  return str
    .split(" ")
    .map((word) => {
      const charCodeMatch = word.match(/^\d+/);
      if (!charCodeMatch) {
        return word;
      }

      const charCode = String.fromCharCode(Number(charCodeMatch[0]));
      const rest = word.slice(charCodeMatch[0].length);

      if (rest.length > 1) {
        return charCode + rest[rest.length - 1] + rest.slice(1, -1) + rest[0];
      }

      return charCode + rest;
    })
    .join(" ");
}
