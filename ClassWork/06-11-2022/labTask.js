// Write a javascript programm to check a credit card number.
// Write a javascript program to count number of words in string.

function cardnumber(inputtxt) {
  var cardno = /^[0-9]+(-[0-9]+)+$/;
  if (inputtxt.value.match(cardno)) {
    return true;
  } else {
    alert("not valid");
    return false;
  }
}

console.log(cardnumber(12445566));
