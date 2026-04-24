// Spread va rest operatorlari

// Ikkalasi ham ... — Farqi nima?

// REST — yig'adi (parametrlarda)
function sum(...numbers) {}

// SPREAD — yoyadi (chaqiruvda / literallarda)
const arr = [...arr1, ...arr2];

// Rest — ko'pni bittaga yig'adi
// Spread — bittani ko'pga yoyadi

// ======================================================================================

// SPREAD Operator

// 1. Massivni Yoyish
const a = [1, 2, 3];
const b = [4, 5, 6];

// Birlashtirish
const combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// O'rtaga qo'shish
const inserted = [...a, 99, ...b];
console.log(inserted); // [1, 2, 3, 99, 4, 5, 6]

// =========================================================================================
// REST Operator

// 1. Funksiya Parametrlarida
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3); // 6
sum(1, 2, 3, 4, 5); // 15
