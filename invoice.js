// PROBLEM
// Refactor the invoiceTotal function so that it will work
// with any number of line item arguments.
//
// EXAMPLE
// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }
//
// invoiceTotal(20, 30, 40, 50);          // works as expected
// invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work
//
// SOLUTION
// By using rest parameter syntax we can capture any number
// of arguments passed to the function as elements in an array.

function invoiceTotal(...amounts) {
  let sum = 0;
  for (let index = 0; index < amounts.length; index += 1) {
    sum += amounts[index];
  }
  return sum;
}

console.log(invoiceTotal(20, 30, 40, 50) === 140);
console.log(invoiceTotal(20, 30, 40, 50, 40, 40) === 220);
