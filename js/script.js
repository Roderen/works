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

    Student.prototype.scoreCalc = function () {
      const result = this.scores.reduce((acc, item) => {
        if (item !== null && typeof item === 'number') {
          acc.score += item;
          acc.attd += 1;
          return acc;
        }
      }, {
        score: 0,
        attd: 0,
      })

      return +(result.score / result.attd).toFixed(1);
    }

    Student.prototype.summaryCalc = function () {
      const result = this.attendance.reduce((acc, item) => {
        if (item) acc += 1;

        return acc;
      }, 0)

      return result / this.currentLesson;
    }

    Student.prototype.summary = function () {
      const score = this.scoreCalc();
      const attd = this.summaryCalc();
      console.log(score, attd);

      if (score >= 9 && attd >= 0.9) return "Ути какой молодчинка!";
      if (score < 9 || attd < 0.9) return "Норм, но можно лучше";
      if (score < 9 && attd < 0.9) return "Редиска!";
    };
  }

  const res = new Student("Vova", "Shaitan", 1997);
  res.present(10);
  res.present(5);
  res.present(7);
  res.absent();
  res.absent();
  res.absent();
  res.absent();
  res.absent();
  res.absent();
  res.absent();

  console.log(res.summary());
}());
