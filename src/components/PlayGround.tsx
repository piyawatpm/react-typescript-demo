import React from "react";
const name = (first?: string, last?: string) => {
  return `fist=${first ?? "defaultfirst"} last=${last ?? "lastDefault"}`;
};
console.log(name());

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point:Point = { x: 12, y: 26 };
logPoint(point);
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
type Invert<I,R extends string=""> = I extends `${infer Head}${infer Tail}`
? Invert<Tail,`${R}${Head extends "1"?"0":"1"}`>:R
type R = Invert<"001">


const PlayGround = () => {
  return <div>PlayGround</div>;
};

export default PlayGround;
