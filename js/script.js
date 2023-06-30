"use strict";
(function () {
  const students = [
    { name: 'John', age: 20, subject: 'Math' },
    { name: 'Alice', age: 22, subject: 'English' },
    { name: 'Bob', age: 21, subject: 'History' }
  ];

  const printGreetings = (arr) => {
    for (let {name, subject} of arr) {
      const str = `Привет, ${name} John! Ты изучаешь предмет ${subject}`
      console.log(str);
    }
  }

  printGreetings(students);
})();