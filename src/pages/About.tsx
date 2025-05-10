
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-12 h-80">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1170&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="relative h-full flex items-center">
          <div className="text-white p-8 max-w-lg">
            <h1 className="text-4xl font-bold mb-4">About SuperBikes</h1>
            <p className="text-lg">
              Premium motorcycle retailer bringing the world's finest superbikes to Indian enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4 text-lg">
              SuperBikes was founded in 2010 by a group of passionate motorcycle enthusiasts determined to bring the world's finest superbikes to India.
            </p>
            <p className="mb-4">
              What started as a small showroom in Mumbai has now grown into one of India's premier motorcycle retailers, with showrooms across major cities and a robust online presence serving customers nationwide.
            </p>
            <p>
              Our mission is simple: to provide motorcycle enthusiasts with access to the world's best bikes, exceptional service, and a community that shares their passion for two-wheeled excellence.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1635073908681-69d2819a8942?q=80&w=1272&auto=format&fit=crop" 
              alt="Motorcycle showroom" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose SuperBikes?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="w-16 h-16 bg-bike-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We carry only the finest motorcycles from top manufacturers worldwide, carefully selected for quality and performance.
            </p>
          </div>
          
          <div className="p-4">
            <div className="w-16 h-16 bg-bike-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our team of certified technicians ensures your motorcycle receives the best care possible, using only genuine parts.
            </p>
          </div>
          
          <div className="p-4">
            <div className="w-16 h-16 bg-bike-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Financing Options</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We offer flexible financing solutions to help you get your dream bike with comfortable EMI options and quick approvals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="h-56 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Team Member {i}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Position</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showrooms */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Showrooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Mumbai</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                123 Bike Street, Andheri West<br />
                Mumbai, Maharashtra 400053<br />
                +91 98765 43210
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Mon-Sat: 10:00 AM - 8:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Delhi</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                456 Moto Lane, Connaught Place<br />
                New Delhi, 110001<br />
                +91 98765 43211
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Mon-Sat: 10:00 AM - 8:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Bengaluru</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                789 Engine Road, Koramangala<br />
                Bengaluru, Karnataka 560034<br />
                +91 98765 43212
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Mon-Sat: 10:00 AM - 8:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bike-red text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Ride?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Explore our collection of premium superbikes and find your perfect ride today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bike-red">
            <Link to="/products">Browse Bikes</Link>
          </Button>
          <Button asChild size="lg" className="bg-white text-bike-red hover:bg-gray-100">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
