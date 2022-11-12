// function intersection(arrays) {
//   return arrays;
// }

// console.log(
//   intersection([
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ])
// );

// let intersection = [
//   [5, 10, 15, 20],
//   [15, 88, 1, 5, 7],
//   [1, 10, 15, 5, 20],
// ];
// console.log(Math.max(intersection));

// function largestOfFour(mainArray) {
//   return mainArray.map(function (subArray) {
//     return Math.max.apply(null, subArray);
//   });
// }

// let largestOfFour = [
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ];

// //console.log(Math.max(largestOfFour));

// const highest = largestOfFour.reduce((previous, current) => {
//   return current[1] > previous[1] ? current : previous;
// });

// console.log(highest);

const arr = [
  [12, 45, 75],
  [54, 45, 2],
  [23, 54, 75, 2],
];

//const max = Math.max(...[].concat(...arr));

const flat = arr.flat();
const max = Math.max(...flat);
console.log(max);
