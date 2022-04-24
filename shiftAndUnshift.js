'use strict';
// PROBLEM
// Implement Array.prototype.shift and Array.prototype.unshift
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
// - iterate over array elements by index, working backwards,
//   assigning elements at array[index] to
//   array[index + [...newElements].length]
// - starting at index value 0, iterate over newElements
//   - assign array[index] to newElements[index]
// - return new length
//
// shift
// - initialize firstElement = array[0]
// - iterate over elements in array
//   - assign array[index] to array[index + 1]
// - return firstElement
//
// CODE

function unshift(array, ...newElements) {
  let indexIncrement = [...newElements].length;
  for (let index = array.length - 1; index >= 0; index -= 1) {
    array[index + indexIncrement] = array[index];
  }

  for (let index = 0; index < indexIncrement; index += 1) {
    array[index] = [...newElements][index];
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
