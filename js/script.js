"use strict";

let dateOfBirthday = +prompt('Твой год рожднеия?', '2000');

if (dateOfBirthday) {
  dateOfBirthday = 2023 - dateOfBirthday;
  let yourCity = prompt('В каком городе ты живешь?', 'Киев');

  if (yourCity) {
    switch (yourCity) {
      case 'Киев':
        yourCity = 'Ты живешь в столице Украины'
        break
      case 'Москва':
        yourCity = 'Ты живешь в столице России'
        break
      case 'Минск':
        yourCity = 'Ты живешь в столице Беларуси'
        break
      default:
        yourCity = `Ты живешь в городе ${yourCity}`
        break
    }

    let yourSport = prompt('Твой любимый вид спорта?', 'Футбол');

    if (yourSport) {
      switch (yourSport) {
        case 'Теннис':
          yourSport = 'Круто! Ты хочешь стать Рафаэлем Надаль?'
          break;
        case 'Футбол':
          yourSport = 'Круто! Ты хочешь стать Гердом Мюллером?'
          break;
        case 'Баскетбол':
          yourSport = 'Круто! Ты хочешь стать Хогланд Биллом?'
          break;
        default:
          yourSport = 'Твой любимый вид спорта'
          break;
      }

      alert(`
      Твой возраст: ${dateOfBirthday}
      ${yourCity}
      ${yourSport}
      `)
    } else {
      console.log('Ты не ввел вид спорта');
    }
  } else {
    console.log('Ты не ввел город');
  }
} else {
  console.log('Вы ввели неправильную дату');
}