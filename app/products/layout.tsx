import { Metadata, Viewport } from "next";
import React from "react";

// Type for Layout component
type LayoutProps = {
  children: React.ReactNode;
};

const siteUrl = "https://fasco-orcin.vercel.app";
const productsUrl = `${siteUrl}/products`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: "Products | FASCO",
  description: "Browse our collection of premium products and shop with confidence.",
  openGraph: {
    title: "Products | FASCO",
    description: "Browse our collection of premium products and shop with confidence.",
    url: productsUrl,
    type: "website",
    images: [
      {
        url: "https://fasco-orcin.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FASCO Products",
      },
    ],
    siteName: "FASCO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | FASCO",
    description: "Browse our collection of premium products and shop with confidence.",
    site: "@fasco",
    images: ["https://fasco-orcin.vercel.app/twitter-image.jpg"],
  },
  alternates: {
    canonical: productsUrl,
    languages: {
      "en-US": `${siteUrl}/en-US/products`,
      "fr-FR": `${siteUrl}/fr-FR/products`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: ["products", "fashion", "online shopping", "FASCO", "apparel", "e-commerce"],
};

// Layout component
export default function ProductsLayout({ children }: LayoutProps) {
  return <>{children}</>;
}