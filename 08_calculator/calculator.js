const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  return nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = function (nums) {
  return nums.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (number) {
  return factorialize(number);
};

function factorialize(number) {
  if (number === 0) {
    return 1;
  }

  if (number <= 2) {
    return number;
  }
  return number * factorialize(number - 1);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
