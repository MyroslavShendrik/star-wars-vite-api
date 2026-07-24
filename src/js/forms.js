import Handlebars from "handlebars";
import formsTemplate from "../templates/forms.hbs?raw";

const container = document.querySelector(".forms-list");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderForms() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(formsTemplate);

  container.innerHTML = template(data.encyclopedia.lightsaberForms);
}

renderForms();