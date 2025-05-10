
import React from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  title?: string;
  className?: string;
  featured?: boolean;
}

export const ProductGrid = ({ 
  products, 
  title, 
  className,
  featured = false
}: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="py-10 text-center">
        <h2 className="text-xl font-semibold mb-4">No products found</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className={cn("py-8", className)}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b dark:border-gray-800 flex items-center">
          <span>{title}</span>
          <span className="text-bike-red ml-2 text-lg">({products.length})</span>
        </h2>
      )}
      
      <div className={cn(
        "grid gap-4 md:gap-6",
        featured 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      )}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            featured={featured && product.featured} 
          />
        ))}
      </div>
    </div>
  );
};
