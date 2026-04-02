// ===== Hoisting =====


// **Hoisting** — bu JavaScript interpretatori tomonidan o'zgaruvchi va funksiya deklaratsiyalarini ularning scope'ining tepasiga "ko'tarilishi" (yuqoriga siljitilishi) jarayonidir. Bu amalda kod bajarilishidan **oldin** sodir bo'ladi.


// 1. `var` bilan Hoisting

console.log(x); // undefined (xato emas!)
var x = 5;
console.log(x); // 5

// JavaScript buni ichidan shunday ko'radi:

var x;           // deklaratsiya tepaga ko'tariladi
console.log(x);  // undefined
x = 5;           // qiymat o'sha joyda qoladi
console.log(x);  // 5


// 2. `let` va `const` bilan Hoisting

// `let` va `const` ham ko'tariladi, lekin **Temporal Dead Zone (TDZ)** tufayli ularga e'lon qilinmasdan oldin murojaat qilib bo'lmaydi:

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;


// ### 3. Funksiya Deklaratsiyasi bilan Hoisting

// Funksiya deklaratsiyalari to'liq ko'tariladi — ham nomi, ham tanasi:

greet(); // "Salom!" — ishlaydi!

function greet() {
  console.log("Salom!");
}


// 4. Funksiya Ifodasi (Expression) bilan Hoisting

sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
  console.log("Hi!");
};

// Bu yerda faqat var sayHi ko'tariladi, funksiya tanasi emas.