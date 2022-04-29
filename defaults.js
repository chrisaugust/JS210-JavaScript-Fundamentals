// PROBLEM
// Refactor the following function so that arguments with a value of 0
// are not treated as if omitted.
//
// EXAMPLE OF CURRENT PROBLEM
// 
// function processOrder(price, quantity, discount, serviceCharge, tax) {
//   quantity = quantity || 1;
//   discount = discount || 0;
//   serviceCharge = serviceCharge || 0.1;
//   tax = tax || 0.15;
// 
//   return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
// }
// 
// processOrder(100, 2, 0.1, 0, 0);      // 227.7 -- incorrect result!
//
// ALGORITHM
// - explicitly check if value of variables are undefined
//

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = (quantity === undefined) ? 1 : quantity;
  discount = (discount === undefined) ? 0 : discount;
  serviceCharge = (serviceCharge === undefined) ? 0.1 : serviceCharge;
  tax = (tax === undefined) ? 0.15 : tax;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

// TESTS
console.log(processOrder(100, 2, 0.1, 0, 0) !== 227.7);
console.log(processOrder(100, 2, 0.1, 0, 0) === 180);
