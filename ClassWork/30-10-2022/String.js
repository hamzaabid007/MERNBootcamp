let fname = "Hamza";
let lname = "Abid";
//let fName = fname + lname;
//let fName = 'This is my name ${fname} ${lname}';

console.log(`${fname} ${lname}`);

let msg = "This is my city";
// let str = msg.indexOf('is');

let str = msg.charAt("6");
console.log(str);

// CamelCase = fullName
// PascalCase = FullName
// Snake_Case = full_name

let city = "Rawalpindi";
let as = city.replace("R", "SH");
let bs = city.toUpperCase("");
console.log("🚀 ~ file: String.js ~ line 21 ~ bs", bs); //cntrl + alt + L

let strSplit = "Hamzaabid.328@gmail.com";
let strArray = strSplit.split(".");
// strArray[0];
console.log(strArray[2]);

function myFunction(string) {
  return string + " MY Function";
}

myFunction("string");
console.log(
  "🚀 ~ file: String.js ~ line 33 ~ myFunction",
  myFunction("string")
);

const myArrowFunction = (str) => {
  return str + " My Arrow Function";
};

myArrowFunction("str");
console.log(
  "🚀 ~ file: String.js ~ line 40 ~ myArrowFunction",
  myArrowFunction("str")
);
