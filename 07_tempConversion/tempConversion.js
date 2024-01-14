const convertToCelsius = function(celsiusTemperature) {
  return round((celsiusTemperature - 32) / 1.8);
};

const convertToFahrenheit = function(fahrenheitTemperature) {
  return round((fahrenheitTemperature * 1.8) + 32);
};

function round(number) {
  return Math.round(number * 10) / 10;
}

console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
