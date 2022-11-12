const analyzeArrays = require('./analyzeArray');

describe('analyzeArrays()', () => {
  const array = [1, 8, 3, 4, 2, 6];
  test('returns an object with average value', () => {
    expect(analyzeArrays(array)).toHaveProperty('average', 4);
  });

  test('returns an object with min value', () => {
    expect(analyzeArrays(array)).toHaveProperty('min', 1);
  });

  test('returns an object with max value', () => {
    expect(analyzeArrays(array)).toHaveProperty('max', 8);
  });

  test('returns an object with array length', () => {
    expect(analyzeArrays(array)).toHaveProperty('length', 6);
  });

  test('does not accept text in arrays ["test", 1, 2, 3]', () => {
    expect(analyzeArrays(['test', 1, 2, 3])).toBe(
      'Please input an array of numbers'
    );
  });

  test('accepts number strings ["2", 1, 2, 3]', () => {
    expect(analyzeArrays(['2', 1, 2, 3])).toEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 4,
    });
  });
});
