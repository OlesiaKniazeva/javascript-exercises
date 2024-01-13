const removeFromArray = function (array, ...args) {
  return array.filter((word) => !args.includes(word))
};

let res = removeFromArray([1, 2, 3], 1, 2);
console.log(res);

// Do not edit below this line
module.exports = removeFromArray;
