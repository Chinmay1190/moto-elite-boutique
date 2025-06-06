
import { Link } from "react-router-dom";
import { categories, manufacturers } from "@/data/products";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold text-bike-red mb-4 block">
              SuperBikes
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We offer the best collection of superbikes in India with premium quality and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-bike-red hover:text-bike-red/80 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-bike-red hover:text-bike-red/80 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                </svg>
              </a>
              <a href="#" className="text-bike-red hover:text-bike-red/80 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.id}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-bike-red dark:hover:text-bike-red transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Brands</h3>
            <ul className="space-y-2">
              {manufacturers.slice(0, 8).map((brand) => (
                <li key={brand.id}>
                  <Link 
                    to={`/brand/${brand.id}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-bike-red dark:hover:text-bike-red transition-colors"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Contact Us</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📍</span> 
                123 Bike Street, Bengaluru, Karnataka 560001, India
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                +91 98765 43210
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                info@superbikes.com
              </li>
              <li className="mt-4">
                <Link 
                  to="/contact"
                  className="text-bike-red hover:underline"
                >
                  Send us a message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pb-6 border-t dark:border-gray-800 pt-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} SuperBikes. All rights reserved.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">We accept:</p>
              <div className="flex space-x-3">
                <div className="h-8 w-12 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center">Visa</div>
                <div className="h-8 w-12 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center">MC</div>
                <div className="h-8 w-12 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center">Amex</div>
                <div className="h-8 w-12 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center">UPI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
