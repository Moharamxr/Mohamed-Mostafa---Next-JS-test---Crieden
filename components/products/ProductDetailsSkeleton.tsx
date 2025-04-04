import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-6">
        <div className="h-5 w-10 bg-gray-200 rounded"></div>
        <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
        <div className="h-5 w-16 bg-gray-200 rounded"></div>
        <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
        <div className="h-5 w-32 bg-gray-200 rounded"></div>
      </div>

      {/* Product Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image skeleton */}
        <div className="bg-white p-4 sm:p-8 flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-md mx-auto bg-gray-200 rounded"></div>
        </div>

        {/* Product Info skeleton */}
        <div className="flex flex-col">
          {/* Category */}
          <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>

          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex gap-1 mr-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-5 w-5 bg-gray-200 rounded-full"></div>
              ))}
            </div>
            <div className="h-5 w-20 bg-gray-200 rounded"></div>
          </div>

          {/* Price */}
          <div className="h-8 w-24 bg-gray-300 rounded mb-6"></div>

          {/* Description */}
          <div className="space-y-2 mb-8">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
            <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center flex-col md:flex-row gap-3 w-full">
            {/* Quantity Selector skeleton */}
            <div className="flex items-center">
              <div className="h-5 w-20 bg-gray-200 rounded mr-4"></div>
              <div className="h-10 w-32 bg-gray-200 rounded"></div>
            </div>

            {/* Add to Cart Button skeleton */}
            <div className="h-12 w-full md:flex-1 bg-gray-200 rounded"></div>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-200 mt-8 pt-6">
            {/* Shipping Info skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="h-5 w-36 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
                <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Return Policy skeleton */}
            <div className="mt-4 mb-6">
              <div className="h-5 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
              <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
            </div>

            {/* Payment Methods skeleton */}
            <div className="mt-6">
              <div className="h-5 w-48 bg-gray-200 rounded mb-3"></div>
              <div className="flex flex-wrap gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-10 w-16 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;