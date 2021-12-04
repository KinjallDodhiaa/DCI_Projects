var eugen = "Mariana";

var person = {
  name: "Marko",
  age: 24,
  Heriberto: eugen,
};

var name = "Heriberto";

// console.log(person.name);

// console.log(person["name"]);
console.log(person[name]);

var x = 63;
var y = 5;

var result = x + y == 11;
console.log(result);

const NAMES = ["Hector of Troy", "Helen", "Achilles"];

let index = 2;

const COMMON_NAME = NAMES[index];

var person1 = {
  name: COMMON_NAME,
  age: 19,
};

var person2 = {
  name: COMMON_NAME,
  age: 21,
};

console.log(person1.name);
console.log(person1.name == person2.name);

