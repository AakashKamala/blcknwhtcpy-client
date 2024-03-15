import React from 'react';

function Cart() {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-total">
        <p>Total: $0.00</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;