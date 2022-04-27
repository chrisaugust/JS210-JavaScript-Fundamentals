// PROBLEM
// Implement Array.prototype.slice and Array.prototype.splice.
//
// Requirements:
// slice
// - takes 3 arguments (array, begin index, end index)
// - begin and end indices are greater than or equal to 0
// - if value of begin or end is greater than length of argument
//   array, it should be set to the length of the array
// - returns new array containing elements extracted from argument
//   array starting with begin index up to (exclusive) end index
// - original array is not mutated
//
// splice
// - takes 4 arguments (array, start index, deleteCount, optional:
//   zero or more elementsToBeAdded
// - if no optional elementsToBeAdded argument is provided, the function
//   should only remove elements from the array
//   elements to be added)
// - start and deleteCount should be integers >= 0
// - if value of start > array.length, it should be set to array.length
// - if deleteCount > number of elements from start to end of array,
//   it should be set to (array.length - start)
// - the function removes the number of elements indicated by deleteCount
//   starting at the start index
// - if optional elementsToBeAdded argument is present, those elements
//   are inserted into the array beginning at start index
// - a new array of the deleted elements is returned, or an empty array
//   if no elements are deleted
// - argument array is mutated
//
// EXAMPLES
// function slice(array, begin, end) {
//   // ...
// }
// 
// slice([1, 2, 3], 1, 2);               // [2]
// slice([1, 2, 3], 2, 0);               // []
// slice([1, 2, 3], 5, 1);               // []
// slice([1, 2, 3], 0, 5);               // [1, 2, 3]
// 
// const arr1 = [1, 2, 3];
// slice(arr1, 1, 3);                     // [2, 3]
// arr1;                                  // [1, 2, 3]
// 
// function splice(array, start, deleteCount, element1, elementN) {
//   // ...
// }
// 
// splice([1, 2, 3], 1, 2);              // [2, 3]
// splice([1, 2, 3], 1, 3);              // [2, 3]
// splice([1, 2, 3], 1, 0);              // []
// splice([1, 2, 3], 0, 1);              // [1]
// splice([1, 2, 3], 1, 0, 'a');         // []
// 
// const arr2 = [1, 2, 3];
// splice(arr2, 1, 1, 'two');             // [2]
// arr2;                                  // [1, "two", 3]
// 
// const arr3 = [1, 2, 3];
// splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
// arr3;                                  // [1, "two", "three"]
// 
// const arr4 = [1, 2, 3];
// splice(arr4, 1, 0);                    // []
// splice(arr4, 1, 0, 'a');               // []
// arr4;                                  // [1, "a", 2, 3]
// 
// const arr5 = [1, 2, 3];
// splice(arr5, 0, 0, 'a');               // []
// arr5;                                  // ["a", 1, 2, 3]
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// slice
// - check that begin and end indices are greater than or equal to 0
//    - if value of begin or end is greater than length of argument
//      array, it should be set to the length of the array
// - initialize newArray to []
// - iterate over argument array starting at begin index and ending at 
//   (end - 1)
//     - append element at currentIndex to newArray
// - return newArray
//
// splice
// - copy argument array
// - initialize newArray to []
// - reassign start and deleteCount if values are outside of array length
//   bounds
// - initialize newLength = array.length + [...elementstoAdd].length - deleteCount
// - 'delete' elements from array by reassigning from elementsToAdd
//   - use for loop starting at index value start
//   - end condition: index < start + [...elementsToAdd].length
// - add back elements from arrayCopy
//   - starting index value: start + [...elementsToAdd].length
//   - ending index value: newLength - 1
//
// - return slice of arrayCopy from start up to deleteCount
//
// CODE
'use strict';

function slice(array, begin, end) {
  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;

  let newArray = [];
  for (let currentIndex = begin; currentIndex < end; currentIndex += 1) {
    newArray.push(array[currentIndex]);
  }

  return newArray;
}

function splice(array, start, deleteCount, ...elementsToAdd) {
  let arrayCopy = slice(array, 0, array.length);
  
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > array.length - start ? array.length - start : deleteCount;
  let newLength = array.length + [...elementsToAdd].length - deleteCount

  // assign elements from elementsToAdd to array
  for (let index = 0; index < elementsToAdd.length; index += 1) {
    array[start + index] = elementsToAdd[index];
  }

  // add back elements from end of arrayCopy
  let copyBackCount = arrayCopy.length - (start + deleteCount);
  for (let index = 0; index < copyBackCount; index += 1) {
    array[start + [...elementsToAdd].length + index] = arrayCopy[start + deleteCount + index];
  }

  return slice(arrayCopy, start, start + deleteCount);
}

// TESTS

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                      // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
