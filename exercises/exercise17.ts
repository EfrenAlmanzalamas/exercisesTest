
export const actions: string[] =[
  'wink',
  'double blink',
  'close your eyes',
  'jump'
]

export function commands(command: number): string[] {
  const binary=  command.toString(2);
let result: string[] = [];

  for(let i =1; i<=5; i++){
   let index = binary.length - i;

   if(binary[index] === '1'){
     if(i === 5){
       result.reverse();
     }else{
       result.push(actions[i-1])
     }
   }
  }
  
  return result;
}

console.log(commands(3))