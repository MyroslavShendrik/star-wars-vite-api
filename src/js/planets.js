import Handlebars from "handlebars";
import planetsTemplate from "../templates/planets.hbs?raw";

const container = document.querySelector(".sw-planets__list");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderPlanets() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(planetsTemplate);

  container.innerHTML = template(data.encyclopedia.planets);
}

renderPlanets();