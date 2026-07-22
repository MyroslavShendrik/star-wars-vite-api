import Handlebars from "handlebars";
import footerTemplate from "../templates/footer.hbs?raw";

const footer = document.querySelector(".footer");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderFooter() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(footerTemplate);

  footer.innerHTML = template(data.main.footer);
}

renderFooter();