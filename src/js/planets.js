import Handlebars from "handlebars";
import planetsTemplate from "../templates/planets.hbs?raw";

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

const planetsSection = document.querySelector(".sw-planets");

let encyclopedia = {};
let planets = [];

let planetIdToDelete = null;
let planetIdToEdit = null;

// =====================================================
// ЗАВАНТАЖЕННЯ ПЛАНЕТ
// =====================================================

async function getPlanets() {
  console.log("1. getPlanets()");

  try {
    const response = await fetch(`${BaseURL}${EndPoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log("Отримали JSON:", data);

    encyclopedia = data.encyclopedia;
    planets = encyclopedia.planets || [];

    console.log("Планети:", planets);

    renderPlanets();
  } catch (error) {
    console.error("Помилка getPlanets:", error);
  }
}

// =====================================================
// ВІДОБРАЖЕННЯ
// =====================================================

function renderPlanets(list = planets) {
  console.log("2. renderPlanets()");
  console.log("Малюємо:", list);

  const template = Handlebars.compile(planetsTemplate);

  planetsSection.innerHTML = template(list);

  addListeners();
  addPlanetModalListeners();
}

// =====================================================
// LISTENERS
// =====================================================

function addListeners() {
  console.log("3. addListeners()");

  const createForm = document.querySelector(".create-planet-form");
  const planetsList = document.querySelector(".sw-planets__list");
  const searchInput = document.querySelector("#searchPlanet");
  const searchBtn = document.querySelector("#searchBtn");

  if (!createForm) {
    console.error("❌ .create-planet-form НЕ знайдений");
  }

  if (!planetsList) {
    console.error("❌ .sw-planets__list НЕ знайдений");
  }

  // ДОДАВАННЯ
  if (createForm) {
    createForm.addEventListener("submit", handleCreateSubmit);
  }

  // EDIT / DELETE
  if (planetsList) {
    planetsList.addEventListener("click", handlePlanetButtons);
  }

  // ПОШУК
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", handleSearchButton);
  }
}

// =====================================================
// ПОЧАТОК СТВОРЕННЯ
// =====================================================

function handleCreateSubmit(event) {
  event.preventDefault();

  console.log("4. Натиснуто Додати");

  const nameInput = document.querySelector(".planet-name");

  if (!nameInput) {
    console.error("❌ .planet-name не знайдений");
    return;
  }

  const name = nameInput.value.trim();

  if (!name) {
    alert("Введіть назву планети.");
    nameInput.focus();
    return;
  }

  console.log("Назва нової планети:", name);

  planetIdToEdit = null;

  openPlanetFormModal("create", {
    name,
    climate: "",
    terrain: "",
    gravity: "",
    population: "",
    description: "",
  });
}

// =====================================================
// EDIT / DELETE
// =====================================================

function handlePlanetButtons(event) {
  const editBtn = event.target.closest(".edit-btn");
  const deleteBtn = event.target.closest(".delete-btn");

  // EDIT
  if (editBtn) {
    event.stopPropagation();

    const id = Number(editBtn.dataset.id);

    console.log("5. EDIT. ID:", id);

    const planet = planets.find(
      (item) => Number(item.id) === id
    );

    if (!planet) {
      console.error("❌ Планету не знайдено:", id);
      return;
    }

    planetIdToEdit = id;

    openPlanetFormModal("edit", planet);

    return;
  }

  // DELETE
  if (deleteBtn) {
    event.stopPropagation();

    const id = Number(deleteBtn.dataset.id);

    console.log("6. DELETE. ID:", id);

    const planet = planets.find(
      (item) => Number(item.id) === id
    );

    if (!planet) {
      console.error("❌ Планету не знайдено:", id);
      return;
    }

    planetIdToDelete = id;

    openDeleteModal(planet);

    return;
  }
}

// =====================================================
// CRUD MODAL
// =====================================================

function createCrudModal() {
  let modal = document.querySelector("#planetCrudModal");

  if (modal) {
    return modal;
  }

  console.log("Створюємо CRUD modal");

  modal = document.createElement("div");

  modal.id = "planetCrudModal";
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal__content">

      <button
        type="button"
        class="planet-crud-close"
        aria-label="Закрити"
      >
        ✕
      </button>

      <h2 class="planet-crud-title"></h2>

      <form class="planet-crud-form">

        <label>
          Назва планети
          <input
            class="crud-name"
            type="text"
            name="name"
            autocomplete="off"
            required
          />
        </label>

        <label>
          Клімат
          <input
            class="crud-climate"
            type="text"
            name="climate"
            autocomplete="off"
            required
          />
        </label>

        <label>
          Поверхня
          <input
            class="crud-terrain"
            type="text"
            name="terrain"
            autocomplete="off"
            required
          />
        </label>

        <label>
          Гравітація
          <input
            class="crud-gravity"
            type="text"
            name="gravity"
            autocomplete="off"
            required
          />
        </label>

        <label>
          Населення
          <input
            class="crud-population"
            type="number"
            name="population"
            min="0"
            autocomplete="off"
            required
          />
        </label>

        <label>
          Опис
          <textarea
            class="crud-description"
            name="description"
            autocomplete="off"
            required
          ></textarea>
        </label>

        <div class="planet-crud-actions">

          <button
            type="submit"
            class="planet-save-btn"
          >
            Зберегти
          </button>

          <button
            type="button"
            class="planet-cancel-btn"
          >
            Скасувати
          </button>

        </div>

      </form>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector(".planet-crud-close");
  const cancelBtn = modal.querySelector(".planet-cancel-btn");
  const form = modal.querySelector(".planet-crud-form");

  closeBtn.addEventListener("click", closePlanetFormModal);
  cancelBtn.addEventListener("click", closePlanetFormModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closePlanetFormModal();
    }
  });

  form.addEventListener("submit", handlePlanetFormSubmit);

  return modal;
}

// =====================================================
// ВІДКРИТТЯ CRUD MODAL
// =====================================================

function openPlanetFormModal(mode, planet) {
  console.log("7. openPlanetFormModal()", mode, planet);

  const modal = createCrudModal();

  const title = modal.querySelector(".planet-crud-title");

  const name = modal.querySelector(".crud-name");
  const climate = modal.querySelector(".crud-climate");
  const terrain = modal.querySelector(".crud-terrain");
  const gravity = modal.querySelector(".crud-gravity");
  const population = modal.querySelector(".crud-population");
  const description = modal.querySelector(".crud-description");

  if (mode === "create") {
    title.textContent = "Додати нову планету";
  } else {
    title.textContent = "Редагувати планету";
  }

  name.value = planet.name || "";
  climate.value = planet.climate || "";
  terrain.value = planet.terrain || "";
  gravity.value = planet.gravity || "";
  population.value = planet.population || "";
  description.value = planet.description || "";

  modal.dataset.mode = mode;

  modal.style.display = "block";

  name.focus();
}

// =====================================================
// ЗАКРИТТЯ CRUD MODAL
// =====================================================

function closePlanetFormModal() {
  console.log("Закриваємо CRUD modal");

  const modal = document.querySelector("#planetCrudModal");

  if (!modal) {
    return;
  }

  modal.style.display = "none";

  const form = modal.querySelector(".planet-crud-form");

  if (form) {
    form.reset();
  }

  planetIdToEdit = null;
}

// =====================================================
// SUBMIT CRUD FORM
// =====================================================

async function handlePlanetFormSubmit(event) {
  event.preventDefault();

  console.log("8. Submit CRUD form");

  const form = event.target;
  const modal = document.querySelector("#planetCrudModal");

  const mode = modal.dataset.mode;

  const name = form.querySelector(".crud-name").value.trim();
  const climate = form.querySelector(".crud-climate").value.trim();
  const terrain = form.querySelector(".crud-terrain").value.trim();
  const gravity = form.querySelector(".crud-gravity").value.trim();
  const population = form.querySelector(".crud-population").value.trim();
  const description = form
    .querySelector(".crud-description")
    .value.trim();

  // ===================================================
  // ПЕРЕВІРКИ
  // ===================================================

  if (!name) {
    alert("Введіть назву планети.");
    return;
  }

  if (name.length < 2) {
    alert("Назва планети повинна містити мінімум 2 символи.");
    return;
  }

  if (!climate) {
    alert("Введіть клімат планети.");
    return;
  }

  if (!terrain) {
    alert("Введіть тип поверхні планети.");
    return;
  }

  if (!gravity) {
    alert("Введіть гравітацію планети.");
    return;
  }

  if (population === "") {
    alert("Введіть населення планети.");
    return;
  }

  const populationNumber = Number(population);

  if (
    !Number.isInteger(populationNumber) ||
    populationNumber < 0
  ) {
    alert("Населення повинно бути цілим числом не менше 0.");
    return;
  }

  if (!description) {
    alert("Введіть опис планети.");
    return;
  }

  const planetData = {
    name,
    climate,
    terrain,
    gravity,
    population: String(populationNumber),
    description,
  };

  console.log("Дані планети:", planetData);

  // ===================================================
  // CREATE
  // ===================================================

  if (mode === "create") {
    const newPlanet = {
      id: getNewPlanetId(),
      ...planetData,
    };

    console.log("Створюємо:", newPlanet);

    planets.push(newPlanet);

    await savePlanets();

    closePlanetFormModal();

    const createForm = document.querySelector(
      ".create-planet-form"
    );

    if (createForm) {
      createForm.reset();
    }

    alert("Планету успішно додано!");

    return;
  }

  // ===================================================
  // EDIT
  // ===================================================

  if (mode === "edit") {
    const planetIndex = planets.findIndex(
      (item) => Number(item.id) === Number(planetIdToEdit)
    );

    if (planetIndex === -1) {
      console.error(
        "❌ Не знайшли планету для редагування"
      );
      return;
    }

    planets[planetIndex] = {
      ...planets[planetIndex],
      ...planetData,
    };

    console.log(
      "Оновлена планета:",
      planets[planetIndex]
    );

    await savePlanets();

    closePlanetFormModal();

    alert("Планету успішно відредаговано!");
  }
}

// =====================================================
// ID
// =====================================================

function getNewPlanetId() {
  const ids = planets.map((planet) => Number(planet.id));

  const maxId = ids.length ? Math.max(...ids) : 0;

  return maxId + 1;
}

// =====================================================
// DELETE MODAL
// =====================================================

function createDeleteModal() {
  let modal = document.querySelector("#planetDeleteModal");

  if (modal) {
    return modal;
  }

  console.log("Створюємо Delete modal");

  modal = document.createElement("div");

  modal.id = "planetDeleteModal";
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal__content">

      <button
        type="button"
        class="planet-delete-close"
      >
        ✕
      </button>

      <h2>Видалити планету?</h2>

      <p class="planet-delete-text"></p>

      <div class="planet-delete-actions">

        <button
          type="button"
          class="planet-delete-confirm"
        >
          Видалити
        </button>

        <button
          type="button"
          class="planet-delete-cancel"
        >
          Скасувати
        </button>

      </div>

    </div>
  `;

  document.body.appendChild(modal);

  modal
    .querySelector(".planet-delete-close")
    .addEventListener("click", closeDeleteModal);

  modal
    .querySelector(".planet-delete-cancel")
    .addEventListener("click", closeDeleteModal);

  modal
    .querySelector(".planet-delete-confirm")
    .addEventListener("click", confirmDelete);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeDeleteModal();
    }
  });

  return modal;
}

