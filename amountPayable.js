// What does the following log? Why?

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));
// logs: 40  (5 + (5 * 7))
// the variable startingBalance is part of the closure for
// totalPayable; when startingBalance is reassigned on line 11,
// totalPayable tracks this change and thus the value returned by
// the calculation startingBalance + (item * quantity) is
// 5 + (5 * 7) or 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
// logs: 45 (10 + (5 * 7))
// again, because of the closure, the reassignment to startingBalance
// is reflected in the return value of totalPayable
