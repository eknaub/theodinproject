import ProjectList from './projectlist';

class Dom {
  selectedProjectId = '';

  selectedTaskId = '';

  constructor() {
    this.projects = new ProjectList();
  }

  initDom() {
    this.addDefaultProjects();
    this.initButtons();
    this.openProject(document.getElementById('1-Test1'));
  }

  initButtons() {
    // Modal
    const addProjectBtn = document.getElementById('add-project-button');
    const addTaskBtn = document.getElementById('add-task-button');
    const dialog = document.getElementById('dialog');
    const closeSpan = document.getElementsByClassName('close')[0];
    const closeDialogBtn = document.querySelector('.dialog-close');
    //
    const form = document.getElementById('project-form');
    const formInputProjectName = document.getElementById('dialog-input-project-name');
    const formInputTaskName = document.getElementById('dialog-input-task-name');
    const formInputTaskDesc = document.getElementById('dialog-input-description');

    form.addEventListener('submit', () => {
      if (form.classList.contains('add-project')) {
        if (formInputProjectName.value === '') return;
        const projectName = formInputProjectName.value;
        const pr = this.projects.addProject(projectName);
        if (pr.id === undefined) return;
        this.addProject(pr);
      } else if (form.classList.contains('edit-project')) {
        const sidebarEntryProject = this.getCurrentSelectedProjectDomElement();
        const oldProjectTitle = sidebarEntryProject.querySelector('.user-project-title').textContent;
        const newProjectTitle = formInputProjectName.value;
        if (!this.projects.editProject(oldProjectTitle, newProjectTitle)) return;
        this.editProject(newProjectTitle, sidebarEntryProject);
      } else if (form.classList.contains('remove-project')) {
        const sidebarEntryProject = this.getCurrentSelectedProjectDomElement();
        const projectTitle = sidebarEntryProject.textContent;
        this.projects.removeProject(projectTitle);
        this.removeProject(sidebarEntryProject);
        this.resetContent();
      } else if (form.classList.contains('add-task')) {
        if (formInputTaskName.value === '') return;
        const projectName = this.getCurrentSelectedProjectName();
        const taskName = formInputTaskName.value;
        const taskDesc = formInputTaskDesc.value;
        const task = this.projects.addTaskToProject(projectName, taskName, taskDesc);
        this.addTask(task);
      } else if (form.classList.contains('edit-task')) {
        const task = this.getCurrentSelectedTaskDomElement();
        const id = this.getCurrentSelectedTaskId();
        const projectName = this.getCurrentSelectedTaskProjectName();
        const taskName = formInputTaskName.value;
        const taskDesc = formInputTaskDesc.value;
        // eslint-disable-next-line max-len
        const editedTask = this.projects.editTaskForProjectById(projectName, id, taskName, taskDesc);
        this.editTask(editedTask, task);
      } else if (form.classList.contains('remove-task')) {
        const task = this.getCurrentSelectedTaskDomElement();
        const id = this.getCurrentSelectedTaskId();
        const projectName = this.getCurrentSelectedTaskProjectName();
        this.projects.removeTaskForProjectById(projectName, id);
        this.removeTask(task);
      }
    });

    addProjectBtn.addEventListener('click', () => {
      this.showDialog(addProjectBtn);
    });
    addTaskBtn.addEventListener('click', () => {
      this.showDialog(addTaskBtn);
    });
    closeSpan.addEventListener('click', () => dialog.close());
    closeDialogBtn.addEventListener('click', () => dialog.close());

    window.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  }

