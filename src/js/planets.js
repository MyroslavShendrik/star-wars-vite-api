import Handlebars from "handlebars";
import planetsTemplate from "../templates/planets.hbs?raw";

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

const planetsSection = document.querySelector(".sw-planets");

let encyclopedia = {};
let planets = [];

let planetIdToDelete = null;
let planetIdToEdit = null;

// ================= ПОЛУЧЕНИЕ ПЛАНЕТ =================

async function getPlanets() {
  try {
    const response = await fetch(`${BaseURL}${EndPoint}`);
    const data = await response.json();

    encyclopedia = data.encyclopedia;
    planets = encyclopedia.planets;

    renderPlanets();
  } catch (error) {
    console.log(error);
  }
}

// ================= ОТРИСОВКА =================

function renderPlanets() {
  const template = Handlebars.compile(planetsTemplate);

  planetsSection.innerHTML = template(planets);

  addListeners();
  addPlanetModalListeners();
}

// ================= LISTENERS =================

function addListeners() {
  document
    .querySelector(".create-planet-form")
    .addEventListener("submit", createPlanet);

  document
    .querySelector(".sw-planets__list")
    .addEventListener("click", handleButtons);
}

// ================= СОЗДАНИЕ =================

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

// ================= КНОПКИ EDIT / DELETE =================

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

// ================= СОХРАНЕНИЕ =================

async function savePlanets() {
  try {
    encyclopedia.planets = planets;

    await fetch(`${BaseURL}${EndPoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        encyclopedia,
      }),
    });

    getPlanets();
  } catch (error) {
    console.log(error);
  }
}

// ================= ПОЛУЧЕНИЕ ПЛАНЕТЫ ИЗ SWAPI =================

async function fetchPlanet(name) {
  const response = await fetch("https://swapi.info/api/planets");

  const data = await response.json();

  const planet =
    data.find(
      (planet) =>
        planet.name.toLowerCase() === name.toLowerCase()
    ) ||
    data.find(
      (planet) =>
        planet.name.toLowerCase().includes(name.toLowerCase())
    );

  if (!planet) {
    throw new Error("Планету не знайдено");
  }

  return planet;
}

// ================= МОДАЛКА =================

function addPlanetModalListeners() {
  const cards = document.querySelectorAll(".planet-card");

  const modal = document.getElementById("planetModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const closeBtn = document.querySelector(".modal__close");

  // ---------- КЛІК ПО КАРТЦІ ----------

  cards.forEach((card) => {
    card.addEventListener("click", async () => {
      const name = card.dataset.name;

      try {
        const planet = await fetchPlanet(name);

        modalTitle.textContent = planet.name;

        modalText.innerHTML = `
          <p><b>Climate:</b> ${planet.climate}</p>
          <p><b>Population:</b> ${planet.population}</p>
          <p><b>Gravity:</b> ${planet.gravity}</p>
          <p><b>Terrain:</b> ${planet.terrain}</p>
        `;

        modal.style.display = "block";
      } catch (error) {
        modalTitle.textContent = "Помилка";
        modalText.textContent = "Не вдалося завантажити дані";
        modal.style.display = "block";
      }
    });
  });

  // ---------- ЗАКРИТТЯ ----------

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // ---------- КЛІК ПО BACKDROP ----------

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}

// ================= ЗАПУСК =================

getPlanets();