// first.js

let cartCount = 0;
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountDisplay = document.querySelector('#cart-count');
const cartItemsList = document.querySelector('#cart-items');
const cartIcon = document.querySelector('.cart-icon');
const cartBox = document.querySelector('#cart-box');

// array to store cart items
let cartItems = [];

// add click event on each add-to-cart button
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // find the parent card
    const foodCard = e.target.closest('.food-card, .food-card1');
    const itemName = foodCard.querySelector('h3').textContent;
    const itemPrice = foodCard.querySelector('h4').textContent;

    // push into cart array
    cartItems.push({ name: itemName, price: itemPrice });

    // increment count
    cartCount++;
    if (cartCountDisplay) {
      cartCountDisplay.textContent = cartCount;
    }

    // update cart items list
    renderCartItems();
  });
});

// show/hide cart box when cart icon clicked
cartIcon.addEventListener('click', () => {
  cartBox.classList.toggle('hidden'); // .hidden CSS me display:none hona chahiye
});

// render cart items inside the ul
function renderCartItems() {
  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    cartItemsList.appendChild(li);
  });
}
