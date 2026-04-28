// Closure nima?
// Closure — funksiya o'zining lexical scope'ini, u yaratilgan muhitni, o'sha muhitdan chiqib ketgandan keyin ham eslab qolishi.

function outer() {
  const message = "Salom"; // outer'ning o'zgaruvchisi

  function inner() {
    console.log(message);  // tashqi o'zgaruvchiga kirish
  }

  return inner;
}

const fn = outer(); // outer tugadi — lekin...
fn();               // "Salom" ✅ — message hali yashayapti!