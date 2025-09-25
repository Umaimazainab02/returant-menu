let cartCount = 0;
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountDisplay = document.querySelector('#cart-count');
const cartItemsList = document.querySelector('#cart-items');
const cartIcon = document.querySelector('.cart-icon');
const cartBox = document.querySelector('#cart-box');

let cartItems = [];

// add items
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const foodCard = e.target.closest('.food-card');
    const itemName = foodCard.querySelector('h3').textContent;
    const itemPrice = foodCard.querySelector('h4').textContent;

    cartItems.push({ name: itemName, price: itemPrice });
    cartCount++;
    cartCountDisplay.textContent = cartCount;

    renderCartItems();
  });
});

// show/hide cart box
cartIcon.addEventListener('click', () => {
  cartBox.classList.toggle('hidden');
});

// render items in cart box
function renderCartItems() {
  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    cartItemsList.appendChild(li);
  });
}
