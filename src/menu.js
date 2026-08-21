import '/src/menu.css'
document.querySelector("#app").innerHTML = `
<h1> menu items check </h1>
`;
document.querySelector("#app").innerHTML = /*html*/ `
<div class="main-container">
  <header>
    <div class="menu"> Menu</div>
    <div class="input-continer">
      <input type="search" placeholder="Search itmes" class="search-items">
      <div class="cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-bag-check-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
        </svg>
      </div>

    </div>
  </header>
  <br>
  <main>
    <div class="menu-container">
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Single Topping</h3>
          <span class="price">&#8377;170</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
       <div class="food">
        <div class="food-info">
          <h3 class="food-name">Pixel Pizza</h3>
          <span class="price">&#8377;199</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>recommanded</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Paneer N Corn Delight</h3>
          <span class="price">&#8377;190</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Spicy Crunch</h3>
          <span class="price">&#8377;200</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Double Cheese Margherita</h3>
          <span class="price">&#8377;170</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">
            veg paneer
          </h3>
          <span class="price">&#8377;250</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Peri Peri Paneer</h3>
          <span class="price">&#8377;230</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">All Veggies in cheesemelt</h3>
          <span class="price">&#8377;300</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Korean Panner</h3>
          <span class="price">&#8377;280</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Chicken Delight</h3>
          <span class="price">&#8377;199</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Italian Checken Duo</h3>
          <span class="price">&#8377;240</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Mexican Chicken Duo</h3>
          <span class="price">&#8377;240</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Peri Peri Chicken</h3>
          <span class="price">&#8377;290</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Chicken tandoori</h3>
          <span class="price">&#8377;290</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">korean Chicken</h3>
          <span class="price">&#8377;359</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">All chicken in cheese Melt</h3>
          <span class="price">&#8377;399</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">classic capsicum pizza</h3>
          <span class="price">&#8377;100</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">classic corn</h3>
          <span class="price">&#8377;100</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
         <div class="food">
        <div class="food-info">
          <h3 class="food-name">classic chicken Saugage pizza</h3>
          <span class="price">&#8377;149</span>
        </div>
        <div class="addToCart">
          <button> Add +</button>
          <small>customizable</small>
        </div>
      </div>
    </div>
   
  <div class="cart-sidebar">
    <h3>Cart</h3>
    <div class="line"></div>
    <div class="location">
      <button id="location"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg> </button>
<input type="location" placeholder="enter location">
    </div>
<div class="line"></div>


    <!-- end of the cart-sidebar -->
  </div>

  </main>
</div>
`;