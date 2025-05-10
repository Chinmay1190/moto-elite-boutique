
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div 
      className={`group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover-scale border border-gray-200 dark:border-gray-800 transition-all duration-300 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        {/* Product image */}
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
            )}
            {product.bestSeller && (
              <Badge className="bg-amber-500 hover:bg-amber-600">Best Seller</Badge>
            )}
            {product.salePrice && (
              <Badge className="bg-red-500 hover:bg-red-600">
                {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
              </Badge>
            )}
          </div>

          {/* Stock indicator */}
          {product.stock <= 3 && (
            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-xs rounded">
              Only {product.stock} left!
            </div>
          )}
        </Link>
      </div>

      <div className="p-4">
        {/* Manufacturer */}
        <Link to={`/brand/${product.manufacturer}`} className="text-xs text-bike-red font-semibold uppercase tracking-wider mb-1 inline-block hover:underline">
          {product.manufacturer}
        </Link>

        {/* Product name */}
        <Link to={`/product/${product.slug}`} className="hover:text-bike-red">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.name}</h3>
        </Link>

        {/* Specs (only for featured) */}
        {featured && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 dark:text-gray-400 mt-2 mb-3">
            <span>{product.engineSize}</span>
            <span>{product.power}</span>
            <span>{product.topSpeed}</span>
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.ratings)
                    ? "text-yellow-500"
                    : "text-gray-300 dark:text-gray-600"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-600 dark:text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <IndianRupee className="w-4 h-4 mr-1 text-bike-red" />
            <div>
              {product.salePrice ? (
                <div className="flex items-center gap-2">
                  <span className="font-bold">{formatPrice(product.salePrice).replace("₹", "")}</span>
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(product.price).replace("₹", "")}
                  </span>
                </div>
              ) : (
                <span className="font-bold">{formatPrice(product.price).replace("₹", "")}</span>
              )}
            </div>
          </div>

          {/* Add to cart button */}
          <Button
            size="sm"
            variant="outline"
            className="rounded-full p-2"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            disabled={product.stock === 0}
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
