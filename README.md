# ДЗ 68. Set

<hr>

У вас есть строка, и вы хотите определить, сколько уникальных символов содержит эта строка. Создайте функцию, которая
будет принимать строку в качестве аргумента и возвращать количество уникальных символов в ней.

Пример входных данных:

```
const string = 'abracadabra';
```

Пример вывода:

```
console.log(uniqSymbolsCount(string)); // Ожидаемый результат: 5
```

Ваша задача:
1. Создайте новый экземпляр Set.
2. Переберите каждый символ в строке.
3. Добавьте каждый символ в Set.
4. Верните размер Set, который покажет количество уникальных символов в строке.