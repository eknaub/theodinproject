const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    console.log("Do stuff!");
 }
}

//console.log(myObject.property);
//console.log(myObject["obnoxious property"]);

// Objects as a Design Pattern
// example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

// example two
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}

// Object Constructor
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(name);
  }
}

const player = new Player('steve', 'X');
//player.sayName();

// Exercise
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read === true ? 'already read' : 'not read yet'}`
  }
}

const book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
//console.log(book.info());

// Prototype Inheritance

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.sayName = function() {
  console.log(this.name);
}
Student.prototype.goToProm = function() {
  console.log("Eh.. go to prom?");
}

const student = new Student('Student', 1);

student.sayName();

function EighthGrader(name) {
  this.name = name;
  this.grade = 8;
}

EighthGrader.prototype = Object.create(Student.prototype);

const carl = new EighthGrader("carl");
carl.sayName();
carl.goToProm();
carl.grade;

