//basic types

let id: number = 5;
//how to read: variable id will be a number type

let company: string = "Startup name";
let isPublished: boolean = true;
let x: any = "Hello"; //any can be anything, but once declared it can't be modified
let age: number;

age = 30;

let ids: number[] = [1, 2, 22, 30];
let arr: any[] = [1, true, "hello"];

//Tuple
let person: [number, string, boolean] = [1, "Brad", true];
//Tuple array
let employee: [number, string][];

employee = [
  [1, "Name"],
  [10, "Something"],
  [7, "Another thing"],
];

//Union - it allows to hold more than one type
let someData: number | string = 2;
someData = "hello";

someData = 10;

//types
type Point = number | string;
const p1: Point = 1;

//Enum - set of constants of numbers or string
//by default it starts at 0, and each item will follow that count,
//in this example it's setting the first item to 1, so the second will be 2 and so on
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Left);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Left);

// Objects
// in this example it says that user is an object that expect an id key with a number value, and a name key with a string value
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

//another way to write the same code above:

type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 1,
  name: "John",
};

//Type Assertion

let cid: any = 1;
//it sets a type for a any type
let costumerId = <number>cid;
//or:
// let costumerId = cid as number;

//Functions

//it needs to set the type of each argument
//but that requirement can be disabled at config
//the type of the return will also be specified

function addNum(x: number, y: number) {
  return x + y;
}

//when the function doesn't return anything, the return type is void
function log(message: string | number): void {
  console.log(message);
}

//interfaces
interface PatternInterface {
  id: number;
  name: string;
}

const someUser: PatternInterface = {
  id: 10,
  name: "Jack",
};

//option values in interfaces
interface ModelInterface {
  name: string;
  model: string;
  year?: number;
}

const someProduct: ModelInterface = {
  name: "Watch",
  model: "Louis Vuitton",
};

someProduct.name = "Virtual Watch"; //here it's setting a new value

//Interfaces read only
interface SizeInterface {
  readonly name: string; // in this case that value can't be altered, it's read only
  size: string;
}

const someSize: SizeInterface = {
  name: "House",
  size: "some feets",
};

//intefaces with functions

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//Classes
class Person {
  id: number;
  name: string;

  //everything in the constructor will be initiated with each new instance of the class
  constructor(id: number, name: string) {
    console.log(123);

    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike Jordan");

console.log(brad, mike);

console.log(brad.register());

//Interfaces to classes
interface PlaceInterface {
  id: number;
  name: string;
  register(): string;
}

//keyword implements is used to implement an interface
class Apt implements PlaceInterface {
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

class Employee extends Apt {
  position: string;

  constructor(id: number, name: string, position: string) {
    //super gets the declaration from the derived class
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Ny");

console.log(emp.name);
console.log(emp.register);

//Generics
//used to create reusable components

function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 33, 22]);
let strArray = getArray(["brad", "john", "Jill"]);

numArray.push("hello"); //it's possible because that is an any array

function getArrayNewVersion<T>(items: T[]): T[] {
  //<T> is like a placeholder, so at the moment when it will be called, the type can be defined
  return new Array().concat(items);
}

// let numArrayNewVersion = getArray<number>([1, 33, 22, 4]);
// let strArrayNewVersion = getArray<string>(["brad", "john", "Jill"]);
