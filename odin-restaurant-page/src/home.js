import buildMenu from './menu';
import { clearMain, setActiveButton } from './main-page'

function buildHome() {
  clearMain();
  const content = document.getElementById("main");

  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add("home-main-wrapper");

  const desc = buildDescription();
  homeWrapper.appendChild(desc);

  const action = document.createElement("div");
  action.classList.add("home-main-call-to-action");
  const actionBtn = buildShowMenuButton();
  action.appendChild(actionBtn);
  homeWrapper.appendChild(action);

  content.appendChild(homeWrapper);
}

function buildDescription() {
  const desc = document.createElement("div");
  desc.classList.add("home-main-description");
  desc.textContent = "A Premium\n And Authentic\n Steakhouse";
  return desc;
}

function buildShowMenuButton() {
  const actionBtn = document.createElement("button");
  actionBtn.classList.add("home-main-call-to-action-button");
  actionBtn.textContent = "View Menu";
  actionBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains("active")) return;
    clearMain();
    const menuBtn = document.getElementById("menu");
    setActiveButton(menuBtn);
    buildMenu();
  });
  return actionBtn;
}

export default buildHome;