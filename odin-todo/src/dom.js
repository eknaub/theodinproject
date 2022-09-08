"use strict";

import ProjectList from "./projectlist";

class Dom {
  selectedProjectId = "";
  selectedTaskId = "";

  constructor() {
    this.projects = new ProjectList();
  }

  initDom() {
    this.addDefaultProjects();
    this.loadProjects();
    this.initButtons();
    this.openProject(document.getElementById("1-Test1"));
  }

  initButtons() {
    // Modal
    let addProjectBtn = document.getElementById("add-project-button");
    let addTaskBtn = document.getElementById("add-task-button");
    let dialog = document.getElementById("dialog");
    let closeSpan = document.getElementsByClassName("close")[0];
    let closeDialogBtn = document.querySelector(".dialog-close");
    //
    let form = document.getElementById("project-form");
    let formInputProjectName = document.getElementById("dialog-input-project-name");
    let formInputTaskName = document.getElementById("dialog-input-task-name");
    let formInputTaskDesc = document.getElementById("dialog-input-description");
    let formInputTaskDueDate = document.getElementById("dialog-input-duedate");
    let allBtn = document.getElementById("all");
    let todayBtn = document.getElementById("today");
    let weekBtn = document.getElementById("week");
   
    form.addEventListener("submit", () => {
      if(form.classList.contains("add-project")) {
        if(formInputProjectName.value === "") return;
        const projectName = formInputProjectName.value;
        const pr = this.projects.addProject(projectName);
        if(pr.id === undefined) return;
        this.addProject(pr);
      }
      else if(form.classList.contains("edit-project")) {
        const sidebarEntryProject = document.getElementById(this.selectedProjectId);
        const oldProjectTitle = sidebarEntryProject.querySelector(".user-project-title").textContent;
        const newProjectTitle = formInputProjectName.value;
        if(!this.projects.editProject(oldProjectTitle, newProjectTitle)) return;
        this.editProject(newProjectTitle, sidebarEntryProject);
      }
      else if(form.classList.contains("remove-project")) {
        const sidebarEntryProject = document.getElementById(this.selectedProjectId);
        const projectTitle = sidebarEntryProject.textContent;
        this.projects.removeProject(projectTitle);
        this.removeProject(sidebarEntryProject);
        this.openProject(document.getElementById("all"));
      }
      else if(form.classList.contains("add-task")) {
        if(formInputTaskName.value === "") return;
        const projectName = document.getElementById(this.selectedProjectId).textContent;
        const taskName = formInputTaskName.value;
        const taskDesc = formInputTaskDesc.value; 
        const taskDueDate = formInputTaskDueDate.value;
        const task = this.projects.addTaskToProject(projectName, taskName, taskDesc, taskDueDate);
        this.addTask(task);
      }
      else if(form.classList.contains("edit-task")) {
        const task = document.getElementById(this.selectedTaskId);
        const idList = task.id.split("-");
        const id = Number(idList[0]);
        const projectName = idList[1];
        const taskName = formInputTaskName.value;
        const taskDesc = formInputTaskDesc.value; 
        const taskDueDate = formInputTaskDueDate.value;
        const editedTask = this.projects.editTaskForProjectById(projectName, id, taskName, taskDesc, taskDueDate);
        this.editTask(editedTask, task);
      }
      else if(form.classList.contains("remove-task")) {
        const task = document.getElementById(this.selectedTaskId);
        const idList = task.id.split("-");
        const id = Number(idList[0]);
        const projectName = idList[1];
        this.projects.removeTaskForProjectById(projectName, id);
        this.removeTask(task);
      }
    });

    addProjectBtn.addEventListener("click", () => {
      this.showDialog(addProjectBtn);
    });
    addTaskBtn.addEventListener("click", () => {
      this.showDialog(addTaskBtn);
    });
    closeSpan.addEventListener("click", () => dialog.close());
    closeDialogBtn.addEventListener("click", () => dialog.close());
    
    allBtn.addEventListener("click", (e) => this.openProject(e.target));
    todayBtn.addEventListener("click", (e) => this.openProject(e.target));
    weekBtn.addEventListener("click", (e) => this.openProject(e.target));
    
    window.addEventListener("click", (e) => {
      if (e.target == dialog) {
        dialog.close();
      }
    });
  }
  
