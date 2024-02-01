export const parse = (phrase: string) =>
  phrase
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toUpperCase()
    .split(/\s+|-/)
    .map((word) => word[0])
    .join("");