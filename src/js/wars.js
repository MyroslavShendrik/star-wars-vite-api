import Handlebars from "handlebars";
import warsTemplate from "../templates/wars.hbs?raw";

const section = document.querySelector(".section--wars");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderWars() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(warsTemplate);

  section.innerHTML = template(data.main.wars);
}

renderWars();