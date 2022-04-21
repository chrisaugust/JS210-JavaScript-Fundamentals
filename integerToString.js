// PROBLEM
// Write a function that takes a positive integer (or 0) 
// and converts it to a string, without using standard
// conversion functions like String(), Number.prototype.toString,
// or implicit conversion involved in expressions like ('' + 5).
//
// EXAMPLES
// integerToString(4321);      // "4321"
// integerToString(0);         // "0"
// integerToString(5000);      // "5000"
//
// DATA STRUCTURES
// Array to hold digits to be converted to characters
//
// ALGORITHM
// - initialize empty array
// - repeatedly use % to split argument into digits, pushing each
//   to the array
// - iterate over the array, converting to characters
// - reverse the array
// - join the characters and return the resulting string
//
// CODE
const DIGIT_TO_CHAR = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
};

let integerToString = (integer) => {
  if (integer === 0 ) return '0';

  let digits = splitIntoDigits(integer);

  let numericString = '';
  
  for (let index = digits.length - 1; index >= 0; index -= 1) {
    numericString += DIGIT_TO_CHAR[digits[index]];
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
console.log(integerToString(4321) === "4321");
console.log(integerToString(0) === "0");
console.log(integerToString(5000) === "5000");
