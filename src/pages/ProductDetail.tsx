
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, IndianRupee, Heart, Share2, ArrowLeft, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    if (slug) {
      const fetchedProduct = getProductBySlug(slug);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setSelectedImage(fetchedProduct.images[0]);
        setSelectedColor(fetchedProduct.colors[0] || "");
        setRelatedProducts(getRelatedProducts(fetchedProduct.id, 4));
        window.scrollTo(0, 0);
      }
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-24 flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bike-red"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 min-h-[50vh]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity(prev => (prev < product.stock ? prev + 1 : prev));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleWishlist = () => {
    toast.info("Added to wishlist");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.info("Link copied to clipboard");
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      {/* Breadcrumbs */}
      <nav className="mb-6">
        <ol className="flex text-sm">
          <li className="mr-2">
            <Link to="/" className="text-gray-500 hover:text-bike-red">
              Home
            </Link>
          </li>
          <li className="mx-2 text-gray-500">/</li>
          <li className="mr-2">
            <Link to="/products" className="text-gray-500 hover:text-bike-red">
              Products
            </Link>
          </li>
          <li className="mx-2 text-gray-500">/</li>
          <li className="mr-2">
            <Link 
              to={`/category/${product.category}`} 
              className="text-gray-500 hover:text-bike-red"
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
          </li>
          <li className="mx-2 text-gray-500">/</li>
          <li className="text-gray-800 dark:text-gray-300 font-medium truncate">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Back button (mobile) */}
      <Link to="/products" className="inline-flex md:hidden items-center mb-4 text-gray-600 dark:text-gray-400 hover:text-bike-red dark:hover:text-bike-red">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to products
      </Link>

      {/* Product Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main image */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer border-2 ${
                  selectedImage === image
                    ? "border-bike-red"
                    : "border-transparent"
                } rounded overflow-hidden flex-shrink-0`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          {/* Brand */}
          <Link 
            to={`/brand/${product.manufacturer}`} 
            className="inline-block text-bike-red font-medium hover:underline mb-2"
          >
            {product.manufacturer}
          </Link>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          {/* Ratings */}
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
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
            <span className="text-gray-600 dark:text-gray-400">
              {product.ratings.toFixed(1)} ({product.reviews} reviews)
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.isNew && (
              <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
            )}
            {product.bestSeller && (
              <Badge className="bg-amber-500 hover:bg-amber-600">Best Seller</Badge>
            )}
            {product.featured && (
              <Badge className="bg-blue-500 hover:bg-blue-600">Featured</Badge>
            )}
            {product.stock <= 5 && (
              <Badge variant="outline" className="text-red-500 border-red-500">
                Only {product.stock} left
              </Badge>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-6">
            <IndianRupee className="h-5 w-5 text-bike-red" />
            <div className="flex items-center">
              {product.salePrice ? (
                <>
                  <span className="text-3xl font-bold mr-2">
                    {formatPrice(product.salePrice).replace("₹", "")}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.price).replace("₹", "")}
                  </span>
                  <span className="ml-2 text-green-600 font-medium">
                    ({Math.round(((product.price - product.salePrice) / product.price) * 100)}% off)
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold">
                  {formatPrice(product.price).replace("₹", "")}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {product.description}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="text-xs text-gray-500 dark:text-gray-400">Engine</div>
              <div className="font-medium">{product.engineSize}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="text-xs text-gray-500 dark:text-gray-400">Power</div>
              <div className="font-medium">{product.power}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="text-xs text-gray-500 dark:text-gray-400">Top Speed</div>
              <div className="font-medium">{product.topSpeed}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="text-xs text-gray-500 dark:text-gray-400">Weight</div>
              <div className="font-medium">{product.weight}</div>
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <label className="block font-medium mb-2">Color</label>
            <div className="flex space-x-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedColor === color
                      ? "ring-2 ring-offset-2 ring-bike-red"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select color ${color}`}
                >
                  {selectedColor === color && (
                    <Check className={`h-5 w-5 ${color === '#FFFFFF' || color === '#FFFF00' ? 'text-black' : 'text-white'}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block font-medium mb-2">Quantity</label>
            <div className="flex">
              <button
                onClick={decreaseQuantity}
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700"
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="w-16 text-center border-t border-b border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                readOnly
              />
              <button
                onClick={increaseQuantity}
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-700"
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button
              onClick={handleAddToCart}
              className="flex-1 gap-2"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="h-5 w-5" />
              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button
              onClick={handleWishlist}
              variant="outline"
              className="flex-1 sm:flex-none gap-2"
            >
              <Heart className="h-5 w-5" />
              <span className="sm:hidden md:inline">Wishlist</span>
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              className="flex-1 sm:flex-none gap-2"
            >
              <Share2 className="h-5 w-5" />
              <span className="sm:hidden md:inline">Share</span>
            </Button>
          </div>

          {/* Stock & Shipping Info */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                product.stock > 0 ? "bg-green-500" : "bg-red-500"
              }`}></div>
              <span>
                {product.stock > 0
                  ? `In Stock (${product.stock} available)`
                  : "Out of Stock"}
              </span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              Free shipping for orders above ₹10,00,000
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              EMI options available
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-12">
        <ProductGrid 
          products={relatedProducts} 
          title="Related Products" 
        />
      </section>
    </div>
  );
};

export default ProductDetail;
