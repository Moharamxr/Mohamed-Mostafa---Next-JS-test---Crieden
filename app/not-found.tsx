import { Metadata, Viewport } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Sorry, the page you were looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you were looking for doesn{"'"}t exist or has been moved.
      </p>
      <Link href="/">
        <Button className="bg-black text-white hover:bg-gray-800">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}