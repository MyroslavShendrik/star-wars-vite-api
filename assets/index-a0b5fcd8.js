import{H as t}from"./star-sky-973ea513.js";const o="<p>{{copyright}}</p>",c=document.querySelector(".footer"),i="http://localhost:3000/",r="starWars";async function l(){const n=await(await fetch(`${i}${r}`)).json(),e=t.compile(o);c.innerHTML=e(n.main.footer)}l();const m=`<h2 class="section__title">
    {{title}}
</h2>

<img
class="section__image section__image--wars"
src="{{image}}"
alt="{{imageAlt}}">

{{#each description}}

<p class="section__text section__text--wars">
    {{this}}
</p>

{{/each}}`,h=document.querySelector(".section--wars"),p="http://localhost:3000/",d="starWars";async function _(){const n=await(await fetch(`${p}${d}`)).json(),e=t.compile(m);h.innerHTML=e(n.main.wars)}_();const u=`<h2 class="section__title">
    {{title}}
</h2>

<img
class="section__image section__image--jedi"
src="{{image}}"
alt="{{imageAlt}}">

{{#each description}}

<p class="section__text section__text--jedi">
    {{this}}
</p>

{{/each}}`,$=document.querySelector(".section--jedi"),g="http://localhost:3000/",f="starWars";async function w(){const n=await(await fetch(`${g}${f}`)).json(),e=t.compile(u);$.innerHTML=e(n.main.jedi)}w();const y=`<h2 class="section__title">
    {{title}}
</h2>

<img
class="section__image section__image--force"
src="{{image}}"
alt="{{imageAlt}}">

{{#each description}}

<p class="section__text section__text--force">
    {{this}}
</p>

{{/each}}`,T=document.querySelector(".section--force"),L="http://localhost:3000/",j="starWars";async function v(){const n=await(await fetch(`${L}${j}`)).json(),e=t.compile(y);T.innerHTML=e(n.main.force)}v();const x=`<h2 class="section__title">
    {{title}}
</h2>

<img
class="section__image section__image--universe"
src="{{image}}"
alt="{{imageAlt}}">

{{#each description}}

<p class="section__text section__text--universe">
    {{this}}
</p>

{{/each}}`,H=document.querySelector(".section--universe"),b="http://localhost:3000/",M="starWars";async function U(){const n=await(await fetch(`${b}${M}`)).json(),e=t.compile(x);H.innerHTML=e(n.main.universe)}U();const W=`<h2 class="section__title">
    {{title}}
</h2>

<img
class="section__image section__image--about"
src="{{image}}"
alt="{{imageAlt}}">

{{#each description}}

<p class="section__text section__text--about">
    {{this}}
</p>

{{/each}}`,q=document.querySelector(".section--about"),A="http://localhost:3000/",B="starWars";async function E(){const n=await(await fetch(`${A}${B}`)).json(),e=t.compile(W);q.innerHTML=e(n.main.about)}E();const P=`<div class="header-stars" id="header-stars"></div>

<h1 class="header__title">
    {{headerTitle}}
</h1>

<nav>
    <ul class="header__menu">

        {{#each headerMenu}}

        <li class="header__menu-item">
            <a href="{{link}}">
                {{title}}
            </a>
        </li>

        {{/each}}

    </ul>
</nav>`,R=document.querySelector(".header"),S="http://localhost:3000/",k="starWars";async function F(){const n=await(await fetch(`${S}${k}`)).json(),a=t.compile(P)(n.main.header);R.insertAdjacentHTML("afterbegin",a)}F();
