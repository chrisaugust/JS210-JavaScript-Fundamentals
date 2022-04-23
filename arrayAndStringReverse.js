'use strict';
// PROBLEM
// Implement Array.prototype.reverse
//
// Requirements:
// - it should accept a string or an array as argument
// - it should return a new string or array
//
// EXAMPLES
// reverse('Hello');           // "olleH"
// reverse('a');               // "a"
// reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
// reverse([]);                // []
//
// const array = [1, 2, 3];
// reverse(array);             // [3, 2, 1]
// array;                      // [1, 2, 3]
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// - determine if argument is array or string
// - initialize empty array or empty string
// - iterate over elements or characters by index, backwards
// - append character or element at current index to empty array or string
// - return string/array
//
// CODE

function reverse(inputForReversal) {
  let length = inputForReversal.length;
  let reversed;

  if (Array.isArray(inputForReversal)) {
    reversed = [];
  } else {
    reversed = '';
  }

  for (let index = length - 1; index >= 0; index -= 1) {
    if (Array.isArray(reversed)) {
      reversed.push(inputForReversal[index]);
    } else {
      reversed += inputForReversal[index];
    }
  }

  return reversed;
}

// TESTS

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
