import buildHome from './home';
import buildMenu from './menu';
import buildContact from './contact';

function initMainPage() {
  hideLandingPage();
  buildMainPage();
  setActiveButton(document.querySelector("nav > #home"));
  buildHome();
}

function buildMainPage() {
  const content = document.getElementById("content");
  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content-wrapper");

  const header = createHeader();
  contentWrapper.appendChild(header);

  const nav = createNav();
  contentWrapper.appendChild(nav);

  const main = createMain();
  contentWrapper.appendChild(main);

  const footer = createFooter();
  contentWrapper.appendChild(footer);
  
  content.appendChild(contentWrapper);
}

function createHeader() {
  const elem = document.createElement("header");
  elem.textContent = "Restaurant";

  return elem;
}

function createNav() {
  const elem = document.createElement("nav");

  window.addEventListener('scroll', () => {
    console.log(elem.classList);
    if(window.scrollY > 0) {
      elem.classList.add('scrolled');
    }
    else {
      elem.classList.remove('scrolled');
    }
  });

  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("id", "home");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains("active")) return;
    setActiveButton(homeBtn);
    buildHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menu");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains("active")) return;
    setActiveButton(menuBtn);
    buildMenu();
  });

  const contactBtn = document.createElement("button");
  contactBtn.setAttribute("id", "contact");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains("active")) return;
    setActiveButton(contactBtn);
    buildContact();
  });

  elem.appendChild(homeBtn);
  elem.appendChild(menuBtn);
  elem.appendChild(contactBtn);

  return elem;
}

function setActiveButton(btn) {
  const btns = document.querySelectorAll("nav > button");
  
  btns.forEach((button) => {
    if(button !== this) {
      button.classList.remove("active");
    }
  });

  btn.classList.add("active");
}

function createMain() {
  const elem = document.createElement("div");
  elem.setAttribute("id", "main");

  return elem;
}

function clearMain() {
  const content = document.getElementById("main");
  content.innerHTML = "";
}

function createFooter() {
  const elem = document.createElement("footer");

  const footerWrapper = document.createElement("div");
  footerWrapper.classList.add("footer-wrapper");
  footerWrapper.textContent = "Made by Eduard";

  const link = document.createElement("a");
  link.classList.add("footer-link");
  link.href = "https://github.com/raqo0";

  footerWrapper.appendChild(link);

  elem.appendChild(footerWrapper);

  return elem;
}

function hideLandingPage() {
  const landingpage = document.getElementById("landing-page-wrapper");
  landingpage.classList.add("inactive");
}

export {
  clearMain,
  initMainPage,
  setActiveButton
};