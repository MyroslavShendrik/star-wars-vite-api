import Handlebars from "handlebars";
import moviesTemplate from "../templates/movies.hbs?raw";

const container = document.querySelector(".sw-movies__list");

const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";

async function renderMovies() {
  const response = await fetch(`${BaseURL}${EndPoint}`);
  const data = await response.json();

  const template = Handlebars.compile(moviesTemplate);

  container.innerHTML = template(data.encyclopedia.movies);
}

renderMovies();