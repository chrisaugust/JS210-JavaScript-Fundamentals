// PROBLEM
// Write a function that takes a positive or negative integer
// and converts it to a string, without using standard
// conversion functions like String(), Number.prototype.toString,
// or implicit conversion involved in expressions like ('' + 5).
// Using the integerToString method from the previous exercise is ok.
//
// EXAMPLES
// signedIntegerToString(4321);      // "+4321"
// signedIntegerToString(-123);      // "-123"
// signedIntegerToString(0);         // "0"
//
// DATA STRUCTURES
// Array to hold digits to be converted to characters
//
// ALGORITHM
// - determine if the number is positive or negative; assign to isNegative
// - call integerToString with absolute value of number as argument
// - prepend '-' to string if isNegative
//
// CODE
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let signedIntegerToString = (integer) => {
  let numericString = integerToString(Math.abs(integer));
  
  if (integer < 0) {
    return ('-' + numericString);
  } else if (integer > 0) {
    return ('+' + numericString);
  } else {
    return numericString;
  }
}

let integerToString = (integer) => {
  if (integer === 0 ) return '0';

  let digits = splitIntoDigits(integer);

  let numericString = '';
  
  for (let index = digits.length - 1; index >= 0; index -= 1) {
    numericString += DIGITS[digits[index]];
  }

  return numericString;
}

// returns array of digits in 'reverse' order
let splitIntoDigits = (integer) => {
  let digits = [];
  
  while (integer > 0) {
    digits.push(integer % 10);
    integer = Math.floor(integer / 10);
  }

  return digits;
}

// TESTS
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
