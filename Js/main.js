let slider_items = $('.slider-items li');
let slider_next = $('.slider-nav.next');
let slider_prev = $('.slider-nav.prev');
let selected_item = 0;
const nav = document.querySelector('.Nav-content');

function setItemsSlider(index) {
  selected_item = index;

  slider_items.each(function (slide) {
    let offset = slide - selected_item;
    if (offset < 0) offset += slider_items.length;

    for (let i = 0; i < slider_items.length + 1; i++) {
      $(this)
        .removeClass(`item-${i}`)
        .addClass(`item-${offset + 1}`);
    }
  });
}



slider_items.click(function () {
  setItemsSlider($(this).index());
});

slider_prev.click(function () {
  selected_item = selected_item < slider_items.length - 1 ? ++selected_item : 0;
  setItemsSlider(selected_item);
});

slider_next.click(function () {
  selected_item = selected_item >= 1 ? --selected_item : slider_items.length - 1;
  setItemsSlider(selected_item);
});



function search() {
  const searchbox = document.getElementById('search-input').value.toUpperCase();
  const product = document.querySelectorAll('.product-search');

  for (let i = 0; i < product.length; i++) {
    let match = product[i].querySelector('h4');

    if (match) {
      let textValue = match.textContent || match.innerText;

      if (textValue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = '';
      } else {
        product[i].style.display = 'none';
      }
    }
  }
}


const openBtn = document.getElementById('open_cart_btn');
const cart = document.getElementById('sidecart');
const closeBtn = document.getElementById('close_btn');
const Backdrop = document.querySelector('.backdrop');
let itemsEl = document.querySelector('.items');
let cartItems = document.querySelector('.cart_items');
const itemsNum = document.getElementById('items_num')
const sideSearch = document.querySelector('.sideSearch')
let cart_data = [];






$('#login-btn').click(function () {
  $('.side-sign-up').addClass('open')

  Backdrop.style.display = 'block';

  setTimeout(() => {
    Backdrop.classList.add('show');
  }, 0);
})

$(Backdrop).on('click', function() {
  $('.side-sign-up').removeClass('open');
  $('.backdrop, .modal').fadeOut(20);
});




$('#Search').click(function () {
  $('.sideSearch').addClass('open')

  Backdrop.style.display = 'block';

  setTimeout(() => {
    Backdrop.classList.add('show');
  }, 0);
  })

$(Backdrop).on('click', function() {
  $('.sideSearch').removeClass('open');
});


function closeSearch() {
  $('.sideSearch').removeClass('open');
  Backdrop.classList.remove('show');

  setTimeout(() => {
    Backdrop.style.display = 'none';
  }, 500);
  
}


openBtn.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);
Backdrop.addEventListener('click', closeCart);

function openCart() {
  cart.classList.add('open');
  Backdrop.style.display = 'block';

  setTimeout(() => {
    Backdrop.classList.add('show');
  }, 0);
}

function closeCart() {
  cart.classList.remove('open');
  Backdrop.classList.remove('show');

  setTimeout(() => {
    Backdrop.style.display = 'none';
  }, 500);
}

function addItemShoes(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(Shoes_items[idx]);
  }

  updateCart();
  openCart();
}

function addItemTShirts(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(tShirt_items[idx]);
  }

  updateCart();
  openCart();
}

function addItemPants(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(Pants_items[idx]);
  }

  updateCart();
  openCart();
}



function addItemNewArrival(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(newArrival_items[idx]);
  }

  updateCart();
  openCart();
}


function addItemTop(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(top_items[idx]);
  }
  updateCart();
  openCart();
}

function removeCartItem(itemId) {
  cart_data = cart_data.filter((item) => item.id !== itemId);

  updateCart();
}


function IncreaseQty(itemId) {
  cart_data = cart_data.map(item => item.id.toString() === itemId.toString() ? {...item, qty: item.qty + 1} : item)
  updateCart()
}

function DecreaseQty(itemId) {
  cart_data = cart_data.map(item => item.id.toString() === itemId.toString() ? {...item, qty: item.qty > 1 ? item.qty - 1  : item.qty}: item)
  updateCart()
}


function CalcItemsNum() {
  let itemsCount = 0

  cart_data.forEach((item) => (itemsCount += item.qty))
  itemsNum.innerHTML = itemsCount
}





