console.log("Train js");
const moment = require("moment");
const time = moment().format("HH:mm");

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    console.log(
      `Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud`
    );
    return { non: this.non, lagmon: this.lagmon, cola: this.cola };
  }

  sotish(name, number) {
    if (name === "non") {
      this.non -= number;
    } else if (name === "lagmon") {
      this.lagmon -= number;
    } else if (name === "cola") {
      this.cola -= number;
    }
  }

  qabul(name, number) {
    if (name === "non") {
      this.non += number;
    } else if (name === "lagmon") {
      this.lagmon += number;
    } else if (name === "cola") {
      this.cola += number;
    }
  }
}

const newShop = new Shop(4, 5, 2);
console.log(newShop);

newShop.qoldiq();

newShop.sotish("non", 3);
console.log(newShop.qoldiq());

newShop.qabul("cola", 4);
console.log(newShop.qoldiq());
