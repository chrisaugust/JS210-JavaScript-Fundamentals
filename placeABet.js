function placeABet(guess) {
  // We must remove the parentheses surrounding the following
  // function expression so that it's a function declaration
  // which can be called in the intended way later in the code
  //(function generateRandomInt() {
  //  return Math.floor(Math.random() * 25) + 1;
  //});
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  }

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return `Wrong-o! You lose. The numbers was ${winningNumber}`;
  }
}

const rlSync = require('readline-sync');
const userGuess = parseInt(rlSync.question('Input a guess between 1-25: '), 10);
console.log(placeABet(userGuess));
