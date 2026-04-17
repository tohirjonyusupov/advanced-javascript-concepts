// Lexical Scope (Static Scope) — o'zgaruvchining qayerdan ko'rinishi kod yozilgan joyga qarab belgilanadi, funksiya chaqirilgan joyga emas.

const name = "Global";

function outer() {
  const name = "Outer";

  function inner() {
    console.log(name); // "Outer" — chaqirilgan joy emas, yozilgan joy muhim
  }

  inner();
}

outer();

// inner funksiyasi qayerda chaqirilishidan qat'iy nazar,
// u doim yozilgan joyidagi o'zgaruvchilarni ko'radi.