const tShirt_items = [
  {
    id: 1,
    name: 'T-shirt',
    price: 899,
    sale:494,
    Brand:'Gucci',
    image: 'img/img/product-1-1.jpg',
    qty:1,
  },
  {
    
    id:2,
    name: 'T-shirt',
    price: 400,
    sale:350,
    Brand:'Adidas',
    image: 'img/img/product-2-1.jpg',
    qty:1,
  },
  {
    id:3,
    name: 'T-shirt',
    price: 1000,
    sale:499,
    Brand:'Adidas',
    image: 'img/img/product-8-1.jpg',
    qty:1,
  },
  {
    id:4,
    name: 'T-shirt',
    price: 899,
    sale:600,
    Brand:'Gucci',
    image: 'img/img/product-9-1.jpg',
    qty:1,
  },
  {
    id:5,
    name: 'T-shirt',
    price: 800,
    sale:494,
    Brand:'Gucci',
    image: 'img/img/product-12-2.jpg',
    qty:1,
  },
  {
    id: 6,
    name: 'T-shirt',
    price: 4099,
    sale:600,
    Brand:'Gucci',
    image: 'img/img/product-6-1.jpg',
    qty: 1,
  },
  {
    id: 7,
    name: 'T-shirt',
    price: 5099,
    sale:1200,
    Brand:'Adidas',
    image: 'img/img/showcase-img-6.jpg',
    qty: 1,
  }
];


const Shoes_items = [
  {
    id: 8,
    name: 'Shoes',
    price: 1099,
    Brand:'Adidas',
    image: 'img/img/product-3-1.jpg',
    qty: 1,
  },
  {
    id: 9,
    name: 'Shoes',
    price: 2099,
    Brand:'Gucci',
    image: 'img/img/product-10-2.jpg',
    qty: 1,
  },
  {
    id: 10,
    name: 'Shoes',
    price: 2099,
    Brand:'Nike',
    image: 'img/img/product-3-2.jpg',
    qty: 1,
  },
  {
    id: 11,
    name: 'Shoes',
    price: 3099,
    Brand:'Gucci',
    image: 'img/img/product-10-1.jpg',
    qty: 1,
  },

];


const Pants_items = [
  {
    id: 12,
    name: 'Pants',
    price: 8999,
    image: 'img/img/product-4-1.jpg',
    Brand:'Adidas',
    qty: 1,
  },
  {
    id: 13,
    name: 'Pants',
    price: 12099,
    image: 'img/img/product-4-2.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 14,
    name: 'Pants',
    price: 11099,
    image: 'img/img/product-11-1.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 15,
    name: 'Pants',
    price: 2099,
    image: 'img/img/product-11-2.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 16,
    name: 'Pants',
    price: 8399,
    image: 'img/img/category-7.jpg',
    Brand:'Channel',
    qty: 1,
  },

];





const Additional_items = [
  {
    id: 17,
    name: 'Gucci Bag',
    price: 899,
    sale:200,
    image: 'img/img/category-2.jpg',
    qty:1,
  },
  {
    
    id:18,
    name: 'Beach cap',
    price: 400,
    sale:250,
    image: 'img/img/category-4.jpg',
    qty:1,
  },
  {
    id:19,
    name: 'Cushion',
    price: 1000,
    sale:399,
    image: 'img/img/category-6.jpg',
    qty:1,
  },
  {
    id:20,
    name: 'Cap',
    price: 899,
    sale:100,
    image: 'img/img/category-8.jpg',
    qty:1,
  },
  {
    id:21,
    name: 'Bag',
    price: 800,
    sale:324,
    image:'img/img/showcase-img-1.jpg',
    qty:1,
  },
  {
    id: 22,
    name: 'Louis Vuitton Bag',
    price: 4099,
    sale:1300,
    image:'img/img/showcase-img-3.jpg',
    qty: 1,
  },
  {
    id: 23,
    name: 'Gucci Bag',
    price: 5099,
    sale:1200,
    image:'img/img/product-13-1.jpg',
    qty: 1,
  }
];




const newArrival_items = [
  {
    id: 29,
    name: 'Pants ',
    price: 8999,
    image: 'img/img/product-11-1.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 30,
    name: 'Pants',
    price: 12099,
    image: 'img/img/product-4-2.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 31,
    name: 'Shoes',
    price: 11099,
    image: 'img/img/product-3-2.jpg',
    Brand:'Adidas',
    qty: 1,
  },
  {
    id: 32,
    name: 'T-shirt',
    price: 2099,
    image: 'img/img/product-6-1.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 33,
    name: 'Shoes',
    price: 8399,
    image: 'img/img/product-3-1.jpg',
    Brand:'Adidas',
    qty: 1,
  },

];









function onSale() {
  let carousel_item = document.querySelector('.carousel-rows');

  Additional_items.forEach((item) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row' , 'text-center'  , 'hover-img' );
    itemEl.innerHTML = `
      <img src="${item.image}" alt="">
      <div class="price">
        <h4>${item.name}</h4>
        </p>
      </div>
    </div>`;

    carousel_item.appendChild(itemEl);
  });
}

onSale();


