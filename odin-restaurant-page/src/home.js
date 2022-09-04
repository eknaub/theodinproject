import buildMenu from './menu';
import { clearMain, setActiveButton } from './main-page'

function buildHome() {
  clearMain();
  const content = document.getElementById("main");

  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add("home-main-wrapper");

  const desc = document.createElement("div");
  desc.classList.add("home-main-description");
  desc.textContent = "A Premium\n And Authentic\n Steakhouse";

  const action = document.createElement("div");
  action.classList.add("home-main-call-to-action");
  const actionBtn = document.createElement("button");
  actionBtn.classList.add("home-main-call-to-action-button");
  actionBtn.textContent = "View Menu";
  actionBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains("active")) return;
    clearMain();
    const menuBtn = document.getElementById("menu");
    setActiveButton(menuBtn);
    buildMenu();
  })
  action.appendChild(actionBtn);
  
  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("home-main-contact-wrapper");

  const visitUs = document.createElement("p");
  visitUs.classList.add("home-main-contact-visit-us");
  visitUs.textContent = "Visit Us";
  contactWrapper.appendChild(visitUs);

  const contact = document.createElement("div");
  contact.classList.add("home-main-contact");
  contactWrapper.appendChild(contact);

  const address = document.createElement("div");
  address.classList.add("home-main-contact-address");
  address.textContent = "219 Millbrook Road\n San Diego, CA 22434";
  contact.appendChild(address);


  const hours = document.createElement("div");
  hours.classList.add("home-main-contact-hours");
  hours.textContent = "Monday - Tuesday: 11am – 6pm\n Friday - Sunday: 11am – 11pm\n Happy Hour: 2pm – 4pm";
  contact.appendChild(hours);

  homeWrapper.appendChild(desc);
  homeWrapper.appendChild(action);
  homeWrapper.appendChild(contactWrapper);

  content.appendChild(homeWrapper);
}

export default buildHome;