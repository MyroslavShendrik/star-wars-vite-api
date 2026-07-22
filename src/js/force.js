import Handlebars from "handlebars";
import forceTemplate from "../templates/force.hbs?raw";

const section = document.querySelector(".section--force");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderForce() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(forceTemplate);

  section.innerHTML = template(data.main.force);
}

renderForce();