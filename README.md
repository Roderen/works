# ДЗ 71. Деструктурирующее присваивание

<hr>

У вас есть массив, содержащий информацию о студентах, каждый студент представлен в виде объекта со свойствами name (
имя), age (возраст) и subject (предмет). Вам нужно извлечь данные об имени и предмете каждого студента и использовать их
для вывода сообщения приветствия в формате "Привет, [имя]! Ты изучаешь предмет [предмет]".

Пример входных данных:
```
const students = [ 
{ name: 'John', age: 20, subject: 'Math' }, 
{ name: 'Alice', age: 22, subject: 'English' }, 
{ name: 'Bob', age: 21, subject: 'History' } 
]; 
```

Пример вывода:
```
printGreetings(students); 
// Ожидаемый результат: 
// "Привет, John! Ты изучаешь предмет Math" 
// "Привет, Alice! Ты изучаешь предмет English" 
// "Привет, Bob! Ты изучаешь предмет History" 
```

Ваша задача:
1. Используйте деструктуризацию массива и объектов, чтобы извлечь значения name и subject каждого студента.
2. Для каждого студента, создайте строку, используя извлеченные значения в нужном формате.
3. Выведите каждую полученную строку.