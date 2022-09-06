"use strict";

import ProjectList from "./projectlist";

class Dom {

  constructor() {
    this.projects = new ProjectList();
  }

  initDom() {
    this.addDefaultProjects();
    this.loadProjects();
    this.initButtons();
    this.openProject(document.getElementById("all"));
  }

  initButtons() {
    // Add Project Modal
    let addProjectBtn = document.getElementById("add-project");
    let dialog = document.getElementById("addProjectDialog");
    let closeSpan = document.getElementsByClassName("close")[0];
    let closeDialogBtn = document.querySelector(".dialog-close");
    //
    let form = document.getElementById("addProjectForm");
    let formInput = document.getElementById("dialog-project-input");
    let allBtn = document.getElementById("all");
    let todayBtn = document.getElementById("today");
    let weekBtn = document.getElementById("week");
    let userProjects = document.querySelectorAll("#sidebar-projects > div");
    
    addProjectBtn.addEventListener("click", () => {
      dialog.showModal();
      this.clearAddProjectInputField();
    });
    closeSpan.addEventListener("click", () => dialog.close());
    closeDialogBtn.addEventListener("click", () => dialog.close());
    form.addEventListener("submit", () => {
      this.addProject(formInput.value);
    });

    allBtn.addEventListener("click", (e) => this.openProject(e.target));
    todayBtn.addEventListener("click", (e) => this.openProject(e.target));
    weekBtn.addEventListener("click", (e) => this.openProject(e.target));
    userProjects.forEach((elem) => {
      elem.addEventListener("click", (e) => this.openProject(e.target));
    })

    window.addEventListener("click", (e) => {
      if (e.target == dialog) {
        dialog.close();
      }
    });
  }

  clearAddProjectInputField() {
    let formInput = document.getElementById("dialog-project-input");
    formInput.value = "";
  }

  addDefaultProjects() {
    this.addProject("Test1");
    this.addProject("Test2");
    this.addProject("Test3");
  }

  addProject(projectName) {
    this.projects.addProject(projectName);

    const projectsCount = document.getElementById("projects-count");
    projectsCount.textContent = `Projects (${this.projects.projectsCount})`;

    const formInput = document.getElementById("dialog-project-input");
    const userProjects = document.getElementById("sidebar-projects");
    const projectInput = document.createElement("div");
    projectInput.classList.add("sidebar-entry-project", "hover-element-fill");
    projectInput.textContent = projectName;

    const buttonBar = document.createElement("div");
    buttonBar.classList.add("right-aligned-buttonbar");
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-project", "scale-hover");
    editBtn.type = "button";
    buttonBar.appendChild(editBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-project", "scale-hover");
    deleteBtn.type = "button";
    buttonBar.appendChild(deleteBtn);
    projectInput.appendChild(buttonBar);

    editBtn.addEventListener("click", (e) => this.editProject(e.target));
    deleteBtn.addEventListener("click", (e) => this.deleteProject(e.target));
    projectInput.addEventListener("click", (e) => this.openProject(e.target));

    userProjects.appendChild(projectInput);
  }

  openProject(projectButton) {
    if(projectButton.classList.contains("edit-project") || 
        projectButton.classList.contains("delete-project")) {
          return;
    }

    let userProjects = document.querySelectorAll("#sidebar-projects > div");
    let defaultProjects = document.querySelectorAll("#default-projects > button");
    
    userProjects.forEach(elem => elem.classList.remove("sidebar-entry-active"));
    defaultProjects.forEach(elem => elem.classList.remove("sidebar-entry-active"));

    let titleDom = document.getElementById("content-project-title");
    titleDom.textContent = projectButton.textContent;
    projectButton.classList.add("sidebar-entry-active");

    //this.loadProjectContent(projectButton);
  }

  editProject(projectButton) {
    let projectName = projectButton.parentNode.parentNode.textContent;
    console.log(`editProject ${projectName}`);
  }

  deleteProject(projectButton) {    
    let projectName = projectButton.parentNode.parentNode.textContent;
    console.log(`deleteProject ${projectName}`);
  }

  loadProjectContent(projectButton) {
    let projectName = projectButton.parentNode.parentNode.textContent;
    console.log(`load content ${projectName}`);
  }

  loadProjects() {
    //Load saved projects from storage
  }
}

export default Dom;