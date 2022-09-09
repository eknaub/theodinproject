"use strict";

class Task {
  constructor(title, description, id) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.completed = false;
  }
}

export default Task;