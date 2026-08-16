import{H as f}from"./timer-4c11cdbd.js";const P=`{{#each this}}
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
{{/each}}`,x=document.querySelector(".sw-eras__container"),B="http://localhost:3000/",N="starWars";async function H(){try{const t=await(await fetch(`${B}${N}`)).json(),n=f.compile(P);x.innerHTML=n(t.encyclopedia.eras)}catch(e){console.log(e)}}H();const A=`{{#each this}}
<article class="sw-faction sw-faction--{{class}}">
  <h3>{{title}}</h3>

  <img
    src="{{image}}"
    alt="{{imageAlt}}"
  />

  <p>{{description}}</p>
</article>
{{/each}}`,F=document.querySelector(".sw-factions"),O="http://localhost:3000/",J="starWars";async function W(){const t=await(await fetch(`${O}${J}`)).json(),n=f.compile(A);F.insertAdjacentHTML("beforeend",n(t.encyclopedia.factions))}W();const V=`{{#each this}}
<li data-form="{{key}}">
    {{name}}
</li>
{{/each}}`,G=document.querySelector(".forms-list"),Y="http://localhost:3000/",K="starWars";async function z(){const t=await(await fetch(`${Y}${K}`)).json(),n=f.compile(V);G.innerHTML=n(t.encyclopedia.lightsaberForms)}z();const Q=`<h2 class="sw-planets__title sw-section-title">
  Відомі планети Галактики
</h2>

<form class="create-planet-form">
  <input
    class="planet-name"
    type="text"
    placeholder="Назва планети"
    autocomplete="off"
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
  autocomplete="off"
/>

<button id="searchBtn" type="button">
  Знайти
</button>

<ul class="sw-planets__list">

  {{#each this}}

    <li
      class="sw-planets__item planet-card"
      data-id="{{id}}"
      data-name="{{name}}"
    >

      <div>
        <h3 class="planet-card__title">
          {{name}}
        </h3>

        <p class="planet-card__text">
          {{description}}
        </p>
      </div>

      <div class="planet-card__actions">

        <button
          type="button"
          class="edit-btn"
          data-id="{{id}}"
        >
          ✏️ Редагувати
        </button>

        <button
          type="button"
          class="delete-btn"
          data-id="{{id}}"
        >
          🗑 Видалити
        </button>

      </div>

    </li>

  {{/each}}

</ul>`,M="http://localhost:3000/",_="starWars",X=document.querySelector(".sw-planets");let h={},c=[],y=null,q=null;async function R(){console.log("1. getPlanets()");try{const e=await fetch(`${M}${_}`);if(!e.ok)throw new Error(`HTTP error: ${e.status}`);const t=await e.json();console.log("Отримали JSON:",t),h=t.encyclopedia,c=h.planets||[],console.log("Планети:",c),k()}catch(e){console.error("Помилка getPlanets:",e)}}function k(e=c){console.log("2. renderPlanets()"),console.log("Малюємо:",e);const t=f.compile(Q);X.innerHTML=t(e),Z(),de()}function Z(){console.log("3. addListeners()");const e=document.querySelector(".create-planet-form"),t=document.querySelector(".sw-planets__list"),n=document.querySelector("#searchPlanet"),o=document.querySelector("#searchBtn");e||console.error("❌ .create-planet-form НЕ знайдений"),t||console.error("❌ .sw-planets__list НЕ знайдений"),e&&e.addEventListener("submit",ee),t&&t.addEventListener("click",te),n&&n.addEventListener("input",le),o&&o.addEventListener("click",ie)}function ee(e){e.preventDefault(),console.log("4. Натиснуто Додати");const t=document.querySelector(".planet-name");if(!t){console.error("❌ .planet-name не знайдений");return}const n=t.value.trim();if(!n){alert("Введіть назву планети."),t.focus();return}console.log("Назва нової планети:",n),q=null,U("create",{name:n,climate:"",terrain:"",gravity:"",population:"",description:""})}function te(e){const t=e.target.closest(".edit-btn"),n=e.target.closest(".delete-btn");if(t){e.stopPropagation();const o=Number(t.dataset.id);console.log("5. EDIT. ID:",o);const a=c.find(r=>Number(r.id)===o);if(!a){console.error("❌ Планету не знайдено:",o);return}q=o,U("edit",a);return}if(n){e.stopPropagation();const o=Number(n.dataset.id);console.log("6. DELETE. ID:",o);const a=c.find(r=>Number(r.id)===o);if(!a){console.error("❌ Планету не знайдено:",o);return}y=o,re(a);return}}function ne(){let e=document.querySelector("#planetCrudModal");if(e)return e;console.log("Створюємо CRUD modal"),e=document.createElement("div"),e.id="planetCrudModal",e.className="modal",e.innerHTML=`
    <div class="modal__content">

      <button
        type="button"
        class="planet-crud-close"
        aria-label="Закрити"
      >
        ✕
      </button>

      <h2 class="planet-crud-title"></h2>

      <form class="planet-crud-form">

        <label>
          Назва планети
          <input
            class="crud-name"
            type="text"
            name="name"
            autocomplete="off"
            required
          />
        </label>

        <label>
          Клімат
          <input
            class="crud-climate"
            type="text"
            name="climate"
            autocomplete="off"
            required
          />
        </label>

        <label>
          Поверхня
          <input
            class="crud-terrain"
            type="text"
            name="terrain"
            autocomplete="off"
            required
          />
        </label>

        <label>
          Гравітація
          <input
            class="crud-gravity"
            type="text"
            name="gravity"
            autocomplete="off"
            required
          />
        </label>

        <label>
          Населення
          <input
            class="crud-population"
            type="number"
            name="population"
            min="0"
            autocomplete="off"
            required
          />
        </label>

        <label>
          Опис
          <textarea
            class="crud-description"
            name="description"
            autocomplete="off"
            required
          ></textarea>
        </label>

        <div class="planet-crud-actions">

          <button
            type="submit"
            class="planet-save-btn"
          >
            Зберегти
          </button>

          <button
            type="button"
            class="planet-cancel-btn"
          >
            Скасувати
          </button>

        </div>

      </form>
    </div>
  `,document.body.appendChild(e);const t=e.querySelector(".planet-crud-close"),n=e.querySelector(".planet-cancel-btn"),o=e.querySelector(".planet-crud-form");return t.addEventListener("click",v),n.addEventListener("click",v),e.addEventListener("click",a=>{a.target===e&&v()}),o.addEventListener("submit",oe),e}function U(e,t){console.log("7. openPlanetFormModal()",e,t);const n=ne(),o=n.querySelector(".planet-crud-title"),a=n.querySelector(".crud-name"),r=n.querySelector(".crud-climate"),l=n.querySelector(".crud-terrain"),u=n.querySelector(".crud-gravity"),s=n.querySelector(".crud-population"),i=n.querySelector(".crud-description");e==="create"?o.textContent="Додати нову планету":o.textContent="Редагувати планету",a.value=t.name||"",r.value=t.climate||"",l.value=t.terrain||"",u.value=t.gravity||"",s.value=t.population||"",i.value=t.description||"",n.dataset.mode=e,n.style.display="block",a.focus()}function v(){console.log("Закриваємо CRUD modal");const e=document.querySelector("#planetCrudModal");if(!e)return;e.style.display="none";const t=e.querySelector(".planet-crud-form");t&&t.reset(),q=null}async function oe(e){e.preventDefault(),console.log("8. Submit CRUD form");const t=e.target,o=document.querySelector("#planetCrudModal").dataset.mode,a=t.querySelector(".crud-name").value.trim(),r=t.querySelector(".crud-climate").value.trim(),l=t.querySelector(".crud-terrain").value.trim(),u=t.querySelector(".crud-gravity").value.trim(),s=t.querySelector(".crud-population").value.trim(),i=t.querySelector(".crud-description").value.trim();if(!a){alert("Введіть назву планети.");return}if(a.length<2){alert("Назва планети повинна містити мінімум 2 символи.");return}if(!r){alert("Введіть клімат планети.");return}if(!l){alert("Введіть тип поверхні планети.");return}if(!u){alert("Введіть гравітацію планети.");return}if(s===""){alert("Введіть населення планети.");return}const d=Number(s);if(!Number.isInteger(d)||d<0){alert("Населення повинно бути цілим числом не менше 0.");return}if(!i){alert("Введіть опис планети.");return}const p={name:a,climate:r,terrain:l,gravity:u,population:String(d),description:i};if(console.log("Дані планети:",p),o==="create"){const m={id:ae(),...p};console.log("Створюємо:",m),c.push(m),await T(),v();const g=document.querySelector(".create-planet-form");g&&g.reset(),alert("Планету успішно додано!");return}if(o==="edit"){const m=c.findIndex(g=>Number(g.id)===Number(q));if(m===-1){console.error("❌ Не знайшли планету для редагування");return}c[m]={...c[m],...p},console.log("Оновлена планета:",c[m]),await T(),v(),alert("Планету успішно відредаговано!")}}function ae(){const e=c.map(n=>Number(n.id));return(e.length?Math.max(...e):0)+1}function se(){let e=document.querySelector("#planetDeleteModal");return e||(console.log("Створюємо Delete modal"),e=document.createElement("div"),e.id="planetDeleteModal",e.className="modal",e.innerHTML=`
    <div class="modal__content">

      <button
        type="button"
        class="planet-delete-close"
      >
        ✕
      </button>

      <h2>Видалити планету?</h2>

      <p class="planet-delete-text"></p>

      <div class="planet-delete-actions">

        <button
          type="button"
          class="planet-delete-confirm"
        >
          Видалити
        </button>

        <button
          type="button"
          class="planet-delete-cancel"
        >
          Скасувати
        </button>

      </div>

    </div>
  `,document.body.appendChild(e),e.querySelector(".planet-delete-close").addEventListener("click",L),e.querySelector(".planet-delete-cancel").addEventListener("click",L),e.querySelector(".planet-delete-confirm").addEventListener("click",ce),e.addEventListener("click",t=>{t.target===e&&L()}),e)}function re(e){console.log("9. Відкриваємо delete modal");const t=se(),n=t.querySelector(".planet-delete-text");n.textContent=`Ви дійсно хочете видалити планету "${e.name}"?`,t.style.display="block"}function L(){const e=document.querySelector("#planetDeleteModal");e&&(e.style.display="none",y=null)}async function ce(){if(console.log("10. Підтвердження DELETE:",y),y===null){console.error("❌ ID для видалення відсутній");return}const e=c.findIndex(t=>Number(t.id)===Number(y));if(e===-1){console.error("❌ Планету для видалення не знайдено");return}c.splice(e,1),await T(),L(),alert("Планету успішно видалено!")}async function T(){console.log("11. savePlanets()");try{h.planets=c,console.log("PATCH:",`${M}${_}`),console.log("Відправляємо:",h);const e=await fetch(`${M}${_}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({encyclopedia:h})});if(!e.ok)throw new Error(`PATCH error: ${e.status}`);const t=await e.json();console.log("PATCH результат:",t),await R()}catch(e){console.error("❌ Помилка savePlanets:",e),alert("Не вдалося зберегти зміни. Перевір json-server.")}}function le(e){const t=e.target.value.trim().toLowerCase();console.log("12. Пошук:",t),$(t)}function ie(){const e=document.querySelector("#searchPlanet");if(!e)return;const t=e.value.trim().toLowerCase();$(t)}function $(e){if(!e){k(c);return}const t=c.filter(n=>n.name.toLowerCase().includes(e));console.log("Результат пошуку:",t),k(t)}function de(){console.log("13. addPlanetModalListeners()");const e=document.querySelectorAll(".planet-card"),t=document.getElementById("planetModal"),n=document.getElementById("modalTitle"),o=document.getElementById("modalText"),a=document.querySelector(".modal__close");if(!t){console.error("❌ #planetModal не знайдений");return}e.forEach(r=>{r.addEventListener("click",async l=>{if(l.target.closest(".edit-btn")||l.target.closest(".delete-btn"))return;const u=Number(r.dataset.id);console.log("14. Відкриваємо планету:",u);const s=c.find(i=>Number(i.id)===u);if(!s){console.error("Планету не знайдено");return}n.textContent=s.name,o.innerHTML=`
          <p>
            <b>Climate:</b>
            ${s.climate}
          </p>

          <p>
            <b>Population:</b>
            ${s.population}
          </p>

          <p>
            <b>Gravity:</b>
            ${s.gravity}
          </p>

          <p>
            <b>Terrain:</b>
            ${s.terrain}
          </p>

          <p>
            <b>Description:</b>
            ${s.description}
          </p>
        `,t.style.display="block"})}),a&&(a.onclick=()=>{t.style.display="none"}),t.onclick=r=>{r.target===t&&(t.style.display="none")}}console.log("🚀 planets.js запущений");R();const me=`{{#each this}}
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
{{/each}}`,ue=document.querySelector(".sw-characters__groups"),pe="http://localhost:3000/",fe="starWars";async function ge(){const t=await(await fetch(`${pe}${fe}`)).json(),n=f.compile(me);ue.innerHTML=n(t.encyclopedia.characterGroups)}ge();const he=`{{#each this}}
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
{{/each}}`,ye=document.querySelector(".sw-movies__list"),ve="http://localhost:3000/",be="starWars";async function we(){const t=await(await fetch(`${ve}${be}`)).json(),n=f.compile(he);ye.innerHTML=n(t.encyclopedia.movies)}we();let Le=[{id:"shii-cho",name:"Shii-Cho",description:"Найстаріша форма бою на світлових мечах. Орієнтована на базові атаки та боротьбу з кількома ворогами.",users:["Люк Скайвокер","Кіт Фісто","Багато джедаїв Старої Республіки"],image:new URL("/star-wars-vite-api/assets/shii-cho-a4e31af0.jpg",self.location).href},{id:"makashi",name:"Makashi",description:"Елегантний дуельний стиль, створений спеціально для бою проти інших мечників.",users:["Граф Дуку","Ассаж Вентресс"],image:new URL("/star-wars-vite-api/assets/makashi-20c0af28.jpg",self.location).href},{id:"soresu",name:"Soresu",description:"Найкраща оборонна форма, зосереджена на блокуванні атак та виживанні.",users:["Обі-Ван Кенобі","Люмінарія Ундулі"],image:new URL("/star-wars-vite-api/assets/soresu-d14f2536.png",self.location).href},{id:"ataru",name:"Ataru",description:"Акробатичний стиль із великою кількістю стрибків і швидких атак.",users:["Йода","Квай-Гон Джинн"],image:new URL("/star-wars-vite-api/assets/ataru-d8c389e6.jpg",self.location).href},{id:"djem-so",name:"Djem So",description:"Агресивний стиль, що поєднує блокування і потужні контратаки.",users:["Анакін Скайвокер","Люк Скайвокер"],image:new URL("/star-wars-vite-api/assets/djem-so-cd3a76cc.jpg",self.location).href},{id:"niman",name:"Niman",description:"Збалансована форма, що поєднує бойові техніки і використання Сили.",users:["Багато джедаїв Ордену"],image:new URL("/star-wars-vite-api/assets/niman-8799c4db.jpg",self.location).href},{id:"juyo",name:"Juyo / Vaapad",description:"Найбільш агресивний стиль, що використовує темні емоції в бою.",users:["Мейс Вінду","Дарт Мол"],image:new URL("/star-wars-vite-api/assets/juyo-1bb8a071.jpg",self.location).href}];localStorage.getItem("lightsaberForms")||localStorage.setItem("lightsaberForms",JSON.stringify(Le));const Se=document.querySelectorAll(".forms-list li"),S=document.querySelector(".form-modal-backdrop"),Ee=document.querySelector(".modal-img"),qe=document.querySelector(".modal-title"),Ie=document.querySelector(".modal-desc"),Me=document.querySelector(".modal-users"),_e=document.querySelector(".modal-close"),ke=JSON.parse(localStorage.getItem("lightsaberForms"))||[];Se.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.form,n=ke.find(o=>o.id===t);Ee.src=n.image,qe.textContent=n.name,Ie.textContent=n.description,Me.innerHTML=n.users.map(o=>`<li>${o}</li>`).join(""),S.classList.remove("is-hidden")})});function j(){S.classList.add("is-hidden")}_e.addEventListener("click",j);S.addEventListener("click",e=>{e.target===S&&j()});document.addEventListener("keydown",e=>{e.key==="Escape"&&j()});const Te=[{episode:"Episode I",title:"The Phantom Menace",story:"Галактична Республіка ще здається сильною, але всередині вже гниє від політичних інтриг. Джедаї Квай-Ґон Джинн і Обі-Ван Кенобі знаходять на Татуїні хлопчика — Анакіна Скайвокера, що має безпрецедентну силу. Його вважають Обраним, який принесе баланс Силі. Але в тіні вже діє темний лорд ситхів, а повернення Сітхів стає початком великої трагедії.",image:new URL("/star-wars-vite-api/assets/ep1-d7b906cd.webp",self.location).href},{episode:"Episode II",title:"Attack of the Clones",story:"Минуло десять років. Анакін став сильним, але всередині нього кипить страх і ревнощі. Тим часом у галактиці спалахує Війна клонів — армія клонів бореться проти сепаратистів. Любов Анакіна до Падме стає його слабкістю, а маніпуляції Палпатіна поступово штовхають його до Темної сторони.",image:new URL("/star-wars-vite-api/assets/ep2-82b31a04.jpg",self.location).href},{episode:"Episode III",title:"Revenge of the Sith",story:"Це найтрагічніша частина саги. Палпатін розкриває себе як ситх Дарт Сідіус і спокушає Анакіна обіцянкою врятувати Падме від смерті. Анакін зраджує Орден джедаїв, допомагає знищити їх під час Наказу 66 і стає Дартом Вейдером. Імперія народжується, а галактика занурюється в темряву.",image:new URL("/star-wars-vite-api/assets/ep3-420d3aae.jpg",self.location).href},{episode:"Episode IV",title:"A New Hope",story:"Минуло багато років. Імперія править страхом. Але з’являється нова надія — Люк Скайвокер, син Анакіна. Разом із Леєю, Ганом Соло та Обі-Ваном він приєднується до Повстанців. Люк робить перший крок на шляху джедая і допомагає знищити Зірку Смерті.",image:new URL("/star-wars-vite-api/assets/ep4-8352284d.jpeg",self.location).href},{episode:"Episode V",title:"The Empire Strikes Back",story:"Імперія переходить у наступ. Люк проходить навчання у майстра Йоди та дізнається страшну правду: Дарт Вейдер — його батько. Ган Соло потрапляє в полон, а Повстанці зазнають поразки. Це найтемніший момент історії.",image:new URL("/star-wars-vite-api/assets/ep5-d6bb57ab.jpg",self.location).href},{episode:"Episode VI",title:"Return of the Jedi",story:"Фінальна битва за долю галактики. Люк відмовляється перейти на Темну сторону, навіть перед самим Імператором. У вирішальний момент Вейдер згадує, ким був колись, і рятує сина, знищивши Палпатіна. Анакін повертається до Світла, а Імперія падає.",image:new URL("/star-wars-vite-api/assets/ep6-e126457f.jpg",self.location).href}];document.addEventListener("DOMContentLoaded",function(){localStorage.setItem("moviesData",JSON.stringify(Te));const e=JSON.parse(localStorage.getItem("moviesData")),t=document.getElementById("movieModal"),n=document.getElementById("modalMovieTitle"),o=document.getElementById("modalMovieStory"),a=document.getElementById("modalMovieImage"),r=document.getElementById("movieModalClose"),l=document.getElementById("confirmModal"),u=document.getElementById("confirmYes"),s=document.getElementById("confirmNo");let i=null,d=null;function p(){clearTimeout(i),i=setTimeout(()=>{l.classList.add("active"),d=setTimeout(()=>{m()},15e3)},3e4)}function m(){clearTimeout(i),clearTimeout(d),l.classList.remove("active"),t.classList.remove("active")}u.addEventListener("click",()=>{l.classList.remove("active"),clearTimeout(d),p()}),s.addEventListener("click",m),r.addEventListener("click",m),document.querySelectorAll(".sw-movies__item").forEach(b=>{b.addEventListener("click",()=>{const C=b.querySelector("h3");if(!C)return;const w=e.find(D=>D.title.trim()===C.textContent.trim());w&&(n.textContent=w.title,o.textContent=w.story,a.src=w.image,t.classList.add("active"),p())})}),t.addEventListener("click",b=>{b.target===t&&m()})});document.addEventListener("DOMContentLoaded",function(){const e=[{name:"Luke Skywalker",description:"Люк Скайвокер — син Анакіна Скайвокера та Падме Амідали. Виріс на Татуїні, мріючи про пригоди. Після зустрічі з Обі-Ваном Кенобі розпочав шлях джедая. Навчався у майстра Йоди, протистояв Дарту Вейдеру та зумів повернути світло в серце свого батька. Саме Люк став символом нової надії для всієї галактики.",image:new URL("../images/luke.jpg",self.location).href},{name:"Obi-Wan Kenobi",description:"Обі-Ван Кенобі — майстер-джедай, учень Квай-Ґона Джинна та наставник Анакіна Скайвокера. Відомий своєю мудрістю, стриманістю та відданістю Ордену. Пережив падіння Республіки й роками переховувався, оберігаючи Люка. Його дуелі з Дартом Молом та Дартом Вейдером стали легендарними.",image:new URL("../images/obiwan.jpg",self.location).href},{name:"Yoda",description:"Йода — один із наймудріших і наймогутніших джедаїв в історії. Прожив понад 900 років і навчав покоління лицарів Ордену. Його знання Сили та глибока філософія зробили його духовним лідером джедаїв під час Війн клонів.",image:new URL("../images/yoda.jpg",self.location).href},{name:"Mace Windu",description:"Мейс Вінду — майстер-джедай та член Вищої ради Ордену. Володів унікальною формою бою світловим мечем Vaapad, що дозволяла використовувати агресію супротивника проти нього. Саме він викрив Палпатіна як ситха.",image:new URL("../images/mace.jpg",self.location).href},{name:"Qui-Gon Jinn",description:"Квай-Ґон Джинн — майстер-джедай, який вірив у Живу Силу більше, ніж у правила Ради. Саме він відкрив Анакіна Скайвокера та вірив, що той є Обраним. Загинув у двобої з Дартом Молом.",image:new URL("../images/quigon.jpg",self.location).href},{name:"Ahsoka Tano",description:"Асока Тано — падаван Анакіна Скайвокера. Пройшла важкий шлях під час Війн клонів. Залишила Орден, розчарувавшись у ньому, але не зрадила світлу сторону. Стала незалежною воїтелькою Сили.",image:new URL("../images/ahsoka.jpg",self.location).href},{name:"Darth Vader",description:"Дарт Вейдер — колишній Анакін Скайвокер. Перейшов на Темну сторону через страх втрати та маніпуляції Палпатіна. Став правою рукою Імператора і символом страху. Врешті-решт пожертвував собою, щоб врятувати сина.",image:new URL("../images/vader.jpg",self.location).href},{name:"Darth Sidious",description:"Дарт Сідіус, також відомий як Імператор Палпатін, — темний лорд ситхів, що знищив Республіку та створив Імперію. Майстер інтриг і маніпуляцій, який роками таємно керував галактикою.",image:new URL("../images/sidious.jpg",self.location).href},{name:"Darth Maul",description:"Дарт Мол — учень Дарта Сідіуса, відомий своїм подвійним червоним світловим мечем. Після поразки від Обі-Вана вижив і роками прагнув помсти.",image:new URL("../images/maul.jpg",self.location).href},{name:"Count Dooku",description:"Граф Дуку — колишній джедай, який розчарувався в Ордені та став ситхом Дартом Тиранусом. Лідер сепаратистів під час Війн клонів.",image:new URL("../images/dooku.jpg",self.location).href},{name:"Kylo Ren",description:"Кайло Рен — син Леї Органи та Гана Соло, онук Дарта Вейдера. Розривався між світлом і темрявою. Прагнув наслідувати Вейдера, але врешті повернувся до світла.",image:new URL("../images/kylo.jpg",self.location).href},{name:"Leia Organa",description:"Лея Органа — принцеса Альдераана, лідер Повстанців та сестра Люка. Сильна, розумна й хоробра, вона стала ключовою фігурою в боротьбі проти Імперії.",image:new URL("../images/leia.jpg",self.location).href},{name:"Han Solo",description:"Ган Соло — харизматичний контрабандист і капітан «Тисячолітнього Сокола». Спочатку цинічний, але став героєм Повстанців.",image:new URL("../images/han.jpg",self.location).href},{name:"Cassian Andor",description:"Кассіан Андор — розвідник Повстанців, який пожертвував собою під час місії зі здобуття планів Зірки Смерті.",image:new URL("../images/andor.jpg",self.location).href},{name:"Mon Mothma",description:"Мон Мотма — одна з головних лідерів Альянсу Повстанців. Вона об’єднала сили проти Імперії.",image:new URL("../images/monmothma.jpg",self.location).href},{name:"Jyn Erso",description:"Джин Ерсо — донька вченого, який створював Зірку Смерті. Допомогла викрасти її плани й дала шанс Повстанцям.",image:new URL("../images/jyn.jpg",self.location).href},{name:"Grand Moff Tarkin",description:"Гранд-моф Таркін — високопоставлений офіцер Імперії, що командував Зіркою Смерті.",image:new URL("../images/tarkin.jpg",self.location).href},{name:"Admiral Thrawn",description:"Гранд-адмірал Траун — геніальний стратег Імперії з раси чиссів. Відомий холодним розумом і глибоким аналізом ворогів.",image:new URL("../images/thrawn.jpg",self.location).href},{name:"Imperial Inquisitors",description:"Імперські Інквізитори — мисливці на джедаїв, що служили Дарту Вейдеру та полювали на тих, хто вижив після Наказу 66.",image:new URL("../images/inquisitor.jpg",self.location).href}];localStorage.setItem("charactersData",JSON.stringify(e));const t=JSON.parse(localStorage.getItem("charactersData")),n=document.getElementById("characterModal"),o=document.getElementById("characterModalClose"),a=document.getElementById("characterName"),r=document.getElementById("characterDescription"),l=document.getElementById("characterImage");document.querySelectorAll(".character-group__item").forEach(s=>{s.addEventListener("click",()=>{const i=s.textContent.trim(),d=t.find(p=>p.name===i);d&&(a.textContent=d.name,r.textContent=d.description,l.src=d.image,n.classList.add("active"))})}),o.addEventListener("click",()=>{n.classList.remove("active")}),n.addEventListener("click",s=>{s.target===n&&n.classList.remove("active")})});console.log("%c Зоряне небо в header Star Wars","color: white; background-color: #D33F49");const I=document.getElementById("header-stars"),je=40;let E=[];//! створення зірок
function Ce(){if(!I){console.log("Контейнер #header-stars не знайдено");return}I.innerHTML="",E=[];for(let e=0;e<je;e++){const t=document.createElement("div");t.className="star",t.style.left=Math.random()*100+"%",t.style.top=Math.random()*100+"%";const n=Math.random()*3+2;t.style.width=`${n}px`,t.style.height=`${n}px`,I.appendChild(t),E.push(t)}}//! проміс для однієї зірки
function Re(e){return new Promise(t=>{const n=500+Math.random()*3e3,o=["#fff","#ffd700","#87ceeb","#ff69b4"],a=o[Math.floor(Math.random()*o.length)];e.style.background=a;//! старт мінімальна яскравість
e.style.opacity=.2;//! плавний розгін до 100%
setTimeout(()=>{e.classList.add("glow");//! постійне мерехтіння
e.style.animation=`twinkle ${1+Math.random()*2}s infinite ease-in-out`,t("Зірка активна")},n)})}//! запуск усіх зірок
function Ue(){if(!E.length)return;const e=E.map(t=>Re(t));Promise.allSettled(e).then(()=>{console.log("Усі зірки активні")})}//! запуск
Ce();Ue();
