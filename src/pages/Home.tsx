
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  getFeaturedProducts, 
  getBestSellerProducts, 
  getNewProducts, 
  categories,
  manufacturers
} from "@/data/products";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ChevronRight } from "lucide-react";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts());
    setBestSellers(getBestSellerProducts());
    setNewArrivals(getNewProducts());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-r from-black to-bike-red">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1170&auto=format&fit=crop')" 
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative h-full flex items-center">
          <div className="max-w-2xl animate-slide-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Premium Superbikes for Every Rider
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover our collection of 65+ high-performance motorcycles from top manufacturers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-bike-red hover:bg-bike-red/90">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link to="/category/sport">Sport Bikes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(0, 6).map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover-scale shadow-sm border border-gray-200 dark:border-gray-700 group"
              >
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-bike-red/10 transition-colors">
                  <span className="text-2xl">🏍️</span>
                </div>
                <h3 className="font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Featured Bikes</h2>
            <Link 
              to="/products" 
              className="text-bike-red flex items-center hover:underline font-medium"
            >
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <ProductGrid products={featuredProducts} featured />
        </div>
      </section>

      {/* Banner */}
      <section className="py-12 bg-bike-red text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Premium Quality & Performance</h2>
              <p className="text-white/90 mb-6">
                All our motorcycles are fully serviced, inspected, and guaranteed to deliver the best performance on the road.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Certified Pre-delivery Inspection
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1-Year Service Warranty
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Nationwide Delivery Available
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1170&auto=format&fit=crop" 
                alt="Premium motorcycle" 
                className="rounded-lg max-h-80 object-cover shadow-lg transform -rotate-3" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Best Sellers</h2>
            <Link 
              to="/products?sort=bestseller" 
              className="text-bike-red flex items-center hover:underline font-medium"
            >
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link 
              to="/products?sort=newest" 
              className="text-bike-red flex items-center hover:underline font-medium"
            >
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <ProductGrid products={newArrivals} />
        </div>
      </section>

      {/* Top Brands */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Top Brands</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {manufacturers.slice(0, 12).map((brand) => (
              <Link 
                key={brand.id} 
                to={`/brand/${brand.id}`}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover-scale flex items-center justify-center h-20 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-bold text-lg">{brand.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Subscribe to our newsletter for the latest motorcycle news, exclusive offers, and new arrivals.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-md border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-bike-red dark:focus:ring-bike-red dark:text-white"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
