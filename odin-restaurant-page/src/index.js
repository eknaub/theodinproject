import buildLandingPage from "./landing-page";
import buildContact from "./contact";
import { initMainPage } from "./main-page";

init();

function init() {
  initMainPage();
  buildContact();
  //buildContact();
  /*
  buildLandingPage();

  const exploreBtn = document.getElementById("explore");
  exploreBtn.addEventListener('click', initMainPage);
  */
}