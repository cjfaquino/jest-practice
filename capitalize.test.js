const capitalize = require('./capitalize');

describe('capitalize() - capitalize first letter of string', () => {
  test('"christian" to be "Christian"', () => {
    expect(capitalize('christian')).toBe('Christian');
  });

  test('should only accept string', () => {
    expect(capitalize(1234)).toBe('Please input a string');
  });
});
