const convertToCelsius = function(temp) {
  let toCelsius = (temp - 32) * (5 / 9);
  let powerOfTen = Math.pow(10, 1);
  let result = Math.round(toCelsius * powerOfTen) / powerOfTen;
  return result;

};

const convertToFahrenheit = function(temp) {
  let toFahrenheit = temp * (9 / 5) + 32 ;
  let powerOfTen = Math.pow(10, 1);
  let result = Math.round(toFahrenheit * powerOfTen) / powerOfTen;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
