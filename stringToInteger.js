// PROBLEM
// Implement parseInt().
//
// Function takes a string of numeric characters,
// returning appropriate number.
//
// Do not use built-in type conversion functions.
//
// Do not worry about + or - signs or invalid characaters;
// assume inputs will be valid.
//
// EXAMPLES
// stringToInteger('4321');      // 4321
// stringToInteger('570');       // 570 
// 
// DATA STRUCTURES
// Array to hold digits at index corresponding to powers of 10
// (eg. [1, 2, 3] represents 321, mapping (10 ** index value * value)
// to each element)
//
// An Object with properties set to numeric characters,
// with corresponding number values
//
// ALGORITHM
// - initialize a CHAR_TO_DIGIT object with the following property/value pairs
//     '1': 1,
//     '2': 2,
//       ...
//     '9': 9,
// - split input string into an array of characters
// - reverse the array
// - iterate over the reversed array by index
//     - use the current character to access the corresponding value
//       in the CHAR_TO_DIGIT object, reassigning the return value to 
//       current index
// - map (value * (10 ** indexValue)) to each element
// - reduce elements of array to single value using addition
// - return that value

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

// TESTS
console.log(stringToInteger('4321') === 4321);
console.log(stringToInteger('570') === 570);
