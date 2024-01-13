const ERROR_MESSAGE = "ERROR";

const sumAll = function (firstElement, secondElement) {
  if (!isPositiveNumber(firstElement) || !isPositiveNumber(secondElement)) {
    return ERROR_MESSAGE;
  }
  
  let temporaryElement;
  if (secondElement < firstElement) {
    temporaryElement = firstElement;
    firstElement = secondElement;
    secondElement = temporaryElement;
  }
  
  let sum = 0;
  
  while (firstElement <= secondElement) {
    sum += firstElement;
    firstElement++;
  }
  
  return sum;
};

function isPositiveNumber(arg) {
  return Number.isFinite(arg) && arg > 0 ? true : false;
}

console.log(sumAll(9, 7));

// Do not edit below this line
module.exports = sumAll;
