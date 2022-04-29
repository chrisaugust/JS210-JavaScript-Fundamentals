// PROBLEM
// Write a makeDoubler function that takes a caller name as an
// argument, returning a function with the same behavior as
// doubler (see example below) but with preset caller.
//
// EXAMPLE
// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }
//
// doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.
//
// const doubler = makeDoubler('Victor');
// doubler(5); // returns 10
// // logs:
// // This function was called by Victor.
//
// ALGORITHM
// makeDoubler
// - defines doubler function which logs message
//   including caller's name (provided as argument to makeDoubler)
// - returns doubler function
//
// CODE

function makeDoubler(caller) {
  return number => {
    console.log(`This function was called by ${caller}`);
    return number * 2;
  };
}

// TEST
const doubler = makeDoubler('Victor');
console.log(doubler(5) === 10);
// logs: This function was called by Victor
