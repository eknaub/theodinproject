import { clearMain } from './main-page'

function buildMenu() {
  clearMain();
  const content = document.getElementById("main");

  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-main-wrapper");
  content.appendChild(menuWrapper);

  const menuTitle = buildMenuTitle();
  menuWrapper.appendChild(menuTitle);

  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-main-menu-items");
  menuWrapper.appendChild(menuItems);

  for(let i = 0; i < 20; i++) {
    const menuItem = buildMenuItem("Steak", "with baked potatoes and salad", "$20");
    menuItems.appendChild(menuItem);
  }
}

function buildMenuTitle() {
  const title = document.createElement("div");
  title.classList.add("menu-main-title");
  title.textContent = "Our Food Menu";
  return title;
}

function buildMenuItem(title, description, price) {
  const item = document.createElement("div");
  item.classList.add("menu-main-menu-item");
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("menu-main-menu-item-title");
  titleDiv.textContent = title;
  item.appendChild(titleDiv);
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("menu-main-menu-item-description");
  descriptionDiv.textContent = description;
  item.appendChild(descriptionDiv);
  const priceDiv = document.createElement("div");
  priceDiv.classList.add("menu-main-menu-item-price");
  priceDiv.textContent = price;
  item.appendChild(priceDiv);
  return item;
}

export default buildMenu;