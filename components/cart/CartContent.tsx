"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiTrash } from "react-icons/hi";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
  selectCartItems,
  selectCartTotal,
  selectCartCount,
} from "@/store/slices/cartSlice";
import { toast } from "sonner";

const CartContent = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const itemCount = useAppSelector(selectCartCount);

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId: number) => {
    const product = cartItems.find(item => item.product.id === productId)?.product;
    dispatch(removeFromCart(productId));
    
    toast.success("Item removed", {
      description: product ? `Removed ${product.title} from your cart` : "Item removed from your cart",
      duration: 3000,
    });
  };

  const handleClearCart = () => {
    toast.custom((t) => (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <h3 className="text-lg font-medium mb-2">Clear your cart?</h3>
        <p className="text-gray-600 mb-4">Are you sure you want to remove all items from your cart?</p>
        <div className="flex justify-end gap-3">
          <Button 
            variant="outline" 
            onClick={() => toast.dismiss(t)} 
            className="border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button 
            onClick={() => {
              dispatch(clearCart());
              toast.dismiss(t);
              toast.success("Cart cleared", {
                description: "All items have been removed from your cart",
                duration: 3000,
              });
            }}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Clear Cart
          </Button>
        </div>
      </div>
    ), { duration: 100000 });
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-medium mb-6">Your Cart</h1>
          <div className="py-12 border-2 border-dashed border-gray-200 rounded-md">
            <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
            <Link href="/products">
              <Button className="bg-black text-white hover:bg-gray-800">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Cart</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-medium">Your Cart ({itemCount} items)</h1>
          <Button 
            variant="outline" 
            onClick={handleClearCart}
            className="text-red-500 border-red-500 hover:bg-red-50"
          >
            Clear Cart
          </Button>
        </div>

        {/* Cart Items */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {cartItems.map(({ product, quantity }) => (
            <div key={product.id} className="flex flex-col sm:flex-row border border-gray-200 rounded-md overflow-hidden">
              {/* Product Image */}
              <div className="w-full sm:w-36 h-36 relative bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 150px"
                  className="object-contain p-2"
                />
              </div>
              
              {/* Product Info */}
              <div className="flex-1 p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="font-medium mb-1 line-clamp-2">
                    <Link href={`/products/${product.id}`} className="hover:underline">
                      {product.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <p className="font-bold">${product.price.toFixed(2)}</p>
                </div>
                
                <div className="flex items-center mt-4 md:mt-0 gap-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => handleUpdateQuantity(product.id, quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleUpdateQuantity(product.id, quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => handleRemoveItem(product.id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label={`Remove ${product.title} from cart`}
                  >
                    <HiTrash className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border-t border-gray-200 pt-8">
          <div className="max-w-md ml-auto">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{cartTotal > 50 ? "Free" : "$5.00"}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${(cartTotal > 50 ? cartTotal : cartTotal + 5).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button 
                className="bg-black text-white hover:bg-gray-800"
                onClick={() => {
                  // Show processing toast
                  toast.loading("Processing your order...", { id: "checkout" });
                  
                  // Simulate API call delay
                  setTimeout(() => {
                    // Clear the cart
                    dispatch(clearCart());
                    
                    // Update the toast to success
                    toast.success("Order placed successfully!", {
                      id: "checkout",
                      description: "Thank you for your purchase!",
                      duration: 5000
                    });
                    
                    // Navigate to products page after a short delay
                    setTimeout(() => {
                      window.location.href = "/products";
                    }, 1000);
                  }, 1500);
                }}
              >
                Proceed to Checkout
              </Button>
              <Link href="/products" className="text-center text-sm underline">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;