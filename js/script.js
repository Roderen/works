"use strict";
(function () {
  const student = { name: 'Иван Иванов' };
  const grades = { math: 90, fiz: 85, eng: 95 };

  const saveGrades = (person, scores) => {
    const weakMap = new WeakMap();

    weakMap.set(person, scores);

    return weakMap;
  }
  console.log(saveGrades(student, grades));
})();