  showDialog(target) {
    let dialog = document.getElementById("dialog");
    let formInputProjectName = document.getElementById("dialog-input-project-name");
    let formInputTaskName = document.getElementById("dialog-input-task-name");
    let formInputTaskDesc = document.getElementById("dialog-input-description");
    let formInputTaskDueDate = document.getElementById("dialog-input-duedate");
    let form = document.getElementById("project-form");
    let title = document.getElementById("dialog-header-title");
    let submitBtn = document.getElementById("dialog-submit");
    let description = document.querySelector(".dialog-description");
    let addProjectContent = document.querySelector(".dialog-add-project-content");
    let addTaskContent = document.querySelector(".dialog-add-task-content");
    
    form.classList = "";
    addProjectContent.classList.add("hide");
    addTaskContent.classList.add("hide");
    description.classList.add("hide");

    if(target.classList.contains("add-project-button")) {
      addProjectContent.classList.remove("hide");
      title.textContent = "Add Project";
      submitBtn.textContent = "Add";

      form.classList.add("add-project");

      this.clearDialogInputField();
      dialog.showModal();
    }
    else if(target.classList.contains("edit-project-button")) {
      addProjectContent.classList.remove("hide");
      title.textContent = "Edit Project";
      submitBtn.textContent = "Save";

      form.classList.add("edit-project");

      let projectName = target.parentNode.parentNode.textContent;
      formInputProjectName.value = projectName;

      dialog.showModal();
    }
    else if(target.classList.contains("remove-project-button")) {
      description.classList.remove("hide");
      let projectName = target.parentNode.parentNode.textContent;
      title.textContent = "Remove Project";
      submitBtn.textContent = "Remove";
      description.textContent = `You are about to remove the project ${projectName}!`;

      form.classList.add("remove-project");

      dialog.showModal();
    }
    else if(target.classList.contains("add-task-button")) {
      addTaskContent.classList.remove("hide");
      title.textContent = "Add Task";
      submitBtn.textContent = "Add";

      form.classList.add("add-task");

      this.clearDialogInputField();
      dialog.showModal();
    }
    else if(target.classList.contains("edit-task-button")) {
      addTaskContent.classList.remove("hide");
      title.textContent = "Edit Task";
      submitBtn.textContent = "Save";

      form.classList.add("edit-task");

      const task = document.getElementById(this.selectedTaskId);
      const idList = task.id.split("-");
      const id = Number(idList[0]);
      const projectName = idList[1];
      const selectedTask = this.projects.getTaskForProjectById(projectName, id);

      formInputTaskName.value = selectedTask.title;
      formInputTaskDesc.value = selectedTask.description;
      formInputTaskDueDate.value = selectedTask.dueDate;

      dialog.showModal();
    }
    else if(target.classList.contains("remove-task-button")) {
      description.classList.remove("hide");
      let projectName = target.parentNode.parentNode.textContent;
      title.textContent = "Remove Task";
      submitBtn.textContent = "Remove";
      description.textContent = `You are about to remove the task ${projectName}!`;

      form.classList.add("remove-task");

      dialog.showModal();
    }
  }

  clearDialogInputField() {
    let formInputProjectName = document.getElementById("dialog-input-project-name");
    formInputProjectName.value = "";
    let formInputTaskName = document.getElementById("dialog-input-task-name");
    formInputTaskName.value = "";
    let formInputTaskDesc = document.getElementById("dialog-input-description");
    formInputTaskDesc.value = "";
    let formInputTaskDueDate = document.getElementById("dialog-input-duedate");
    formInputTaskDueDate.value = "";
  }

