// // reverse string function
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// //console.log("Hamza:", reverseString("Hamza"));

// //timeout function

// console.log("Start");
// function greeting() {
//   console.log("This is timeout function");
// }

// setTimeout(greeting, 3000);
// console.log("End");

// let fatch = fetch("https://rapidapi.com/guides/fetch-api-async-await")
//   .then(console.log("Api data found"))
//   .catch(console.log("Data not catched"));

// console.log("Fetching Api data", fetch);

// const abc = {
//   a: "a",
//   b: "b",
//   c: {
//     d: "d",
//   },
// };

// const { b, ...re } = abc;
// console.log(b);
// console.log(re);

const arr = [1, 2, 3, 4, 5, 6];

const [, , a, ...re] = arr;

console.log(re);

// First class function (study)
