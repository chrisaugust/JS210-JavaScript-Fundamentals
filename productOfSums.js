function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  // the following declaration is the source of a bug
  // a declared variable which hasn't been initialized has
  // a value of undefined; attempting to use an assignment
  // operator will produce NaN

  //let sum;
  let sum = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
  }
  // there aren't implicit returns in JavaScript, so we must
  // use the return keyword

  // sum;
  return sum;
}

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

console.log(productOfSums(numbers1, numbers2));