// =====================================================
// OPEN DELETE
// =====================================================

function openDeleteModal(planet) {
  console.log("9. Відкриваємо delete modal");

  const modal = createDeleteModal();

  const text = modal.querySelector(
    ".planet-delete-text"
  );

  text.textContent =
    `Ви дійсно хочете видалити планету "${planet.name}"?`;

  modal.style.display = "block";
}

// =====================================================
// CLOSE DELETE
// =====================================================

function closeDeleteModal() {
  const modal = document.querySelector("#planetDeleteModal");

  if (!modal) {
    return;
  }

  modal.style.display = "none";

  planetIdToDelete = null;
}

// =====================================================
// CONFIRM DELETE
// =====================================================

async function confirmDelete() {
  console.log(
    "10. Підтвердження DELETE:",
    planetIdToDelete
  );

  if (planetIdToDelete === null) {
    console.error("❌ ID для видалення відсутній");
    return;
  }

  const index = planets.findIndex(
    (item) =>
      Number(item.id) === Number(planetIdToDelete)
  );

  if (index === -1) {
    console.error("❌ Планету для видалення не знайдено");
    return;
  }

  planets.splice(index, 1);

  await savePlanets();

  closeDeleteModal();

  alert("Планету успішно видалено!");
}

// =====================================================
// SAVE
// =====================================================

