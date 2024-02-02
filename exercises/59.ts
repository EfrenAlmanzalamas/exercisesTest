export function verse(index: number): string {
  let line = '';
  if (index >= 3 && index <= 99) {
    line = `${index} bottles of beer on the wall, ${index} bottles of beer.
Take one down and pass it around, ${index - 1} bottles of beer on the wall.\n`;
  }
  else if (index == 0) {
    line = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
  }
  else if (index == 1) {
    line = `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.\n`;
  }
  else if (index == 2) {
    line = `${index} bottles of beer on the wall, ${index} bottles of beer.
Take one down and pass it around, ${index - 1} bottle of beer on the wall.\n`;
  }
  return line;
}
export function sing(
  initialBottlesCount?: number,
  takeDownCount?: number
): string {
  let song = '';
  let top = initialBottlesCount ?? 99;
  let bottom = takeDownCount ?? 0;
  for (let i = top; i >= bottom; i--) {
    song = song + verse(i);
    if (i > bottom) {
      song = song + "\n";
    }
  }
  return song;
}