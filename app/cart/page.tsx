"use client";

import React from "react";
import dynamic from "next/dynamic";

// Simple loading state
const CartLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
  </div>
);

// Import the cart content with SSR disabled to prevent hydration issues
const CartContent = dynamic(() => import("@/components/cart/CartContent"), {
  ssr: false,
  loading: () => <CartLoading />
});

const CartPage = () => {
  // We can now simply return the CartContent component
  // The loading component will be shown automatically while it's loading
  return <CartContent />;
};

export default CartPage;