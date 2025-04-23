import Products from "@/components/products/Products";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-start items-center flex-col px-10 py-7 min-h-screen">
      <h1
        className="font-normal text-[42px] leading-[32px] tracking-normal text-center align-middle capitalize"
        style={{ fontFamily: "Volkhov" }}
      >
        Fashion
      </h1>

      <Breadcrumb className="mt-3 text-black">
        <BreadcrumbList>
          <BreadcrumbItem>
            {/* Use the asChild prop to prevent nesting <a> tags */}
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            {/* Use the asChild prop here as well */}
            <BreadcrumbLink asChild>
              <Link href="/">Fashion</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Products />
    </div>
  );
}
