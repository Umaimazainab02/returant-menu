let cartCount = 0;
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountDisplay = document.querySelector('#cart-count');
const cartItemsList = document.querySelector('#cart-items');
const cartIcon = document.querySelector('.cart-icon');
const cartBox = document.querySelector('#cart-box');

let cartItems = [];

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const foodCard = e.target.closest('.food-card , .food-card1');
    const itemName = foodCard.querySelector('h3').textContent;
    const itemPrice = foodCard.querySelector('h4').textContent;

    const existingItem = cartItems.find(item => item.name === itemName);

    if (existingItem) {
      existingItem.quantity += 1; // quantity increase
    } else {
      cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    cartCount++;
    cartCountDisplay.textContent = cartCount;

    renderCartItems();
  });
});

cartIcon.addEventListener('click', () => {
  cartBox.classList.toggle('hidden');
});

function renderCartItems() {
  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name}-${item.price}`;
    cartItemsList.appendChild(li);
  });
}function renderCartItems() {
  cartItemsList.innerHTML = '';

  cartItems.forEach((item, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <div>
        ${item.name} - ${item.price} <br>
        Quantity: <button class="decrease" data-index="${index}">-</button>
        ${item.quantity}
        <button class="increase" data-index="${index}">+</button>
      </div>
    `;

    cartItemsList.appendChild(li);
  });

  // buttons par click listeners
  document.querySelectorAll('.increase').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.target.dataset.index;
      cartItems[idx].quantity++;
      renderCartItems();
    });
  });

  document.querySelectorAll('.decrease').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.target.dataset.index;
      if (cartItems[idx].quantity > 1) {
        cartItems[idx].quantity--;
      } else {
        // agar 1 se kam ho jaye to remove kar do
        cartItems.splice(idx, 1);
      }
      renderCartItems();
    });
  });
}

