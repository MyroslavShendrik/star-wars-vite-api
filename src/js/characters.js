import Handlebars from "handlebars";
import charactersTemplate from "../templates/characters.hbs?raw";

const container = document.querySelector(".sw-characters__groups");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderCharacters() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(charactersTemplate);

  container.innerHTML = template(data.encyclopedia.characterGroups);
}

renderCharacters();