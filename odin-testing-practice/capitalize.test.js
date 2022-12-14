const capitalize = require('./capitalize');

test('capitalize "test"', () => {
  expect(capitalize("test")).toBe("Test");
});