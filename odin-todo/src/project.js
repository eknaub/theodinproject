"use strict";

class Project {
  constructor (title) {
    this.title = title;
    this.todos = [];
  }

  addTodo(newTodo) {
    if(this.todos.find(todo => newTodo.title === todo.title)) return;
    this.todos.push(newTodo);
  }

  removeTodo(selectedTodo) {
    this.todos = this.todos.filter(todo => todo.title !== selectedTodo.title);
  }
};

export default Project;