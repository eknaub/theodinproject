"use strict";

class Todo {
  constructor(title, description, duedate) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.completed = false;
  }
}

export default Todo;