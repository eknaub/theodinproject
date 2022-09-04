import { clearMain } from './main-page'

function buildMenu() {
  clearMain();
  const content = document.getElementById("main");

  const elem = document.createElement("div");
  elem.textContent = "buildMenu";
  content.appendChild(elem);
}

export default buildMenu;