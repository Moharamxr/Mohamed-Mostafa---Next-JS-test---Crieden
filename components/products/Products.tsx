"use client";
import React, { useState, useEffect, useCallback } from "react";
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

const Products = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ItemsCategory>("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [gridView, setGridView] = useState<GridView>("medium");

  // Fetch all products initially
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const allProducts = await getAllProducts();
        setProducts(allProducts);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category and handle pagination
  useEffect(() => {
    // Filter products by category
    const filtered = filterProductsByCategory(products, selectedCategory);

    // Calculate total pages
    const pages = calculateTotalPages(filtered.length, ITEMS_PER_PAGE);
    setTotalPages(pages);

    // Reset to first page when changing categories
    if (currentPage > pages) {
      setCurrentPage(1);
    }

    // Get products for current page
    const paginatedProducts = paginateProducts(
      filtered,
      currentPage,
      ITEMS_PER_PAGE
    );
    setFilteredProducts(paginatedProducts);
  }, [products, selectedCategory, currentPage]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCategoryChange = useCallback((category: ItemsCategory) => {
    setSelectedCategory(category);
  }, []);

  const handleViewChange = useCallback((view: GridView) => {
    setGridView(view);
  }, []);

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
              {loading ? (
                <div className="h-5 bg-gray-200 rounded-md w-36 animate-pulse"></div>
              ) : (
                <>
                  Showing {filteredProducts.length} of{" "}
                  {filterProductsByCategory(products, selectedCategory).length}{" "}
                  products
                </>
              )}
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
          <div className={`grid ${getGridClass(gridView)}`}>
            {loading
              ? // Render skeleton cards during loading
                Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))
              : // Render actual product cards when data is loaded
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>

          {/* Pagination - show only when not loading */}
          {!loading && (
            <ProductsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Products;
