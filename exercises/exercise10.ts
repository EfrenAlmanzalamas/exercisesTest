export function score(x: number, y: number): number {

  const absX = Math.abs(x);
  const absY = Math.abs(y);
  
  const radius: number = distance(absX, absY);
  
  if (radius > 10) {
    return 0;
  }

  if (radius > 5 && radius <=10) {
    return 1;
  }

  
  if (radius > 1 && radius <=5) {
    return 5;
  }

  return 10;
}

function distance(x: number, y: number): number {
  console.log(x, y);
  
  if(x === 0 && y === 0) {
    return 0;
  }

  if(x === 0 ) {
    return Math.abs(y);
  }


  if(y === 0) {
    return Math.abs(x);
  }

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
