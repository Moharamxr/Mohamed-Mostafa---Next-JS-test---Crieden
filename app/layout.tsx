import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

// Define site configuration constants
const siteName = "FASCO";
const siteDescription = "Premium fashion and lifestyle online store offering curated collections for the modern individual.";
const siteUrl = "https://fasco-store.com"; // Replace with your actual domain

// Move themeColor to viewport export
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: `${siteName} - Premium Online Store`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  
  // Icons (favicon, etc)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  
  // Manifest for PWA
  manifest: "/manifest.json",
  
  // App information
  applicationName: siteName,
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "black-translucent",
  },
  
  // Open Graph / Facebook
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} - Premium Online Store`,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "en_US",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@fascofashion", // Replace with your Twitter handle
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/twitter-image.jpg`],
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  
  // Verification for search consoles
  verification: {
    google: "google-site-verification-code", // Replace with actual code
    yandex: "yandex-verification-code", // Replace with actual code
    yahoo: "yahoo-verification-code", // Replace with actual code
  },
  
  // Alternative languages
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": `${siteUrl}/en-US`,
      "fr-FR": `${siteUrl}/fr-FR`,
    },
  },
  
  // Content security policy
  metadataBase: new URL(siteUrl),
  
  // Keywords
  keywords: [
    "fashion",
    "clothing",
    "apparel",
    "online shopping",
    "premium clothing",
    "accessories",
    "modern fashion",
    "e-commerce",
    "style",
    "designer",
    "FASCO",
  ],
  
  // Creator and publisher
  authors: [{ name: "FASCO Design Team", url: `${siteUrl}/about` }],
  creator: "FASCO",
  publisher: "FASCO Inc.",
  
  // Categorization
  category: "fashion",
  
  // Additional formats
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  // themeColor has been removed from here
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster 
            position="top-right" 
            toastOptions={{
              style: {
                background: "black",
                color: "white",
                border: "1px solid #333"
              },
              className: "my-toast-class"
            }}
          />
        </Providers>
      </body>
    </html>
  );
}