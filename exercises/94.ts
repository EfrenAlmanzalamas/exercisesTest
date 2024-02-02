type Position = readonly [number, number]
type Positions = {
  white: Position
  black: Position
}
export class QueenAttack {
  public readonly white: Position
  public readonly black: Position

  constructor({ white = [7, 3], black = [0, 3] }: Partial<Positions> = {}) {
    const onBoard = ([y, x]: Position) => x >= 0 && x <= 7 && y >= 0 && y <= 7;
    if (!onBoard(white) || !onBoard(black))
      throw new Error("Queen must be placed on the board");
    if (white[0] === black[0] && white[1] === black[1])
      throw new Error("Queens cannot share the same space");
    this.white = white;
    this.black = black;
  }
  toString(): string {
    let board: string[][] = Array(8).fill(null).map(_ => Array(8).fill("_"));
    const [wY, wX] = this.white;
    const [bY, bX] = this.black;
    board[wY][wX] = "W";
    board[bY][bX] = "B";

    return board.map(row => row.join(" ")).join("\n");
  }
  get canAttack(): boolean {
    const [wY, wX] = this.white;
    const [bY, bX] = this.black;

    return wX === bX || wY === bY || Math.abs(wY - bY) === Math.abs(wX - bX);
  }
}
