import { clearMain } from './main-page'

function buildContact() {
  clearMain();
  const content = document.getElementById("main");

  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("contact-main-wrapper");

  const title = buildTitle();
  contactWrapper.appendChild(title);

  const contactContactWrapper = document.createElement("div");
  contactContactWrapper.classList.add("contact-main-contact-wrapper");
  contactWrapper.appendChild(contactContactWrapper);

  const mainContact = document.createElement("div");
  mainContact.classList.add("contact-main-contact");
  contactContactWrapper.appendChild(mainContact);

  const visitUs = buildVisitAddressTitle();
  mainContact.appendChild(visitUs);

  const address1 = buildAddress("219 Millbrook Road\n San Diego, CA 22434");
  mainContact.appendChild(address1);

  const address2 = buildAddress("+123-456-7890\n restaurant@email.com");
  mainContact.appendChild(address2);

  const openingHours = buildOpeningHoursTitle();
  mainContact.appendChild(openingHours);

  const hours = document.createElement("div");
  hours.classList.add("contact-main-contact-hours");
  mainContact.appendChild(hours);

  const p1Wrap = buildOpeningHours("Monday - Tuesday:", "11:00AM – 6:00PM");
  hours.appendChild(p1Wrap);
  const p2Wrap = buildOpeningHours("Friday - Sunday:", "11:00AM – 11:00PM");
  hours.appendChild(p2Wrap);
  const p3Wrap = buildOpeningHours("Happy Hour:", "2:00PM – 4:00PM");
  hours.appendChild(p3Wrap);

  const formWrapper = document.createElement("div");
  formWrapper.classList.add("contact-main-contact-form-wrapper");
  const form = buildForm();
  formWrapper.appendChild(form);
  mainContact.appendChild(formWrapper);

  const map = buildMap();
  contactContactWrapper.appendChild(map);

  content.appendChild(contactWrapper);
}

function buildTitle() {
  const elem = document.createElement("p");
  elem.classList.add("contact-main-contact-title");
  elem.textContent = "Contact Us";
  return elem;
}

function buildVisitAddressTitle() {
  const elem = document.createElement("div");
  elem.classList.add("contact-main-contact-address-title");
  elem.textContent = "Address";
  return elem;
}

function buildAddress(str) {
  const elem = document.createElement("div");
  elem.classList.add("contact-main-contact-address");
  elem.textContent = str;
  return elem;
}

function buildOpeningHoursTitle() {
  const elem = document.createElement("div");
  elem.classList.add("contact-main-contact-opening-hours");
  elem.textContent = "Opening hours";
  return elem;
}

function buildOpeningHours(span, str) {
  const p1Wrap = document.createElement("p");
  p1Wrap.classList.add("contact-main-opening-hours-p");
  const openingHours1p = document.createElement("p");
  openingHours1p.classList.add("contact-main-opening-hours-p");
  const openingHours1Span = document.createElement("span");
  openingHours1Span.classList.add("wheat-colored");
  openingHours1Span.textContent = span;
  openingHours1p.textContent = str;
  p1Wrap.appendChild(openingHours1Span);
  p1Wrap.appendChild(openingHours1p);
  return p1Wrap;
}

function buildForm() {
  const form = document.createElement("form");
  const legend = document.createElement("legend");
  legend.textContent = "Send a message";
  form.appendChild(legend);
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.name = "name";
  inputName.placeholder = "Your name";  
  form.appendChild(inputName);
  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.name = "email";
  inputEmail.placeholder = "Your email";  
  form.appendChild(inputEmail);
  const inputMessage = document.createElement("input");
  inputMessage.type = "text";
  inputMessage.name = "message";
  inputMessage.placeholder = "Type your message ...";  
  form.appendChild(inputMessage);
  const submitButton = document.createElement("button");
  submitButton.classList.add("contact-main-contact-form-submit");
  submitButton.textContent = "Send";
  submitButton.type = "button";
  form.appendChild(submitButton);
  return form;
}

function buildMap() {
  const map = document.createElement("div");
  map.classList.add("contact-main-map");
  map.textContent = "Placeholder Google Maps";
  return map;
}

export default buildContact;