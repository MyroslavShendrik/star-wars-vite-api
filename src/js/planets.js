import Handlebars from "handlebars";
import planetsTemplate from "../templates/planets.hbs?raw";

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

const planetsSection = document.querySelector(".sw-planets");

let planets = [];
let planetIdToDelete = null;
let planetIdToEdit = null;

async function getPlanets() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  planets = data.encyclopedia.planets;

  renderPlanets();
}

function renderPlanets() {
  const template = Handlebars.compile(planetsTemplate);

  planetsSection.innerHTML = template(planets);

  addListeners();
}

function addListeners() {
  document
    .querySelector(".create-planet-form")
    .addEventListener("submit", createPlanet);

  document
    .querySelector(".sw-planets__list")
    .addEventListener("click", handleButtons);
}

async function createPlanet(event) {
  event.preventDefault();

  const nameInput = document.querySelector(".planet-name");

  const name = nameInput.value.trim();

  if (!name) return;

  planets.push({
    id: Date.now(),
    name,
  });

  await savePlanets();

  event.target.reset();
}

function handleButtons(event) {
  const editBtn = event.target.closest(".edit-btn");
  const deleteBtn = event.target.closest(".delete-btn");

  if (editBtn) {
    planetIdToEdit = Number(editBtn.dataset.id);

    const planet = planets.find(
      ({ id }) => Number(id) === planetIdToEdit
    );

    const newName = prompt("Нова назва", planet.name);

    if (!newName) return;

    planet.name = newName;

    savePlanets();
  }

  if (deleteBtn) {
    planetIdToDelete = Number(deleteBtn.dataset.id);

    planets = planets.filter(
      ({ id }) => Number(id) !== planetIdToDelete
    );

    savePlanets();
  }
}

async function savePlanets() {
  await fetch(`${BaseURL}${EndPoint}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      encyclopedia: {
        planets,
      },
    }),
  });

  getPlanets();
}

getPlanets();