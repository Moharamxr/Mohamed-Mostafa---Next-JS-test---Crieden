"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { getAllProducts } from "@/app/_services/products.service";
import { Product } from "@/app/types/products";
import { ItemsCategory } from "@/app/types";
import CategoryFilter from "./CategoryFilter";
import ViewToggle, { GridView } from "./ViewToggle";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductsPagination from "./ProductsPagination";
import { getGridClass } from "@/utils/grid-utils";
import {
  filterProductsByCategory,
  paginateProducts,
  calculateTotalPages,
} from "@/utils/product-utils";

const ITEMS_PER_PAGE = 10;
const SKELETON_COUNT = 10; // Number of skeleton cards to show while loading

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ItemsCategory>("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [gridView, setGridView] = useState<GridView>("medium");

  // Fetch all products initially
  useEffect(() => {
    let isMounted = true;
    
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const allProducts = await getAllProducts();
        
        // Only update state if component is still mounted
        if (isMounted) {
          setProducts(allProducts);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        // Only update state if component is still mounted
        if (isMounted) {
          setError("Failed to load products");
          setLoading(false);
        }
      }
    };

    fetchProducts();
    
    // Cleanup function to prevent state updates on unmounted component
    return () => {
      isMounted = false;
    };
  }, []);

  // Memoized filtered products to prevent unnecessary recalculations
  const filteredProducts = useMemo(() => {
    return filterProductsByCategory(products, selectedCategory);
  }, [products, selectedCategory]);

  // Memoized pagination calculations
  const { paginatedProducts, totalPages } = useMemo(() => {
    const total = calculateTotalPages(filteredProducts.length, ITEMS_PER_PAGE);
    const paginated = paginateProducts(
      filteredProducts,
      currentPage,
      ITEMS_PER_PAGE
    );
    return { paginatedProducts: paginated, totalPages: total };
  }, [filteredProducts, currentPage]);

  // Reset to first page when changing categories
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCategoryChange = useCallback((category: ItemsCategory) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing categories
  }, []);

  const handleViewChange = useCallback((view: GridView) => {
    setGridView(view);
  }, []);

  // Render product count information
  const renderProductCount = () => {
    if (loading) {
      return <div className="h-5 bg-gray-200 rounded-md w-36 animate-pulse"></div>;
    }

    const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const end = Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length);
    const totalInCategory = filteredProducts.length;

    return (
      <>
        Showing {start}-{end} of {totalInCategory} products
      </>
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 mb-6 mt-6">
        {/* Filter controls - stacked on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategoryChange}
          />
          {/* Grid view controls - centered on mobile */}
          <div className="flex justify-center sm:justify-end items-center gap-3">
            <div className="text-sm text-gray-500 w-full sm:w-auto text-center sm:text-left">
              {renderProductCount()}
            </div>
            <ViewToggle gridView={gridView} setGridView={handleViewChange} />
          </div>
        </div>
      </div>

      {error ? (
        <div className="w-full h-64 flex items-center justify-center text-red-500">
          {error}
        </div>
      ) : (
        <>
          {/* Products Grid - Dynamic grid class based on view setting */}
          <div className={`grid ${getGridClass(gridView)} gap-4`}>
            {loading
              ? // Render skeleton cards during loading
                Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))
              : // Render actual product cards when data is loaded
                paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>

          {/* Pagination - show only when not loading and there are multiple pages */}
          {!loading && totalPages > 1 && (
            <div className="mt-8">
              <ProductsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

// Export with React.memo to prevent unnecessary re-renders
export default React.memo(Products);
