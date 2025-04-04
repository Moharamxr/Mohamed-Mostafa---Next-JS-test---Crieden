import { Product } from "../types/products";


/**
 * Fetches all products from the API
 * @returns Promise with array of products
 */
export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }
    
    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Fetches a single product by ID
 * @param id - The product ID to fetch
 * @returns Promise with single product
 */
export async function getProductById(id: number | string): Promise<Product> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch product with ID ${id}: ${response.status} ${response.statusText}`);
    }
    
    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}

