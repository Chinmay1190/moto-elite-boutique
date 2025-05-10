
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByManufacturer, manufacturers } from "@/data/products";
import { Product } from "@/types/product";
import { ArrowLeft } from "lucide-react";

const Brand = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [brandName, setBrandName] = useState("");

  useEffect(() => {
    if (id) {
      setLoading(true);
      // Get brand name
      const brand = manufacturers.find(brand => brand.id === id);
      if (brand) {
        setBrandName(brand.name);
      }
      
      // Get products
      const fetchedProducts = getProductsByManufacturer(id);
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
        {brandName || "Brand"}
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bike-red"></div>
        </div>
      ) : products.length > 0 ? (
        <ProductGrid 
          products={products} 
          title={`${brandName} Bikes (${products.length})`} 
        />
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No products found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            There are no products from this manufacturer yet.
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

export default Brand;
