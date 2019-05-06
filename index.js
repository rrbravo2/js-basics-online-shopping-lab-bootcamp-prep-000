var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(100*(Math.random()));
  var itemObj = {[item]: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
 
}

function total() {
  var pricePerItemInCart = [];
  var totalPrice = 0
  for(var i = 0; i < cart.length; i++)
  {
    var itemPrice = cart[i][Object.keys(cart[i])]
    pricePerItemInCart.push(itemPrice)
    
    for (var j =0; j<pricePerItemInCart.length; j++)
    {
      totalPrice = pricePerItemInCart[j]+=totalPrice;
    }
    return totalPrice
  }
}


function removeFromCart(item) {
 for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    } 
  }
  console.log('That item is not in your cart.')
  return cart;
}


function placeOrder(cardNumber) {
 if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = cart.length; i >= 0; i--)
    { cart.pop();} 
  }
  else 
  {
    console.log('Sorry, we don\'t have a credit card on file for you.')
    return cart;
  }
}

placeOrder();

