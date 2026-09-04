import{H as L,g as K,c as j}from"./timer-fbbfd9de.js";const z=`{{#each this}}
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
{{/each}}`,Q=document.querySelector(".sw-eras__container"),X="http://localhost:3000/",Z="starWars";async function ee(){try{const t=await(await fetch(`${X}${Z}`)).json(),n=L.compile(z);Q.innerHTML=n(t.encyclopedia.eras)}catch(e){console.log(e)}}ee();const te=`{{#each this}}
<article class="sw-faction sw-faction--{{class}}">
  <h3>{{title}}</h3>

  <img
    src="{{image}}"
    alt="{{imageAlt}}"
  />

  <p>{{description}}</p>
</article>
{{/each}}`,ne=document.querySelector(".sw-factions"),oe="http://localhost:3000/",ae="starWars";async function re(){const t=await(await fetch(`${oe}${ae}`)).json(),n=L.compile(te);ne.insertAdjacentHTML("beforeend",n(t.encyclopedia.factions))}re();const se=`{{#each this}}
<li data-form="{{key}}">
    {{name}}
</li>
{{/each}}`,ie=document.querySelector(".forms-list"),ce="http://localhost:3000/",le="starWars";async function de(){const t=await(await fetch(`${ce}${le}`)).json(),n=L.compile(se);ie.innerHTML=n(t.encyclopedia.lightsaberForms)}de();var me="Expected a function",H=0/0,ue="[object Symbol]",pe=/^\s+|\s+$/g,fe=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,he=/^0o[0-7]+$/i,ye=parseInt,be=typeof j=="object"&&j&&j.Object===Object&&j,ve=typeof self=="object"&&self&&self.Object===Object&&self,Le=be||ve||Function("return this")(),we=Object.prototype,Se=we.toString,Ee=Math.max,Ie=Math.min,x=function(){return Le.Date.now()};function Te(e,t,n){var o,a,s,c,i,r,d=0,p=!1,f=!1,u=!0;if(typeof e!="function")throw new TypeError(me);t=F(t)||0,$(n)&&(p=!!n.leading,f="maxWait"in n,s=f?Ee(F(n.maxWait)||0,t):s,u="trailing"in n?!!n.trailing:u);function g(l){var h=o,w=a;return o=a=void 0,d=l,c=e.apply(w,h),c}function b(l){return d=l,i=setTimeout(v,t),p?g(l):c}function T(l){var h=l-r,w=l-d,A=t-h;return f?Ie(A,s-w):A}function y(l){var h=l-r,w=l-d;return r===void 0||h>=t||h<0||f&&w>=s}function v(){var l=x();if(y(l))return O(l);i=setTimeout(v,T(l))}function O(l){return i=void 0,u&&o?g(l):(o=a=void 0,c)}function V(){i!==void 0&&clearTimeout(i),d=0,o=r=a=i=void 0}function Y(){return i===void 0?c:O(x())}function C(){var l=x(),h=y(l);if(o=arguments,a=this,r=l,h){if(i===void 0)return b(r);if(f)return i=setTimeout(v,t),g(r)}return i===void 0&&(i=setTimeout(v,t)),c}return C.cancel=V,C.flush=Y,C}function $(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function je(e){return!!e&&typeof e=="object"}function Me(e){return typeof e=="symbol"||je(e)&&Se.call(e)==ue}function F(e){if(typeof e=="number")return e;if(Me(e))return H;if($(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=$(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(pe,"");var n=ge.test(e);return n||he.test(e)?ye(e.slice(2),n?2:8):fe.test(e)?H:+e}var ke=Te;const qe=K(ke),_e=`<h2 class="sw-planets__title sw-section-title">
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

</ul>`,U="http://localhost:3000/",D="starWars",Ce=document.querySelector(".sw-planets");let S={},m=[],E=null,_=null;async function W(){console.log("1. getPlanets()");try{const e=await fetch(`${U}${D}`);if(!e.ok)throw new Error(`HTTP error: ${e.status}`);const t=await e.json();console.log("Отримали JSON:",t),S=t.encyclopedia,m=S.planets||[],console.log("Планети:",m),P()}catch(e){console.error("Помилка getPlanets:",e)}}function P(e=m){console.log("2. renderPlanets()"),console.log("Малюємо:",e);const t=L.compile(_e);Ce.innerHTML=t(e),xe(),Fe()}function xe(){console.log("3. addListeners()");const e=document.querySelector(".create-planet-form"),t=document.querySelector(".sw-planets__list"),n=document.querySelector("#searchPlanet"),o=document.querySelector("#searchBtn");e||console.error("❌ .create-planet-form НЕ знайдений"),t||console.error("❌ .sw-planets__list НЕ знайдений"),e&&e.addEventListener("submit",Re),t&&t.addEventListener("click",$e),n&&n.addEventListener("input",Ae),o&&o.addEventListener("click",He)}function Re(e){e.preventDefault(),console.log("4. Натиснуто Додати");const t=document.querySelector(".planet-name");if(!t){console.error("❌ .planet-name не знайдений");return}const n=t.value.trim();if(!n){alert("Введіть назву планети."),t.focus();return}console.log("Назва нової планети:",n),_=null,J("create",{name:n,climate:"",terrain:"",gravity:"",population:"",description:""})}function $e(e){const t=e.target.closest(".edit-btn"),n=e.target.closest(".delete-btn");if(t){e.stopPropagation();const o=Number(t.dataset.id);console.log("5. EDIT. ID:",o);const a=m.find(s=>Number(s.id)===o);if(!a){console.error("❌ Планету не знайдено:",o);return}_=o,J("edit",a);return}if(n){e.stopPropagation();const o=Number(n.dataset.id);console.log("6. DELETE. ID:",o);const a=m.find(s=>Number(s.id)===o);if(!a){console.error("❌ Планету не знайдено:",o);return}E=o,Ne(a);return}}function Ue(){let e=document.querySelector("#planetCrudModal");if(e)return e;console.log("Створюємо CRUD modal"),e=document.createElement("div"),e.id="planetCrudModal",e.className="modal",e.innerHTML=`
    <div class="modal__content planet-crud-content">

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
  `,document.body.appendChild(e);const t=e.querySelector(".planet-crud-close"),n=e.querySelector(".planet-cancel-btn"),o=e.querySelector(".planet-crud-form");return t.addEventListener("click",I),n.addEventListener("click",I),e.addEventListener("click",a=>{a.target===e&&I()}),o.addEventListener("submit",De),e}function J(e,t){console.log("7. openPlanetFormModal()",e,t);const n=Ue(),o=n.querySelector(".planet-crud-title"),a=n.querySelector(".crud-name"),s=n.querySelector(".crud-climate"),c=n.querySelector(".crud-terrain"),i=n.querySelector(".crud-gravity"),r=n.querySelector(".crud-population"),d=n.querySelector(".crud-description");e==="create"?o.textContent="Додати нову планету":o.textContent="Редагувати планету",a.value=t.name||"",s.value=t.climate||"",c.value=t.terrain||"",i.value=t.gravity||"",r.value=t.population||"",d.value=t.description||"",n.dataset.mode=e,n.style.display="block",a.focus()}function I(){console.log("Закриваємо CRUD modal");const e=document.querySelector("#planetCrudModal");if(!e)return;e.style.display="none";const t=e.querySelector(".planet-crud-form");t&&t.reset(),_=null}async function De(e){e.preventDefault(),console.log("8. Submit CRUD form");const t=e.target,o=document.querySelector("#planetCrudModal").dataset.mode,a=t.querySelector(".crud-name").value.trim(),s=t.querySelector(".crud-climate").value.trim(),c=t.querySelector(".crud-terrain").value.trim(),i=t.querySelector(".crud-gravity").value.trim(),r=t.querySelector(".crud-population").value.trim(),d=t.querySelector(".crud-description").value.trim();if(!a){alert("Введіть назву планети.");return}if(a.length<2){alert("Назва планети повинна містити мінімум 2 символи.");return}if(!s){alert("Введіть клімат планети.");return}if(!c){alert("Введіть тип поверхні планети.");return}if(!i){alert("Введіть гравітацію планети.");return}if(r===""){alert("Введіть населення планети.");return}const p=Number(r);if(!Number.isInteger(p)||p<0){alert("Населення повинно бути цілим числом не менше 0.");return}if(!d){alert("Введіть опис планети.");return}const f={name:a,climate:s,terrain:c,gravity:i,population:String(p),description:d};if(console.log("Дані планети:",f),o==="create"){const u={id:Pe(),...f};console.log("Створюємо:",u),m.push(u),await B(),I();const g=document.querySelector(".create-planet-form");g&&g.reset(),alert("Планету успішно додано!");return}if(o==="edit"){const u=m.findIndex(g=>Number(g.id)===Number(_));if(u===-1){console.error("❌ Не знайшли планету для редагування");return}m[u]={...m[u],...f},console.log("Оновлена планета:",m[u]),await B(),I(),alert("Планету успішно відредаговано!")}}function Pe(){const e=m.map(n=>Number(n.id));return(e.length?Math.max(...e):0)+1}function Be(){let e=document.querySelector("#planetDeleteModal");return e||(console.log("Створюємо Delete modal"),e=document.createElement("div"),e.id="planetDeleteModal",e.className="modal",e.innerHTML=`
    <div class="modal__content planet-delete-content">

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
  `,document.body.appendChild(e),e.querySelector(".planet-delete-close").addEventListener("click",M),e.querySelector(".planet-delete-cancel").addEventListener("click",M),e.querySelector(".planet-delete-confirm").addEventListener("click",Oe),e.addEventListener("click",t=>{t.target===e&&M()}),e)}function Ne(e){console.log("9. Відкриваємо delete modal");const t=Be(),n=t.querySelector(".planet-delete-text");n.textContent=`Ви дійсно хочете видалити планету "${e.name}"?`,t.style.display="block"}function M(){const e=document.querySelector("#planetDeleteModal");e&&(e.style.display="none",E=null)}async function Oe(){if(console.log("10. Підтвердження DELETE:",E),E===null){console.error("❌ ID для видалення відсутній");return}const e=m.findIndex(t=>Number(t.id)===Number(E));if(e===-1){console.error("❌ Планету для видалення не знайдено");return}m.splice(e,1),await B(),M(),alert("Планету успішно видалено!")}async function B(){console.log("11. savePlanets()");try{S.planets=m,console.log("PATCH:",`${U}${D}`),console.log("Відправляємо:",S);const e=await fetch(`${U}${D}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({encyclopedia:S})});if(!e.ok)throw new Error(`PATCH error: ${e.status}`);const t=await e.json();console.log("PATCH результат:",t),await W()}catch(e){console.error("❌ Помилка savePlanets:",e),alert("Не вдалося зберегти зміни. Перевір json-server.")}}const Ae=qe(e=>{const t=e.target.value.trim().toLowerCase();console.log("12. Пошук:",t),G(t)},1500);function He(){const e=document.querySelector("#searchPlanet");if(!e)return;const t=e.value.trim().toLowerCase();console.log("12. Пошук кнопкою:",t),G(t)}function G(e){if(!e){P(m);return}const t=m.filter(n=>n.name.toLowerCase().includes(e));console.log("Результат пошуку:",t),P(t)}function Fe(){console.log("13. addPlanetModalListeners()");const e=document.querySelectorAll(".planet-card"),t=document.getElementById("planetModal"),n=document.getElementById("modalTitle"),o=document.getElementById("modalText"),a=document.querySelector(".modal__close");if(!t){console.error("❌ #planetModal не знайдений");return}e.forEach(s=>{s.addEventListener("click",async c=>{if(c.target.closest(".edit-btn")||c.target.closest(".delete-btn"))return;const i=Number(s.dataset.id);console.log("14. Відкриваємо планету:",i);const r=m.find(d=>Number(d.id)===i);if(!r){console.error("Планету не знайдено");return}n.textContent=r.name,o.innerHTML=`
          <p>
            <b>Climate:</b>
            ${r.climate}
          </p>

          <p>
            <b>Population:</b>
            ${r.population}
          </p>

          <p>
            <b>Gravity:</b>
            ${r.gravity}
          </p>

          <p>
            <b>Terrain:</b>
            ${r.terrain}
          </p>

          <p>
            <b>Description:</b>
            ${r.description}
          </p>
        `,t.style.display="block"})}),a&&(a.onclick=()=>{t.style.display="none"}),t.onclick=s=>{s.target===t&&(t.style.display="none")}}console.log("🚀 planets.js запущений");W();const We=`{{#each this}}
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
{{/each}}`,Je=document.querySelector(".sw-characters__groups"),Ge="http://localhost:3000/",Ve="starWars";async function Ye(){const t=await(await fetch(`${Ge}${Ve}`)).json(),n=L.compile(We);Je.innerHTML=n(t.encyclopedia.characterGroups)}Ye();const Ke=`{{#each this}}
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
{{/each}}`,ze=document.querySelector(".sw-movies__list"),Qe="http://localhost:3000/",Xe="starWars";async function Ze(){const t=await(await fetch(`${Qe}${Xe}`)).json(),n=L.compile(Ke);ze.innerHTML=n(t.encyclopedia.movies)}Ze();let et=[{id:"shii-cho",name:"Shii-Cho",description:"Найстаріша форма бою на світлових мечах. Орієнтована на базові атаки та боротьбу з кількома ворогами.",users:["Люк Скайвокер","Кіт Фісто","Багато джедаїв Старої Республіки"],image:new URL("/star-wars-vite-api/assets/shii-cho-a4e31af0.jpg",self.location).href},{id:"makashi",name:"Makashi",description:"Елегантний дуельний стиль, створений спеціально для бою проти інших мечників.",users:["Граф Дуку","Ассаж Вентресс"],image:new URL("/star-wars-vite-api/assets/makashi-20c0af28.jpg",self.location).href},{id:"soresu",name:"Soresu",description:"Найкраща оборонна форма, зосереджена на блокуванні атак та виживанні.",users:["Обі-Ван Кенобі","Люмінарія Ундулі"],image:new URL("/star-wars-vite-api/assets/soresu-d14f2536.png",self.location).href},{id:"ataru",name:"Ataru",description:"Акробатичний стиль із великою кількістю стрибків і швидких атак.",users:["Йода","Квай-Гон Джинн"],image:new URL("/star-wars-vite-api/assets/ataru-d8c389e6.jpg",self.location).href},{id:"djem-so",name:"Djem So",description:"Агресивний стиль, що поєднує блокування і потужні контратаки.",users:["Анакін Скайвокер","Люк Скайвокер"],image:new URL("/star-wars-vite-api/assets/djem-so-cd3a76cc.jpg",self.location).href},{id:"niman",name:"Niman",description:"Збалансована форма, що поєднує бойові техніки і використання Сили.",users:["Багато джедаїв Ордену"],image:new URL("/star-wars-vite-api/assets/niman-8799c4db.jpg",self.location).href},{id:"juyo",name:"Juyo / Vaapad",description:"Найбільш агресивний стиль, що використовує темні емоції в бою.",users:["Мейс Вінду","Дарт Мол"],image:new URL("/star-wars-vite-api/assets/juyo-1bb8a071.jpg",self.location).href}];localStorage.getItem("lightsaberForms")||localStorage.setItem("lightsaberForms",JSON.stringify(et));const tt=document.querySelectorAll(".forms-list li"),k=document.querySelector(".form-modal-backdrop"),nt=document.querySelector(".modal-img"),ot=document.querySelector(".modal-title"),at=document.querySelector(".modal-desc"),rt=document.querySelector(".modal-users"),st=document.querySelector(".modal-close"),it=JSON.parse(localStorage.getItem("lightsaberForms"))||[];tt.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.form,n=it.find(o=>o.id===t);nt.src=n.image,ot.textContent=n.name,at.textContent=n.description,rt.innerHTML=n.users.map(o=>`<li>${o}</li>`).join(""),k.classList.remove("is-hidden")})});function N(){k.classList.add("is-hidden")}st.addEventListener("click",N);k.addEventListener("click",e=>{e.target===k&&N()});document.addEventListener("keydown",e=>{e.key==="Escape"&&N()});const ct=[{episode:"Episode I",title:"The Phantom Menace",story:"Галактична Республіка ще здається сильною, але всередині вже гниє від політичних інтриг. Джедаї Квай-Ґон Джинн і Обі-Ван Кенобі знаходять на Татуїні хлопчика — Анакіна Скайвокера, що має безпрецедентну силу. Його вважають Обраним, який принесе баланс Силі. Але в тіні вже діє темний лорд ситхів, а повернення Сітхів стає початком великої трагедії.",image:new URL("/star-wars-vite-api/assets/ep1-d7b906cd.webp",self.location).href},{episode:"Episode II",title:"Attack of the Clones",story:"Минуло десять років. Анакін став сильним, але всередині нього кипить страх і ревнощі. Тим часом у галактиці спалахує Війна клонів — армія клонів бореться проти сепаратистів. Любов Анакіна до Падме стає його слабкістю, а маніпуляції Палпатіна поступово штовхають його до Темної сторони.",image:new URL("/star-wars-vite-api/assets/ep2-82b31a04.jpg",self.location).href},{episode:"Episode III",title:"Revenge of the Sith",story:"Це найтрагічніша частина саги. Палпатін розкриває себе як ситх Дарт Сідіус і спокушає Анакіна обіцянкою врятувати Падме від смерті. Анакін зраджує Орден джедаїв, допомагає знищити їх під час Наказу 66 і стає Дартом Вейдером. Імперія народжується, а галактика занурюється в темряву.",image:new URL("/star-wars-vite-api/assets/ep3-420d3aae.jpg",self.location).href},{episode:"Episode IV",title:"A New Hope",story:"Минуло багато років. Імперія править страхом. Але з’являється нова надія — Люк Скайвокер, син Анакіна. Разом із Леєю, Ганом Соло та Обі-Ваном він приєднується до Повстанців. Люк робить перший крок на шляху джедая і допомагає знищити Зірку Смерті.",image:new URL("/star-wars-vite-api/assets/ep4-8352284d.jpeg",self.location).href},{episode:"Episode V",title:"The Empire Strikes Back",story:"Імперія переходить у наступ. Люк проходить навчання у майстра Йоди та дізнається страшну правду: Дарт Вейдер — його батько. Ган Соло потрапляє в полон, а Повстанці зазнають поразки. Це найтемніший момент історії.",image:new URL("/star-wars-vite-api/assets/ep5-d6bb57ab.jpg",self.location).href},{episode:"Episode VI",title:"Return of the Jedi",story:"Фінальна битва за долю галактики. Люк відмовляється перейти на Темну сторону, навіть перед самим Імператором. У вирішальний момент Вейдер згадує, ким був колись, і рятує сина, знищивши Палпатіна. Анакін повертається до Світла, а Імперія падає.",image:new URL("/star-wars-vite-api/assets/ep6-e126457f.jpg",self.location).href}];document.addEventListener("DOMContentLoaded",function(){localStorage.setItem("moviesData",JSON.stringify(ct));const e=JSON.parse(localStorage.getItem("moviesData")),t=document.getElementById("movieModal"),n=document.getElementById("modalMovieTitle"),o=document.getElementById("modalMovieStory"),a=document.getElementById("modalMovieImage"),s=document.getElementById("movieModalClose"),c=document.getElementById("confirmModal"),i=document.getElementById("confirmYes"),r=document.getElementById("confirmNo");let d=null,p=null;function f(){clearTimeout(d),d=setTimeout(()=>{c.classList.add("active"),p=setTimeout(()=>{u()},15e3)},3e4)}function u(){clearTimeout(d),clearTimeout(p),c.classList.remove("active"),t.classList.remove("active")}i.addEventListener("click",()=>{c.classList.remove("active"),clearTimeout(p),f()}),r.addEventListener("click",u),s.addEventListener("click",u),document.querySelectorAll(".sw-movies__item").forEach(b=>{b.addEventListener("click",()=>{const T=b.querySelector("h3");if(!T)return;const y=e.find(v=>v.title.trim()===T.textContent.trim());y&&(n.textContent=y.title,o.textContent=y.story,a.src=y.image,t.classList.add("active"),f())})}),t.addEventListener("click",b=>{b.target===t&&u()})});document.addEventListener("DOMContentLoaded",function(){const e=[{name:"Luke Skywalker",description:"Люк Скайвокер — син Анакіна Скайвокера та Падме Амідали. Виріс на Татуїні, мріючи про пригоди. Після зустрічі з Обі-Ваном Кенобі розпочав шлях джедая. Навчався у майстра Йоди, протистояв Дарту Вейдеру та зумів повернути світло в серце свого батька. Саме Люк став символом нової надії для всієї галактики.",image:new URL("../images/luke.jpg",self.location).href},{name:"Obi-Wan Kenobi",description:"Обі-Ван Кенобі — майстер-джедай, учень Квай-Ґона Джинна та наставник Анакіна Скайвокера. Відомий своєю мудрістю, стриманістю та відданістю Ордену. Пережив падіння Республіки й роками переховувався, оберігаючи Люка. Його дуелі з Дартом Молом та Дартом Вейдером стали легендарними.",image:new URL("../images/obiwan.jpg",self.location).href},{name:"Yoda",description:"Йода — один із наймудріших і наймогутніших джедаїв в історії. Прожив понад 900 років і навчав покоління лицарів Ордену. Його знання Сили та глибока філософія зробили його духовним лідером джедаїв під час Війн клонів.",image:new URL("../images/yoda.jpg",self.location).href},{name:"Mace Windu",description:"Мейс Вінду — майстер-джедай та член Вищої ради Ордену. Володів унікальною формою бою світловим мечем Vaapad, що дозволяла використовувати агресію супротивника проти нього. Саме він викрив Палпатіна як ситха.",image:new URL("../images/mace.jpg",self.location).href},{name:"Qui-Gon Jinn",description:"Квай-Ґон Джинн — майстер-джедай, який вірив у Живу Силу більше, ніж у правила Ради. Саме він відкрив Анакіна Скайвокера та вірив, що той є Обраним. Загинув у двобої з Дартом Молом.",image:new URL("../images/quigon.jpg",self.location).href},{name:"Ahsoka Tano",description:"Асока Тано — падаван Анакіна Скайвокера. Пройшла важкий шлях під час Війн клонів. Залишила Орден, розчарувавшись у ньому, але не зрадила світлу сторону. Стала незалежною воїтелькою Сили.",image:new URL("../images/ahsoka.jpg",self.location).href},{name:"Darth Vader",description:"Дарт Вейдер — колишній Анакін Скайвокер. Перейшов на Темну сторону через страх втрати та маніпуляції Палпатіна. Став правою рукою Імператора і символом страху. Врешті-решт пожертвував собою, щоб врятувати сина.",image:new URL("../images/vader.jpg",self.location).href},{name:"Darth Sidious",description:"Дарт Сідіус, також відомий як Імператор Палпатін, — темний лорд ситхів, що знищив Республіку та створив Імперію. Майстер інтриг і маніпуляцій, який роками таємно керував галактикою.",image:new URL("../images/sidious.jpg",self.location).href},{name:"Darth Maul",description:"Дарт Мол — учень Дарта Сідіуса, відомий своїм подвійним червоним світловим мечем. Після поразки від Обі-Вана вижив і роками прагнув помсти.",image:new URL("../images/maul.jpg",self.location).href},{name:"Count Dooku",description:"Граф Дуку — колишній джедай, який розчарувався в Ордені та став ситхом Дартом Тиранусом. Лідер сепаратистів під час Війн клонів.",image:new URL("../images/dooku.jpg",self.location).href},{name:"Kylo Ren",description:"Кайло Рен — син Леї Органи та Гана Соло, онук Дарта Вейдера. Розривався між світлом і темрявою. Прагнув наслідувати Вейдера, але врешті повернувся до світла.",image:new URL("../images/kylo.jpg",self.location).href},{name:"Leia Organa",description:"Лея Органа — принцеса Альдераана, лідер Повстанців та сестра Люка. Сильна, розумна й хоробра, вона стала ключовою фігурою в боротьбі проти Імперії.",image:new URL("../images/leia.jpg",self.location).href},{name:"Han Solo",description:"Ган Соло — харизматичний контрабандист і капітан «Тисячолітнього Сокола». Спочатку цинічний, але став героєм Повстанців.",image:new URL("../images/han.jpg",self.location).href},{name:"Cassian Andor",description:"Кассіан Андор — розвідник Повстанців, який пожертвував собою під час місії зі здобуття планів Зірки Смерті.",image:new URL("../images/andor.jpg",self.location).href},{name:"Mon Mothma",description:"Мон Мотма — одна з головних лідерів Альянсу Повстанців. Вона об’єднала сили проти Імперії.",image:new URL("../images/monmothma.jpg",self.location).href},{name:"Jyn Erso",description:"Джин Ерсо — донька вченого, який створював Зірку Смерті. Допомогла викрасти її плани й дала шанс Повстанцям.",image:new URL("../images/jyn.jpg",self.location).href},{name:"Grand Moff Tarkin",description:"Гранд-моф Таркін — високопоставлений офіцер Імперії, що командував Зіркою Смерті.",image:new URL("../images/tarkin.jpg",self.location).href},{name:"Admiral Thrawn",description:"Гранд-адмірал Траун — геніальний стратег Імперії з раси чиссів. Відомий холодним розумом і глибоким аналізом ворогів.",image:new URL("../images/thrawn.jpg",self.location).href},{name:"Imperial Inquisitors",description:"Імперські Інквізитори — мисливці на джедаїв, що служили Дарту Вейдеру та полювали на тих, хто вижив після Наказу 66.",image:new URL("../images/inquisitor.jpg",self.location).href}];localStorage.setItem("charactersData",JSON.stringify(e));const t=JSON.parse(localStorage.getItem("charactersData")),n=document.getElementById("characterModal"),o=document.getElementById("characterModalClose"),a=document.getElementById("characterName"),s=document.getElementById("characterDescription"),c=document.getElementById("characterImage");document.querySelectorAll(".character-group__item").forEach(r=>{r.addEventListener("click",()=>{const d=r.textContent.trim(),p=t.find(f=>f.name===d);p&&(a.textContent=p.name,s.textContent=p.description,c.src=p.image,n.classList.add("active"))})}),o.addEventListener("click",()=>{n.classList.remove("active")}),n.addEventListener("click",r=>{r.target===n&&n.classList.remove("active")})});console.log("%c Зоряне небо в header Star Wars","color: white; background-color: #D33F49");const R=document.getElementById("header-stars"),lt=40;let q=[];//! створення зірок
function dt(){if(!R){console.log("Контейнер #header-stars не знайдено");return}R.innerHTML="",q=[];for(let e=0;e<lt;e++){const t=document.createElement("div");t.className="star",t.style.left=Math.random()*100+"%",t.style.top=Math.random()*100+"%";const n=Math.random()*3+2;t.style.width=`${n}px`,t.style.height=`${n}px`,R.appendChild(t),q.push(t)}}//! проміс для однієї зірки
function mt(e){return new Promise(t=>{const n=500+Math.random()*3e3,o=["#fff","#ffd700","#87ceeb","#ff69b4"],a=o[Math.floor(Math.random()*o.length)];e.style.background=a;//! старт мінімальна яскравість
e.style.opacity=.2;//! плавний розгін до 100%
setTimeout(()=>{e.classList.add("glow");//! постійне мерехтіння
e.style.animation=`twinkle ${1+Math.random()*2}s infinite ease-in-out`,t("Зірка активна")},n)})}//! запуск усіх зірок
function ut(){if(!q.length)return;const e=q.map(t=>mt(t));Promise.allSettled(e).then(()=>{console.log("Усі зірки активні")})}//! запуск
dt();ut();
