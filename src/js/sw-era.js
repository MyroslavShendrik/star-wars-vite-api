import Handlebars from "handlebars";
import eraTemplate from "../templates/era.hbs?raw";

const container = document.querySelector(".sw-eras__container");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderEras() {
  try {
    const response = await fetch(`${BaseURL}${EndPoint}`);
    const data = await response.json();

    const template = Handlebars.compile(eraTemplate);

    container.innerHTML = template(data.encyclopedia.eras);
  } catch (error) {
    console.log(error);
  }
}

renderEras();