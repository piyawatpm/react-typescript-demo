// Basic Types
export {};
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];
// Tuple Array
let employees: [number, string][];

employees = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let pid: string | number;
pid = "22";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "John", "Jill"]);

// strArray.push(1) // Throws error

// Narrowing
// type of
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
//The in operator narrowing
type Fish = { swim: () => void; type: "fish" };
type Bird = { fly: () => void; have: "wing" };

function move(animal: Fish | Bird) {
  // if ("swim" in animal) {
  //   return animal.swim();
  // }
  if ("type" in animal) return animal.type; //animal in this line has fish type
  return animal.have;
}
//instanceof narrowing

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString()); //x type Date
  } else {
    console.log(x.toUpperCase()); //x type string
  }
}
//Optional
function f(n: number) {
  console.log(n.toFixed()); // 0 arguments
  console.log(n.toFixed(3)); // 1 argument
}
//Function Overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1); // error
// Writing Good Overloads
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
//Object Types
//extend
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}
//example for extend
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircleT = Colorful & Circle;
//typeparameter
interface Test<TypeParameter, SecoundParameter extends string|number='5' ,ThirdParameter extends number|boolean = true > {
  a1: TypeParameter extends string ? "yes" : "no";
  a2: TypeParameter extends string ? boolean : number;
  a3: SecoundParameter;
  a4: ThirdParameter extends SecoundParameter ?true:false;
}
const StringValue: string = "StringValue";
const a: Test<typeof StringValue,number,number> = {
  a1: "yes",
  a2: true,
  // a3: 'piyawat2', error
  a3:55,
  a4: true,
};
