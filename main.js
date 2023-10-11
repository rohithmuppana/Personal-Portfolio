// menubar open and close
const menu = document.getElementById("menu");

function openmenu() {
  menu.style.display = "block";
}

function closemenu() {
  menu.style.display = "none";
}

menu.addEventListener("click", openmenu);
menu.addEventListener("click", closemenu);

// -----------------------popup and work data--------------------

const modalContainer = document.querySelector("#popupModal");

const projects = [
  {
    id: "first_project",
    name: "Weather",
    type: "Personal",
    image: "weather 360.JPEG",
    kind: "Front End",
    year: 2023,
    lang: "HTML",
    lang1: "CSS",
    lang2: "JavaScript",
    lang3: "Fetch API",
    description:
      "Weather 360 is an innovative and user-friendly website offering real-time weather updates globally. Leveraging OpenWeatherMap API, users can easily access precise weather data for any desired location. The intuitive user interface, coupled with a responsive design, ensures a seamless experience across various devices. It's a go-to tool for anyone keen on staying informed about the weather, whether for travel plans or local forecasts.",
  },
  {
    id: "second_project",
    name: "Cricket Score Prediction",
    type: "Internship",
    image: "score prediction.JPEG",
    kind: "Data Analysis using Machine Learning Models",
    year: 2023,
    lang: "Python",
    lang1: "Numpy",
    lang2: "Pandas",
    lang3: "Scikit-Learn",
    description:
      "I utilized Python's Request and BeautifulSoup libraries for web scraping, extracting essential data. Employing NumPy and Pandas, I performed in-depth analysis, handling statistical and mathematical challenges effectively. This involved selecting, training, and evaluating machine learning models, ultimately developing a predictive model for cricket league winners. Through meticulous assessment, I identified that the Random Forest algorithm consistently outperformed others, showcasing my proficiency in Python across various domains and tasks.",
  },
];

// ------------popup modal------------------

function popUpModal(project) {
  const modalContent = `
  <div class= "popup-container">
    <div class= "popup">
      <div>
        <i class="fa-solid fa-xmark" id="popupClose"></i>
        <h3>${project.name}</h3>
        <ul class="proj">
          <li><a href="#">${project.type}</a></li>
          <li><div class="dot"></div></li>
          <li>${project.kind}</li>
          <li><div class="dot"></div></li>
          <li>${project.year}</li>
        </ul>
      </div>
      <img src="./images/${project.image}" alt="Work-sample" class="popupImage"/>
      <div class="two-part">
        <div class="left-popup">
          <p class="pro mobile-popup-info">
            ${project.description}
          </p>
        </div>
        <div class="right-popup">
          <ul class="language">
            <li>${project.lang}</li>
            <li>${project.lang1}</li>
            <li>${project.lang2}</li>
            <li>${project.lang3}</li>
          </ul>
          
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  return modalContent;
}

// ----------------------work samples--------------------

function loadProjectCards(projects = []) {
  let projectContents = "";

  projects.forEach((project) => {
    projectContents += `
    <div class= "works" id= "portfolio">
    <img src="./images/${project.image}" alt="Work-sample" class="img-transition"/>
    <div class="card-work work">
      <h3>${project.name}</h3>
      <ul class="proj">
        <li><a href="#">${project.type}</a></li>
        <li><div class="dot"></div></li>
        <li>${project.kind}</li>
        <li><div class="dot"></div></li>
        <li>${project.year}</li>
      </ul>
      <p class="pro">
        ${project.description}
      </p>
      <ul class="language">
        <li>${project.lang}</li>
        <li>${project.lang1}</li>
        <li>${project.lang2}</li>
        <li>${project.lang3}</li>
      </ul>
    </div>
  </div>
    `;
  });

  return projectContents;
}

// -----------------------open and close popup-----------------------

function closePopUp() {
  modalContainer.style.display = "none";
}

function openPopUp(project) {
  const modalTemplate = popUpModal(project);
  modalContainer.innerHTML = modalTemplate;
  modalContainer.style.display = "block";

  const popUpCloseButton = document.querySelector("#popupClose");

  popUpCloseButton.addEventListener("click", closePopUp);
}

window.addEventListener("load", () => {
  const portfolioSection = document.querySelector("#work");
  modalContainer.style.display = "none";

  portfolioSection.innerHTML = loadProjectCards(projects);

  const proButtons = document.querySelectorAll("#see-project-button");

  Array.from(proButtons).forEach((element) => {
    element.addEventListener("click", () => {
      const projectID = element.getAttribute("project-id");
      const projectObj = projects.find((project) => project.id === projectID);

      openPopUp(projectObj);
    });
  });
});

// ---------------------form validation-------------------------

const email = document.getElementById("email");
const error = document.getElementById("error");
const form = document.getElementById("form");
const emailValidation = (input) => {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
};
form.addEventListener("submit", (event) => {
  error.innerHTML = "";
  if (emailValidation(email.value)) {
    error.innerHTML = "";
  } else {
    event.preventDefault();
    error.innerHTML = "Please add Email in lowercase!";
  }
});

// ------------------------local storage---------------

const localData = document.querySelectorAll(".form-input");
const localStoreData = {
  name: "",
  email: "",
  message: "",
};
localData.forEach((input) => {
  input.addEventListener("input", () => {
    localStoreData[input.name] = input.value;
    localStoreData[input.email] = input.value;
    localStoreData[input.message] = input.value;
    localStorage.setItem("information", JSON.stringify(localStoreData));
  });
});
const informationStored = JSON.parse(localStorage.getItem("information"));
if (informationStored) {
  localData.forEach((element) => {
    element.value = informationStored[element.name];
  });
}
