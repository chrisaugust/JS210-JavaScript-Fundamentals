function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
    'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  // explicit return is required
  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);
  console.log(names);

  for (let index = 0; index < names.length; index += 1) {
    const name = names[index];
    // to execute the function and assign the return value to greeting,
    // we must add () after the function name
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
