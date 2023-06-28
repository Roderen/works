"use strict";
(function () {
  function Student(firstName, surname, yearOfBirthday) {
    this.firstName = firstName;
    this.surname = surname;
    this.yearOfBirthday = yearOfBirthday;

    this.attendance = Array(10);
    this.scores = Array(10);
    this.currentLesson = 0;

    Student.prototype.getAge = function () {
      return 2023 - this.yearOfBirthday;
    };

    Student.prototype.setAttd = function (flag, score = true) {
      if (this.currentLesson === 10) throw new Error("You can only add 10 items");
      this.attendance[this.currentLesson] = flag;
      score ? this.currentLesson += 1 : null;
    }

    Student.prototype.present = function (mark = null) {
      this.setAttd(true, mark === null);
      if (mark !== null) {
        this.mark(mark);
        this.currentLesson += 1
      }
    };
    Student.prototype.absent = function () {
      this.setAttd(false);
    };

    Student.prototype.mark = function (score = null, lessonIndex) {
      if (this.currentLesson === 10) throw new Error("You can only add 10 items");
      if(lessonIndex > 9) throw new Error("You can only add 10 items");
      if (score > 10) throw new Error("Grades can only be given from 0 to 10");
      if (typeof lessonIndex === 'number') {
        this.scores[lessonIndex] = score;
        return;
      }
      this.scores[this.currentLesson] = score;
    };

    Student.prototype.summary = function () {
      let resultScore = this.scores.reduce((accum, current) => accum + current);
      let resultAttendance = this.attendance.reduce((accum, current) => accum + current);
      resultScore = resultScore / this.scores.length;
      resultAttendance = resultAttendance / this.attendance.length;
      console.log(resultScore)
      console.log(resultAttendance)

      if (resultScore >= 9 && resultAttendance >= 0.9) return "Ути какой молодчинка!";
      if (resultScore < 9 || resultAttendance < 0.9) return "Норм, но можно лучше";
      if (resultScore < 9 && resultAttendance < 0.9) return "Редиска!";
    };
  }

  const res = new Student("Vova", "Shaitan", 1997);
  res.present(10);
  res.present(9);
  res.present(5);
  res.present(3);
  res.present();
  res.present(10);
  res.present(10);
  res.present(9);
  res.present(9);
  // res.mark(5, 9);

  console.log(res);
  console.log(res.summary());
}());
