/* eslint-disable no-restricted-globals */

function Calc() {
  const checkNaN = (item1, item2, type) => {
    if (typeof item1 === 'undefined' || typeof item2 === 'undefined')
      return 'Please input two numbers';
    if (isNaN(item1) || isNaN(item2)) return 'Please only input numbers';

    if (type === 'add') {
      return Number(item1) + Number(item2);
    }

    if (type === 'subtract') {
      return item1 - item2;
    }

    if (type === 'multiply') {
      return item1 * item2;
    }

    if (type === 'divide') {
      return item1 / item2;
    }

    return null;
  };

  const add = (num1, num2) => checkNaN(num1, num2, 'add');

  const subtract = (num1, num2) => checkNaN(num1, num2, 'subtract');

  const multiply = (num1, num2) => checkNaN(num1, num2, 'multiply');

  const divide = (num1, num2) => checkNaN(num1, num2, 'divide');

  return { add, subtract, multiply, divide };
}

const calc = Calc();
module.exports = calc;
