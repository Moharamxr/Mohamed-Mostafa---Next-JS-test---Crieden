import { Metadata, Viewport } from "next";
import React from "react";

// Type for Layout component
type LayoutProps = {
  children: React.ReactNode;
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: "Shopping Cart | FASCO",
  description: "Review your shopping cart and proceed to checkout.",
  openGraph: {
    title: "Shopping Cart | FASCO",
    description: "Review your shopping cart and proceed to checkout.",
    url: "https://fasco-orcin.vercel.app/cart",
    type: "website",
    images: [
      {
        url: "https://fasco-orcin.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FASCO Shopping Cart",
      },
    ],
    siteName: "FASCO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopping Cart | FASCO",
    description: "Review your shopping cart and proceed to checkout.",
    site: "@fasco",
    images: ["https://fasco-orcin.vercel.app/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://fasco-orcin.vercel.app/cart",
  },
  robots: {
    index: false,
    follow: true,
  },
};

// Layout component
export default function CartLayout({ children }: LayoutProps) {
  return <>{children}</>;
}