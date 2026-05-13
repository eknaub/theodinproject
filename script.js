let header = document.querySelector("header");
let sticky = header.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY > sticky) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const projects = [
  {
    category: "Foundations",
    projects: [
      {
        title: "Recipes",
        image: "./images/recipes.png",
        liveDemo: "./odin-recipes/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-recipes",
      },
      {
        title: "Landing Page",
        image: "./images/landingpage.png",
        liveDemo: "./odin-landing-page/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-landing-page",
      },
      {
        title: "Rock Paper Scissors",
        image: "./images/rockpaperscissors.png",
        liveDemo: "./odin-rock-paper-scissors/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-rock-paper-scissors",
      },
      {
        title: "Etch-a-sketch",
        image: "./images/etch-a-sketch.png",
        liveDemo: "./odin-etch-a-sketch/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-etch-a-sketch",
      },
      {
        title: "Calculator",
        image: "./images/calculator.png",
        liveDemo: "./odin-calculator/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-calculator",
      },
    ],
  },
  {
    category: "Intermediate HTML and CSS",
    projects: [
      {
        title: "Sign-up Form",
        image: "./images/signup-form.png",
        liveDemo: "./odin-signup-form/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-signup-form",
      },
      {
        title: "Admin Dashboard",
        image: "./images/admin-dashboard.png",
        liveDemo: "./odin-admin-dashboard/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-admin-dashboard",
      },
      {
        title: "Homepage",
        image: "./images/homepage.png",
        liveDemo: "./odin-homepage/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-homepage",
      },
    ],
  },
  {
    category: "JavaScript",
    projects: [
      {
        title: "Library",
        image: "./images/library.png",
        liveDemo: "./odin-library/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-library",
      },
      {
        title: "Tic Tac Toe",
        image: "./images/tic-tac-toe.png",
        liveDemo: "./odin-tic-tac-toe/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-tic-tac-toe",
      },
      {
        title: "Restaurant Page",
        image: "./images/restaurant-page.png",
        liveDemo: "./odin-restaurant-page/dist/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-restaurant-page",
      },
      {
        title: "Todo List",
        image: "./images/todo.png",
        liveDemo: "./odin-todo/dist/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-todo",
      },
      {
        title: "Weather App",
        image: "./images/weather-app.png",
        liveDemo: "./odin-weather-app/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-weather-app",
      },
    ],
  },
  {
    category: "React",
    projects: [
      {
        title: "CV Application",
        image: "./images/cv-application.png",
        liveDemo: "./odin-cv-application/build/index.html",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-cv-application",
      },
      {
        title: "Memory Game",
        image: "./images/memory-game.png",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-memory-game",
      },
      {
        title: "CV Application (State Management)",
        image: "./images/cv-application-state.png",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-cv-application-state",
      },
      {
        title: "Fake Store with API",
        image: "./images/fake-store.png",
        code: "https://github.com/eknaub/theodinproject/tree/master/odin-fake-store",
      },
    ],
  },
];

const projectsContainer = document.getElementById("projects-container");

for (let i = projects.length - 1; i >= 0; i--) {
  const category = projects[i];
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");

  const categoryTitle = document.createElement("p");
  categoryTitle.classList.add("title");
  categoryTitle.textContent = category.category;
  categoryDiv.appendChild(categoryTitle);

  const categoryContent = document.createElement("div");
  categoryContent.classList.add("category-content");

  category.projects.forEach((project) => {
    const projectDiv = document.createElement("div");

    const projectTitle = document.createElement("p");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = project.title;
    projectDiv.appendChild(projectTitle);

    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = `preview ${project.title.toLowerCase()} image`;
    projectDiv.appendChild(projectImage);

    const linksDiv = document.createElement("div");
    linksDiv.classList.add("links");

    if (project.liveDemo) {
      const liveDemoLink = document.createElement("a");
      liveDemoLink.href = project.liveDemo;
      liveDemoLink.textContent = "Live Demo";
      linksDiv.appendChild(liveDemoLink);
    }

    const codeLink = document.createElement("a");
    codeLink.href = project.code;
    codeLink.textContent = "Code";
    linksDiv.appendChild(codeLink);

    projectDiv.appendChild(linksDiv);
    categoryContent.appendChild(projectDiv);
  });

  categoryDiv.appendChild(categoryContent);
  projectsContainer.appendChild(categoryDiv);
}
