// Destructuring — massiv yoki ob'ektdan qiymatlarni chiqarib, o'zgaruvchilarga qisqa yo'l bilan yozish usuli.

// Eski usul 😓
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];

// Destructuring ✅
const [a1, b1, c1] = [1, 2, 3];

// Rest operatori bilan
const [head, ...tail] = [1, 2, 3, 4, 5];

console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]