const LinkedList = require("./LinkedList");

const linked = new LinkedList();

test('Append 1 and 2', () => {
  linked.append(1);
  linked.append(2);
  expect(linked.toString()).toBe('( 1 ) => ( 2 ) => (null)')
});

test('Prepend 3', () => {
  linked.prepend(3);
  expect(linked.toString()).toBe('( 3 ) => ( 1 ) => ( 2 ) => (null)')
});

test('Size', () => {
  expect(linked.size()).toEqual(3);
});

test('Headnode', () => {
  expect(linked.head().value).toEqual(3);
});

test('Tailnode', () => {
  expect(linked.tail().value).toEqual(2);
});

test('At idx 1', () => {
  expect(linked.at(1).value).toEqual(1);
});

test('Pop', () => {
  linked.pop();
  expect(linked.size()).toEqual(2);
});

test('Contains value 3', () => {
  expect(linked.contains(3)).toBeTruthy();
});

test('Contains value 4', () => {
  expect(linked.contains(4)).toBeFalsy();
});

test('Find value 1 idx', () => {
  expect(linked.find(1)).toEqual(1);
});

test('Find value 4 idx', () => {
  expect(linked.find(4)).toBeNull();
});

test('Add 4 to idx 2', () => {
  expect(linked.insertAt(4, 2)).toBeNull();
});

test('Add 5 to idx 1', () => {
  linked.insertAt(5, 1);
  expect(linked.toString()).toBe('( 3 ) => ( 5 ) => ( 1 ) => (null)')
});

test('Add 6 to idx 0', () => {
  linked.insertAt(6, 0);
  expect(linked.toString()).toBe('( 6 ) => ( 3 ) => ( 5 ) => ( 1 ) => (null)')
});

test('Remove idx 4', () => {
  expect(linked.removeAt(4)).toBeNull();
});

test('Remove idx 2', () => {
  linked.removeAt(2);
  expect(linked.toString()).toBe('( 6 ) => ( 3 ) => ( 1 ) => (null)')
});

test('Remove idx 0', () => {
  linked.removeAt(0);
  expect(linked.toString()).toBe('( 3 ) => ( 1 ) => (null)')
});