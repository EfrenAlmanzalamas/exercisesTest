import {hello} from "./exercise1";
import {twoFer} from "./exercise2";
import {colorCode} from "./exercise3";
import {decodedValue} from "./exercise4";
import {isLeap} from "./exercise6";
import {toRna} from "./exercise7";
import {age} from "./exercise8";
import {hey} from "./exercise12";
import {Matrix} from "./exercise13";
import {Robot} from "./exercise14";
import { DnDCharacter } from "./exercise9";
import { decodedResistorValue } from "./exercise5";
import {Clock} from "./exercise16";
import {count} from "./exercise25";

let  result: any = hello();
result = twoFer('Alice');
result = colorCode('black');
result = decodedValue(['white', 'black']);
result = decodedResistorValue(['brown', 'black', 'green']);
result = isLeap(2016);
result = toRna('C');
result = age('Earth', '1,000,000,000');
result = hey('Okay if like my  spacebar  quite a bit?   ');
// console.log({result});

// let matrixStr = "9 8 7\n5 3 2\n6 6 7";
// matrixStr = '1';
// const matrix = new Matrix(matrixStr);
//
// console.log("Rows:");
// matrix.getRows().forEach((row: any) => console.log(row));
//
// console.log("\nColumns:");
// matrix.getColumns().forEach(column => console.log(column));


// const robot = new Robot();
// console.log(robot.getName());
// robot.resetName();
// console.log(robot.getName());
// robot.r
// const abilityScore = DnDCharacter.generateAbilityScore()
// const clock = new Clock(-25, 0)
// console.log(clock.toString())

const result2 = count(`'First: don't laugh. Then: don't cry. You're getting it.'`);
console.log(result2);