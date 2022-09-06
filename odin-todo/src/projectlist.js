"use strict";

import Project from "./project";

class ProjectList {
  constructor() {
    this.projects = [];
  }

  addProject(newProject) {
    if(this.projects.find(project => newProject.title === project.title)) return;
    let project = new Project(newProject);
    this.projects.push(project);
  }

  get projectsCount() {
    return this.projects.length;
  }
}

export default ProjectList;