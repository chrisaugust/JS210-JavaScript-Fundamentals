// What will the following log to the console? Why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// array indices must be non-negative integers
// because arrays are objects, negative numbers and non-integers
// can be used as keys, but they won't be counted by the
// Array.prototype.length property
