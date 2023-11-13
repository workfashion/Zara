


const cartDataString = localStorage.getItem('cart_data');
const cart_data = JSON.parse(cartDataString);
console.log(localStorage.getItem('cart_data'))

 function saveCartDataToLocal() {
const simplifiedCartData = cart_data.map(item => ({
   name: item.name,
   price: item.price,
   img: item.image,
   qty: item.qty
 }));

 const cartDataJson = JSON.stringify(simplifiedCartData);
 localStorage.setItem('cartData', cartDataJson);
}
saveCartDataToLocal();
 function displayCartDataFromLocal() {
 const cartItemBox = document.querySelector('.cart-item-box');
 const subtotalElem = document.querySelector('#subtotal');
 const TaxElem = document.querySelector('#Tax');
 const TotalElem = document.querySelector('#Total');
 function createCartItemElement(item) {
   const itemEl = document.createElement('div');
   itemEl.classList.add('product-card');
   itemEl.innerHTML = `
     <div class="card-product">
       <div class="img-box">
         <img class="product-img" id="mainImg-CartCheckout" width="90px" src="${item.img}">
       </div>
       <div class="details">
         <h4 class="product-name" style="font-size:14px;" id="product-name-CartCheckout">
           ${item.name}
         </h4>
         <div class="wrapper">
           <div class="product-qty">
             <button class="decrement">
               <i class="fa-minus fa-solid"></i>
             </button>
             <span class="quantity-CartCheckout">${item.qty}</span>
             <button class="increment">
               <i class="fa-add fa-solid"></i>
             </button>
           </div>
           <div class="price-card fw-bold" style="font-size:14px;color:red;">
             $<span class="price-CartCheckout">${item.price}</span>
           </div>
         </div>
       </div>
       <button id="product-close-btn" class="product-close-btn">
         <i class="fa-x fa-solid "></i>
       </button>
     </div>
   `;
   const decrementBtn = itemEl.querySelector('.decrement');
   const incrementBtn = itemEl.querySelector('.increment');
   const quantityElem = itemEl.querySelector('.quantity-CartCheckout');
   const priceElem = itemEl.querySelector('.price-CartCheckout');
   const closeButton = itemEl.querySelector('.product-close-btn');

   decrementBtn.addEventListener('click', function() {
     let decrement = Number(quantityElem.textContent);
     decrement = decrement <= 1 ? 1 : decrement - 1;
     quantityElem.textContent = decrement;
     totalCalc();
   });
   incrementBtn.addEventListener('click', function() {
     let increment = Number(quantityElem.textContent);
     increment++;
     quantityElem.textContent = increment;
     totalCalc();
   });
   closeButton.addEventListener('click', function() {
     itemEl.remove();
     totalCalc();
   });
   return itemEl;
 }
 function totalCalc() {
   const items = Array.from(cartItemBox.getElementsByClassName('product-card'));
   const tax = 0;
   let subtotal = 0;
   items.forEach(item => {
     const quantity = Number(item.querySelector('.quantity-CartCheckout').textContent);
     const price = Number(item.querySelector('.price-CartCheckout').textContent);
     subtotal += quantity * price;
   });

   subtotalElem.textContent = subtotal.toFixed(0);
   TotalElem.textContent = subtotal.toFixed(0);
   TaxElem.textContent = tax.toFixed(0); // Set tax to 0
 }
 function displayCartItems() {
   const cartData = localStorage.getItem('cartData');
   if (cartData) {
     const simplifiedCartData = JSON.parse(cartData);

     simplifiedCartData.forEach(item => {
       const itemEl = createCartItemElement(item);
       cartItemBox.appendChild(itemEl);
     });
     totalCalc();
   } else {
     console.log('No cart data found in localStorage.');
   }
 }
 displayCartItems();
}
displayCartDataFromLocal()
   


const checkOutButton = document.getElementById('checkOut');
checkOutButton.addEventListener('click', displayCartDataFromLocal);