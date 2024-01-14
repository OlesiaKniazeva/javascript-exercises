const fibonacci = function (arg) {
  let number = Number(arg);

  if (number === NaN || number < 0) {
    return "OOPS";
  }
  if (number < 2) {
    return number;
  }

  let fibonacciIndex = 1;

  let result = 0;
  let firstNumber = 0;
  let secondNumber = 1;
  while (number > fibonacciIndex) {
    result = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = result;
    fibonacciIndex++;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
