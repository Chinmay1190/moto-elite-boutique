
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductFilters } from "@/components/products/ProductFilters";
import { allProducts } from "@/data/products";
import { Product } from "@/types/product";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Parse query parameters
  const params = new URLSearchParams(location.search);
  const categoryParam = params.get("category");
  const manufacturerParam = params.get("manufacturer");
  const sortParam = params.get("sort") || "featured";
  const searchQuery = params.get("q");

  // Initialize filter state
  const [filters, setFilters] = useState({
    categories: categoryParam ? [categoryParam] : [],
    manufacturers: manufacturerParam ? [manufacturerParam] : [],
    priceRange: [0, 10000000],
    sort: sortParam
  });

  // Apply filters
  useEffect(() => {
    setLoading(true);

    let filtered = [...allProducts];

    // Search filtering
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.manufacturer.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Category filtering
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    // Manufacturer filtering
    if (filters.manufacturers.length > 0) {
      filtered = filtered.filter(product => 
        filters.manufacturers.includes(product.manufacturer)
      );
    }

    // Price range filtering
    filtered = filtered.filter(product => {
      const price = product.salePrice || product.price;
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Sorting
    if (filters.sort === "price-low-high") {
      filtered.sort((a, b) => {
        const aPrice = a.salePrice || a.price;
        const bPrice = b.salePrice || b.price;
        return aPrice - bPrice;
      });
    } else if (filters.sort === "price-high-low") {
      filtered.sort((a, b) => {
        const aPrice = a.salePrice || a.price;
        const bPrice = b.salePrice || b.price;
        return bPrice - aPrice;
      });
    } else if (filters.sort === "newest") {
      filtered = filtered.filter(product => product.isNew).concat(
        filtered.filter(product => !product.isNew)
      );
    } else {
      // Default sort (featured)
      filtered.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.bestSeller && !b.bestSeller) return -1;
        if (!a.bestSeller && b.bestSeller) return 1;
        return 0;
      });
    }

    setFilteredProducts(filtered);
    setLoading(false);
  }, [filters, searchQuery]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.categories.length === 1) {
      params.set("category", filters.categories[0]);
    }

    if (filters.manufacturers.length === 1) {
      params.set("manufacturer", filters.manufacturers[0]);
    }

    if (filters.sort !== "featured") {
      params.set("sort", filters.sort);
    }

    if (searchQuery) {
      params.set("q", searchQuery);
    }

    const newSearch = params.toString();
    if (newSearch) {
      navigate(`/products?${newSearch}`, { replace: true });
    } else {
      navigate("/products", { replace: true });
    }
  }, [filters, navigate, searchQuery]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {searchQuery 
            ? `Search Results for "${searchQuery}"` 
            : "All Superbikes"}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters sidebar */}
        <div className="md:col-span-1">
          <ProductFilters 
            filters={filters} 
            onFilterChange={handleFilterChange}
            totalProducts={filteredProducts.length}
          />
        </div>

        {/* Product grid */}
        <div className="md:col-span-3">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bike-red"></div>
            </div>
          ) : (
            <ProductGrid 
              products={filteredProducts} 
              title={searchQuery ? undefined : "All Bikes"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
