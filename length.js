// What values will be logged by the following code? Why?

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty item>]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', <2 empty items>]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['JavaScript', <1 empty item>, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

// the length property of an array can be explicitly set, with consequences
// such as losing elements that are out of range when truncating an array, or
// creating empty slots for which there are no elements associated with index
// values in the case of setting the length to a higher value (resulting in
// what's called a sparse array)
