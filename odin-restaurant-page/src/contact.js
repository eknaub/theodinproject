import { clearMain } from './main-page'

function buildContact() {
  clearMain();
  const content = document.getElementById("main");

  const elem = document.createElement("div");

  content.appendChild(elem);
}

/*
<div class="contact-main-wrapper">
  <div class="contact-main-contact-wrapper">
    <div class="contact-main-contact">
      <div class="contact-main-contact-visit-us">
        Visit Us
      </div>
      <div class="contact-main-contact-address">
        219 Millbrook Road
        San Diego, CA 22434
      </div>
      <div class="contact-main-contact-hours">
        Monday - Tuesday: 11am – 6pm
        Friday - Sunday: 11am – 11pm
        Happy Hour: 2:30 p.m. – 4:30 p.m.
      </div>
      <div class="contact-main-contact-form-wrapper">
        <form action="">
          <legend>Message Us</legend>
          <input type="text" name="name" placeholder="Your name">
          <input type="email" name="email" placeholder="Your email">
          <input type="text" name="name" placeholder="Type your message ...">
          <button type="button" class="contact-main-contact-form-submit">Send</button>
        </form>
      </div>
    </div>
    <div class="contact-main-map">
      Placeholder Google Maps
    </div>
  </div>
</div>
*/
export default buildContact;