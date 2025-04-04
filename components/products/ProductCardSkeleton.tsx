import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-md border border-gray-200 flex flex-col h-full animate-pulse">
      {/* Image skeleton */}
      <div className="relative w-full aspect-square bg-gray-200 rounded-md mb-4"></div>
      
      {/* Category skeleton */}
      <div className="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>
      
      {/* Title skeleton - two lines */}
      <div className="h-5 bg-gray-200 rounded w-full mb-1.5"></div>
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
      
      {/* Rating skeleton */}
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-gray-200"></div>
        ))}
        <div className="w-10 h-4 bg-gray-200 rounded ml-1"></div>
      </div>
      
      {/* Price skeleton */}
      <div className="mt-auto">
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-3"></div>
        
        {/* Button skeleton */}
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;