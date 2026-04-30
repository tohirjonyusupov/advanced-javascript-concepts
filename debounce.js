// Debounce nima?
// Debounce — funksiya oxirgi chaqiruvdan keyin ma'lum vaqt o'tgach bir marta bajariladi. Foydalanuvchi to'xtaganida ishlaydi.

Foydalanuvchi yozadi:  a...b...c...d...(to'xtadi)
Debounce:              ⏳  ⏳  ⏳  ⏳  ✅ (faqat 1 marta)

// Throttle nima?
// Throttle — funksiya ma'lum vaqt oralig'ida faqat bir marta bajariladi. Foydalanuvchi davom etayotganda ham ishlaydi.

Qadamba-qadam
0ms    → ✅ ishladi (lastCall = 0ms)
100ms  → ❌ (100ms < 500ms)
200ms  → ❌ (200ms < 500ms)
500ms  → ✅ ishladi (lastCall = 500ms)
600ms  → ❌ (100ms < 500ms)
1000ms → ✅ ishladi (lastCall = 1000ms)


DEBOUNCE:
Event:    ||||||||||||  (to'xtadi)
Natija:                        ✅
"Oxirgi chaqiruvdan keyin bir marta"

THROTTLE:
Event:    ||||||||||||||||||||
Natija:   ✅    ✅    ✅    ✅
"Har N millisekondda bir marta"


Interviewda Qanday Tushuntirish
Savol: "Debounce va Throttle nima, farqi nima?"
✅ Yaxshi javob:

"Ikkalasi ham tez-tez chaqiriladigan funksiyalarni cheklaydi, lekin usuli farqli. Debounce — foydalanuvchi to'xtaganidan keyin bir marta ishlatadi, masalan search input'da har harfda API chaqirmaslik uchun. Throttle — qancha tez chaqirilmasin, ma'lum vaqt oralig'ida bir marta ishlatadi, masalan scroll eventda. Debounce'ni lift eshigiga o'xshataman — birov kirsa, eshik biroz kutadi, boshqa kiradigan bo'lsa — yana kutadi. Throttle esa — kranik suv, qancha ochmasang ham ma'lum tezlikda oqadi."