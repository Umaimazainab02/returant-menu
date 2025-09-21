let cartCount = 0;
let addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountDisplay = document.querySelector('#cart-count');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        if(cartCountDisplay){
        cartCountDisplay.textContent = cartCount; 
        }
            alert('Item added to cart!');

})
});
