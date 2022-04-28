// PROBLEM
// The calculateBonus function calculates the bonus for a given salary. 
// It makes use of two arguments for determining the bonus: a salary amount 
// and a boolean switch. If the boolean is true, the bonus should be half of 
// the salary; otherwise the bonus should be 0. Fill in the blanks in the 
// function so that it will work, then explain why it works.
//
// EXAMPLES
//
// calculateBonus(2800, true);               // 1400
// calculateBonus(1000, false);              // 0
// calculateBonus(50000, true);              // 25000
//
// DATA STRUCTURES
// n.a.
//
// ALGORITHM
// 
// CODE
'use strict';

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

// the calculateBonus function isn't defined with explicit arguments,
// but all functions have an arguments object available locally, allowing
// us to access properties of the arguments object using bracket notation
// as we do in the body of the function definition

// TESTS
console.log(calculateBonus(2800, true) === 1400);
console.log(calculateBonus(1000, false) === 0);
console.log(calculateBonus(50000, true) === 25000);