async function savePlanets() {
  console.log("11. savePlanets()");

  try {
    encyclopedia.planets = planets;

    console.log(
      "PATCH:",
      `${BaseURL}${EndPoint}`
    );

    console.log(
      "Відправляємо:",
      encyclopedia
    );

    const response = await fetch(
      `${BaseURL}${EndPoint}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          encyclopedia,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `PATCH error: ${response.status}`
      );
    }

    const result = await response.json();

    console.log("PATCH результат:", result);

    await getPlanets();
  } catch (error) {
    console.error(
      "❌ Помилка savePlanets:",
      error
    );

    alert(
      "Не вдалося зберегти зміни. Перевір json-server."
    );
  }
}

// =====================================================
// ПОШУК
// =====================================================

function handleSearch(event) {
  const keyword = event.target.value
    .trim()
    .toLowerCase();

  console.log("12. Пошук:", keyword);

  searchPlanets(keyword);
}

function handleSearchButton() {
  const input = document.querySelector("#searchPlanet");

  if (!input) {
    return;
  }

  const keyword = input.value
    .trim()
    .toLowerCase();

  searchPlanets(keyword);
}

function searchPlanets(keyword) {
  if (!keyword) {
    renderPlanets(planets);
    return;
  }

  const filtered = planets.filter((planet) =>
    planet.name
      .toLowerCase()
      .includes(keyword)
  );

  console.log(
    "Результат пошуку:",
    filtered
  );

  renderPlanets(filtered);
}

// =====================================================
// МОДАЛКА ПЕРЕГЛЯДУ ПЛАНЕТИ
// =====================================================

function addPlanetModalListeners() {
  console.log("13. addPlanetModalListeners()");

  const cards = document.querySelectorAll(
    ".planet-card"
  );

  const modal =
    document.getElementById("planetModal");

  const modalTitle =
    document.getElementById("modalTitle");

  const modalText =
    document.getElementById("modalText");

  const closeBtn =
    document.querySelector(".modal__close");

  if (!modal) {
    console.error("❌ #planetModal не знайдений");
    return;
  }

  cards.forEach((card) => {
    card.addEventListener(
      "click",
      async (event) => {

        // Якщо натиснули Edit/Delete —
        // НЕ відкриваємо перегляд
        if (
          event.target.closest(".edit-btn") ||
          event.target.closest(".delete-btn")
        ) {
          return;
        }

        const id = Number(card.dataset.id);

        console.log(
          "14. Відкриваємо планету:",
          id
        );

        const planet = planets.find(
          (item) =>
            Number(item.id) === id
        );

        if (!planet) {
          console.error(
            "Планету не знайдено"
          );
          return;
        }

        modalTitle.textContent =
          planet.name;

        modalText.innerHTML = `
          <p>
            <b>Climate:</b>
            ${planet.climate}
          </p>

          <p>
            <b>Population:</b>
            ${planet.population}
          </p>

          <p>
            <b>Gravity:</b>
            ${planet.gravity}
          </p>

          <p>
            <b>Terrain:</b>
            ${planet.terrain}
          </p>

          <p>
            <b>Description:</b>
            ${planet.description}
          </p>
        `;

        modal.style.display = "block";
      }
    );
  });

  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
  }

  modal.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

// =====================================================
// START
// =====================================================

console.log("🚀 planets.js запущений");

getPlanets();