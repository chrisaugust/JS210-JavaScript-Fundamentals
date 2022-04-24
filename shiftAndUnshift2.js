'use strict';
// PROBLEM
// Implement Array.prototype.shift and Array.prototype.unshift
// Use splice()
//
// Requirements:
// - shift removes first element from array and returns it
// - undefined is returned if element is empty
// - unshift adds one or more elements to the start of an array
// - unshift returns the new length of array
// - both methods mutate the original array
//
// EXAMPLES
// shift([1, 2, 3]);                // 1
// shift([]);                       // undefined
// shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]
//
// unshift([1, 2, 3], 5, 6);        // 5
// unshift([1, 2, 3]);              // 3
// unshift([4, 5], [1, 2, 3]);      // 3
//
// const testArray = [1, 2, 3];
// shift(testArray);                // 1
// testArray;                       // [2, 3]
// unshift(testArray, 5);           // 3
// testArray;                       // [5, 2, 3]
//
// DATA STRUCTURES
//   Array
//
// ALGORITHM
// unshift
// - determine length of newElements argument to use in for loop
// - iterate over items in newElements,
//   calling splice for each one and inserting element at index value
// - return array.length
//
// shift
//
// CODE

function unshift(array, ...newElements) {
  for (let index = 0; index < [...newElements].length; index += 1) {
    array.splice(index, 0, newElements[index]);
  }
 
  return array.length;
}

function shift(array) {
  let firstElement;

  if (array.length !== 0) {
    firstElement = array.splice(0, 1).pop();
  }

  return firstElement;
}

// TESTS
console.log(shift([1, 2, 3]) === 1);
console.log(shift([]) === undefined);
console.log(shift([[1, 2, 3], 4, 5])); // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6) === 5);
console.log(unshift([1, 2, 3]) === 3);
console.log(unshift([4, 5], [1, 2, 3]) === 3);

const testArray = [1, 2, 3];
console.log(shift(testArray) === 1);
console.log(testArray);             // [2, 3]
console.log(unshift(testArray, 5) === 3);
console.log(testArray);             // [5, 2, 3]
