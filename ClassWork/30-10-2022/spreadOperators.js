// spread operator ...

const array1 = ["one", "two", "three"];
console.log("🚀 ~ file: spreadOperators.js ~ line 2 ~ array1", array1);

const array2 = [...array1, "four", "five", "six"];
console.log("🚀 ~ file: spreadOperators.js ~ line 4 ~ array2", array2);

const customer = {
  cust_name: "hamza",
  cust_car: "toyota",
};
customer.city = "Islamabad"; //adds new property to the object
delete customer.cust_car; //detete the selected property from object
console.log("🚀 ~ file: spreadOperators.js ~ line 13 ~ customer", customer);
