console.log("секція епохи!");
import Handlebars from "handlebars";
import swEraTemplate from "../templates/sw-era.hbs?raw";
console.log("swEraTemplate:",swEraTemplate);
const container = document.querySelector(".sw-era");
console.log("container:",container);
const eras = [
  {
    erasTitle: "Стара Республіка",
    erasImage: "images/old-republic.webp",
    erasImageAlt: "Old Republic",
    erasDescription:
      "Епоха тисячолітніх війн між Джедаями та Сітхами, формування орденів та перших галактичних імперій",
  },
  {
    erasTitle: "Війни клонів",
    erasImage: "images/clone-wars.jpg",
    erasImageAlt: "Clone Wars",
    erasDescription:
      " Галактичний конфлікт між Республікою та КНС, що призвів до падіння джедаїв і виникнення Імперії",
  },
  {
    erasTitle: "Час Імперії",
    erasImage: "images/galactic-empire.jpg",
    erasImageAlt: "Galactic Empire",
    erasDescription:
      "Правління Палпатіна, переслідування джедаїв і народження Повстанського Альянсу",
  },
  {
    erasTitle: "Нова Республіка",
    erasImage: "images/new-republic.jpg",
    erasImageAlt: "New Republic",
    erasDescription:
      " Період відновлення після падіння Імперії та поява Першого Ордену",
  },
];


console.log("eras/lenght:", eras.length);
console.log("eras:", eras);

 const template = Handlebars.compile(swEraTemplate);
 const markup = template(eras);
 console.log("markup:",markup);
 container.innerHTML = markup