import Handlebars from "handlebars";
import factionsTemplate from "../templates/factions.hbs?raw";

const container = document.querySelector(".sw-factions");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderFactions() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(factionsTemplate);

  container.insertAdjacentHTML(
    "beforeend",
    template(data.encyclopedia.factions)
  );
}

renderFactions();