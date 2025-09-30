const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountDisplay = document.querySelector('#cart-count');
const cartItemsList = document.querySelector('#cart-items');
const cartIcon = document.querySelector('.cart-icon');
const cartBox = document.querySelector('#cart-box');

let cartItems = [];

// add to cart
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const foodCard = e.target.closest('.food-card , .food-card1');
    const itemName = foodCard.querySelector('h3').textContent;
    const itemPrice = foodCard.querySelector('h4').textContent;

    const existingItem = cartItems.find(item => item.name === itemName);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    renderCartItems();
  });
});

// cart open/close
cartIcon.addEventListener('click', () => {
  cartBox.classList.toggle('hidden');
});

// update cart count
function updateCartCount() {
  let total = 0;
  cartItems.forEach(item => {
    total += item.quantity;
  });
  cartCountDisplay.textContent = total;  // yahan pe directly show ho raha hai
}

// render cart items
function renderCartItems() {
  cartItemsList.innerHTML = '';

  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('cart-row'); 
    li.innerHTML = `
      <div class="row item">${item.name}</div>
      <div class="row quantity">
        <button class="decrease" data-index="${index}">-</button>
        <span>${item.quantity}</span>
        <button class="increase" data-index="${index}">+</button>
      </div>
      <div class="row price">${item.price}</div>
      <div class="row delete">
        <button class="delete-btn" data-index="${index}">🗑</button>
      </div>
    `;

    cartItemsList.appendChild(li);
  });

  // increase
  document.querySelectorAll('.increase').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.target.dataset.index;
      cartItems[idx].quantity++;
      renderCartItems();
    });
  });

  // decrease
  document.querySelectorAll('.decrease').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.target.dataset.index;
      if (cartItems[idx].quantity > 1) {
        cartItems[idx].quantity--;
      } else {
        cartItems.splice(idx, 1);
      }
      renderCartItems();
    });
  });

  // delete
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.target.dataset.index;
      cartItems.splice(idx, 1); 
      renderCartItems();
    });
  });

  // last me count update hoga
  updateCartCount();
}
