
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ProductGrid } from "@/components/products/ProductGrid";
import { allProducts } from "@/data/products";
import { Product } from "@/types/product";
import { ArrowLeft, Search as SearchIcon } from "lucide-react";

const Search = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q") || "";

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      
      // Filter products based on search query
      const query = searchQuery.toLowerCase();
      const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.manufacturer.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
      
      setProducts(filteredProducts);
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-24">
      {/* Back button */}
      <Link
        to="/products"
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-bike-red dark:hover:text-bike-red mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to all products
      </Link>

      <div className="flex items-center mb-8">
        <SearchIcon className="h-6 w-6 mr-2 text-gray-500" />
        <h1 className="text-3xl font-bold">
          Search Results: "{searchQuery}"
        </h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bike-red"></div>
        </div>
      ) : products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No products found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We couldn't find any products matching "{searchQuery}"
          </p>
          <Link
            to="/products"
            className="text-bike-red hover:underline"
          >
            Browse all products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Search;
