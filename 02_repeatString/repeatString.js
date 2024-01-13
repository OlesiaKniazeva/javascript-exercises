const repeatString = function (stringName, repetitionAmount) {
  if (repetitionAmount < 0) {
    return "ERROR";
  }
  return stringName.repeat(repetitionAmount);
};

console.log(repeatString("hey", 0));
console.log(`|${' '.repeat(10)}|`);

// Do not edit below this line
module.exports = repeatString;
