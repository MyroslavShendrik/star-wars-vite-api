import{H as e}from"./timer-4c11cdbd.js";const c=`<h2 class="section__title">
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

{{/each}}`,o=document.querySelector(".section--wars"),a="http://localhost:3000/",i="starWars";async function r(){const n=await(await fetch(`${a}${i}`)).json(),t=e.compile(c);o.innerHTML=t(n.main.wars)}r();const l=`<h2 class="section__title">
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

{{/each}}`,m=document.querySelector(".section--jedi"),_="http://localhost:3000/",p="starWars";async function h(){const n=await(await fetch(`${_}${p}`)).json(),t=e.compile(l);m.innerHTML=t(n.main.jedi)}h();const d=`<h2 class="section__title">
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

{{/each}}`,u=document.querySelector(".section--force"),g="http://localhost:3000/",$="starWars";async function f(){const n=await(await fetch(`${g}${$}`)).json(),t=e.compile(d);u.innerHTML=t(n.main.force)}f();const w=`<h2 class="section__title">
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

{{/each}}`,j=document.querySelector(".section--universe"),x="http://localhost:3000/",y="starWars";async function L(){const n=await(await fetch(`${x}${y}`)).json(),t=e.compile(w);j.innerHTML=t(n.main.universe)}L();const T=`<h2 class="section__title">
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

{{/each}}`,b=document.querySelector(".section--about"),H="http://localhost:3000/",v="starWars";async function A(){const n=await(await fetch(`${H}${v}`)).json(),t=e.compile(T);b.innerHTML=t(n.main.about)}A();
