import React from "react";
enum Directions {
  North = 5,
  South,
  East,
  West,
}

console.log(Directions.North); // output is  0
console.log(Directions["South"]); // output is 1
console.log(Directions[6]); //output is North
console.log(Directions[1]); //output is South

declare function getID<T extends boolean>(
  fancy: T
): T extends true ? string : number;

let stringReturnValue = getID(true);
let numberReturnValue = getID(false);
let stringOrNumber = getID(Math.random() < 0.5);

type Sum<T> = (param:T)=> number
// extends string ? string:number
const sum:Sum<string|number> = (a)=>{
      if(typeof a ==='number') return a
      else return 55   
}

type Bool<T> = (para:string)=>T extends true ?'yes':'no'
const bool:Bool<boolean>  =(parameter)=>{
  return (parameter)?'yes':'no'
}
const ans = bool('true')
console.log(ans);

const EnumType = () => {
  return <div>EnumType</div>;
};

export default EnumType;
