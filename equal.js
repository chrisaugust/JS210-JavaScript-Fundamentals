const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };
const otherSamePerson = person;

console.log(person === otherPerson);    // false -- expected: true

console.log(otherSamePerson === person); // true
console.log(person.name === otherPerson.name); // true

// if we use the strict equality operator when comparing two objects,
// we will get false unless the two objects reference the same object
//
// instead we can compare the values of objects' properties, if that
// is the ultimate intention
