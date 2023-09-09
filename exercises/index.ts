import {hello} from "./exercise1";
import {twoFer} from "./exercise2";
import {colorCode} from "./exercise3";
import {decodedValue} from "./exercise4";
import {decodedResistorValue} from "./exercise5";
import {isLeap} from "./exercise6";
import {toRna} from "./exercise7";
import {age} from "./exercise8";

let  result: any = hello();
result = twoFer('Alice');
result = colorCode('black');
result = decodedValue(['white', 'black']);
result = decodedResistorValue(['brown', 'black', 'green']);
result = isLeap(2016);
result = toRna('C');
result = age('Earth', '1,000,000,000');
console.log({result});