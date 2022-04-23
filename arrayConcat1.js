'use strict';
// PROBLEM
// Implement Array.prototype.concat().
// It should return a new array composed of all values
// from first array argument and second array (or value)
// argument.
//
// - first argument is always an array
// - second argument can be an array or a single value
// - the function should always return an array
// - the return array should contain elements in the sam order
//   as they appear in the arguments
// - object references should be copied into return array, ie any
//   changes made to the return array should be reflected in the
//   argument array(s)
// - the values of primitives should be copied
//
// EXAMPLES
// function concat(array1, secondArgument) {
//   // ...
// }
//
// concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
// concat([1, 2], 3);                     // [1, 2, 3]
// concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
// concat([2, 3], 'four');                // [2, 3, "four"]
//
//
// const obj = { a: 2, b: 3 };
// const newArray = concat([2, 3], obj);
// newArray;                            // [2, 3, { a: 2, b: 3 }]
// obj.a = 'two';
// newArray;                            // [2, 3, { a: "two", b: 3 }]
//
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, obj];
// const arr3 = concat(arr1, arr2);
// arr3;                           // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
// obj.b = 'three';
// arr3;                           // [1, 2, 3, 4, 5, { a: "two", b: "three" }]
//
// arr3[5].b = 3;                  // or, `arr3[5]['b'] = 3;`
// obj;                            // { a: "two", b: 3 }
//
//
// DATA STRUCTURES
// Arrays
//
// ALGORITHM
// - initialize concatArray to return value of slice() called on first argument
// - check if second argument is an array or single value
//   - if array, iterate over elements, pushing each to concatArray
//   - if value, push value to concatArray
//
// CODE

let concat = (firstArray, secondArgument) => {
  let concatArray = firstArray.slice();

  if (Array.isArray(secondArgument)) {
    concatArray.push(...secondArgument);
  } else {
    concatArray.push(secondArgument);
  }

  return concatArray;
};


// TESTS

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]

const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]


const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3);                     // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                     // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                      // { a: "two", b: 3 }
