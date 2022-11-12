const analyzeArrays = (arr) => {
  // eslint-disable-next-line no-restricted-globals
  if (arr.some((item) => isNaN(item))) {
    return 'Please input an array of numbers';
  }

  const average = () =>
    arr.reduce((a, b) => Number(a) + Number(b), 0) / arr.length;

  const min = () => Math.min(...arr);

  const max = () => Math.max(...arr);

  const length = () => arr.length;

  return { average: average(), min: min(), max: max(), length: length() };
};

module.exports = analyzeArrays;
