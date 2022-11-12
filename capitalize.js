const capitalize = (str) => {
  if (typeof str !== 'string') return 'Please input a string';
  const first = str[0].toUpperCase();
  return first + str.slice(1);
};

module.exports = capitalize;
