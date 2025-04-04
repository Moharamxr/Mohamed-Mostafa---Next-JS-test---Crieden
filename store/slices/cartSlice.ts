import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/types/products';

// Define the cart item type
export interface CartItem {
  product: Product;
  quantity: number;
}

// Define the initial state
interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // Update quantity if item already exists
        existingItem.quantity += quantity;
      } else {
        // Add new item
        state.items.push({ product, quantity });
      }
    },
    
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.product.id !== productId);
    },
    
    updateQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(item => item.product.id === productId);
      
      if (existingItem) {
        if (quantity <= 0) {
          // Remove item if quantity is zero or negative
          state.items = state.items.filter(item => item.product.id !== productId);
        } else {
          // Update quantity
          existingItem.quantity = quantity;
        }
      }
    },
    
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartTotal = (state: { cart: CartState }) => 
  state.cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
export const selectCartCount = (state: { cart: CartState }) => 
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export default cartSlice.reducer;