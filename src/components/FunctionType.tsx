import React from 'react'

const sum = (a:number,b:number=5)=>{
    return a+b
}
type Sum2 = (a:number,b?:number)=>number
const sum2:Sum2 = (a,b=5)=>{
    return a+b
}
sum(1,2)
sum(3)
console.log(sum2(4)); // =9  Default Values and Optinal


const FunctionType = () => {
  return (
    <div>FunctionType</div>
  )
}

export default FunctionType