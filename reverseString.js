const reverseString = (str) => {
  if (typeof str !== 'string') return 'Please input a string';
  return str.split('').reverse().join('');
};

module.exports = reverseString;
