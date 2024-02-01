const animals: { [key: string]: string } = {
  fly: "I don't know why she swallowed the fly. Perhaps she'll die.",
  spider: "It wriggled and jiggled and tickled inside her.",
  bird: "How absurd to swallow a bird!",
  cat: "Imagine that, to swallow a cat!",
  dog: "What a hog, to swallow a dog!",
  goat: "Just opened her throat and swallowed a goat!",
  cow: "I don't know how she swallowed a cow!",
  horse: "She's dead, of course!",
};
export function verse(verse: number) {
  const iterableAnimals = Object.keys(animals);
  const animal = iterableAnimals[verse - 1];
  const reasons: string[] = [];
  for (let i = verse - 1; i > 0; i--) {
    const animal = iterableAnimals[i];
    const previousAnimal = iterableAnimals[i - 1];
    previousAnimal &&
      reasons.push(
        `She swallowed the ${animal} to catch the ${previousAnimal}${previousAnimal === "spider"
          ? ` ${animals.spider.replace("It", "that").replace(".", "")}`
          : ""
        }.`
      );
  }
  const lines = [
    `I know an old lady who swallowed a ${animal}.\n`,
    `${animals[animal as keyof typeof animals]}\n`,
    `${reasons.join("\n")}\n`,
    `${animals.fly}\n`,
  ];
  return verse === 1 || verse === 8
    ? lines.splice(0, 2).join("")
    : lines.join("");
}
export function verses(from: number, to: number) {
  let verses: string[] = [];
  for (let i = from; i <= to; i++) {
    verses.push(verse(i));
  }
  return verses.join("\n");
}
