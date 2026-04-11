// Event Loop
// JavaScript single-threaded — ya'ni bir vaqtda faqat bitta ish bajaradi. Lekin async operatsiyalar (setTimeout, fetch va h.k.) bloklanmasdan ishlaydi. Buni Event Loop ta'minlaydi.

┌─────────────────────────┐
│      Call Stack          │  ← Kod shu yerda bajariladi
└─────────────────────────┘
          ↓
┌─────────────────────────┐
│      Web APIs            │  ← setTimeout, fetch, DOM events
└─────────────────────────┘
          ↓
┌─────────────────────────┐
│    Microtask Queue       │  ← Promise, queueMicrotask
│    (yuqori ustuvorlik)   │
└─────────────────────────┘
          ↓
┌─────────────────────────┐
│    Macrotask Queue       │  ← setTimeout, setInterval, I/O
│    (past ustuvorlik)     │
└─────────────────────────┘

// Asosiy Qoida

// Call Stack tugaydi
// Barcha Microtask'lar bajariladi
// Bitta Macrotask bajariladi
// Yana Microtask'lar tekshiriladi
// Tsikl davom etadi 