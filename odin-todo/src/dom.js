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
    // Modal
    let addProjectBtn = document.getElementById("add-project-button");
    let dialog = document.getElementById("dialog");
    let closeSpan = document.getElementsByClassName("close")[0];
    let closeDialogBtn = document.querySelector(".dialog-close");
    //
    let form = document.getElementById("project-form");
    let formInput = document.getElementById("dialog-input");
    let allBtn = document.getElementById("all");
    let todayBtn = document.getElementById("today");
    let weekBtn = document.getElementById("week");
    let userProjects = document.querySelectorAll("#sidebar-projects > div");

    form.addEventListener("submit", (e) => {
      let targetId = document.getElementById("dialog-caller").value;
      
      if(form.classList.contains("add-project")) {
        this.addProject(formInput.value);
      }
      else if(form.classList.contains("edit-project")) {
        let sidebarEntryProject = document.getElementById(targetId);
        let oldProjectTitle = sidebarEntryProject.querySelector(".user-project-title").textContent;
        let newProjectTitle = formInput.value;
        this.editProject(oldProjectTitle, newProjectTitle, sidebarEntryProject);
      }
      else if(form.classList.contains("delete-project")) {
        let sidebarEntryProject = document.getElementById(targetId);
        this.removeProject(sidebarEntryProject);
      }
    });

    addProjectBtn.addEventListener("click", () => {
      this.showDialog(addProjectBtn);
    });
    closeSpan.addEventListener("click", () => dialog.close());
    closeDialogBtn.addEventListener("click", () => dialog.close());
    
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
  
  showDialog(target) {
    let dialog = document.getElementById("dialog");
    let formInput = document.getElementById("dialog-input");
    let form = document.getElementById("project-form");
    let title = document.getElementById("dialog-header-title");
    let submitBtn = document.getElementById("dialog-submit");
    let inputLabel = document.getElementById("input-text");
    
    document.getElementById("dialog-caller").value = target.parentNode.parentNode.id;
    form.classList = "";
    
    if(target.classList.contains("add-project-button")) {
      formInput.classList.remove("hide");
      title.textContent = "Add Project";
      submitBtn.textContent = "Add";
      inputLabel.textContent = "Title";

      form.classList.add("add-project");

      this.clearAddProjectInputField();
      dialog.showModal();
    }
    else if(target.classList.contains("edit-project-button")) {
      formInput.classList.remove("hide");

      title.textContent = "Edit Project";
      submitBtn.textContent = "Save";
      inputLabel.textContent = "Title";

      form.classList.add("edit-project");

      let projectName = target.parentNode.parentNode.textContent;
      formInput.value = projectName;

      dialog.showModal();
    }
    else if(target.classList.contains("delete-project-button")) {
      formInput.classList.add("hide");
      let projectName = target.parentNode.parentNode.textContent;
      formInput.value = projectName; //input is required, hack :)
      title.textContent = "Delete Project";
      submitBtn.textContent = "Delete";
      inputLabel.textContent = `You are about to delete the project ${projectName}!`;

      form.classList.add("delete-project");

      dialog.showModal();
    }
  }

  clearAddProjectInputField() {
    let formInput = document.getElementById("dialog-input");
    formInput.value = "";
  }

  addDefaultProjects() {
    this.addProject("Test1");
    this.addProject("Test2");
    this.addProject("Test3");
  }

  addProject(projectName) {
    let id = this.projects.addProject(projectName);

    if(id === -1) return;

    const userProjects = document.getElementById("sidebar-projects");
    const projectInput = document.createElement("div");
    projectInput.classList.add("sidebar-entry-project", "hover-element-fill");
    projectInput.setAttribute("id", id);

    const userProjectTitle = document.createElement("span");
    userProjectTitle.classList.add("user-project-title");
    userProjectTitle.textContent = projectName;
    projectInput.appendChild(userProjectTitle);

    const buttonBar = document.createElement("div");
    buttonBar.classList.add("right-aligned-buttonbar");
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-project-button", "scale-hover");
    editBtn.type = "button";
    buttonBar.appendChild(editBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-project-button", "scale-hover");
    deleteBtn.type = "button";
    buttonBar.appendChild(deleteBtn);
    projectInput.appendChild(buttonBar);

    editBtn.addEventListener("click", (e) => this.showDialog(e.target));
    deleteBtn.addEventListener("click", (e) => this.showDialog(e.target));
    projectInput.addEventListener("click", (e) => this.openProject(e.target));
    userProjectTitle.addEventListener("click", (e) => this.openProject(e.target));

    userProjects.appendChild(projectInput);

    this.updateProjectsCounter();
  }

  updateProjectsCounter() {
    const projectsCount = document.getElementById("projects-count");
    projectsCount.textContent = `Projects (${this.projects.projectsCount})`;
  }

  openProject(projectButton) {
    let userProjects = document.querySelectorAll("#sidebar-projects > div");
    let defaultProjects = document.querySelectorAll("#default-projects > button");
    
    userProjects.forEach(elem => elem.classList.remove("sidebar-entry-active"));
    defaultProjects.forEach(elem => elem.classList.remove("sidebar-entry-active"));

    let titleDom = document.getElementById("content-project-title");
    titleDom.textContent = projectButton.textContent;

    if(projectButton.classList.contains("sidebar-entry") ||
        projectButton.classList.contains("sidebar-entry-project")) {
          projectButton.classList.add("sidebar-entry-active");
    }
    
    //this.loadProjectContent(projectButton);
  }

  editProject(oldProjectTitle, newProjectTitle, sidebarEntryProject) {
    let projectTitle = sidebarEntryProject.querySelector(".user-project-title");
    if(!this.projects.editProject(oldProjectTitle, newProjectTitle)) return;
    projectTitle.textContent = newProjectTitle;
  }

  removeProject(sidebarEntryProject) {    
    let projectTitle = sidebarEntryProject.querySelector(".user-project-title").textContent;
    this.projects.removeProject(projectTitle);
    sidebarEntryProject.remove();

    this.updateProjectsCounter();
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