function addToCartItemNewArrival(itemId) {
  // Find the item from the cart_data array based on the itemId
  const selectedItem = newArrival_items.find(item => item.id === itemId);

  // Store the selected item details in localStorage
  localStorage.setItem('cartItemImage', selectedItem.image);
  localStorage.setItem('cartItemName', selectedItem.name);
  localStorage.setItem('cartItemPrice', selectedItem.price);
  localStorage.setItem('cartItemQty', selectedItem.qty);

  // Perform any additional actions after adding to cart, such as displaying a success message
  console.log('Item added to cart!');
}




function renderItemsNewArrival() {
  newArrival_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'newArrival' , 'd-none');
    itemEl.onclick = () => addItemNewArrival(idx , item.id)
    itemEl.innerHTML = `
    <div class="card" style="width: 16rem;">
    <a href="ProductCart.html"><img src="${item.image}" onclick="addToCartItemNewArrival(${item.id})"   class="card-img-top " alt="..."></a>
    <div class="card-body price">
    <div class="d-flex justify-content-between">
    <h4 class="card-title text-muted">${item.Brand}</h4>
    <p class="card-text  text-muted"> <strong>$${item.price}</strong></p> 
    
    </div>
        <div class="d-flex justify-content-between">
          <p class="card-text name"> <strong> ${item.name}</strong> </p>
          <h4 class="card-title fw-bold addToCartCard " style="cursor:pointer; ">Add to Cart</h4>
        </div>      
    </div>
  </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsNewArrival();






function addToCartItemTShirt(itemId) {
  // Find the item from the cart_data array based on the itemId
  const selectedItem = tShirt_items.find(item => item.id === itemId);

  // Store the selected item details in localStorage
  localStorage.setItem('cartItemImage', selectedItem.image);
  localStorage.setItem('cartItemName', selectedItem.name);
  localStorage.setItem('cartItemPrice', selectedItem.price);
  localStorage.setItem('cartItemQty', selectedItem.qty);

  // Perform any additional actions after adding to cart, such as displaying a success message
  console.log('Item added to cart!');
}



function renderItemsTShirts() {
  tShirt_items.forEach((item ,idx) => {

    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'TShirts');
    itemEl.onclick = () => addItemTShirts(idx , item.id)
    itemEl.innerHTML = `
    <div class="card" style="width: 16rem;">
    <a href="ProductCart.html"><img src="${item.image}" onclick="addToCartItemTShirt(${item.id})"   class="card-img-top " alt="..."></a>
    <div class="card-body price">
    <div class="d-flex justify-content-between">
    <h4 class="card-title text-muted">${item.Brand}</h4>
    <p class="card-text  text-muted"> <strong>$${item.price}</strong></p> 
    
    </div>
        <div class="d-flex justify-content-between">
          <p class="card-text name"> <strong> ${item.name}</strong> </p>
          <h4 class="card-title fw-bold addToCartCard " style="cursor:pointer; ">Add to Cart</h4>
        </div>      
    </div>
  </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsTShirts();





function newArrivalFilter() {
  $('.newArrival').removeClass('d-none')
  $('.TShirts').addClass('d-none')
  $('.top').addClass('d-none')
  $('.Pants').addClass('d-none')
  $('.Shoes').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.newArrival-btn').addClass('active')
}









function ShoesFilter() {
  $('.Shoes').removeClass('d-none')
  $('.TShirts').addClass('d-none')
  $('.Pants').addClass('d-none')
    $('.top').addClass('d-none')
  $('.newArrival').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.Shoes-btn').addClass('active')
}

function PantsFilter() {
  $('.Pants').removeClass('d-none')
  $('.TShirts').addClass('d-none')
  $('.Shoes').addClass('d-none')
  $('.top').addClass('d-none')
  $('.newArrival').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.Pants-btn').addClass('active')
}


function TShirtsFilter() {
  $('.TShirts').removeClass('d-none')
  $('.Shoes').addClass('d-none')
  $('.Pants').addClass('d-none')
  $('.top').addClass('d-none')
  $('.newArrival').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.TShirts-btn').addClass('active')
}

TShirtsFilter()


function addToCartItemShoes(itemId) {
  // Find the item from the cart_data array based on the itemId
  const selectedItem = Shoes_items.find(item => item.id === itemId);

  // Store the selected item details in localStorage
  localStorage.setItem('cartItemImage', selectedItem.image);
  localStorage.setItem('cartItemName', selectedItem.name);
  localStorage.setItem('cartItemPrice', selectedItem.price);
  localStorage.setItem('cartItemQty', selectedItem.qty);

  // Perform any additional actions after adding to cart, such as displaying a success message
  console.log('Item added to cart!');
}




