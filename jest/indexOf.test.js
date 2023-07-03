const {indexOf, lastIndexOf} = require('../js/script');

test('indexOf', () => {
  const arr = [2, 8, 9];
  expect(indexOf(arr, 2)).toBe(0);
  expect(indexOf(arr, 7)).toBe(-1);
  expect(indexOf(arr, 2, -3)).toBe(0);
});

test('lastIndexOf', () => {
  const str = 'канал';
  expect(lastIndexOf(str, 'a')).toBe(3);
  expect(lastIndexOf(str, 'a', 2)).toBe(1);
  expect(lastIndexOf(str, 'a', 0)).toBe(-1);
});