
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory, categories } from "@/data/products";
import { Product } from "@/types/product";
import { ArrowLeft } from "lucide-react";

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (id) {
      setLoading(true);
      // Get category name
      const category = categories.find(cat => cat.id === id);
      if (category) {
        setCategoryName(category.name);
      }
      
      // Get products
      const fetchedProducts = getProductsByCategory(id);
      setProducts(fetchedProducts);
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, [id]);

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

      <h1 className="text-3xl font-bold mb-8">
        {categoryName || "Category"}
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bike-red"></div>
        </div>
      ) : products.length > 0 ? (
        <ProductGrid 
          products={products} 
          title={`${categoryName} (${products.length})`} 
        />
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No products found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            There are no products in this category yet.
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

export default Category;
