const reverseString = require('./reverse');

test('reverse "test"', () => {
  expect(reverseString("test")).toBe("tset");
});