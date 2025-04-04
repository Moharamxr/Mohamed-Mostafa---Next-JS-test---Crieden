import { Product } from "@/app/types/products";
import { ItemsCategory } from "@/app/types";

export const filterProductsByCategory = (
  products: Product[], 
  selectedCategory: ItemsCategory
): Product[] => {
  if (selectedCategory === "all") {
    return products;
  }
  return products.filter(product => product.category === selectedCategory);
};

export const paginateProducts = (
  products: Product[], 
  currentPage: number, 
  itemsPerPage: number
): Product[] => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return products.slice(startIndex, startIndex + itemsPerPage);
};

export const calculateTotalPages = (
  totalItems: number, 
  itemsPerPage: number
): number => {
  return Math.ceil(totalItems / itemsPerPage);
};