"use strict";

const dateOfBirth = parseInt(prompt('Год рождения', '1995'));
const aboutYou = {};

if (dateOfBirth) {
  aboutYou.date = dateOfBirth;
  const yourCity = prompt('В каком городе ты живешь?', 'Киев');

  if (yourCity) {
    switch (yourCity) {
      case 'Киев':
      case 'Москва':
      case 'Минск':
        aboutYou.capital = yourCity;
        break;
      default:
        aboutYou.city = yourCity;
    }

    const typeOfSport = prompt('Твой любимый вид спорта?', 'Теннис');

    switch (typeOfSport) {
      case 'Теннис':
      case 'Футбол':
      case 'Баскетбол':
        aboutYou.sport = typeOfSport;

        alert();

        break;
      default:
        alert(`Ты не захотел вводить свой вид спорта`);
    }
  } else {
    alert('Ты не захотел вводить свой город');
  }
} else {
  alert('Ты не захотел вводить год рождения');
}