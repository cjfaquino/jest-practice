const caesarCipher = require('./caesarCipher');

describe('caesarCipher()', () => {
  test('"abcdefg" shifted by 2 should output "cdefghi"', () => {
    expect(caesarCipher(2, 'abcdefg')).toBe('cdefghi');
  });

  test('cipher should wrap around from z to a with a key of 1', () => {
    expect(caesarCipher(3, 'xyz')).toBe('abc');
  });

  test('maintain capitalizations in "Hello"', () => {
    expect(caesarCipher(3, 'Hello')).toBe('Khoor');
  });

  test('maintain capitalizations in "XyZ"', () => {
    expect(caesarCipher(3, 'XyZ')).toBe('AbC');
  });

  test('removes spaces and punctuations', () => {
    expect(caesarCipher(5, 'Hello, world!')).toBe('Mjqqt, btwqi!');
  });
});
