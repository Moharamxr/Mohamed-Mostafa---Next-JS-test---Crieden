"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface ProductsPaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const ProductsPagination: React.FC<ProductsPaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const renderPaginationItems = () => {
    const items = [];

    // Show first page only for medium screens and up
    items.push(
      <PaginationItem
        key="first"
        className={currentPage !== 1 ? "hidden sm:flex" : ""}
      >
        <PaginationLink
          isActive={currentPage === 1}
          onClick={() => handlePageChange(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if needed - hide on mobile
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis1" className="hidden sm:flex">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Show current page and one page before and after on mobile
    // Show current page and two pages before and after on desktop
    const mobileRange = 1;
    const desktopRange = 2;

    for (
      let i = Math.max(2, currentPage - desktopRange);
      i <= Math.min(totalPages - 1, currentPage + desktopRange);
      i++
    ) {
      if (i === 1 || i === totalPages) continue;

      // Determine if this page should be visible on mobile
      const showOnMobile = Math.abs(i - currentPage) <= mobileRange;

      items.push(
        <PaginationItem
          key={i}
          className={showOnMobile ? "" : "hidden sm:flex"}
        >
          <PaginationLink
            isActive={currentPage === i}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if needed - hide on mobile
    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis2" className="hidden sm:flex">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show last page if there's more than one page - hide on mobile if not near current page
    if (totalPages > 1) {
      items.push(
        <PaginationItem
          key="last"
          className={
            currentPage !== totalPages && Math.abs(currentPage - totalPages) > 1
              ? "hidden sm:flex"
              : ""
          }
        >
          <PaginationLink
            isActive={currentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  if (totalPages <= 1) return null;
  
  return (
    <Pagination className="my-6 sm:my-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            className={
              currentPage === 1
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>

        {renderPaginationItems()}

        <PaginationItem>
          <PaginationNext
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
            className={
              currentPage === totalPages
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductsPagination;