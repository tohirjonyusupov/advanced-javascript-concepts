// this — bu joriy kontekstga (muhitga) ishora qiluvchi maxsus kalit so'z. Uning qiymati qayerda va qanday chaqirilganiga qarab o'zgaradi.

// Global kontekstda windowga teng bo'ladi
console.log(this);

// Oddiy funksiyalarda strict modeda undifined u siz windowga teng bo'ladi
function show() {
  console.log(this);
}
show();

// Object ichida shu objectning o'ziga teng bo'ladi
const user = {
  name: "Ali",
  greet() {
    console.log(this.name); // "Ali"
  }
};

user.greet();

// Arrow function this'ni o'zi yaratmaydi, uni o'rab turgan scope'dan meros oladi:
const obj = {
  name: "Veli",
  greet: () => {
    console.log(this.name); // undefined! (this = Window)
  }
};
obj.greet();

// call, apply, bind — this'ni Qo'lda Belgilash
function introduce(city) {
  console.log(`Men ${this.name}, ${city}dan`);
}

const person = { name: "Jasur" };

// call — argumentlarni birma-bir uzatadi
introduce.call(person, "Toshkent");   // Men Jasur, Toshkentdan

// apply — argumentlarni massiv sifatida uzatadi
introduce.apply(person, ["Samarqand"]); // Men Jasur, Samarqanddan

// bind — yangi funksiya qaytaradi, this biriktirilgan
const boundFn = introduce.bind(person, "Buxoro");
boundFn(); // Men Jasur, Buxorodan