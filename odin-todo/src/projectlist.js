"use strict";

import Project from "./project";
import Task from "./task";

class ProjectList {
  projectId = 1;
  taskId = 1;

  constructor() {
    this.projects = [];
  }

  addProject(newProjectTitle) {
    if(this.projects.find(project => newProjectTitle === project.title)) return;
    let project = new Project(newProjectTitle, this.projectId);
    this.projects.push(project);
    this.projectId++;
    return project;
  }

  removeProject(projectName) {
    this.projects = this.projects.filter(project => project.title !== projectName);
  }

  editProject(oldProjectTitle, newProjectTitle) {
    if(this.projects.find(project => newProjectTitle === project.title)) return false;
    this.projects = this.projects.map(project => {
      if(project.title === oldProjectTitle) {
        project.title = newProjectTitle;
      }

      return project;
    })
    return true;
  }

  addTaskToProject(projectName, taskName, taskDesc, taskDueDate) {
    let task;
    this.projects = this.projects.map(project => {
      if(project.title === projectName) {
        task = new Task(taskName, taskDesc, taskDueDate, this.taskId);
        this.taskId++;
        project.addTask(task);
      }

      return project;
    })
    return task;
  }

  getTaskCountForProject(projectName) {
    let pr = this.projects.find(project => projectName === project.title);
    return pr.tasks.length;
  }

  removeTaskForProjectById(projectName, id) {
    this.projects = this.projects.map(project => {
      if(project.title === projectName) {
        project.tasks = project.tasks.filter(task => task.id !== id);
      }

      return project;
    })
  }

  editTaskForProjectById(projectName, id, taskName, taskDesc, taskDueDate) {
    let editedTask;
    let pr = this.projects.find(project => projectName === project.title);
    pr.tasks = pr.tasks.map(task => {
      if(task.id === id) {
        task.title = taskName;
        task.description = taskDesc;
        task.dueDate = taskDueDate;
        editedTask = task;
      }

      return task;
    })
    return editedTask;
  }


  getTaskForProjectById(projectName, id) {
    let pr = this.projects.find(project => projectName === project.title);
    let task = pr.tasks.filter(task => task.id === id);
    return task[0];
  }

  getTasksForProject(projectName) {
    let pr = this.projects.find(project => projectName === project.title);
    return pr.tasks;
  }

  get projectsCount() {
    return this.projects.length;
  }
}

export default ProjectList;