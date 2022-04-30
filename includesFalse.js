function includesFalse(list) {
  for (let index = 0; index < list.length; index += 1) {
    let element = list[index];

    // we should use the strict equality operator below
    // if (element == false) {
    if (element === false) {
      return true;
    }
  }

  return false;
}

console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]) === true);
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false']) === false);
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]) === false);
