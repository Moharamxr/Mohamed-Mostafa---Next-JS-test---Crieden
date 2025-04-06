// layout.tsx
import type { Metadata } from "next";
import React from "react";

// Type for Layout component
type LayoutProps = {
  children: React.ReactNode;
};

// Simple static metadata
export const metadata: Metadata = {
  title: "Product Details | FASCO",
  description: "Explore our premium product details and specifications.",
  openGraph: {
    title: "Product Details | FASCO",
    description: "Explore our premium product details and specifications.",
    images: [
      {
        url: "https://fasco-orcin.vercel.app/product-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "FASCO Product",
      },
    ],
    url: "https://fasco-orcin.vercel.app/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Details | FASCO",
    description: "Explore our premium product details and specifications.",
    images: ["https://fasco-orcin.vercel.app/product-thumbnail.jpg"],
  },
  alternates: {
    canonical: "https://fasco-orcin.vercel.app/products",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "product details",
    "fashion",
    "online shopping",
    "FASCO",
    "apparel",
    "e-commerce",
  ],
};

// Set this page to static generation
export const dynamic = 'force-static';

// Layout component
export default function ProductDetailLayout({ children }: LayoutProps) {
  return <>{children}</>;
}