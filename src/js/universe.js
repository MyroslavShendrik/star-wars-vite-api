import Handlebars from "handlebars";
import universeTemplate from "../templates/universe.hbs?raw";

const section = document.querySelector(".section--universe");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderUniverse() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(universeTemplate);

  section.innerHTML = template(data.main.universe);
}

renderUniverse();