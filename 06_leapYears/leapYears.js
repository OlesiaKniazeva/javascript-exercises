
const leapYears = function (year) {
  /* years divisible by 4 are not leap years */
  if (year % 4 !== 0) {
    return false;
  }

  /* special case: years which are divisible 
  by 100 and not divisible by 400 are not leap years */
  if (year % 100 === 0 && !(year % 400 === 0)) {
    return false;
  }
  return true;
};

// Do not edit below this line
module.exports = leapYears;
