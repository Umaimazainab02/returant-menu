let cartCount = 0;
let addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountDisplay = document.querySelector('#cart-count');
const cartItemsList = document.querySelector('#cart-items');
const cartIcon = document.querySelector('.cart-icon');
const cartBox = document.querySelector('#cart-box');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        if(cartCountDisplay){
        cartCountDisplay.textContent = cartCount; 
        }

})
});
cartCountDisplay.forEach(button => {
    button.addEventListener('click', () => {
        

})
});
