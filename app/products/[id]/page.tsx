"use client";

import React, { useState, useEffect } from "react";
import { getProductById } from "@/app/_services/products.service";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { HiOutlineShoppingBag, HiStar, HiCheck } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { 
  FaCcVisa, 
  FaCcMastercard, 
  FaCcAmex, 
  FaCcPaypal, 
  FaCcApplePay, 
  FaCcDiscover 
} from "react-icons/fa";
import { Product } from "@/app/types/products";
import { useAppDispatch } from '@/store';
import { addToCart } from '@/store/slices/cartSlice';
import { toast } from "sonner";
import ProductDetailsSkeleton from "@/components/products/ProductDetailsSkeleton";

const ProductDetails = () => {
  const params = useParams();
  const productId = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await getProductById(productId);
        setProduct(productData);
      } catch (err) {
        setError("Failed to load product details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => {
      const newValue = prev + amount;
      return newValue < 1 ? 1 : newValue;
    });
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ product, quantity }));
      
      // Show toast notification using Sonner
      toast.success("Added to cart", {
        description: `${quantity} × ${product.title}`,
        action: {
          label: "View Cart",
          onClick: () => window.location.href = "/cart"
        },
        duration: 3000,
        icon: <HiCheck className="text-white" />
      });
    }
  };

  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <HiStar key={`full-${i}`} className="text-yellow-500 text-xl" />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<HiStar key="half" className="text-yellow-500 text-xl" />);
    }

    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <CiStar key={`empty-${i}`} className="text-gray-300 text-xl" />
      );
    }

    return stars;
  };

  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
          <p>{error || "Product not found"}</p>
          <Link href="/" className="text-black underline mt-4 inline-block">
            Return to Home
          </Link>
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
            <BreadcrumbLink asChild>
              <Link href="/products">Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/products/${product.id}`}>{product.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="bg-white p-4 sm:p-8 flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <span className="uppercase text-sm text-gray-500 mb-2">
            {product.category}
          </span>

          <h1 className="text-2xl md:text-3xl font-medium mb-4">
            {product.title}
          </h1>

          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {renderRatingStars(product.rating.rate)}
            </div>
            <span className="text-sm text-gray-600">
              ({product.rating.count} reviews)
            </span>
          </div>

          <div className="text-2xl font-bold mb-6">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-gray-700 mb-8">{product.description}</p>
          <div className="flex items-center flex-col md:flex-row gap-3 w-full">
            {/* Quantity Selector */}
            <div className="flex items-center">
              <span className="mr-4 text-sm font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              variant={"outline"}
              className="flex items-center justify-center gap-2 py-3 cursor-pointer transition-colors w-full md:flex-1 hover:bg-black hover:text-white hover:border-black"
            >
              <HiOutlineShoppingBag className="text-xl" />
              Add to Cart
            </Button>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-200 mt-8 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-2">
                  Shipping Information
                </h3>
                <p className="text-sm text-gray-600">
                  Free shipping on orders over $50. Standard delivery in 3-5
                  business days.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Return Policy</h3>
              <p className="text-sm text-gray-600">
                30-day return policy. Items must be in original condition.
              </p>
            </div>

            {/* Payment Method Cards */}
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-3">Accepted Payment Methods</h3>
              <div className="flex flex-wrap gap-4">
                <FaCcVisa className="text-[#1434CB] text-3xl" title="Visa" />
                <FaCcMastercard className="text-[#EB001B] text-3xl" title="Mastercard" />
                <FaCcAmex className="text-[#2E77BB] text-3xl" title="American Express" />
                <FaCcPaypal className="text-[#003087] text-3xl" title="PayPal" />
                <FaCcApplePay className="text-black text-3xl" title="Apple Pay" />
                <FaCcDiscover className="text-[#FF6000] text-3xl" title="Discover" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
