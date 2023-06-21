"use strict";
(function () {
  function Student(firstName, surname, yearOfBirthday) {
    this.firstName = firstName;
    this.surname = surname;
    this.yearOfBirthday = yearOfBirthday;

    this.attendance = [];
    this.scores = [];

    this.getAge = function () {
      return 2023 - this.yearOfBirthday;
    };

    this.present = function () {
      const currentLength = this.attendance.length;
      if (currentLength === 10) throw new Error("You can only add 10 items");
      return this.attendance[currentLength] = true;
    };
    this.absent = function () {
      const currentLength = this.attendance.length;
      if (currentLength === 10) throw new Error("You can only add 10 items");
      return this.attendance[currentLength] = false;
    };

    this.mark = function (score) {
      const currentLength = this.scores.length;
      if (currentLength === 10) throw new Error("You can only add 10 items");
      if (score > 10) throw new Error("Grades can only be given from 0 to 10");
      return this.scores[currentLength] = score;
    };

    this.summary = function () {
      let resultScore = this.scores.reduce((accum, current) => accum + current);
      let resultAttendance = this.attendance.reduce((accum, current) => accum + current);
      resultScore = resultScore / this.scores.length;
      resultAttendance = resultAttendance / this.attendance.length;

      if (resultScore >= 9 && resultAttendance >= 0.9) return "Ути какой молодчинка!";
      if (resultScore < 9 && resultAttendance < 0.9) return "Редиска!";
      if (resultScore < 9 || resultAttendance < 0.9) return "Норм, но можно лучше";
    };
  }

  const res = new Student("Vova", "Shaitan", 1997);
  res.absent();
  res.present();
  res.present();
  res.present();
  res.present();
  res.present();
  res.present();
  res.present();
  res.present();
  res.present();

  for (let i = 0; i < 10; i++) {
    res.mark(Math.floor(Math.random() * 10));
  }

  console.log(res.attendance);
  console.log(res.scores);

  console.log(res.summary());
}());
