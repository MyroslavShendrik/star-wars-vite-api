import{H as l}from"./star-sky-be85fc34.js";const M=`{{#each this}}
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
{{/each}}`,q=document.querySelector(".sw-era"),D="http://localhost:3000/",x="starWars";async function N(){const n=await(await fetch(`${D}${x}`)).json(),t=l.compile(M);q.innerHTML=t(n.encyclopedia.eras)}N();const P=`{{#each this}}
<article class="sw-faction sw-faction--{{class}}">
  <h3>{{title}}</h3>

  <img
    src="{{image}}"
    alt="{{imageAlt}}"
  />

  <p>{{description}}</p>
</article>
{{/each}}`,A=document.querySelector(".sw-factions"),H="http://localhost:3000/",J="starWars";async function O(){const n=await(await fetch(`${H}${J}`)).json(),t=l.compile(P);A.insertAdjacentHTML("beforeend",t(n.encyclopedia.factions))}O();const W=`{{#each this}}
<li data-form="{{key}}">
    {{name}}
</li>
{{/each}}`,F=document.querySelector(".forms-list"),V="http://localhost:3000/",G="starWars";async function Y(){const n=await(await fetch(`${V}${G}`)).json(),t=l.compile(W);F.innerHTML=t(n.encyclopedia.lightsaberForms)}Y();const K=`<h2 class="sw-planets__title sw-section-title">
  Відомі планети Галактики
</h2>

<form class="create-planet-form">
  <input
    class="planet-name"
    type="text"
    placeholder="Назва планети"
    required
  />

  <button type="submit">
    Додати
  </button>
</form>

<input
  type="text"
  id="searchPlanet"
  placeholder="Пошук планети..."
/>

<button id="searchBtn">
  Знайти
</button>

<ul class="sw-planets__list">

{{#each this}}

<li
class="sw-planets__item planet-card"
data-id="{{id}}"
data-name="{{name}}"
>

<span>{{name}}</span>

<div>

<button
class="edit-btn"
data-id="{{id}}">
✏️
</button>

<button
class="delete-btn"
data-id="{{id}}">
🗑
</button>

</div>

</li>

{{/each}}

</ul>`,k="http://localhost:3000/",R="starWars",Q=document.querySelector(".sw-planets");let i=[],j=null,S=null;async function _(){i=(await(await fetch(`${k}${R}`)).json()).encyclopedia.planets,z()}function z(){const e=l.compile(K);Q.innerHTML=e(i),X()}function X(){document.querySelector(".create-planet-form").addEventListener("submit",Z),document.querySelector(".sw-planets__list").addEventListener("click",ee)}async function Z(e){e.preventDefault();const t=document.querySelector(".planet-name").value.trim();t&&(i.push({id:Date.now(),name:t}),await y(),e.target.reset())}function ee(e){const n=e.target.closest(".edit-btn"),t=e.target.closest(".delete-btn");if(n){S=Number(n.dataset.id);const a=i.find(({id:d})=>Number(d)===S),s=prompt("Нова назва",a.name);if(!s)return;a.name=s,y()}t&&(j=Number(t.dataset.id),i=i.filter(({id:a})=>Number(a)!==j),y())}async function y(){await fetch(`${k}${R}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({encyclopedia:{planets:i}})}),_()}_();const te=`{{#each this}}
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
{{/each}}`,ne=document.querySelector(".sw-characters__groups"),ae="http://localhost:3000/",se="starWars";async function oe(){const n=await(await fetch(`${ae}${se}`)).json(),t=l.compile(te);ne.innerHTML=t(n.encyclopedia.characterGroups)}oe();const ie=`{{#each this}}
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
{{/each}}`,ce=document.querySelector(".sw-movies__list"),re="http://localhost:3000/",le="starWars";async function de(){const n=await(await fetch(`${re}${le}`)).json(),t=l.compile(ie);ce.innerHTML=t(n.encyclopedia.movies)}de();let me=[{id:"shii-cho",name:"Shii-Cho",description:"Найстаріша форма бою на світлових мечах. Орієнтована на базові атаки та боротьбу з кількома ворогами.",users:["Люк Скайвокер","Кіт Фісто","Багато джедаїв Старої Республіки"],image:new URL("/star-wars-vite-api/assets/shii-cho-a4e31af0.jpg",self.location).href},{id:"makashi",name:"Makashi",description:"Елегантний дуельний стиль, створений спеціально для бою проти інших мечників.",users:["Граф Дуку","Ассаж Вентресс"],image:new URL("/star-wars-vite-api/assets/makashi-20c0af28.jpg",self.location).href},{id:"soresu",name:"Soresu",description:"Найкраща оборонна форма, зосереджена на блокуванні атак та виживанні.",users:["Обі-Ван Кенобі","Люмінарія Ундулі"],image:new URL("/star-wars-vite-api/assets/soresu-d14f2536.png",self.location).href},{id:"ataru",name:"Ataru",description:"Акробатичний стиль із великою кількістю стрибків і швидких атак.",users:["Йода","Квай-Гон Джинн"],image:new URL("/star-wars-vite-api/assets/ataru-d8c389e6.jpg",self.location).href},{id:"djem-so",name:"Djem So",description:"Агресивний стиль, що поєднує блокування і потужні контратаки.",users:["Анакін Скайвокер","Люк Скайвокер"],image:new URL("/star-wars-vite-api/assets/djem-so-cd3a76cc.jpg",self.location).href},{id:"niman",name:"Niman",description:"Збалансована форма, що поєднує бойові техніки і використання Сили.",users:["Багато джедаїв Ордену"],image:new URL("/star-wars-vite-api/assets/niman-8799c4db.jpg",self.location).href},{id:"juyo",name:"Juyo / Vaapad",description:"Найбільш агресивний стиль, що використовує темні емоції в бою.",users:["Мейс Вінду","Дарт Мол"],image:new URL("/star-wars-vite-api/assets/juyo-1bb8a071.jpg",self.location).href}];localStorage.getItem("lightsaberForms")||localStorage.setItem("lightsaberForms",JSON.stringify(me));const pe=document.querySelectorAll(".forms-list li"),w=document.querySelector(".form-modal-backdrop"),ue=document.querySelector(".modal-img"),he=document.querySelector(".modal-title"),fe=document.querySelector(".modal-desc"),ge=document.querySelector(".modal-users"),we=document.querySelector(".modal-close"),ye=JSON.parse(localStorage.getItem("lightsaberForms"))||[];pe.forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.form,t=ye.find(a=>a.id===n);ue.src=t.image,he.textContent=t.name,fe.textContent=t.description,ge.innerHTML=t.users.map(a=>`<li>${a}</li>`).join(""),w.classList.remove("is-hidden")})});function L(){w.classList.add("is-hidden")}we.addEventListener("click",L);w.addEventListener("click",e=>{e.target===w&&L()});document.addEventListener("keydown",e=>{e.key==="Escape"&&L()});const Le=[{episode:"Episode I",title:"The Phantom Menace",story:"Галактична Республіка ще здається сильною, але всередині вже гниє від політичних інтриг. Джедаї Квай-Ґон Джинн і Обі-Ван Кенобі знаходять на Татуїні хлопчика — Анакіна Скайвокера, що має безпрецедентну силу. Його вважають Обраним, який принесе баланс Силі. Але в тіні вже діє темний лорд ситхів, а повернення Сітхів стає початком великої трагедії.",image:new URL("/star-wars-vite-api/assets/ep1-d7b906cd.webp",self.location).href},{episode:"Episode II",title:"Attack of the Clones",story:"Минуло десять років. Анакін став сильним, але всередині нього кипить страх і ревнощі. Тим часом у галактиці спалахує Війна клонів — армія клонів бореться проти сепаратистів. Любов Анакіна до Падме стає його слабкістю, а маніпуляції Палпатіна поступово штовхають його до Темної сторони.",image:new URL("/star-wars-vite-api/assets/ep2-82b31a04.jpg",self.location).href},{episode:"Episode III",title:"Revenge of the Sith",story:"Це найтрагічніша частина саги. Палпатін розкриває себе як ситх Дарт Сідіус і спокушає Анакіна обіцянкою врятувати Падме від смерті. Анакін зраджує Орден джедаїв, допомагає знищити їх під час Наказу 66 і стає Дартом Вейдером. Імперія народжується, а галактика занурюється в темряву.",image:new URL("/star-wars-vite-api/assets/ep3-420d3aae.jpg",self.location).href},{episode:"Episode IV",title:"A New Hope",story:"Минуло багато років. Імперія править страхом. Але з’являється нова надія — Люк Скайвокер, син Анакіна. Разом із Леєю, Ганом Соло та Обі-Ваном він приєднується до Повстанців. Люк робить перший крок на шляху джедая і допомагає знищити Зірку Смерті.",image:new URL("/star-wars-vite-api/assets/ep4-8352284d.jpeg",self.location).href},{episode:"Episode V",title:"The Empire Strikes Back",story:"Імперія переходить у наступ. Люк проходить навчання у майстра Йоди та дізнається страшну правду: Дарт Вейдер — його батько. Ган Соло потрапляє в полон, а Повстанці зазнають поразки. Це найтемніший момент історії.",image:new URL("/star-wars-vite-api/assets/ep5-d6bb57ab.jpg",self.location).href},{episode:"Episode VI",title:"Return of the Jedi",story:"Фінальна битва за долю галактики. Люк відмовляється перейти на Темну сторону, навіть перед самим Імператором. У вирішальний момент Вейдер згадує, ким був колись, і рятує сина, знищивши Палпатіна. Анакін повертається до Світла, а Імперія падає.",image:new URL("/star-wars-vite-api/assets/ep6-e126457f.jpg",self.location).href}];document.addEventListener("DOMContentLoaded",function(){localStorage.setItem("moviesData",JSON.stringify(Le));const e=JSON.parse(localStorage.getItem("moviesData")),n=document.getElementById("movieModal"),t=document.getElementById("modalMovieTitle"),a=document.getElementById("modalMovieStory"),s=document.getElementById("modalMovieImage"),d=document.getElementById("movieModalClose"),m=document.getElementById("confirmModal"),b=document.getElementById("confirmYes"),c=document.getElementById("confirmNo");let p=null,o=null;function u(){clearTimeout(p),p=setTimeout(()=>{m.classList.add("active"),o=setTimeout(()=>{h()},15e3)},3e4)}function h(){clearTimeout(p),clearTimeout(o),m.classList.remove("active"),n.classList.remove("active")}b.addEventListener("click",()=>{m.classList.remove("active"),clearTimeout(o),u()}),c.addEventListener("click",h),d.addEventListener("click",h),document.querySelectorAll(".sw-movies__item").forEach(f=>{f.addEventListener("click",()=>{const I=f.querySelector("h3");if(!I)return;const g=e.find(C=>C.title.trim()===I.textContent.trim());g&&(t.textContent=g.title,a.textContent=g.story,s.src=g.image,n.classList.add("active"),u())})}),n.addEventListener("click",f=>{f.target===n&&h()})});document.addEventListener("DOMContentLoaded",function(){const e=[{name:"Luke Skywalker",description:"Люк Скайвокер — син Анакіна Скайвокера та Падме Амідали. Виріс на Татуїні, мріючи про пригоди. Після зустрічі з Обі-Ваном Кенобі розпочав шлях джедая. Навчався у майстра Йоди, протистояв Дарту Вейдеру та зумів повернути світло в серце свого батька. Саме Люк став символом нової надії для всієї галактики.",image:new URL("../images/luke.jpg",self.location).href},{name:"Obi-Wan Kenobi",description:"Обі-Ван Кенобі — майстер-джедай, учень Квай-Ґона Джинна та наставник Анакіна Скайвокера. Відомий своєю мудрістю, стриманістю та відданістю Ордену. Пережив падіння Республіки й роками переховувався, оберігаючи Люка. Його дуелі з Дартом Молом та Дартом Вейдером стали легендарними.",image:new URL("../images/obiwan.jpg",self.location).href},{name:"Yoda",description:"Йода — один із наймудріших і наймогутніших джедаїв в історії. Прожив понад 900 років і навчав покоління лицарів Ордену. Його знання Сили та глибока філософія зробили його духовним лідером джедаїв під час Війн клонів.",image:new URL("../images/yoda.jpg",self.location).href},{name:"Mace Windu",description:"Мейс Вінду — майстер-джедай та член Вищої ради Ордену. Володів унікальною формою бою світловим мечем Vaapad, що дозволяла використовувати агресію супротивника проти нього. Саме він викрив Палпатіна як ситха.",image:new URL("../images/mace.jpg",self.location).href},{name:"Qui-Gon Jinn",description:"Квай-Ґон Джинн — майстер-джедай, який вірив у Живу Силу більше, ніж у правила Ради. Саме він відкрив Анакіна Скайвокера та вірив, що той є Обраним. Загинув у двобої з Дартом Молом.",image:new URL("../images/quigon.jpg",self.location).href},{name:"Ahsoka Tano",description:"Асока Тано — падаван Анакіна Скайвокера. Пройшла важкий шлях під час Війн клонів. Залишила Орден, розчарувавшись у ньому, але не зрадила світлу сторону. Стала незалежною воїтелькою Сили.",image:new URL("../images/ahsoka.jpg",self.location).href},{name:"Darth Vader",description:"Дарт Вейдер — колишній Анакін Скайвокер. Перейшов на Темну сторону через страх втрати та маніпуляції Палпатіна. Став правою рукою Імператора і символом страху. Врешті-решт пожертвував собою, щоб врятувати сина.",image:new URL("../images/vader.jpg",self.location).href},{name:"Darth Sidious",description:"Дарт Сідіус, також відомий як Імператор Палпатін, — темний лорд ситхів, що знищив Республіку та створив Імперію. Майстер інтриг і маніпуляцій, який роками таємно керував галактикою.",image:new URL("../images/sidious.jpg",self.location).href},{name:"Darth Maul",description:"Дарт Мол — учень Дарта Сідіуса, відомий своїм подвійним червоним світловим мечем. Після поразки від Обі-Вана вижив і роками прагнув помсти.",image:new URL("../images/maul.jpg",self.location).href},{name:"Count Dooku",description:"Граф Дуку — колишній джедай, який розчарувався в Ордені та став ситхом Дартом Тиранусом. Лідер сепаратистів під час Війн клонів.",image:new URL("../images/dooku.jpg",self.location).href},{name:"Kylo Ren",description:"Кайло Рен — син Леї Органи та Гана Соло, онук Дарта Вейдера. Розривався між світлом і темрявою. Прагнув наслідувати Вейдера, але врешті повернувся до світла.",image:new URL("../images/kylo.jpg",self.location).href},{name:"Leia Organa",description:"Лея Органа — принцеса Альдераана, лідер Повстанців та сестра Люка. Сильна, розумна й хоробра, вона стала ключовою фігурою в боротьбі проти Імперії.",image:new URL("../images/leia.jpg",self.location).href},{name:"Han Solo",description:"Ган Соло — харизматичний контрабандист і капітан «Тисячолітнього Сокола». Спочатку цинічний, але став героєм Повстанців.",image:new URL("../images/han.jpg",self.location).href},{name:"Cassian Andor",description:"Кассіан Андор — розвідник Повстанців, який пожертвував собою під час місії зі здобуття планів Зірки Смерті.",image:new URL("../images/andor.jpg",self.location).href},{name:"Mon Mothma",description:"Мон Мотма — одна з головних лідерів Альянсу Повстанців. Вона об’єднала сили проти Імперії.",image:new URL("../images/monmothma.jpg",self.location).href},{name:"Jyn Erso",description:"Джин Ерсо — донька вченого, який створював Зірку Смерті. Допомогла викрасти її плани й дала шанс Повстанцям.",image:new URL("../images/jyn.jpg",self.location).href},{name:"Grand Moff Tarkin",description:"Гранд-моф Таркін — високопоставлений офіцер Імперії, що командував Зіркою Смерті.",image:new URL("../images/tarkin.jpg",self.location).href},{name:"Admiral Thrawn",description:"Гранд-адмірал Траун — геніальний стратег Імперії з раси чиссів. Відомий холодним розумом і глибоким аналізом ворогів.",image:new URL("../images/thrawn.jpg",self.location).href},{name:"Imperial Inquisitors",description:"Імперські Інквізитори — мисливці на джедаїв, що служили Дарту Вейдеру та полювали на тих, хто вижив після Наказу 66.",image:new URL("../images/inquisitor.jpg",self.location).href}];localStorage.setItem("charactersData",JSON.stringify(e));const n=JSON.parse(localStorage.getItem("charactersData")),t=document.getElementById("characterModal"),a=document.getElementById("characterModalClose"),s=document.getElementById("characterName"),d=document.getElementById("characterDescription"),m=document.getElementById("characterImage");document.querySelectorAll(".character-group__item").forEach(c=>{c.addEventListener("click",()=>{const p=c.textContent.trim(),o=n.find(u=>u.name===p);o&&(s.textContent=o.name,d.textContent=o.description,m.src=o.image,t.classList.add("active"))})}),a.addEventListener("click",()=>{t.classList.remove("active")}),t.addEventListener("click",c=>{c.target===t&&t.classList.remove("active")})});const r=document.getElementById("planetModal"),v=document.getElementById("modalTitle"),E=document.getElementById("modalText"),ve=document.querySelector(".modal__close"),Ee=document.querySelectorAll(".planet-card"),U=document.getElementById("searchPlanet"),T=document.getElementById("searchBtn");function $(e){v.textContent=e.name,E.innerHTML=`
    <p><b>Climate:</b> ${e.climate}</p>
    <p><b>Population:</b> ${e.population}</p>
    <p><b>Gravity:</b> ${e.gravity}</p>
    <p><b>Terrain:</b> ${e.terrain}</p>
  `,r.style.display="block"}async function B(e){const t=await(await fetch("https://swapi.info/api/planets")).json(),a=t.find(s=>s.name.toLowerCase()===e.toLowerCase())||t.find(s=>s.name.toLowerCase().includes(e.toLowerCase()));if(!a)throw new Error("Не знайдено");return a}Ee.forEach(e=>{e.addEventListener("click",async()=>{const n=e.dataset.name;try{const t=await B(n);$(t)}catch{v.textContent="Помилка",E.textContent="Не вдалося завантажити дані",r.style.display="block"}})});T.addEventListener("click",async()=>{const e=U.value.trim();if(e)try{const n=await B(e);$(n)}catch{v.textContent="Помилка",E.textContent="Планету не знайдено",r.style.display="block"}});U.addEventListener("keydown",e=>{e.key==="Enter"&&T.click()});ve.onclick=()=>{r.style.display="none"};window.onclick=e=>{e.target===r&&(r.style.display="none")};
