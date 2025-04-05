"use client";
import React from "react";
import { Button } from "../ui/button";

export type GridView = "compact" | "medium" | "spacious";

interface ViewToggleProps {
  gridView: GridView;
  setGridView: (view: GridView) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ gridView, setGridView }) => {
  return (
    <div className="hidden lg:flex items-center space-x-2">
      <span className="text-sm text-gray-500">View:</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setGridView("compact")}
        className={`p-1 ${gridView === "compact" ? "bg-gray-200" : ""}`}
        aria-label="Compact view"
      >
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-3 border-2 border-current"></div>
          ))}
        </div>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setGridView("medium")}
        className={`p-1 ${gridView === "medium" ? "bg-gray-200" : ""}`}
        aria-label="Medium view"
      >
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-3 border-2 border-current"></div>
          ))}
        </div>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setGridView("spacious")}
        className={`p-1 ${gridView === "spacious" ? "bg-gray-200" : ""}`}
        aria-label="Spacious view"
      >
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-3 border-2 border-current"></div>
          ))}
        </div>
      </Button>
    </div>
  );
};

export default ViewToggle;