function renderItemsShoes() {
  Shoes_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'Shoes' , 'd-none');
    itemEl.onclick = () => addItemShoes(idx , item.id)
    itemEl.innerHTML = `
    <div class="card" style="width: 16rem;">
    <a href="ProductCart.html"><img src="${item.image}" onclick="addToCartItemShoes(${item.id})"   class="card-img-top " alt="..."></a>
    <div class="card-body price">
    <div class="d-flex justify-content-between">
    <h4 class="card-title text-muted">${item.Brand}</h4>
    <p class="card-text  text-muted"> <strong>$${item.price}</strong></p> 
    
    </div>
        <div class="d-flex justify-content-between">
          <p class="card-text name"> <strong> ${item.name}</strong> </p>
          <h4 class="card-title fw-bold addToCartCard " style="cursor:pointer; ">Add to Cart</h4>
        </div>      
    </div>
  </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsShoes();
renderCartItems()


function addToCartItemPants(itemId) {
  // Find the item from the cart_data array based on the itemId
  const selectedItem = Pants_items.find(item => item.id === itemId);

  // Store the selected item details in localStorage
  localStorage.setItem('cartItemImage', selectedItem.image);
  localStorage.setItem('cartItemName', selectedItem.name);
  localStorage.setItem('cartItemPrice', selectedItem.price);
  localStorage.setItem('cartItemQty', selectedItem.qty);

  // Perform any additional actions after adding to cart, such as displaying a success message
  console.log('Item added to cart!');
}



function renderItemsPants() {
  Pants_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'Pants' , 'd-none');
    itemEl.onclick = () => addItemPants(idx , item.id)
    itemEl.innerHTML = `
    <div class="card" style="width: 16rem;">
    <a href="ProductCart.html"><img src="${item.image}" onclick="addToCartItemPants(${item.id})"   class="card-img-top " alt="..."></a>
    <div class="card-body price">
    <div class="d-flex justify-content-between">
    <h4 class="card-title text-muted">${item.Brand}</h4>
    <p class="card-text  text-muted"> <strong>$${item.price}</strong></p> 
    
    </div>
        <div class="d-flex justify-content-between">
          <p class="card-text name"> <strong> ${item.name}</strong> </p>
          <h4 class="card-title fw-bold addToCartCard " style="cursor:pointer; ">Add to Cart</h4>
        </div>      
    </div>
  </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsPants();


function renderCartItems() {
  cartItems.innerHTML = '';

  // Save cart_data in local storage
  localStorage.setItem('cart_data', JSON.stringify(cart_data));


  cart_data.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart_item');
    cartItem.innerHTML = `
      <div class="remove_item position-absolute z-3 p-2" onclick="removeCartItem(${item.id})">
        <span style="color:black">&times;</span>
      </div>
      <div class="item_img">
        <img src="${item.image}" alt="">
      </div>
      <div class="item_details ms-3">
        <p>${item.name}</p>
        <p class="sale fw-bold"><small>EGP</small> ${item.price}</p>
        <div class="qty">
          <span onclick="DecreaseQty(${item.id})">-</span>
          <strong>${item.qty}</strong>
          <span onclick="IncreaseQty(${item.id})">+</span>
        </div>
        <a class="viewDetailsHref" href="ProductCart.html" onclick="addToCart(${item.id})">View Details</a>
      </div>
    `;

    cartItems.appendChild(cartItem);
  });
}


function addToCart(itemId) {
  // Find the item from the cart_data array based on the itemId
  const selectedItem = cart_data.find(item => item.id === itemId);

  // Store the selected item details in localStorage
  localStorage.setItem('cartItemImage', selectedItem.image);
  localStorage.setItem('cartItemName', selectedItem.name);
  localStorage.setItem('cartItemPrice', selectedItem.price);
  localStorage.setItem('cartItemQty', selectedItem.qty);

  // Perform any additional actions after adding to cart, such as displaying a success message
  console.log('Item added to cart!');
}

function updateCart() {
  renderCartItems();
  CalcItemsNum();
}



form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});





const NewUpdate = [
  {
    id: 1,
    name: 'Find a Store',
    image: "img/blog-1.jpg",
    paragraph: 'Our Store',
    qty: 1,
  },
  {
    id: 2,
    name: 'From your Blog',
    image: "img/blog-2.jpg",
    paragraph: 'Our Store',
    qty: 1,
  },
  {
    id: 3,
    name: 'From your Blog',
    image: "img/blog-3.jpg",
    paragraph: 'Our Store',
    qty: 1,
  },
];



function newUpdates() {
  let newUpdates_item = document.querySelector('.newUpdates');

  NewUpdate.forEach((item) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('col-md-4');
    itemEl.innerHTML = `
      <div class="update-info">
        <div class="image">
          <img src="${item.image}" alt="">
        </div>
        <div class="info mt-3 mt-md-4 ">
          <h5>${item.name}</h5>
          <a href="About.html"><p>${item.paragraph} <i class=" fa-solid fa-arrow-right"></i></p></a>
        </div>
      </div>`;

    newUpdates_item.appendChild(itemEl);
  });
}

newUpdates();
















