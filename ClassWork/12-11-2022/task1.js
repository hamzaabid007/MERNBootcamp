function arrayScan(params) {
  let newArray = [];
  for (let i = 0; i < params.length; i++) {
    if (parseInt(params[i])) {
      newArray.push(params[i]);
    } else if (params[i] == "c") {
      newArray.pop();
    } else if (params[i] == "d") {
      let doubleTheLastValue =
        newArray[newArray.length - 1] * newArray[newArray.length - 1];
      newArray.push(doubleTheLastValue);
    } else if (params[i] == "+") {
      let add = newArray[newArray.length - 1] + newArray[newArray.length - 2];
      newArray.push(add);
    }
  }
  return newArray.reduce((a, b) => a + b);
}

console.log(arrayScan(["4", "5", "c", "d", "+"]));

// function arr(element) {
//   let newArr = [];
//   for (let i = 0; i < num.length; i++) {
//     var x = parseInt(arr[i]);

//     if (Number.isInteger(x)) {
//       newArr.push(x);
//     } else if (arr[i] == "c") {
//       newArr.pop();
//     } else if (arr[i] == "d") {

//     }
//   }
//   //   if (!isNaN(Number(element))) {
//   //     newArr.push(num);
//   //     console.log(newArr);
//   //   }
//   //    if (num.filter((item) => typeof item === "number")) {
//   //
//   //     // newArr = [].concat(num);
//   //    } else if (num.indexOf("c") > -1) {
//   //      newNum.push(element);
//   //    } else if (num.indexOf("d") > -1) {
//   //      newNum = element * 2;
//   //    }
// }
