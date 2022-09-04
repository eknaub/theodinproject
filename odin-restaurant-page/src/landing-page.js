import './style.css';

function buildLandingPage() {
  const content = document.getElementById("content");

  const landingWrapperDiv = document.createElement("div");
  landingWrapperDiv.setAttribute("id", "landing-page-wrapper");

  const landingPageDiv = document.createElement("div");
  landingPageDiv.classList.add("landing-page");

  const shortDescription = document.createElement("div");
  shortDescription.classList.add("short-description");
  shortDescription.textContent = "Life changing steaks";
  landingPageDiv.appendChild(shortDescription);

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "restaurant";
  landingPageDiv.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
  landingPageDiv.appendChild(description);

  const explore = document.createElement("div");
  explore.setAttribute("id", "explore");
  const exploreBtn = document.createElement("button");
  exploreBtn.classList.add("explore-button");
  exploreBtn.classList.add("explore-button:hover");
  exploreBtn.textContent = "explore";
  explore.appendChild(exploreBtn);
  landingPageDiv.appendChild(explore);

  landingWrapperDiv.appendChild(landingPageDiv);
  
  content.appendChild(landingWrapperDiv);
}

export default buildLandingPage;

