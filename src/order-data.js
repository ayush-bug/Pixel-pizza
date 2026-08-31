import './order-data.css';

import {db} from "./firebase.js";

import{
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
 const orderId = params.get("id");


document.querySelector("#app").innerHTML = `
  
<div class="container">
  <header>
    <div class="back">Back to Admin</div>
    <div class="orderid">Order # ${orderId.slice(0,8)}...</div>
  </header>
 <br>
 <br>
   <div class="status-container">
    <span>ORDER STATUS</span>
    <span id="order-status">New</span>
   </div>
  <br>
  <br>
 <div class="customer-data">
  <span>Customer details</span>
  <div class="contain-customer-data">
    <div>
  <h2>Name : </h3>
  <h3 id="name"></h3>
  </div> 
  <div>
   <h2>PHONE NO : </h3>
   <h3 id="phoneno"></h3>
  </div>
  </div>
  <br>
  <span>Delivery location</span>
    <div class="location">
    <h2 id="location"></h2>
    </div>
    <br>
    <span>ORDER ITEMS</span>
    <div class="order-items-container">
    <div id="order-items">
    
    </div>
    <div class="total">
   <span>Total Amount : ₹ <strong id="total"></strong></span>
   <br>
   <br>
   <span>ORDERED AT : <strong id="orderat"></strong></span>
    </div>
</div>
<br><br>
<div class="button">
<button id="mark"> Mark as out of delivery</button>
<button id="cancel">cancel this order</button>
</div>
 </div>









</div>

`;



const orderRef = doc(db,"orders",orderId);
const orderSnap = await getDoc(orderRef);
const order = orderSnap.data();


document.querySelector("#order-status").textContent = order.status;
document.querySelector("#name").textContent = order.name.toUpperCase();
document.querySelector("#phoneno").textContent = order.phonenumber;
document.querySelector("#location").textContent = order.location;


document.querySelector("#order-items").innerHTML = order.items.map(item => `
      
    <div class="order-items">
    
    <div>
    <strong>${item.name}</strong>
    <small>  [${item.price} x ${item.quantity}]</small>
    </div>
    <strong> ₹ ${Number(item.price) * Number(item.quantity)}</strong>
    </div>
    `).join("");

    document.querySelector("#total").textContent = order.total;
    document.querySelector("#orderat").textContent = order.createdAt;

    document.querySelector("#mark").addEventListener("click" , async function(){
     const orderRef = doc(db, "orders", orderId);

  await updateDoc(orderRef, {
    status: "outofdelivery"
  });
    });

    document.querySelector(".back").addEventListener("click" , function(){
         window.history.back();
    })

       document.querySelector("#cancel").addEventListener("click" , async function(){
     const orderRef = doc(db, "orders", orderId);

  await updateDoc(orderRef, {
    status: "cancelled"
  });
    });
if(order.status === "completed"){
    document.querySelector(".button").style.display = 'none';
}