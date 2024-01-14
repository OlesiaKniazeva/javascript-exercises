const fibonacci = function (arg) {
  let index = Number(arg);

  if (index === NaN || index < 0) {
    return "OOPS";
  }
  if (index < 2) {
    return index;
  }


  let result = 0;
  let firstNumber = 0;
  let secondNumber = 1;
  for (let i = 2; i <= index; i++) {
    result = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
