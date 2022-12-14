const Calculator = require("./Calculator");

const calc = new Calculator();

test('1+2', () => {
  expect(calc.add(1,2)).toEqual(3);
});
test('2-1', () => {
  expect(calc.subtract(2,1)).toEqual(1);
});
test('2*2', () => {
  expect(calc.multiply(2,2)).toEqual(4);
});
test('2/2', () => {
  expect(calc.divide(2,2)).toEqual(1);
});