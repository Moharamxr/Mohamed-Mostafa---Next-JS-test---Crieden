import type { Metadata } from "next";
import { getProductById } from "@/app/_services/products.service";

// Define the type for params
type Props = {
  params: { id: string };
  children: React.ReactNode;
};

// Generate metadata dynamically based on the product
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // Fetch product data
    const product = await getProductById(params.id);
    
    // Return metadata object
    return {
      title: `${product.title} | FASCO`,
      description: product.description.substring(0, 160), // Truncate to reasonable meta description length
      openGraph: {
        title: product.title,
        description: product.description.substring(0, 160),
        images: [
          {
            url: product.image,
            width: 1200,
            height: 630,
            alt: product.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: product.title,
        description: product.description.substring(0, 160),
        images: [product.image],
      },
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: `/products/${params.id}`,
      },
      keywords: [
        product.title,
        product.category,
        "fashion",
        "online shopping",
        "FASCO",
        "apparel",
        "e-commerce",
      ],
    };
  } catch (error) {
    // Fallback metadata if product fetch fails
    return {
      title: "Product | FASCO",
      description: "Explore our premium products at FASCO online store.",
    };
  }
}

// Product detail layout
export default function ProductDetailLayout({ children }: Props) {
  return (
    <>
      {/* 
        This layout doesn't add any UI elements because the page component
        already has its own layout structure. This is primarily for metadata.
        If needed, you could add product-specific layout elements here.
      */}
      {children}
    </>
  );
}