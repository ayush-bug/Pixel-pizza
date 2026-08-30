import '/src/menu.css'
import {db} from "./firebase.js"
import{
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js"

import pizzaboy from './assets/pizza-boy.png'
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
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
       <div class="food">
        <div class="food-info">
          <h3 class="food-name">Pixel Pizza</h3>
          <span class="price">&#8377;199</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>recommanded</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Paneer N Corn Delight</h3>
          <span class="price">&#8377;190</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Spicy Crunch</h3>
          <span class="price">&#8377;200</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Double Cheese Margherita</h3>
          <span class="price">&#8377;170</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
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
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Peri Peri Paneer</h3>
          <span class="price">&#8377;230</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">All Veggies in cheesemelt</h3>
          <span class="price">&#8377;300</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Korean Panner</h3>
          <span class="price">&#8377;280</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Chicken Delight</h3>
          <span class="price">&#8377;199</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Italian Checken Duo</h3>
          <span class="price">&#8377;240</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Mexican Chicken Duo</h3>
          <span class="price">&#8377;240</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Peri Peri Chicken</h3>
          <span class="price">&#8377;290</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">Chicken tandoori</h3>
          <span class="price">&#8377;290</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">korean Chicken</h3>
          <span class="price">&#8377;359</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">All chicken in cheese Melt</h3>
          <span class="price">&#8377;399</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">classic capsicum pizza</h3>
          <span class="price">&#8377;100</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
      <div class="food">
        <div class="food-info">
          <h3 class="food-name">classic corn</h3>
          <span class="price">&#8377;100</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
          <small>customizable</small>
        </div>
      </div>
         <div class="food">
        <div class="food-info">
          <h3 class="food-name">classic chicken Saugage pizza</h3>
          <span class="price">&#8377;149</span>
        </div>
        <div class="addToCart">
          <button class="add"> Add +</button>
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
<input type="text" id="userLocation" placeholder="enter location">
    </div>
    <div class="fullname">
      <button id="fullName"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></button>
      <input type="text" id="userFullname" placeholder="Full name"> 
    </div>
     <div class="phoneNum">
      <button id="phoneNum"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></button>
      <input type="number" id="userPhonenum" placeholder="enter phone num"> 
    </div>
<div class="line"></div>
<div class="cart-item-container">
  <div class="cart-items">
     <h2 style="text-align:center">WHY DON'T YOU ADD SOMETHING?</h2>
  </div>
  <div class="bill">
  
</div>
</div>


<div class="order-btn-container"> 
  <button id="place-order"> place order</button>
</div>
    <!-- end of the cart-sidebar -->
  </div>

  </main>
</div>
`;


// add to cart .
 
const cartItems = [];
const addButtons = document.querySelectorAll(".add");

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
   const food = button.closest(".food");

   const name = food.querySelector(".food-name").textContent.trim();
   const price = Number(food.querySelector(".price").textContent.replace("₹", ""));

   const existingItem = cartItems.find((item) => item.name === name);

   if(existingItem){
    existingItem.quantity++;
   }
   else{
    cartItems.push({
      name: name, 
      price : price,
      quantity : 1
    });
   }
renderCart();

  });
});

function renderCart(){
  const cartContainer = document.querySelector(".cart-items");
  cartContainer.innerHTML = "";
  cartItems.forEach((item, index) => {
    cartContainer.innerHTML += ` 
    <div class="line"></div>
    <div class="remove-button">
        <button class="removeFromCart" data-index="${index}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
</button>
</div>
    <div>
    <h4>${item.name}</h4>
    <big>₹ ${item.price}</big>
    </div>
    <div class="quantity-control">
    <button class="minus" data-index="${index}">-</button>
    <span>${item.quantity}</span>
     <button class="plus" data-index="${index}">+</button>
       
    </div>
  <h2>Total : ₹ ${item.price * item.quantity} </h2>
    <div class="line"></div>
    `;
  });

  // decrease button
  document.querySelectorAll(".minus").forEach((button)=>{
    button.addEventListener("click", ()=>{
      const index = Number(button.dataset.index);
      cartItems[index].quantity--;
      if(cartItems[index].quantity===0){
        cartItems.splice(index,1);
      }
      renderCart();
    });
  });
// add button
document.querySelectorAll(".plus").forEach((button) => {
  button.addEventListener("click" , ()=>{
    const index = Number(button.dataset.index);
    cartItems[index].quantity++;
    renderCart();
  });
});

document.querySelectorAll(".removeFromCart").forEach((button)=>{
  button.addEventListener("click" , ()=>{
    const index = Number(button.dataset.index);
    cartItems.splice(index,1);
    renderCart();
  });
});


// grand total calculation

const grandtotal = cartItems.reduce((total,item) => {
  return total + item.price * item.quantity;
},0);

document.querySelector(".bill").innerHTML = `
<div class="grand-total">
 <h4><u> Bill Details</u></h4>
 <br>
<strong><b>Item total</b> : ₹ ${grandtotal}</strong>
<br>
<br>
<strong>Taxes : ₹0</strong>
<br>
<br>
<strong>Delivery fee : ₹0</strong>
<br>
<br>
<strong>To Pay :₹ ${grandtotal} </strong>
<br>
<small style="background:royalblue;color:white"> Note : payment will be COD</small>
</div>
<img src="${pizzaboy}" alt="pizza boy">
`


}

// placing order man hell yeah :D

document.querySelector("#place-order").addEventListener("click" , async () => {
  const location = document.querySelector("#userLocation");
  const userName = document.querySelector("#userFullname");
  const userNum = document.querySelector("#userPhonenum");
  if(cartItems.length === 0){
    Swal.fire({
  title: "NO item in cart",
  text: "Add some items in cart to proceed?",
  icon: "question"
});
    return;
  }
  else if(location.value === ""){
    Swal.fire("Please enter your location");
    return;
  }
  else if(userName.value === ""){
    swal.fire("Please enter your name");
    return;
  }
  else if(userNum.value === ""){
    swal.fire("Please enter your phone number");
    return;
  }
  
  const grandTotal = cartItems.reduce((total,item) => {
    return total + (item.price * item.quantity);
  },0);

  const placeOrderBtn =  document.querySelector("#place-order");

  try{
    placeOrderBtn.textContent = "placing order..";
    placeOrderBtn.disabled = true;
 console.log("Firebase DB:", db);
    console.log("Cart:", cartItems);
    console.log("Sending order...");
   const docRef = await addDoc(collection(db, "orders"),
     {
      name : userName.value.trim(),
      location : location.value.trim(),
      phonenumber : userNum.value.trim(),
      items : cartItems,
      total : grandTotal,
      status : "new",
      createdAt : new Date().toISOString()
     }
  );
var orderId = docRef.id;
Swal.fire({
  title: "Order Placed!! :D",
  html: `
    <div class="order-success">
    <p class="success-message">Your pizza is getting ready : ) <br> we will deliver in just <b>30-45 minutes</b> </p>
    <div class="order-details">
    <div class="detail"> <span>NAME </span> <b>${userName.value}</b></div>
    <div class="detail"><span>LOCATION </span><b>${location.value}</b></div>
    <div class="detail"> <span>ORDER-ID </span> <b>${orderId}</b></div>
    <div class="detail"><span>TOTAL TO PAY </span><b>₹${grandTotal}</b></div>
    </div>
    </div>
  `,
  icon: "success",
  confirmButtonText : "HELL yeah !",
  customClass:{
    popup : "popup",
      title: "place-title",
    confirmButton: "confirm-btn",
  }
  ,
  buttonsStyling: false,
  showClass: {
    popup: ""
  },
  hideClass: {
    popup: ""
  }
});


  console.log(orderId);
  cartItems.length = 0;
  renderCart();


  
  } catch(error){

    console.error(error);
  }finally {
    placeOrderBtn.textContent = "place order";
    placeOrderBtn.disabled = false;
    

  }


});