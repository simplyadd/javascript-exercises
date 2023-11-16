const convertToCelsius = function(tempF) {
  if (tempF == 32) return 0;
  tempC = 5/9 * (tempF - 32);
  return Number(tempC.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  if (tempC == 0) return 32;
  tempF = tempC * 9/5 + 32
  return Number(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
