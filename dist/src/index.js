"use strict";
let id = 5;
let company = "Startup name";
let isPublished = true;
let x = "Hello";
let age;
age = 30;
let ids = [1, 2, 22, 30];
let arr = [1, true, "hello"];
let person = [1, "Brad", true];
let employee;
employee = [
    [1, "Name"],
    [10, "Something"],
    [7, "Another thing"],
];
let someData = 2;
someData = "hello";
someData = 10;
const p1 = 1;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: "John",
};
const user2 = {
    id: 1,
    name: "John",
};
let cid = 1;
let costumerId = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const someUser = {
    id: 10,
    name: "Jack",
};
const someProduct = {
    name: "Watch",
    model: "Louis Vuitton",
};
someProduct.name = "Virtual Watch";
const someSize = {
    name: "House",
    size: "some feets",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
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
//# sourceMappingURL=index.js.map