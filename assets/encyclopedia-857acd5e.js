import{H as m}from"./timer-25d4ec45.js";const U=`{{#each this}}
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
{{/each}}`,M=document.querySelector(".sw-eras__container"),$="http://localhost:3000/",C="starWars";async function B(){try{const t=await(await fetch(`${$}${C}`)).json(),n=m.compile(U);M.innerHTML=n(t.encyclopedia.eras)}catch(e){console.log(e)}}B();const q=`{{#each this}}
<article class="sw-faction sw-faction--{{class}}">
  <h3>{{title}}</h3>

  <img
    src="{{image}}"
    alt="{{imageAlt}}"
  />

  <p>{{description}}</p>
</article>
{{/each}}`,D=document.querySelector(".sw-factions"),N="http://localhost:3000/",x="starWars";async function P(){const t=await(await fetch(`${N}${x}`)).json(),n=m.compile(q);D.insertAdjacentHTML("beforeend",n(t.encyclopedia.factions))}P();const A=`{{#each this}}
<li data-form="{{key}}">
    {{name}}
</li>
{{/each}}`,H=document.querySelector(".forms-list"),O="http://localhost:3000/",J="starWars";async function W(){const t=await(await fetch(`${O}${J}`)).json(),n=m.compile(A);H.innerHTML=n(t.encyclopedia.lightsaberForms)}W();const F=`<h2 class="sw-planets__title sw-section-title">
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

</ul>`,_="http://localhost:3000/",k="starWars",V=document.querySelector(".sw-planets");let y={},l=[],I=null,j=null;async function R(){try{y=(await(await fetch(`${_}${k}`)).json()).encyclopedia,l=y.planets,G()}catch(e){console.log(e)}}function G(){const e=m.compile(F);V.innerHTML=e(l),Y(),X()}function Y(){document.querySelector(".create-planet-form").addEventListener("submit",K),document.querySelector(".sw-planets__list").addEventListener("click",z)}async function K(e){e.preventDefault();const n=document.querySelector(".planet-name").value.trim();n&&(l.push({id:Date.now(),name:n}),await E(),e.target.reset())}function z(e){const t=e.target.closest(".edit-btn"),n=e.target.closest(".delete-btn");if(t){j=Number(t.dataset.id);const a=l.find(({id:o})=>Number(o)===j),s=prompt("Нова назва",a.name);if(!s)return;a.name=s,E()}n&&(I=Number(n.dataset.id),l=l.filter(({id:a})=>Number(a)!==I),E())}async function E(){try{y.planets=l,await fetch(`${_}${k}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({encyclopedia:y})}),R()}catch(e){console.log(e)}}async function Q(e){const n=await(await fetch("https://swapi.info/api/planets")).json(),a=n.find(s=>s.name.toLowerCase()===e.toLowerCase())||n.find(s=>s.name.toLowerCase().includes(e.toLowerCase()));if(!a)throw new Error("Планету не знайдено");return a}function X(){const e=document.querySelectorAll(".planet-card"),t=document.getElementById("planetModal"),n=document.getElementById("modalTitle"),a=document.getElementById("modalText"),s=document.querySelector(".modal__close");e.forEach(o=>{o.addEventListener("click",async()=>{const r=o.dataset.name;try{const i=await Q(r);n.textContent=i.name,a.innerHTML=`
          <p><b>Climate:</b> ${i.climate}</p>
          <p><b>Population:</b> ${i.population}</p>
          <p><b>Gravity:</b> ${i.gravity}</p>
          <p><b>Terrain:</b> ${i.terrain}</p>
        `,t.style.display="block"}catch{n.textContent="Помилка",a.textContent="Не вдалося завантажити дані",t.style.display="block"}})}),s&&s.addEventListener("click",()=>{t.style.display="none"}),t&&t.addEventListener("click",o=>{o.target===t&&(t.style.display="none")})}R();const Z=`{{#each this}}
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
{{/each}}`,ee=document.querySelector(".sw-characters__groups"),te="http://localhost:3000/",ne="starWars";async function ae(){const t=await(await fetch(`${te}${ne}`)).json(),n=m.compile(Z);ee.innerHTML=n(t.encyclopedia.characterGroups)}ae();const se=`{{#each this}}
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
{{/each}}`,oe=document.querySelector(".sw-movies__list"),ie="http://localhost:3000/",ce="starWars";async function re(){const t=await(await fetch(`${ie}${ce}`)).json(),n=m.compile(se);oe.innerHTML=n(t.encyclopedia.movies)}re();let le=[{id:"shii-cho",name:"Shii-Cho",description:"Найстаріша форма бою на світлових мечах. Орієнтована на базові атаки та боротьбу з кількома ворогами.",users:["Люк Скайвокер","Кіт Фісто","Багато джедаїв Старої Республіки"],image:new URL("/star-wars-vite-api/assets/shii-cho-a4e31af0.jpg",self.location).href},{id:"makashi",name:"Makashi",description:"Елегантний дуельний стиль, створений спеціально для бою проти інших мечників.",users:["Граф Дуку","Ассаж Вентресс"],image:new URL("/star-wars-vite-api/assets/makashi-20c0af28.jpg",self.location).href},{id:"soresu",name:"Soresu",description:"Найкраща оборонна форма, зосереджена на блокуванні атак та виживанні.",users:["Обі-Ван Кенобі","Люмінарія Ундулі"],image:new URL("/star-wars-vite-api/assets/soresu-d14f2536.png",self.location).href},{id:"ataru",name:"Ataru",description:"Акробатичний стиль із великою кількістю стрибків і швидких атак.",users:["Йода","Квай-Гон Джинн"],image:new URL("/star-wars-vite-api/assets/ataru-d8c389e6.jpg",self.location).href},{id:"djem-so",name:"Djem So",description:"Агресивний стиль, що поєднує блокування і потужні контратаки.",users:["Анакін Скайвокер","Люк Скайвокер"],image:new URL("/star-wars-vite-api/assets/djem-so-cd3a76cc.jpg",self.location).href},{id:"niman",name:"Niman",description:"Збалансована форма, що поєднує бойові техніки і використання Сили.",users:["Багато джедаїв Ордену"],image:new URL("/star-wars-vite-api/assets/niman-8799c4db.jpg",self.location).href},{id:"juyo",name:"Juyo / Vaapad",description:"Найбільш агресивний стиль, що використовує темні емоції в бою.",users:["Мейс Вінду","Дарт Мол"],image:new URL("/star-wars-vite-api/assets/juyo-1bb8a071.jpg",self.location).href}];localStorage.getItem("lightsaberForms")||localStorage.setItem("lightsaberForms",JSON.stringify(le));const de=document.querySelectorAll(".forms-list li"),w=document.querySelector(".form-modal-backdrop"),me=document.querySelector(".modal-img"),pe=document.querySelector(".modal-title"),ue=document.querySelector(".modal-desc"),he=document.querySelector(".modal-users"),fe=document.querySelector(".modal-close"),ge=JSON.parse(localStorage.getItem("lightsaberForms"))||[];de.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.form,n=ge.find(a=>a.id===t);me.src=n.image,pe.textContent=n.name,ue.textContent=n.description,he.innerHTML=n.users.map(a=>`<li>${a}</li>`).join(""),w.classList.remove("is-hidden")})});function b(){w.classList.add("is-hidden")}fe.addEventListener("click",b);w.addEventListener("click",e=>{e.target===w&&b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&b()});const ye=[{episode:"Episode I",title:"The Phantom Menace",story:"Галактична Республіка ще здається сильною, але всередині вже гниє від політичних інтриг. Джедаї Квай-Ґон Джинн і Обі-Ван Кенобі знаходять на Татуїні хлопчика — Анакіна Скайвокера, що має безпрецедентну силу. Його вважають Обраним, який принесе баланс Силі. Але в тіні вже діє темний лорд ситхів, а повернення Сітхів стає початком великої трагедії.",image:new URL("/star-wars-vite-api/assets/ep1-d7b906cd.webp",self.location).href},{episode:"Episode II",title:"Attack of the Clones",story:"Минуло десять років. Анакін став сильним, але всередині нього кипить страх і ревнощі. Тим часом у галактиці спалахує Війна клонів — армія клонів бореться проти сепаратистів. Любов Анакіна до Падме стає його слабкістю, а маніпуляції Палпатіна поступово штовхають його до Темної сторони.",image:new URL("/star-wars-vite-api/assets/ep2-82b31a04.jpg",self.location).href},{episode:"Episode III",title:"Revenge of the Sith",story:"Це найтрагічніша частина саги. Палпатін розкриває себе як ситх Дарт Сідіус і спокушає Анакіна обіцянкою врятувати Падме від смерті. Анакін зраджує Орден джедаїв, допомагає знищити їх під час Наказу 66 і стає Дартом Вейдером. Імперія народжується, а галактика занурюється в темряву.",image:new URL("/star-wars-vite-api/assets/ep3-420d3aae.jpg",self.location).href},{episode:"Episode IV",title:"A New Hope",story:"Минуло багато років. Імперія править страхом. Але з’являється нова надія — Люк Скайвокер, син Анакіна. Разом із Леєю, Ганом Соло та Обі-Ваном він приєднується до Повстанців. Люк робить перший крок на шляху джедая і допомагає знищити Зірку Смерті.",image:new URL("/star-wars-vite-api/assets/ep4-8352284d.jpeg",self.location).href},{episode:"Episode V",title:"The Empire Strikes Back",story:"Імперія переходить у наступ. Люк проходить навчання у майстра Йоди та дізнається страшну правду: Дарт Вейдер — його батько. Ган Соло потрапляє в полон, а Повстанці зазнають поразки. Це найтемніший момент історії.",image:new URL("/star-wars-vite-api/assets/ep5-d6bb57ab.jpg",self.location).href},{episode:"Episode VI",title:"Return of the Jedi",story:"Фінальна битва за долю галактики. Люк відмовляється перейти на Темну сторону, навіть перед самим Імператором. У вирішальний момент Вейдер згадує, ким був колись, і рятує сина, знищивши Палпатіна. Анакін повертається до Світла, а Імперія падає.",image:new URL("/star-wars-vite-api/assets/ep6-e126457f.jpg",self.location).href}];document.addEventListener("DOMContentLoaded",function(){localStorage.setItem("moviesData",JSON.stringify(ye));const e=JSON.parse(localStorage.getItem("moviesData")),t=document.getElementById("movieModal"),n=document.getElementById("modalMovieTitle"),a=document.getElementById("modalMovieStory"),s=document.getElementById("modalMovieImage"),o=document.getElementById("movieModalClose"),r=document.getElementById("confirmModal"),i=document.getElementById("confirmYes"),d=document.getElementById("confirmNo");let p=null,c=null;function u(){clearTimeout(p),p=setTimeout(()=>{r.classList.add("active"),c=setTimeout(()=>{h()},15e3)},3e4)}function h(){clearTimeout(p),clearTimeout(c),r.classList.remove("active"),t.classList.remove("active")}i.addEventListener("click",()=>{r.classList.remove("active"),clearTimeout(c),u()}),d.addEventListener("click",h),o.addEventListener("click",h),document.querySelectorAll(".sw-movies__item").forEach(f=>{f.addEventListener("click",()=>{const S=f.querySelector("h3");if(!S)return;const g=e.find(T=>T.title.trim()===S.textContent.trim());g&&(n.textContent=g.title,a.textContent=g.story,s.src=g.image,t.classList.add("active"),u())})}),t.addEventListener("click",f=>{f.target===t&&h()})});document.addEventListener("DOMContentLoaded",function(){const e=[{name:"Luke Skywalker",description:"Люк Скайвокер — син Анакіна Скайвокера та Падме Амідали. Виріс на Татуїні, мріючи про пригоди. Після зустрічі з Обі-Ваном Кенобі розпочав шлях джедая. Навчався у майстра Йоди, протистояв Дарту Вейдеру та зумів повернути світло в серце свого батька. Саме Люк став символом нової надії для всієї галактики.",image:new URL("../images/luke.jpg",self.location).href},{name:"Obi-Wan Kenobi",description:"Обі-Ван Кенобі — майстер-джедай, учень Квай-Ґона Джинна та наставник Анакіна Скайвокера. Відомий своєю мудрістю, стриманістю та відданістю Ордену. Пережив падіння Республіки й роками переховувався, оберігаючи Люка. Його дуелі з Дартом Молом та Дартом Вейдером стали легендарними.",image:new URL("../images/obiwan.jpg",self.location).href},{name:"Yoda",description:"Йода — один із наймудріших і наймогутніших джедаїв в історії. Прожив понад 900 років і навчав покоління лицарів Ордену. Його знання Сили та глибока філософія зробили його духовним лідером джедаїв під час Війн клонів.",image:new URL("../images/yoda.jpg",self.location).href},{name:"Mace Windu",description:"Мейс Вінду — майстер-джедай та член Вищої ради Ордену. Володів унікальною формою бою світловим мечем Vaapad, що дозволяла використовувати агресію супротивника проти нього. Саме він викрив Палпатіна як ситха.",image:new URL("../images/mace.jpg",self.location).href},{name:"Qui-Gon Jinn",description:"Квай-Ґон Джинн — майстер-джедай, який вірив у Живу Силу більше, ніж у правила Ради. Саме він відкрив Анакіна Скайвокера та вірив, що той є Обраним. Загинув у двобої з Дартом Молом.",image:new URL("../images/quigon.jpg",self.location).href},{name:"Ahsoka Tano",description:"Асока Тано — падаван Анакіна Скайвокера. Пройшла важкий шлях під час Війн клонів. Залишила Орден, розчарувавшись у ньому, але не зрадила світлу сторону. Стала незалежною воїтелькою Сили.",image:new URL("../images/ahsoka.jpg",self.location).href},{name:"Darth Vader",description:"Дарт Вейдер — колишній Анакін Скайвокер. Перейшов на Темну сторону через страх втрати та маніпуляції Палпатіна. Став правою рукою Імператора і символом страху. Врешті-решт пожертвував собою, щоб врятувати сина.",image:new URL("../images/vader.jpg",self.location).href},{name:"Darth Sidious",description:"Дарт Сідіус, також відомий як Імператор Палпатін, — темний лорд ситхів, що знищив Республіку та створив Імперію. Майстер інтриг і маніпуляцій, який роками таємно керував галактикою.",image:new URL("../images/sidious.jpg",self.location).href},{name:"Darth Maul",description:"Дарт Мол — учень Дарта Сідіуса, відомий своїм подвійним червоним світловим мечем. Після поразки від Обі-Вана вижив і роками прагнув помсти.",image:new URL("../images/maul.jpg",self.location).href},{name:"Count Dooku",description:"Граф Дуку — колишній джедай, який розчарувався в Ордені та став ситхом Дартом Тиранусом. Лідер сепаратистів під час Війн клонів.",image:new URL("../images/dooku.jpg",self.location).href},{name:"Kylo Ren",description:"Кайло Рен — син Леї Органи та Гана Соло, онук Дарта Вейдера. Розривався між світлом і темрявою. Прагнув наслідувати Вейдера, але врешті повернувся до світла.",image:new URL("../images/kylo.jpg",self.location).href},{name:"Leia Organa",description:"Лея Органа — принцеса Альдераана, лідер Повстанців та сестра Люка. Сильна, розумна й хоробра, вона стала ключовою фігурою в боротьбі проти Імперії.",image:new URL("../images/leia.jpg",self.location).href},{name:"Han Solo",description:"Ган Соло — харизматичний контрабандист і капітан «Тисячолітнього Сокола». Спочатку цинічний, але став героєм Повстанців.",image:new URL("../images/han.jpg",self.location).href},{name:"Cassian Andor",description:"Кассіан Андор — розвідник Повстанців, який пожертвував собою під час місії зі здобуття планів Зірки Смерті.",image:new URL("../images/andor.jpg",self.location).href},{name:"Mon Mothma",description:"Мон Мотма — одна з головних лідерів Альянсу Повстанців. Вона об’єднала сили проти Імперії.",image:new URL("../images/monmothma.jpg",self.location).href},{name:"Jyn Erso",description:"Джин Ерсо — донька вченого, який створював Зірку Смерті. Допомогла викрасти її плани й дала шанс Повстанцям.",image:new URL("../images/jyn.jpg",self.location).href},{name:"Grand Moff Tarkin",description:"Гранд-моф Таркін — високопоставлений офіцер Імперії, що командував Зіркою Смерті.",image:new URL("../images/tarkin.jpg",self.location).href},{name:"Admiral Thrawn",description:"Гранд-адмірал Траун — геніальний стратег Імперії з раси чиссів. Відомий холодним розумом і глибоким аналізом ворогів.",image:new URL("../images/thrawn.jpg",self.location).href},{name:"Imperial Inquisitors",description:"Імперські Інквізитори — мисливці на джедаїв, що служили Дарту Вейдеру та полювали на тих, хто вижив після Наказу 66.",image:new URL("../images/inquisitor.jpg",self.location).href}];localStorage.setItem("charactersData",JSON.stringify(e));const t=JSON.parse(localStorage.getItem("charactersData")),n=document.getElementById("characterModal"),a=document.getElementById("characterModalClose"),s=document.getElementById("characterName"),o=document.getElementById("characterDescription"),r=document.getElementById("characterImage");document.querySelectorAll(".character-group__item").forEach(d=>{d.addEventListener("click",()=>{const p=d.textContent.trim(),c=t.find(u=>u.name===p);c&&(s.textContent=c.name,o.textContent=c.description,r.src=c.image,n.classList.add("active"))})}),a.addEventListener("click",()=>{n.classList.remove("active")}),n.addEventListener("click",d=>{d.target===n&&n.classList.remove("active")})});console.log("%c Зоряне небо в header Star Wars","color: white; background-color: #D33F49");const v=document.getElementById("header-stars"),we=40;let L=[];//! створення зірок
function Le(){if(!v){console.log("Контейнер #header-stars не знайдено");return}v.innerHTML="",L=[];for(let e=0;e<we;e++){const t=document.createElement("div");t.className="star",t.style.left=Math.random()*100+"%",t.style.top=Math.random()*100+"%";const n=Math.random()*3+2;t.style.width=`${n}px`,t.style.height=`${n}px`,v.appendChild(t),L.push(t)}}//! проміс для однієї зірки
function ve(e){return new Promise(t=>{const n=500+Math.random()*3e3,a=["#fff","#ffd700","#87ceeb","#ff69b4"],s=a[Math.floor(Math.random()*a.length)];e.style.background=s;//! старт мінімальна яскравість
e.style.opacity=.2;//! плавний розгін до 100%
setTimeout(()=>{e.classList.add("glow");//! постійне мерехтіння
e.style.animation=`twinkle ${1+Math.random()*2}s infinite ease-in-out`,t("Зірка активна")},n)})}//! запуск усіх зірок
function Ee(){if(!L.length)return;const e=L.map(t=>ve(t));Promise.allSettled(e).then(()=>{console.log("Усі зірки активні")})}//! запуск
Le();Ee();
