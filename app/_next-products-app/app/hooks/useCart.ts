import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartItem } from "../types";

export const useCart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  const getTotalItems = () => {
    return cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };
};