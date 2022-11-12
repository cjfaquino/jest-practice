const reverseString = require('./reverseString');

describe('reverseString()', () => {
  test('"hololive" should be "eviloloh"', () => {
    expect(reverseString('hololive')).toBe('eviloloh');
  });

  test('"A long sentence"', () => {
    expect(reverseString('A long sentence')).toBe('ecnetnes gnol A');
  });

  test('only accept strings', () => {
    expect(reverseString(12345)).toBe('Please input a string');
  });
});
