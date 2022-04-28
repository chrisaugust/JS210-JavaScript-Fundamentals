// PROBLEM
// Starting with functions that take a 24 hour argument and convert
// it to minutes before or after midnight, refactor using the JS
// Date object.
//
// EXAMPLES
// afterMidnight('00:00');       // 0
// beforeMidnight('00:00');      // 0
// afterMidnight('12:34');       // 754
// beforeMidnight('12:34');      // 686
//
// DATA STRUCTURES
// Date object
//
// ALGORITHM
// - initialize const MILLISECONDS_PER_MINUTE to 60000
// - create a Date object to represent midnight
// - create another Date object, using timeStr argument, to represent time
//   elapsed since midnight
// - use Date.prototype.getTime method on both Date objects, find difference,
//   and divide by MILLISECONDS_PER_MINUTE; return this value
//
// CODE
'use strict';
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const MILLISECONDS_PER_MINUTE = 60000;
const DATE_PART = '4/28/2022';

// function afterMidnight(timeStr) {
//   const timeComponents = timeStr.split(':');
//   const hours = parseInt(timeComponents[0], 10);
//   const minutes = parseInt(timeComponents[1], 10);
//
//   return hours * MINUTES_PER_HOUR + minutes;
// }

function afterMidnight(timeStr) {
  const midnight = new Date(`${DATE_PART} 00:00`);
  const afterMidnight = new Date(`${DATE_PART} ${timeStr}`);
  let differenceInMilliseconds = afterMidnight.getTime() - midnight.getTime();

  return differenceInMilliseconds / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

// TESTS
console.log(afterMidnight('00:00') === 0);
console.log(beforeMidnight('00:00') === 0);
console.log(afterMidnight('12:34') === 754);
console.log(beforeMidnight('12:34') === 686);
