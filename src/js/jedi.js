import Handlebars from "handlebars";
import jediTemplate from "../templates/jedi.hbs?raw";

const section = document.querySelector(".section--jedi");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderJedi() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(jediTemplate);

  section.innerHTML = template(data.main.jedi);
}

renderJedi();