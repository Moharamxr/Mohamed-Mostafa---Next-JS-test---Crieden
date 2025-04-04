import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatPrice';

const CartSummary: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total Price: {formatPrice(totalPrice)}</p>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;