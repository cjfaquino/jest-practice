/* eslint-disable no-restricted-globals */
const calc = {
  add: (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) return 'Please only input numbers';
    return Number(num1) + Number(num2);
  },

  subtract: (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) return 'Please only input numbers';
    return num1 - num2;
  },

  multiply: (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) return 'Please only input numbers';
    return num1 * num2;
  },

  divide: (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) return 'Please only input numbers';
    return num1 / num2;
  },
};
module.exports = calc;
