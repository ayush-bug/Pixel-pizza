import './style.css'
import pizza1 from './assets/pizza-1.png'
document.querySelector("#app").innerHTML = `<div class="loading"><h1> loading </h1></div>`;
 document.querySelector("#app").innerHTML = `
<header>
<div class="head">
<h2> Pixel pizza </h2> 
<button> order </button>
</div>
</header> 
<main>
<div class="pizza-data">
<h1> Hungry ?  Try out our best low budget<span> pixel pizza </span> that make you full :D</h1>
  <img src="${pizza1}" alt="pizza img referacne">
</div>
 `;