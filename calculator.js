/* eslint-disable no-restricted-globals */

const checkNaN = (item1, item2) => {
  if (typeof item1 === 'undefined' || typeof item2 === 'undefined')
    return 'Please input two numbers';

  if (isNaN(item1) || isNaN(item2)) return 'Please only input numbers';

  return false;
};

const calc = (() => {
  const add = (num1, num2) => {
    if (checkNaN(num1, num2)) {
      return checkNaN(num1, num2);
    }
    return Number(num1) + Number(num2);
  };

  const subtract = (num1, num2) => {
    if (checkNaN(num1, num2)) {
      return checkNaN(num1, num2);
    }
    return num1 - num2;
  };

  const multiply = (num1, num2) => {
    if (checkNaN(num1, num2)) {
      return checkNaN(num1, num2);
    }

    return num1 * num2;
  };
  const divide = (num1, num2) => {
    if (checkNaN(num1, num2)) {
      return checkNaN(num1, num2);
    }

    return num1 / num2;
  };

  return { add, subtract, multiply, divide };
})();

module.exports = calc;
