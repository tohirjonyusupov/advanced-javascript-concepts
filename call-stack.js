// Execution Context — JavaScript kodi bajariladigan muhit. Har bir funksiya chaqirilganda yangi Execution Context yaratiladi.

// Call Stack — Execution Context'larni tartib bilan saqlaydigan LIFO (Last In, First Out) tuzilmasi

┌──────────────┐
│   add EC     │  ← eng oxirgi kirgan, eng birinchi chiqadi
├──────────────┤
│   greet EC   │
├──────────────┤
│   Global EC  │  ← har doim pastda turadi
└──────────────┘