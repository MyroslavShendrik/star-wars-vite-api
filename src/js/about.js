import Handlebars from "handlebars";
import aboutTemplate from "../templates/about.hbs?raw";

const section = document.querySelector(".section--about");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderAbout() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(aboutTemplate);

  section.innerHTML = template(data.main.about);
}

renderAbout();