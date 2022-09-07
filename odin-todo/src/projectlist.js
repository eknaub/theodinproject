"use strict";

import Project from "./project";

class ProjectList {
  id = 1;

  constructor() {
    this.projects = [];
  }

  addProject(newProjectTitle) {
    if(this.projects.find(project => newProjectTitle === project.title)) return -1;
    let project = new Project(newProjectTitle);
    this.projects.push(project);

    return this.id++;
  }

  removeProject(projectName) {
    console.table(this.projects);
    this.projects = this.projects.filter(project => project.title !== projectName);
    console.table(this.projects);
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

  get projectsCount() {
    return this.projects.length;
  }

  get id() {
    return this.id;
  }
}

export default ProjectList;