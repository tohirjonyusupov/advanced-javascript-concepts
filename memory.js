// Memory Management nima?
// JavaScript xotirani avtomatik boshqaradi — developer qo'lda malloc/free qilmaydi. Lekin ichida nima bo'lishini bilish kerak.
// Xotira hayoti:
// 1. Allocate  — o'zgaruvchi yaratilganda joy ajratiladi
// 2. Use       — o'qish, yozish
// 3. Release   — kerak bo'lmasa xotira bo'shatiladi

┌─────────────────┐    ┌─────────────────┐
│      STACK       │    │      HEAP        │
│                  │    │                  │
│  Primitive types │    │  Reference types │
│  number          │    │  Object          │
│  string          │    │  Array           │
│  boolean         │    │  Function        │
│  null            │    │                  │
│  undefined       │    │  (dinamik o'lcham│
│  symbol          │    │   katta ma'lumot)│
│                  │    │                  │
│  Tez, kichik     │    │  Sekin, katta    │
└─────────────────┘    └─────────────────┘

// Stack — qiymat to'g'ridan to'g'ri saqlanadi
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 — o'zgarmadi

// Heap — havola (reference) saqlanadi
let obj1 = { name: "Ali" };
let obj2 = obj1;
obj2.name = "Veli";
console.log(obj1.name); // "Veli" — o'zgarib ketdi!

// Garbage Collection
// GC — hech kim ishlatmayotgan ob'ektlarni xotiradan avtomatik o'chiradi.

// Mark and Sweep Algoritmi
// 1. ROOT'lardan boshlaydi (Global, Stack)
// 2. Barcha "yetib borsa bo'ladigan" ob'ektlarni belgilaydi
// 3. Belgilanmagan (yetib borib bo'lmaydigan) ob'ektlarni o'chiradi

let user = { name: "Ali" }; // Heap'da yaratildi ✅
user = null;                 // havola uzildi
// { name: "Ali" } — endi hech kim ko'rsatmayapti
// GC o'chiradi 🗑️