var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 
}

function viewCart() {
 if(cart.length === 0) {
   console.log("Your shopping cart is empty.");
 } else {
   var items = [];
   for(var i = 0; i < cart.length; i++) {
     for(var item in cart[i]) {
       items.push(items + " at $" + cart[i][item])
         
       }
     }
     console.log("In your cart, you have " + items.join(", ") + ".");
 }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
