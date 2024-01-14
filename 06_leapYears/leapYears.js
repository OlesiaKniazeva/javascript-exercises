const LEAP_YEAR = true;

const leapYears = function (year) {
  /* years divisible by 4 are not leap years */
  if (year % 4 !== 0) {
    return !LEAP_YEAR;
  }

  /* special case, years which are divisible 
  by 100 and not divisible by 400 are not leap years */
  if (year % 100 === 0 && !(year % 400 === 0)) {
    return !LEAP_YEAR;
  }
  return LEAP_YEAR;
};

// Do not edit below this line
module.exports = leapYears;
