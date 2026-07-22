import Handlebars from "handlebars";
import headerTemplate from "../templates/header.hbs?raw";

const header = document.querySelector(".header");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderHeader() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(headerTemplate);

  const markup = template(data.main.header);

  header.insertAdjacentHTML("afterbegin", markup);
}

renderHeader();