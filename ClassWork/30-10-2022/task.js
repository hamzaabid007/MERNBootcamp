// Arrow Functions

const square = (num1) => {
  return num1 * num1;
};
square();
console.log("🚀 ~ file: task.js ~ line 5 ~ square", square(6));

const divide = (num1, num2) => {
  return num1 / num2;
};
divide();
console.log("🚀 ~ file: task.js ~ line 11 ~ divide", divide(10, 5));

//  F= (9/5 * C) + 32
//  C= (F - 32) * 5/9
const converter = (num, value) => {
  if (value == "c") {
    return (num = (9 / 5) * num + 32);
  } else return (num = (num - 32) * (5 / 9));
};

converter();
console.log(" 🚀 ~ file: task.js ~ line 27 ~ converter", converter(70, "c"));

const percentage = {
  name: "hamza",
  uni: "comsats",
  calculatePercentage: (num) => {
    return (num = (num / 1100) * 100);
  },
};
console.log(
  "🚀 ~ file: task.js ~ line 33 ~ percentage",
  percentage.calculatePercentage(800)
);

const obj = {
  name: "HAMZA",

  address: {
    city: "Islamabad",
    country: "Pakistan",
  },
  getAddress() {
    console.log($[this.address.city]);
  },
};
