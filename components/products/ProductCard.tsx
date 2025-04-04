"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/types/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group cursor-pointer border border-gray-100 p-2 sm:p-4 hover:shadow-md transition-shadow"
    >
      <div className="aspect-square relative bg-white mb-2">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          className="object-contain p-2 sm:p-4"
          loading="lazy"
        />
      </div>
      <div className="mt-1 sm:mt-2">
        <h3 className="text-xs sm:text-sm font-medium line-clamp-2 group-hover:text-gray-700 mb-1">
          {product.title}
        </h3>
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm sm:text-base">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-[10px] sm:text-xs text-gray-500 uppercase">
            {product.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(ProductCard);