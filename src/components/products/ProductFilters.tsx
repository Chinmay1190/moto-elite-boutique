
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { categories, manufacturers } from "@/data/products";
import { X, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FilterOptions {
  categories: string[];
  manufacturers: string[];
  priceRange: [number, number];
  sort: string;
}

interface ProductFiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  className?: string;
  totalProducts: number;
}

export const ProductFilters = ({
  filters,
  onFilterChange,
  className,
  totalProducts,
}: ProductFiltersProps) => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const priceRanges = [
    { min: 0, max: 500000, label: "Under ₹5,00,000" },
    { min: 500000, max: 1000000, label: "₹5,00,000 - ₹10,00,000" },
    { min: 1000000, max: 2000000, label: "₹10,00,000 - ₹20,00,000" },
    { min: 2000000, max: 5000000, label: "Above ₹20,00,000" },
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low-high", label: "Price: Low to High" },
    { value: "price-high-low", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" },
  ];

  const toggleCategory = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((id) => id !== categoryId)
      : [...filters.categories, categoryId];

    onFilterChange({
      ...filters,
      categories: newCategories,
    });
  };

  const toggleManufacturer = (manufacturerId: string) => {
    const newManufacturers = filters.manufacturers.includes(manufacturerId)
      ? filters.manufacturers.filter((id) => id !== manufacturerId)
      : [...filters.manufacturers, manufacturerId];

    onFilterChange({
      ...filters,
      manufacturers: newManufacturers,
    });
  };

  const setPriceRange = (min: number, max: number) => {
    onFilterChange({
      ...filters,
      priceRange: [min, max],
    });
  };

  const setSort = (sort: string) => {
    onFilterChange({
      ...filters,
      sort,
    });
  };

  const clearFilters = () => {
    onFilterChange({
      categories: [],
      manufacturers: [],
      priceRange: [0, 10000000],
      sort: "featured",
    });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.manufacturers.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 10000000 ||
    filters.sort !== "featured";

  return (
    <div className={cn("mb-6", className)}>
      {/* Mobile filter button */}
      <div className="flex justify-between items-center mb-4 md:hidden">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <div className="text-sm">
          <span className="font-medium">{totalProducts}</span> products
        </div>
      </div>

      {/* Desktop filters */}
      <div
        className={cn(
          "bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-4",
          filtersOpen ? "block" : "hidden md:block"
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Filters</h3>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs h-8 px-2"
              >
                Clear all
                <X className="ml-1 h-3 w-3" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setFiltersOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Sort Options */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Sort By</h4>
          <div className="flex flex-wrap gap-2">
            {sortOptions.map((option) => (
              <Button
                key={option.value}
                variant={filters.sort === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSort(option.value)}
                className="text-xs"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Categories</h4>
          <div className="space-y-1">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={filters.categories.includes(category.id)}
                  onCheckedChange={() => toggleCategory(category.id)}
                />
                <label
                  htmlFor={`category-${category.id}`}
                  className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Price Range</h4>
          <div className="space-y-1">
            {priceRanges.map((range, index) => (
              <div key={index} className="flex items-center">
                <Checkbox
                  id={`price-range-${index}`}
                  checked={
                    filters.priceRange[0] === range.min &&
                    filters.priceRange[1] === range.max
                  }
                  onCheckedChange={() => setPriceRange(range.min, range.max)}
                />
                <label
                  htmlFor={`price-range-${index}`}
                  className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {range.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturers */}
        <div>
          <h4 className="font-medium mb-2">Brands</h4>
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {manufacturers.map((manufacturer) => (
              <div key={manufacturer.id} className="flex items-center">
                <Checkbox
                  id={`brand-${manufacturer.id}`}
                  checked={filters.manufacturers.includes(manufacturer.id)}
                  onCheckedChange={() => toggleManufacturer(manufacturer.id)}
                />
                <label
                  htmlFor={`brand-${manufacturer.id}`}
                  className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {manufacturer.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
