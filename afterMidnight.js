// PROBLEM
// Reimplement the timeOfDay function (which represents time using number
// of minutes after or before (negative numbers)  midnight) using 24 hour
// format and JavaScript's Date object.
//
// EXAMPLES
// timeOfDay(0);          // "00:00"
// timeOfDay(-3);         // "23:57"
// timeOfDay(35);         // "00:35"
// timeOfDay(-1437);      // "00:03"
// timeOfDay(3000);       // "02:00"
// timeOfDay(800);        // "13:20"
// timeOfDay(-4231);      // "01:29"
//
// DATA STRUCTURES
// Date object
//
// ALGORITHM
// - create new Date object set to midnight
// - use setMinutes to modify Date object
// - calculate hours with getUTCHours
// - calculate minutes with getUTCMinutes
// - return formatted string (using padWithZeroes)
//
// CODE

'use strict';
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  deltaMinutes %= MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  let date = new Date(0);
  date.setMinutes(deltaMinutes);

  const hours = padWithZeroes(date.getUTCHours(), 2);
  const minutes = padWithZeroes(date.getUTCMinutes(), 2);

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

// TESTS
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) ===  "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
