const palindromes = function (arg) {
  arg = arg.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(arg);
  let reverse = arg.split('').reverse().join('');
  return arg === reverse;
};

console.log(palindromes("A car, a man, a maraca"));

// Do not edit below this line
module.exports = palindromes;
