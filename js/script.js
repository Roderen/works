"use strict";
(function () {
  const students = [
    { name: 'John', age: 20, subject: 'Math' },
    { name: 'Alice', age: 22, subject: 'English' },
    { name: 'Bob', age: 21, subject: 'History' }
  ];

  const printGreetings = (arr) => {
    let result = '';
    for (let {name, subject} of arr) {
      result += `Привет, ${name} John! Ты изучаешь предмет ${subject}\n`
    }

    return result;
  }

  console.log(printGreetings(students));
})();