  addDefaultProjects() {
    const pr1 = this.projects.addProject("Test1");
    this.addProject(pr1);
    const pr2 = this.projects.addProject("Test2");
    this.addProject(pr2);
    const pr3 = this.projects.addProject("Test3");
    this.addProject(pr3);
  }

  addProject(project) {
    const userProjects = document.getElementById("sidebar-projects");
    const projectInput = document.createElement("div");
    const id = `${project.id}-${project.title}`;

    projectInput.classList.add("sidebar-entry-project", "hover-element-fill");
    projectInput.setAttribute("id", id);

    const userProjectTitle = document.createElement("span");
    userProjectTitle.classList.add("user-project-title");
    userProjectTitle.textContent = project.title;
    projectInput.appendChild(userProjectTitle);

    const buttonBar = document.createElement("div");
    buttonBar.classList.add("right-aligned-buttonbar");
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-project-button", "scale-hover");
    editBtn.type = "button";
    buttonBar.appendChild(editBtn);
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-project-button", "scale-hover");
    removeBtn.type = "button";
    buttonBar.appendChild(removeBtn);
    projectInput.appendChild(buttonBar);

    projectInput.addEventListener("click", (e) => {
      this.openProject(e.target);
    });
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.openProject(e.target.parentNode.parentNode);
      this.showDialog(e.target);
    });
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.openProject(e.target.parentNode.parentNode);
      this.showDialog(e.target);
    });
    userProjectTitle.addEventListener("click", (e) => {
      e.stopPropagation();
      this.openProject(e.target.parentNode);
    });

    userProjects.appendChild(projectInput);

    this.updateProjectsCounter();
  }

  updateProjectsCounter() {
    const projectsCount = document.getElementById("projects-count");
    projectsCount.textContent = `Projects (${this.projects.projectsCount})`;
  }

  updateTaskCounter() {
    const projectsCount = document.getElementById("tasks-count");
    const projectName = document.getElementById(this.selectedProjectId).textContent;
    const count = this.projects.getTaskCountForProject(projectName);
    projectsCount.textContent = `Tasks (${count})`;
  }

  openProject(projectButton) {
    this.selectedProjectId = projectButton.id;
    const userProjects = document.querySelectorAll("#sidebar-projects > div");
    const defaultProjects = document.querySelectorAll("#default-projects > button");
    
    userProjects.forEach(elem => elem.classList.remove("sidebar-entry-active"));
    defaultProjects.forEach(elem => elem.classList.remove("sidebar-entry-active"));

    const titleDom = document.getElementById("content-project-title");
    titleDom.textContent = projectButton.textContent;

    const addTask = document.getElementById("add-task-button");
    
    if(this.selectedProjectId === 'all' ||
        this.selectedProjectId === 'today' ||
        this.selectedProjectId === 'week') {
          addTask.classList.add("hide");
    }
    else {
      addTask.classList.remove("hide");
    }
    
    if(projectButton.classList.contains("sidebar-entry") ||
        projectButton.classList.contains("sidebar-entry-project")) {
          projectButton.classList.add("sidebar-entry-active");
    }
    
    this.loadProjectContent(projectButton);
  }

  editProject(newProjectTitle, sidebarEntryProject) {
    let projectTitle = sidebarEntryProject.querySelector(".user-project-title");
    projectTitle.textContent = newProjectTitle;
  }

  removeProject(sidebarEntryProject) {    
    sidebarEntryProject.remove();
    this.updateProjectsCounter();
  }

  addTask(task) {
    let projectName = document.getElementById(this.selectedProjectId).textContent;
    let projectTasks = document.getElementById("content-tasks");
    let id = `${task.id}-${projectName}-${task.title}`

    let taskWrapper = document.createElement("div");
    taskWrapper.classList.add("content-task");
    taskWrapper.setAttribute("id", id);

    let leftSide = document.createElement("div");
    leftSide.classList.add("content-task-left");
    let completionCheckbox = document.createElement("input");
    completionCheckbox.type = "checkbox";
    completionCheckbox.setAttribute("id", "task-completion-checkbox");
    completionCheckbox.classList.add("input-field");
    completionCheckbox.name = "task-completion";
    completionCheckbox.checked = task.completed;
    let taskTitle = document.createElement("p");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = task.title;
    let taskDesc = document.createElement("p");
    taskDesc.classList.add("task-description");
    taskDesc.textContent = task.description;
    leftSide.appendChild(completionCheckbox);
    leftSide.appendChild(taskTitle);
    leftSide.appendChild(taskDesc);

    let rightSide = document.createElement("div");
    rightSide.classList.add("content-task-right");
    let dueDate = document.createElement("p");
    dueDate.classList.add("task-duedate");
    dueDate.textContent = task.dueDate;
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-task-button", "scale-hover");
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-task-button", "scale-hover");
    rightSide.appendChild(dueDate);
    rightSide.appendChild(editBtn);
    rightSide.appendChild(removeBtn);

    completionCheckbox.addEventListener("change", (e) => {
      e.stopPropagation();
      this.changeTaskCompletion(e.target.checked);
    })
    completionCheckbox.addEventListener("click", (e) => {
      e.stopPropagation();
    })
    taskWrapper.addEventListener("click", (e) => {
      this.changeTaskCompletionDivPressed(e.target);
    });
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.selectedTaskId = id;
      this.showDialog(e.target);
    });
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.selectedTaskId = id;
      this.showDialog(e.target);
    });

    taskWrapper.appendChild(leftSide);
    taskWrapper.appendChild(rightSide);

    projectTasks.appendChild(taskWrapper);
  
    this.updateTaskCounter();
  }

  changeTaskCompletionDivPressed(task) {
    const checkbox = task.querySelector("#task-completion-checkbox");
    const currentState = checkbox.checked;
    checkbox.checked = !currentState;
    this.changeTaskCompletion(checkbox.checked);
  }

  changeTaskCompletion(state) {
    //TODO
    //1. in projectlist state ändern
    //2. Task name und desc crossen
    //3. background auf .task-done klasse
  }

  editTask(editedTask, task) {
    let taskTitle = task.querySelector(".task-title");
    taskTitle.textContent = editedTask.title;
    let taskDesc = task.querySelector(".task-description");
    taskDesc.textContent = editedTask.description;
    let taskDueDate = task.querySelector(".task-duedate");
    taskDueDate.textContent = editedTask.dueDate;
  }

  removeTask(taskDom) {
    taskDom.remove();
    this.updateTaskCounter();
  }

  loadProjectContent(projectButton) {
    this.clearTasks();
    if(projectButton.id === "all") {
      //TODO
      //Projectlist neue Methode wo alle Tasks holt
      //Dann mit Task einfach reinscheppern
      console.log("all");
    }
    else if(projectButton.id === "today") {
      //TODO
      //DueDate fixen (vlt)
      console.log("today");
    }
    else if(projectButton.id === "week") {
      console.log("week");
      //TODO
      //DueDate fixen (vlt)
    }
    else {
      let projectName = projectButton.textContent;
      let tasks = this.projects.getTasksForProject(projectName);
      tasks.forEach(elem => {
        this.addTask(elem);
      })
    }
  }

  clearTasks() {
    let projectTasks = document.getElementById("content-tasks");
    projectTasks.innerHTML = "";
    const projectsCount = document.getElementById("tasks-count");
    projectsCount.textContent = `Tasks (0)`;
  }

  loadProjects() {
    //TODO
    //1. localStorage
    //2. Alle Projekte inkl. Tasks laden
  }
}

export default Dom;