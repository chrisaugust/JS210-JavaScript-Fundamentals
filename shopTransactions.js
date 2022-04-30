const rlSync = require('readline-sync');
const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  let data = rlSync.question('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    console.log('Thank you. Data accepted.');

  // we have to pass an error argument to the catch function below
  } catch(error) {
    console.log(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  for (let index = 0; index < transactionLog.length; index += 1) {
    total += transactionLog[index];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());
