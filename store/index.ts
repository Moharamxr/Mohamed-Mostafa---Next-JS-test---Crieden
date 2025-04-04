import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import cartReducer from './slices/cartSlice';

// Define middleware with localStorage persistence
const localStorageMiddleware = ({ getState }: any) => {
  return (next: any) => (action: any) => {
    const result = next(action);
    localStorage.setItem('cartState', JSON.stringify(getState().cart));
    return result;
  };
};

// Load cart state from localStorage
const loadCartState = () => {
  try {
    const cartState = localStorage.getItem('cartState');
    if (cartState === null) return undefined;
    return { cart: JSON.parse(cartState) };
  } catch (err) {
    return undefined;
  }
};

// Configure store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadCartState(),
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(localStorageMiddleware),
});

// Define types for dispatch and selector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create custom hooks for typed dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;