"use strict";
//Function factory
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

//console.log(jeff.name); // 'jeff'

//jeff.sayHello(); // calls the function and logs 'hello!'

//Cooler log :)
const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

// logging all of these variables might be a useful thing to do,
// but doing it like this can be somewhat confusing.
console.log(name, color, number, food); // Maynard red 34 rice

// if you simply turn them into an object with brackets,
// the output is much easier to decipher:
console.log({name, color, number, food});
 // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }


 //Module pattern, if you need one object, IIFE
 const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

//Factory Function, multiple
//or const myLibrary = () => {...};
function MyLibrary() {
  //private attribute
  let books = [];

  function add(book) {
    books.push(book);
  };

  function updateBookReadStatusById(bookId) {
    books = books.map(elem => {
      if(bookId === elem.id) {
        return {...elem, read: !elem.read};
      }

      return elem;
    });
  };

  function removeBookById(bookId) {
    books = books.filter(elem => { 
      return bookId !== elem.id;
    });
  };

  //read only
  function getItems() {
    return Object.freeze([...books]);
  }

  //return object containing those functions (public)
  //freeze => cant change the definition of those public functions
  return Object.freeze({
    add,
    updateBookReadStatusById,
    removeBookById,
    getItems
  })
};