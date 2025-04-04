"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ItemsCategory } from "@/app/types";

interface CategoryFilterProps {
  selectedCategory: ItemsCategory;
  setSelectedCategory: (category: ItemsCategory) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto justify-between">
          <span>
            Category:{" "}
            {selectedCategory === "all" ? "All categories" : selectedCategory}
          </span>
          <span className="ml-2">▼</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[calc(100vw-2rem)] sm:w-56">
        <DropdownMenuLabel>Category filter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value as ItemsCategory)}
        >
          <DropdownMenuRadioItem value="all">All categories</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="men's clothing">
            Men's clothing
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="jewelery">Jewelery</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="electronics">
            Electronics
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="women's clothing">
            Women's clothing
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryFilter;