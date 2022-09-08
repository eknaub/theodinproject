"use strict";

class Task {
  constructor(title, description, duedate, id) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.id = id;
    this.completed = false;
  }
}

export default Task;