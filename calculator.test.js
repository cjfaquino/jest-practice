const calc = require('./calculator');

describe('calc object', () => {
  test('calc.add(1,2) should add 1 + 2', () => {
    expect(calc.add(1, 2)).toBe(3);
  });

  test('adding number string should work', () => {
    expect(calc.add('1', '2')).toBe(3);
  });

  test('only accept numbers and number strings', () => {
    expect(calc.add('1234', 'test')).toBe('Please only input numbers');
  });

  test('calc.subtract(1,2) should subtract 1 - 2', () => {
    expect(calc.subtract(1, 2)).toBe(-1);
  });

  test('adding number string should work', () => {
    expect(calc.subtract('1', '2')).toBe(-1);
  });

  test('only accept numbers and number strings', () => {
    expect(calc.subtract('1234', 'test')).toBe('Please only input numbers');
  });

  test('calc.multiply(1,2) should multiply 1 * 2', () => {
    expect(calc.multiply(1, 2)).toBe(2);
  });

  test('adding number string should work', () => {
    expect(calc.multiply('1', '2')).toBe(2);
  });

  test('only accept numbers and number strings', () => {
    expect(calc.multiply('1234', 'test')).toBe('Please only input numbers');
  });

  test('calc.divide(1,2) should divide 1 / 2', () => {
    expect(calc.divide(1, 2)).toBe(0.5);
  });

  test('adding number string should work', () => {
    expect(calc.divide('1', '2')).toBe(0.5);
  });

  test('only accept numbers and number strings', () => {
    expect(calc.divide('1234', 'test')).toBe('Please only input numbers');
  });
});
