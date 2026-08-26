import './style.css'
import pizza1 from './assets/pizza-1.png'
document.querySelector("#app").innerHTML = `<div class="loading"><h1> loading </h1></div>`;
 document.querySelector("#app").innerHTML = `
<header>
<div class="head">
<h2> Pixel pizza </h2> 
<a href="menu.html"><button> order </button><a>
</div>
</header> 
<main>
<div class="pizza-data">
<h1> Hungry ?  Try out our best low budget<span> pixel pizza </span> that make you full :D</h1>
  <img src="${pizza1}" alt="pizza img referacne">
</div>
<div class="pizza-item">
 <marquee speed="medium" direction="left" behavior="scroll" scrollamount="6" loop="-1">
 <span> <span class="square"> </span>Veg Classy Pizza </span>
 <span> <span class="square"> </span>Veg Prime Pizza</span>
 <span> <span class="square"> </span> Veg Gourmet Pizza</span>
 <span> <span class="square"> </span>  Pixel Pizza </span>
 <span> <span class="square"> </span> Prime Pizza (Special Tier)</span>
 <span> <span class="square"> </span>Gourmet Pizza</span>
 <span> <span class="square"> </span> The Chicken Delight</span>
 <span> <span class="square"> </span>  Italian Chicken Duo </span>
 </marquee>
</div>


<div class="how-to-order">

      <h1 class="howh1"> How to order ?</h1>
      <div class="container-main">
      <div class="container">
         <div class="guied">
          <div class="steps"> 
              Step 1
          </div>
           <h1> Select location</h1>
           <p>
           select your live location using auto detaction or by manualy add your address.
           </p>
         </div>
      
         <div class="guied">
          <div class="steps"> 
              Step 2
          </div>
           <h1> Choose order</h1>
           <p>
           Check the menu and pick your favorite food . highly recommanded Pixel pizza.
           </p>
         </div>
          <div class="guied">
          <div class="steps"> 
              Step 3
          </div>
           <h1> Make Payment</h1>
           <p>
             you can pay us , by card and by upi and cash on delivery if only for some of the items.
           </p>
         </div>
      
         <div class="guied">
          <div class="steps"> 
              Step 4
          </div>
           <h1> Recieve you order</h1>
           <p>
              our delivery patner will handle to you when they reach you locality.
           </p>
         </div>
      </div>
      </div>
</div>
<div class="footer">
<footer>
 <div class="name"> <h2>&copy; 2026 <span>Pixel Pizza</span></h2></div> 
</footer>
</div>
`;