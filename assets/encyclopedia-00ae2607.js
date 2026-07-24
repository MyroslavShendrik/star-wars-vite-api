import{H as r}from"./star-sky-be85fc34.js";const U=`{{#each this}}
<article class="sw-era sw-era--{{@index}}">
  <h2 class="sw-era__title">{{title}}</h2>

  <img
    class="sw-era__image"
    src="{{image}}"
    alt="{{imageAlt}}"
  />

  <p class="sw-era__description">
    {{description}}
  </p>
</article>
{{/each}}`,_=document.querySelector(".sw-era"),$="http://localhost:3000/",T="starWars";async function b(){const a=await(await fetch(`${$}${T}`)).json(),t=r.compile(U);_.innerHTML=t(a.encyclopedia.eras)}b();const C=`{{#each this}}
<article class="sw-faction sw-faction--{{class}}">
  <h3>{{title}}</h3>

  <img
    src="{{image}}"
    alt="{{imageAlt}}"
  />

  <p>{{description}}</p>
</article>
{{/each}}`,M=document.querySelector(".sw-factions"),B="http://localhost:3000/",q="starWars";async function D(){const a=await(await fetch(`${B}${q}`)).json(),t=r.compile(C);M.insertAdjacentHTML("beforeend",t(a.encyclopedia.factions))}D();const x=`{{#each this}}
<li data-form="{{key}}">
    {{name}}
</li>
{{/each}}`,A=document.querySelector(".forms-list"),H="http://localhost:3000/",N="starWars";async function P(){const a=await(await fetch(`${H}${N}`)).json(),t=r.compile(x);A.innerHTML=t(a.encyclopedia.lightsaberForms)}P();const J=`{{#each this}}
<li
    class="sw-planets__item planet-card"
    data-id="{{id}}"
    data-name="{{name}}"
>
    {{name}}
</li>
{{/each}}`,O=document.querySelector(".sw-planets__list"),W="http://localhost:3000/",F="starWars";async function V(){const a=await(await fetch(`${W}${F}`)).json(),t=r.compile(J);O.innerHTML=t(a.encyclopedia.planets)}V();const G=`{{#each this}}
<article
class="sw-characters__group character-group character-group--{{class}}">

<h3 class="character-group__title">
{{title}}
</h3>

<ul class="character-group__list">

{{#each characters}}

<li class="character-group__item">
{{this}}
</li>

{{/each}}

</ul>

</article>
{{/each}}`,Y=document.querySelector(".sw-characters__groups"),K="http://localhost:3000/",Q="starWars";async function z(){const a=await(await fetch(`${K}${Q}`)).json(),t=r.compile(G);Y.innerHTML=t(a.encyclopedia.characterGroups)}z();const X=`{{#each this}}
<li class="sw-movies__item movie-card">

<span class="movie-card__episode">
{{episode}}
</span>

<h3 class="movie-card__title">
{{title}}
</h3>

<p class="movie-card__text">
{{description}}
</p>

</li>
{{/each}}`,Z=document.querySelector(".sw-movies__list"),ee="http://localhost:3000/",te="starWars";async function ae(){const a=await(await fetch(`${ee}${te}`)).json(),t=r.compile(X);Z.innerHTML=t(a.encyclopedia.movies)}ae();let ne=[{id:"shii-cho",name:"Shii-Cho",description:"Найстаріша форма бою на світлових мечах. Орієнтована на базові атаки та боротьбу з кількома ворогами.",users:["Люк Скайвокер","Кіт Фісто","Багато джедаїв Старої Республіки"],image:new URL("/star-wars-vite-api/assets/shii-cho-a4e31af0.jpg",self.location).href},{id:"makashi",name:"Makashi",description:"Елегантний дуельний стиль, створений спеціально для бою проти інших мечників.",users:["Граф Дуку","Ассаж Вентресс"],image:new URL("/star-wars-vite-api/assets/makashi-20c0af28.jpg",self.location).href},{id:"soresu",name:"Soresu",description:"Найкраща оборонна форма, зосереджена на блокуванні атак та виживанні.",users:["Обі-Ван Кенобі","Люмінарія Ундулі"],image:new URL("/star-wars-vite-api/assets/soresu-d14f2536.png",self.location).href},{id:"ataru",name:"Ataru",description:"Акробатичний стиль із великою кількістю стрибків і швидких атак.",users:["Йода","Квай-Гон Джинн"],image:new URL("/star-wars-vite-api/assets/ataru-d8c389e6.jpg",self.location).href},{id:"djem-so",name:"Djem So",description:"Агресивний стиль, що поєднує блокування і потужні контратаки.",users:["Анакін Скайвокер","Люк Скайвокер"],image:new URL("/star-wars-vite-api/assets/djem-so-cd3a76cc.jpg",self.location).href},{id:"niman",name:"Niman",description:"Збалансована форма, що поєднує бойові техніки і використання Сили.",users:["Багато джедаїв Ордену"],image:new URL("/star-wars-vite-api/assets/niman-8799c4db.jpg",self.location).href},{id:"juyo",name:"Juyo / Vaapad",description:"Найбільш агресивний стиль, що використовує темні емоції в бою.",users:["Мейс Вінду","Дарт Мол"],image:new URL("/star-wars-vite-api/assets/juyo-1bb8a071.jpg",self.location).href}];localStorage.getItem("lightsaberForms")||localStorage.setItem("lightsaberForms",JSON.stringify(ne));const se=document.querySelectorAll(".forms-list li"),f=document.querySelector(".form-modal-backdrop"),oe=document.querySelector(".modal-img"),ie=document.querySelector(".modal-title"),ce=document.querySelector(".modal-desc"),re=document.querySelector(".modal-users"),le=document.querySelector(".modal-close"),me=JSON.parse(localStorage.getItem("lightsaberForms"))||[];se.forEach(e=>{e.addEventListener("click",()=>{const a=e.dataset.form,t=me.find(n=>n.id===a);oe.src=t.image,ie.textContent=t.name,ce.textContent=t.description,re.innerHTML=t.users.map(n=>`<li>${n}</li>`).join(""),f.classList.remove("is-hidden")})});function w(){f.classList.add("is-hidden")}le.addEventListener("click",w);f.addEventListener("click",e=>{e.target===f&&w()});document.addEventListener("keydown",e=>{e.key==="Escape"&&w()});const de=[{episode:"Episode I",title:"The Phantom Menace",story:"Галактична Республіка ще здається сильною, але всередині вже гниє від політичних інтриг. Джедаї Квай-Ґон Джинн і Обі-Ван Кенобі знаходять на Татуїні хлопчика — Анакіна Скайвокера, що має безпрецедентну силу. Його вважають Обраним, який принесе баланс Силі. Але в тіні вже діє темний лорд ситхів, а повернення Сітхів стає початком великої трагедії.",image:new URL("/star-wars-vite-api/assets/ep1-d7b906cd.webp",self.location).href},{episode:"Episode II",title:"Attack of the Clones",story:"Минуло десять років. Анакін став сильним, але всередині нього кипить страх і ревнощі. Тим часом у галактиці спалахує Війна клонів — армія клонів бореться проти сепаратистів. Любов Анакіна до Падме стає його слабкістю, а маніпуляції Палпатіна поступово штовхають його до Темної сторони.",image:new URL("/star-wars-vite-api/assets/ep2-82b31a04.jpg",self.location).href},{episode:"Episode III",title:"Revenge of the Sith",story:"Це найтрагічніша частина саги. Палпатін розкриває себе як ситх Дарт Сідіус і спокушає Анакіна обіцянкою врятувати Падме від смерті. Анакін зраджує Орден джедаїв, допомагає знищити їх під час Наказу 66 і стає Дартом Вейдером. Імперія народжується, а галактика занурюється в темряву.",image:new URL("/star-wars-vite-api/assets/ep3-420d3aae.jpg",self.location).href},{episode:"Episode IV",title:"A New Hope",story:"Минуло багато років. Імперія править страхом. Але з’являється нова надія — Люк Скайвокер, син Анакіна. Разом із Леєю, Ганом Соло та Обі-Ваном він приєднується до Повстанців. Люк робить перший крок на шляху джедая і допомагає знищити Зірку Смерті.",image:new URL("/star-wars-vite-api/assets/ep4-8352284d.jpeg",self.location).href},{episode:"Episode V",title:"The Empire Strikes Back",story:"Імперія переходить у наступ. Люк проходить навчання у майстра Йоди та дізнається страшну правду: Дарт Вейдер — його батько. Ган Соло потрапляє в полон, а Повстанці зазнають поразки. Це найтемніший момент історії.",image:new URL("/star-wars-vite-api/assets/ep5-d6bb57ab.jpg",self.location).href},{episode:"Episode VI",title:"Return of the Jedi",story:"Фінальна битва за долю галактики. Люк відмовляється перейти на Темну сторону, навіть перед самим Імператором. У вирішальний момент Вейдер згадує, ким був колись, і рятує сина, знищивши Палпатіна. Анакін повертається до Світла, а Імперія падає.",image:new URL("/star-wars-vite-api/assets/ep6-e126457f.jpg",self.location).href}];document.addEventListener("DOMContentLoaded",function(){localStorage.setItem("moviesData",JSON.stringify(de));const e=JSON.parse(localStorage.getItem("moviesData")),a=document.getElementById("movieModal"),t=document.getElementById("modalMovieTitle"),n=document.getElementById("modalMovieStory"),o=document.getElementById("modalMovieImage"),u=document.getElementById("movieModalClose"),l=document.getElementById("confirmModal"),v=document.getElementById("confirmYes"),i=document.getElementById("confirmNo");let m=null,s=null;function d(){clearTimeout(m),m=setTimeout(()=>{l.classList.add("active"),s=setTimeout(()=>{p()},15e3)},3e4)}function p(){clearTimeout(m),clearTimeout(s),l.classList.remove("active"),a.classList.remove("active")}v.addEventListener("click",()=>{l.classList.remove("active"),clearTimeout(s),d()}),i.addEventListener("click",p),u.addEventListener("click",p),document.querySelectorAll(".sw-movies__item").forEach(h=>{h.addEventListener("click",()=>{const E=h.querySelector("h3");if(!E)return;const g=e.find(S=>S.title.trim()===E.textContent.trim());g&&(t.textContent=g.title,n.textContent=g.story,o.src=g.image,a.classList.add("active"),d())})}),a.addEventListener("click",h=>{h.target===a&&p()})});document.addEventListener("DOMContentLoaded",function(){const e=[{name:"Luke Skywalker",description:"Люк Скайвокер — син Анакіна Скайвокера та Падме Амідали. Виріс на Татуїні, мріючи про пригоди. Після зустрічі з Обі-Ваном Кенобі розпочав шлях джедая. Навчався у майстра Йоди, протистояв Дарту Вейдеру та зумів повернути світло в серце свого батька. Саме Люк став символом нової надії для всієї галактики.",image:new URL("../images/luke.jpg",self.location).href},{name:"Obi-Wan Kenobi",description:"Обі-Ван Кенобі — майстер-джедай, учень Квай-Ґона Джинна та наставник Анакіна Скайвокера. Відомий своєю мудрістю, стриманістю та відданістю Ордену. Пережив падіння Республіки й роками переховувався, оберігаючи Люка. Його дуелі з Дартом Молом та Дартом Вейдером стали легендарними.",image:new URL("../images/obiwan.jpg",self.location).href},{name:"Yoda",description:"Йода — один із наймудріших і наймогутніших джедаїв в історії. Прожив понад 900 років і навчав покоління лицарів Ордену. Його знання Сили та глибока філософія зробили його духовним лідером джедаїв під час Війн клонів.",image:new URL("../images/yoda.jpg",self.location).href},{name:"Mace Windu",description:"Мейс Вінду — майстер-джедай та член Вищої ради Ордену. Володів унікальною формою бою світловим мечем Vaapad, що дозволяла використовувати агресію супротивника проти нього. Саме він викрив Палпатіна як ситха.",image:new URL("../images/mace.jpg",self.location).href},{name:"Qui-Gon Jinn",description:"Квай-Ґон Джинн — майстер-джедай, який вірив у Живу Силу більше, ніж у правила Ради. Саме він відкрив Анакіна Скайвокера та вірив, що той є Обраним. Загинув у двобої з Дартом Молом.",image:new URL("../images/quigon.jpg",self.location).href},{name:"Ahsoka Tano",description:"Асока Тано — падаван Анакіна Скайвокера. Пройшла важкий шлях під час Війн клонів. Залишила Орден, розчарувавшись у ньому, але не зрадила світлу сторону. Стала незалежною воїтелькою Сили.",image:new URL("../images/ahsoka.jpg",self.location).href},{name:"Darth Vader",description:"Дарт Вейдер — колишній Анакін Скайвокер. Перейшов на Темну сторону через страх втрати та маніпуляції Палпатіна. Став правою рукою Імператора і символом страху. Врешті-решт пожертвував собою, щоб врятувати сина.",image:new URL("../images/vader.jpg",self.location).href},{name:"Darth Sidious",description:"Дарт Сідіус, також відомий як Імператор Палпатін, — темний лорд ситхів, що знищив Республіку та створив Імперію. Майстер інтриг і маніпуляцій, який роками таємно керував галактикою.",image:new URL("../images/sidious.jpg",self.location).href},{name:"Darth Maul",description:"Дарт Мол — учень Дарта Сідіуса, відомий своїм подвійним червоним світловим мечем. Після поразки від Обі-Вана вижив і роками прагнув помсти.",image:new URL("../images/maul.jpg",self.location).href},{name:"Count Dooku",description:"Граф Дуку — колишній джедай, який розчарувався в Ордені та став ситхом Дартом Тиранусом. Лідер сепаратистів під час Війн клонів.",image:new URL("../images/dooku.jpg",self.location).href},{name:"Kylo Ren",description:"Кайло Рен — син Леї Органи та Гана Соло, онук Дарта Вейдера. Розривався між світлом і темрявою. Прагнув наслідувати Вейдера, але врешті повернувся до світла.",image:new URL("../images/kylo.jpg",self.location).href},{name:"Leia Organa",description:"Лея Органа — принцеса Альдераана, лідер Повстанців та сестра Люка. Сильна, розумна й хоробра, вона стала ключовою фігурою в боротьбі проти Імперії.",image:new URL("../images/leia.jpg",self.location).href},{name:"Han Solo",description:"Ган Соло — харизматичний контрабандист і капітан «Тисячолітнього Сокола». Спочатку цинічний, але став героєм Повстанців.",image:new URL("../images/han.jpg",self.location).href},{name:"Cassian Andor",description:"Кассіан Андор — розвідник Повстанців, який пожертвував собою під час місії зі здобуття планів Зірки Смерті.",image:new URL("../images/andor.jpg",self.location).href},{name:"Mon Mothma",description:"Мон Мотма — одна з головних лідерів Альянсу Повстанців. Вона об’єднала сили проти Імперії.",image:new URL("../images/monmothma.jpg",self.location).href},{name:"Jyn Erso",description:"Джин Ерсо — донька вченого, який створював Зірку Смерті. Допомогла викрасти її плани й дала шанс Повстанцям.",image:new URL("../images/jyn.jpg",self.location).href},{name:"Grand Moff Tarkin",description:"Гранд-моф Таркін — високопоставлений офіцер Імперії, що командував Зіркою Смерті.",image:new URL("../images/tarkin.jpg",self.location).href},{name:"Admiral Thrawn",description:"Гранд-адмірал Траун — геніальний стратег Імперії з раси чиссів. Відомий холодним розумом і глибоким аналізом ворогів.",image:new URL("../images/thrawn.jpg",self.location).href},{name:"Imperial Inquisitors",description:"Імперські Інквізитори — мисливці на джедаїв, що служили Дарту Вейдеру та полювали на тих, хто вижив після Наказу 66.",image:new URL("../images/inquisitor.jpg",self.location).href}];localStorage.setItem("charactersData",JSON.stringify(e));const a=JSON.parse(localStorage.getItem("charactersData")),t=document.getElementById("characterModal"),n=document.getElementById("characterModalClose"),o=document.getElementById("characterName"),u=document.getElementById("characterDescription"),l=document.getElementById("characterImage");document.querySelectorAll(".character-group__item").forEach(i=>{i.addEventListener("click",()=>{const m=i.textContent.trim(),s=a.find(d=>d.name===m);s&&(o.textContent=s.name,u.textContent=s.description,l.src=s.image,t.classList.add("active"))})}),n.addEventListener("click",()=>{t.classList.remove("active")}),t.addEventListener("click",i=>{i.target===t&&t.classList.remove("active")})});const c=document.getElementById("planetModal"),y=document.getElementById("modalTitle"),L=document.getElementById("modalText"),pe=document.querySelector(".modal__close"),he=document.querySelectorAll(".planet-card"),j=document.getElementById("searchPlanet"),I=document.getElementById("searchBtn");function k(e){y.textContent=e.name,L.innerHTML=`
    <p><b>Climate:</b> ${e.climate}</p>
    <p><b>Population:</b> ${e.population}</p>
    <p><b>Gravity:</b> ${e.gravity}</p>
    <p><b>Terrain:</b> ${e.terrain}</p>
  `,c.style.display="block"}async function R(e){const t=await(await fetch("https://swapi.info/api/planets")).json(),n=t.find(o=>o.name.toLowerCase()===e.toLowerCase())||t.find(o=>o.name.toLowerCase().includes(e.toLowerCase()));if(!n)throw new Error("Не знайдено");return n}he.forEach(e=>{e.addEventListener("click",async()=>{const a=e.dataset.name;try{const t=await R(a);k(t)}catch{y.textContent="Помилка",L.textContent="Не вдалося завантажити дані",c.style.display="block"}})});I.addEventListener("click",async()=>{const e=j.value.trim();if(e)try{const a=await R(e);k(a)}catch{y.textContent="Помилка",L.textContent="Планету не знайдено",c.style.display="block"}});j.addEventListener("keydown",e=>{e.key==="Enter"&&I.click()});pe.onclick=()=>{c.style.display="none"};window.onclick=e=>{e.target===c&&(c.style.display="none")};
