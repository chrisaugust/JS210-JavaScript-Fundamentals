// PROBLEM
// Write a function that takes a string of digits and returns the 
// appropriate number as an integer, with appropriate sign. 
// If there is no sign, return a positive number.
// 
// Assume the string will always contain a valid number.
//
// EXAMPLES
// stringToSignedInteger('4321');      // 4321
// stringToSignedInteger('-570');      // -570
// stringToSignedInteger('+100');      // 100
//
// DATA STRUCTURES
//
// ALGORITHM
// - check first character for sign
// - initialize sign variabale to '-' or '+', with '+' as default
// - convert numeric characters to numbers using stringToInteger;
//   assign to signedInteger
// - if sign === '-', multiply signedInteger by -1 and return it 
//
//
// CODE

const CHAR_TO_DIGIT = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
};

let stringToInteger = (numericCharacters) => {
  let digitsArray = [];
  for (let index = numericCharacters.length - 1; index >= 0; index -= 1) {
    let currentChar = numericCharacters[index];
    let numberFromChar = CHAR_TO_DIGIT[currentChar];
    digitsArray.push(numberFromChar);
  }

  let sum = 0;
  for (let index = 0; index < digitsArray.length; index += 1) {
    sum += digitsArray[index] * (10 ** index);
  }

  return sum;
}

let stringToSignedInteger = (numberString) => {
  let firstChar = numberString[0];

  if (firstChar === '-') {
    return -1 * stringToInteger(numberString.slice(1));
  } else if (firstChar === '+') {
    return stringToInteger(numberString.slice(1));
  } else if (firstChar.match(/[0-9]/)) {
    return stringToInteger(numberString);
  }
}

// TESTS
console.log(stringToSignedInteger('4321') === 4321);
console.log(stringToSignedInteger('-570') === -570);
console.log(stringToSignedInteger('+100') === 100);
