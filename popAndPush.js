'use strict';
// PROBLEM
// Implement Array.prototype.pop and Array.prototype.push.
//
// Requirements:
// - pop removes and returns last element of array
// - if pop is called on an empty array it returns undefined
//
// - push adds one or more elements to the end of an array,
//   returning the new length of the array
//
// EXAMPLES
// // pop
// const array1 = [1, 2, 3];
// pop(array1);                        // 3
// console.log(array1);                // [1, 2]
// pop([]);                           // undefined
// pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]
//
// // push
// const array2 = [1, 2, 3];
// push(array2, 4, 5, 6);              // 6
// console.log(array2);                // [1, 2, 3, 4, 5, 6]
// push([1, 2], ['a', 'b']);          // 3
// push([], 1);                       // 1
// push([]);                          // 0
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// pop
// - return undefined if array.length === 0
// - initialize lastElement to array[array.length - 1]
// - decrement array.length
// - return lastElement
//
// push
// - use spread syntax for values paramter(s)
// - iterate over values
//   - assign value parameter to array[array.length]
//   - increment array.length
//
// CODE

let pop = (array) => {
  let lastElement = array[array.length - 1];

  if (array.length > 0) {
    array.length -= 1;
  }

  return lastElement;
};

let push = (array, ...values) => {
  for (let valuesIndex = 0; valuesIndex < values.length; valuesIndex += 1) {
    array[array.length] = values[valuesIndex];
  }

  return array.length;
};

// TESTS
// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                       // 3
console.log(array1);                            // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));             // 6
console.log(array2);                            // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
