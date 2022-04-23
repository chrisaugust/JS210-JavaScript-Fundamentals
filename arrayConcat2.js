'use strict';
// PROBLEM
// Extend concat() to accept any number of array or value arguments
//
// EXAMPLES
// concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
// concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]
//
// DATA STRUCTURES
// Arrays
//
// ALGORITHM
// - use rest syntax for 2nd to n parameters
// - initialize concatArray to firstArray using spread syntax
// - iterate over additionalArguments
//   - check if element is an array or value
//      - use rest syntax to push array to concatArray
//      - else, push value to concatArray
// - return concatArray
//
// CODE

let concat = (...multipleArguments) => {
  let concatArray = [];
  for (let index = 0; index < multipleArguments.length; index += 1) {
    let arg = multipleArguments[index];
    if (Array.isArray(arg)) {
      concatArray.push(...arg);
    } else {
      concatArray.push(arg);
    }
  }

  return concatArray;
};


// TESTS
console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
