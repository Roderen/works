"use strict";

// #1
const user1 = {};
user1.name = 'John';
user1.surname = 'Smith';
user1.name = 'Pete';
delete user1.name;

// #2
const user2 = {
  name: "John"
};
user2.name = "Pete";
// Будет работать


// #3
let sum = null;
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

for (let i of Object.values(salaries)) {
  sum = sum + i;
}