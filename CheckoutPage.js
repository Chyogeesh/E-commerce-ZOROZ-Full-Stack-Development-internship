// src/pages/CheckoutPage.js
import React from 'react';
import { useCart } from '../context/CartContext';

function CheckoutPage() {
  const { cartItems, totalAmount } = useCart();

  const handleCheckout = () => {
    // Logic to handle checkout and proceed to payment
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div className="cart-summary">
        {cartItems.map(item => (
          <p key={item.id}>{item.name} x {item.quantity}</p>
        ))}
      </div>
      <p>Total: ${totalAmount}</p>
      <button onClick={handleCheckout}>Proceed to Payment</button>
    </div>
  );
}

export default CheckoutPage;
