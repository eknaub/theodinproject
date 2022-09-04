import buildLandingPage from "./landing-page";
import { initMainPage } from "./main-page";

init();

function init() {
  buildLandingPage();

  const exploreBtn = document.getElementById("explore");
  exploreBtn.addEventListener('click', initMainPage);
}