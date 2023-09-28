// // console.log("Train js");
// // const moment = require("moment");
// // const time = moment().format("HH:mm");

// // class Shop {
// //   constructor(non, lagmon, cola) {
// //     this.non = non;
// //     this.lagmon = lagmon;
// //     this.cola = cola;
// //   }

// //   qoldiq() {
// //     console.log(
// //       `Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud`
// //     );
// //     return { non: this.non, lagmon: this.lagmon, cola: this.cola };
// //   }

// //   sotish(name, number) {
// //     if (name === "non") {
// //       this.non -= number;
// //     } else if (name === "lagmon") {
// //       this.lagmon -= number;
// //     } else if (name === "cola") {
// //       this.cola -= number;
// //     }
// //   }

// //   qabul(name, number) {
// //     if (name === "non") {
// //       this.non += number;
// //     } else if (name === "lagmon") {
// //       this.lagmon += number;
// //     } else if (name === "cola") {
// //       this.cola += number;
// //     }
// //   }
// // }

// // const newShop = new Shop(4, 5, 2);
// // console.log(newShop);

// // newShop.qoldiq();

// // newShop.sotish("non", 3);
// // console.log(newShop.qoldiq());

// // newShop.qabul("cola", 4);
// // console.log(newShop.qoldiq());

// console.log("Ja Ma maslahatlari");

// const list = [
//   "Ysxshi talaba boling", // 20
//   "Togri boshliq tanlang va koproq hato qiling", //20-30
//   "Uzingizga ishlashingizni boshlang", //30-40
//   "Siz kuchli bolgan narsalarni qiling", //40-50
//   "Yoshlarga investitsiya qiling", //50-60
//   "Endi dam oling, foydasi yoq endi!", //60
// ];

// //CallBack functions

// // function maslahatBering(a, callback) {
// //   if (typeof a !== "number") callback("Insert a number", null);
// //   else if (a <= 20) callback(null, list[0]);
// //   else if (a > 20 && a <= 30) callback(null, list[1]);
// //   else if (a > 30 && a <= 40) callback(null, list[2]);
// //   else if (a > 40 && a <= 50) callback(null, list[3]);
// //   else if (a > 20 && a <= 60) callback(null, list[4]);
// //   else {
// //     setTimeout(function () {
// //       callback(null, list[5]);
// //     }, 5000);
// //   }
// // }

// // maslahatBering(10, (err, data) => {
// //   if (err) console.log("ERROR", err);
// //   console.log("Answer:", data);
// // });

// // maslahatBering(25, (err, data) => {
// //   if (err) console.log("ERROR", err);
// //   console.log("Answer:", data);
// // });

// // maslahatBering("salom", (err, data) => {
// //   if (err) console.log("ERROR", err);
// //   else {
// //     console.log("Answer:", data);
// //   }
// // });

// // console.log("passed here0");

// // maslahatBering(65, (err, data) => {
// //   if (err) console.log("ERROR", err);
// //   else {
// //     console.log("Answer:", data);
// //   }
// // });
// // console.log("Passed here 1");

// //ASYNC functionalar

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) return null, list[0];
//   else if (a > 20 && a <= 30) return null, list[1];
//   else if (a > 30 && a <= 40) return null, list[2];
//   else if (a > 40 && a <= 50) return null, list[3];
//   else if (a > 20 && a <= 60) return null, list[4];
//   else {
//     // return null, list[5];
//     return new Promise((resolve, reject) => {
//       // setTimeout(() => {
//       //   resolve(list[5]);
//       // }, 5000);
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });

//     // setTimeout(function () {
//     //   return null, list[5];
//     // }, 5000);
//   }
// }

// // call via then$catch
// // console.log("passed here0");

// // maslahatBering(10)
// //   .then((data) => {
// //     console.log("Answer:", data);
// //   })
// //   .catch((err) => {
// //     console.log("ERROR", err);
// //   });
// // console.log("passed here 1");

// //Call async&await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 20 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here0");

// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR", err);
//   else {
//     console.log("Answer:", data);
//   }
// });
// console.log("Passed here 1");
