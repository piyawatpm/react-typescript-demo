import React from 'react'
interface Pokemon2 {
    name: string;
    hp: number;
    type3:number
    type4:number
  }
const a:Partial<Omit<Pokemon2,'type4'>> = {
    name:'1',
    hp:5,
}
const OmmitAndPartial = () => {
  return (
    <div>OmmitAndPartial</div>
  )
}

export default OmmitAndPartial