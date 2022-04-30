// The wantToVisit function should return true if the museum is related
// to science or computers, or if it's a modern art musem in Amsterdam or
// including the work of Andy Warhol.

function wantToVisit(museum, city) {
  //return museum.includes('Computer')
  //    || museum.includes('Science')
  //    && !(
  //      museum.includes('Modern')
  //      && museum.includes('Art')
  //      && museum.includes('Andy Warhol')
  //      || city === 'Amsterdam'
  //    );
  //
  // rather than puzzle over the boolean logic, simple if/else conditionals
  // can accomplish our objective easily
  if (museum.includes('Computer') || museum.includes('Science')) {
    return true;
  } else if (museum.includes('Modern') && museum.includes('Art')) {
    if (museum.includes('Andy Warhol') || city === 'Amsterdam') {
      return true;
    }
  }
  return false;
}

// Tests (should all print 'true')

console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);

