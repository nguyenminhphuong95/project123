// biến
cartItem = [
  { "no": "a", "quantity":1 },
  { "no": "b", "quantity":2 },
  { "no": "c", "quantity":3 },
  { "no": "a", "quantity":4 },
  { "no": "a", "quantity":1 },
  { "no": "b", "quantity":2 }
];

compressCart();

function compressCart() {
  for (let i = 0; i < cartItem.length; i++) {
    const x = cartItem[i];
    
    for (let j = i+1; j < cartItem.length; j++) {
      const y = cartItem[j];
      
      if (x.no == y.no) {
        x.quantity += y.quantity;
        cartItem.splice(j,1);
        j--;
      }
    }
  }
  
}

console.log(cartItem);