  showDialog(target) {
    const dialog = document.getElementById('dialog');
    const formInputProjectName = document.getElementById('dialog-input-project-name');
    const formInputTaskName = document.getElementById('dialog-input-task-name');
    const formInputTaskDesc = document.getElementById('dialog-input-description');
    const form = document.getElementById('project-form');
    const title = document.getElementById('dialog-header-title');
    const submitBtn = document.getElementById('dialog-submit');
    const description = document.querySelector('.dialog-description');
    const addProjectContent = document.querySelector('.dialog-add-project-content');
    const addTaskContent = document.querySelector('.dialog-add-task-content');

    form.classList = '';
    addProjectContent.classList.add('hide');
    addTaskContent.classList.add('hide');
    description.classList.add('hide');

    if (target.classList.contains('add-project-button')) {
      addProjectContent.classList.remove('hide');
      title.textContent = 'Add Project';
      submitBtn.textContent = 'Add';

      form.classList.add('add-project');

      this.clearDialogInputField();
      dialog.showModal();
    } else if (target.classList.contains('edit-project-button')) {
      addProjectContent.classList.remove('hide');
      title.textContent = 'Edit Project';
      submitBtn.textContent = 'Save';

      form.classList.add('edit-project');

      const projectName = target.parentNode.parentNode.textContent;
      formInputProjectName.value = projectName;

      dialog.showModal();
    } else if (target.classList.contains('remove-project-button')) {
      description.classList.remove('hide');
      const projectName = target.parentNode.parentNode.textContent;
      title.textContent = 'Remove Project';
      submitBtn.textContent = 'Remove';
      description.textContent = `You are about to remove the project ${projectName}!`;

      form.classList.add('remove-project');

      dialog.showModal();
    } else if (target.classList.contains('add-task-button')) {
      addTaskContent.classList.remove('hide');
      title.textContent = 'Add Task';
      submitBtn.textContent = 'Add';

      form.classList.add('add-task');

      this.clearDialogInputField();
      dialog.showModal();
    } else if (target.classList.contains('edit-task-button')) {
      addTaskContent.classList.remove('hide');
      title.textContent = 'Edit Task';
      submitBtn.textContent = 'Save';

      form.classList.add('edit-task');

      const id = this.getCurrentSelectedTaskId();
      const projectName = this.getCurrentSelectedProjectName();
      const selectedTask = this.projects.getTaskForProjectById(projectName, id);

      formInputTaskName.value = selectedTask.title;
      formInputTaskDesc.value = selectedTask.description;

      dialog.showModal();
    } else if (target.classList.contains('remove-task-button')) {
      description.classList.remove('hide');
      const projectName = target.parentNode.parentNode.textContent;
      title.textContent = 'Remove Task';
      submitBtn.textContent = 'Remove';
      description.textContent = `You are about to remove the task ${projectName}!`;

      form.classList.add('remove-task');

      dialog.showModal();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  clearDialogInputField() {
    const formInputProjectName = document.getElementById('dialog-input-project-name');
    formInputProjectName.value = '';
    const formInputTaskName = document.getElementById('dialog-input-task-name');
    formInputTaskName.value = '';
    const formInputTaskDesc = document.getElementById('dialog-input-description');
    formInputTaskDesc.value = '';
  }

  addDefaultProjects() {
    const pr1 = this.projects.addProject('Test1');
    this.addProject(pr1);
    const pr2 = this.projects.addProject('Test2');
    this.addProject(pr2);
    const pr3 = this.projects.addProject('Test3');
    this.addProject(pr3);
  }

  addProject(project) {
    const userProjects = document.getElementById('sidebar-projects');
    const projectInput = document.createElement('div');
    const id = `${project.id}-${project.title}`;

    projectInput.classList.add('sidebar-entry-project', 'hover-element-fill');
    projectInput.setAttribute('id', id);

    const userProjectTitle = document.createElement('span');
    userProjectTitle.classList.add('user-project-title');
    userProjectTitle.textContent = project.title;
    projectInput.appendChild(userProjectTitle);

    const buttonBar = document.createElement('div');
    buttonBar.classList.add('right-aligned-buttonbar');
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-project-button', 'scale-hover');
    editBtn.type = 'button';
    buttonBar.appendChild(editBtn);
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-project-button', 'scale-hover');
    removeBtn.type = 'button';
    buttonBar.appendChild(removeBtn);
    projectInput.appendChild(buttonBar);

    buttonBar.addEventListener('click', (e) => e.stopPropagation());
    projectInput.addEventListener('click', (e) => {
      this.openProject(e.target);
    });
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openProject(e.target.parentNode.parentNode);
      this.showDialog(e.target);
    });
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openProject(e.target.parentNode.parentNode);
      this.showDialog(e.target);
    });
    userProjectTitle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openProject(e.target.parentNode);
    });

    userProjects.appendChild(projectInput);

    this.updateProjectsCounter();
  }

  updateProjectsCounter() {
    const projectsCount = document.getElementById('projects-count');
    projectsCount.textContent = `Projects (${this.projects.projectsCount})`;
  }

  updateTaskCounter() {
    const projectsCount = document.getElementById('tasks-count');
    const projectName = this.getCurrentSelectedProjectName();
    const count = this.projects.getTaskCountForProject(projectName);
    projectsCount.textContent = `Tasks (${count})`;
  }

  openProject(projectButton) {
    this.selectedProjectId = projectButton.id;

    const userProjects = document.querySelectorAll('#sidebar-projects > div');
    userProjects.forEach((elem) => elem.classList.remove('sidebar-entry-active'));

    const titleDom = document.getElementById('content-project-title');
    titleDom.textContent = projectButton.textContent;

    if (projectButton.classList.contains('sidebar-entry-project')) {
      projectButton.classList.add('sidebar-entry-active');
    }

    this.loadProjectContent(projectButton);
  }

  // eslint-disable-next-line class-methods-use-this
  editProject(newProjectTitle, sidebarEntryProject) {
    const projectTitle = sidebarEntryProject.querySelector('.user-project-title');
    projectTitle.textContent = newProjectTitle;
  }

  removeProject(sidebarEntryProject) {
    sidebarEntryProject.remove();
    this.updateProjectsCounter();
  }

  addTask(task) {
    const projectName = this.getCurrentSelectedProjectName();
    const projectTasks = document.getElementById('content-tasks');
    const id = `${task.id}-${projectName}-${task.title}`;

    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('content-task');
    taskWrapper.setAttribute('id', id);

    if (task.completed) {
      taskWrapper.classList.add('task-done');
    } else {
      taskWrapper.classList.remove('task-done');
    }

    const leftSide = document.createElement('div');
    leftSide.classList.add('content-task-left');
    const completionCheckbox = document.createElement('input');
    completionCheckbox.type = 'checkbox';
    completionCheckbox.setAttribute('id', 'task-completion-checkbox');
    completionCheckbox.classList.add('input-field');
    completionCheckbox.name = 'task-completion';
    completionCheckbox.checked = task.completed;
    const taskTitle = document.createElement('p');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = task.title;
    const taskDesc = document.createElement('p');
    taskDesc.classList.add('task-description');
    taskDesc.textContent = task.description;
    leftSide.appendChild(completionCheckbox);
    leftSide.appendChild(taskTitle);
    leftSide.appendChild(taskDesc);

    const rightSide = document.createElement('div');
    rightSide.classList.add('content-task-right');
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-task-button', 'scale-hover');
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-task-button', 'scale-hover');
    rightSide.appendChild(editBtn);
    rightSide.appendChild(removeBtn);

    taskTitle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.selectedTaskId = id;
      this.changeTaskCompletionDivPressed(e.target.parentNode);
    });
    taskDesc.addEventListener('click', (e) => {
      e.stopPropagation();
      this.selectedTaskId = id;
      this.changeTaskCompletionDivPressed(e.target.parentNode);
    });
    completionCheckbox.addEventListener('change', (e) => {
      e.stopPropagation();
      this.selectedTaskId = id;
      this.changeTaskCompletion(e.target.checked);
    });
    completionCheckbox.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    taskWrapper.addEventListener('click', (e) => {
      this.selectedTaskId = id;
      this.changeTaskCompletionDivPressed(e.target);
    });
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.selectedTaskId = id;
      this.showDialog(e.target);
    });
    removeBtn.addEventListener('click', (e) => {
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
    const checkbox = task.querySelector('#task-completion-checkbox');
    const currentState = checkbox.checked;
    checkbox.checked = !currentState;
    this.changeTaskCompletion(checkbox.checked);
  }

  changeTaskCompletion(completionState) {
    const task = this.getCurrentSelectedTaskDomElement();
    const id = this.getCurrentSelectedTaskId();
    const projectName = this.getCurrentSelectedTaskProjectName();

    this.projects.changeCompletionStateForTaskById(projectName, id, completionState);

    if (completionState) {
      task.classList.add('task-done');
    } else {
      task.classList.remove('task-done');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  editTask(editedTask, task) {
    const taskTitle = task.querySelector('.task-title');
    taskTitle.textContent = editedTask.title;
    const taskDesc = task.querySelector('.task-description');
    taskDesc.textContent = editedTask.description;
  }

  removeTask(taskDom) {
    taskDom.remove();
    this.updateTaskCounter();
  }

  loadProjectContent(projectButton) {
    this.clearTasks();

    const projectName = projectButton.textContent;
    const tasks = this.projects.getTasksForProject(projectName);
    tasks.forEach((elem) => {
      this.addTask(elem);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  clearTasks() {
    const projectTasks = document.getElementById('content-tasks');
    projectTasks.innerHTML = '';
    const projectsCount = document.getElementById('tasks-count');
    projectsCount.textContent = 'Tasks (0)';
  }

  // eslint-disable-next-line class-methods-use-this
  resetContent() {
    const projectTitle = document.getElementById('content-project-title');
    projectTitle.textContent = 'Nothing selected :(';
    const projectTasks = document.getElementById('content-tasks');
    projectTasks.innerHTML = '';
    const projectsCount = document.getElementById('tasks-count');
    projectsCount.textContent = 'Tasks (0)';
  }

  getCurrentSelectedProjectName() {
    return document.getElementById(this.selectedProjectId).textContent;
  }

  getCurrentSelectedProjectDomElement() {
    return document.getElementById(this.selectedProjectId);
  }

  getCurrentSelectedTaskDomElement() {
    return document.getElementById(this.selectedTaskId);
  }

  getCurrentSelectedTaskId() {
    const task = this.getCurrentSelectedTaskDomElement();
    const idList = task.id.split('-');
    return Number(idList[0]);
  }

  getCurrentSelectedTaskProjectName() {
    const task = this.getCurrentSelectedTaskDomElement();
    const idList = task.id.split('-');
    return idList[1];
  }
}

export default Dom;
