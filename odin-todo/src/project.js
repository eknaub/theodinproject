"use strict";

class Project {
  constructor (title, id) {
    this.title = title;
    this.id = id;
    this.tasks = [];
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  removeTask(selectedTask) {
    this.tasks = this.tasks.filter(task => task.title !== selectedTask.title);
  }
};

export default Project;