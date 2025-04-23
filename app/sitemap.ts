import { MetadataRoute } from 'next';
import { getAllProducts } from './_services/products.service';

const baseUrl = 'https://fasco-orcin.vercel.app';
const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Generate static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }
  ];

  // Get all product IDs to generate dynamic product detail routes
  let productRoutes: MetadataRoute.Sitemap = [];
  
  try {
    const products = await getAllProducts();
    
    productRoutes = products.map((product) => ({
      url: `${baseUrl}/products/${product.id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error('Error generating product routes for sitemap:', error);
  }

  return [...staticRoutes, ...productRoutes];
}