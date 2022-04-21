'use strict';
// Problem: copy the values of the array to new array, but not the reference
//
// version 1
// let myArray = [1, 2, 3, 4];
// const myOtherArray = [];
// for (let index = 0; index < myArray.length; index += 1) {
//   myOtherArray.push(myArray[index]);
// }
//
// myArray.pop();
// console.log(myArray);
// console.log(myOtherArray);
//
// myArray = [1, 2];
// console.log(myArray);
// console.log(myOtherArray);
//
// version 2
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);
