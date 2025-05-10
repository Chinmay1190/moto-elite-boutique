
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { Trash2, ShoppingCart, ArrowRight, Package, IndianRupee } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Cart = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    subtotal,
    tax,
    shipping,
    total
  } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    // Navigate to checkout
    window.location.href = "/checkout";
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
          <ShoppingCart className="h-12 w-12 text-gray-400" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
          Looks like you haven't added any superbikes to your cart yet.
          Browse our collection to find your perfect ride.
        </p>
        <Button asChild size="lg">
          <Link to="/products">
            Continue Shopping
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800 text-left">
                <tr>
                  <th className="py-4 px-6">Product</th>
                  <th className="py-4 px-6 hidden sm:table-cell">Price</th>
                  <th className="py-4 px-6">Quantity</th>
                  <th className="py-4 px-6 text-right">Total</th>
                  <th className="py-4 px-6 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {items.map((item) => {
                  const price = item.product.salePrice || item.product.price;
                  return (
                    <tr key={item.product.id}>
                      {/* Product */}
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <Link to={`/product/${item.product.slug}`} className="flex-shrink-0">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                          </Link>
                          <div className="ml-4">
                            <Link 
                              to={`/product/${item.product.slug}`} 
                              className="font-medium hover:text-bike-red line-clamp-2"
                            >
                              {item.product.name}
                            </Link>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {item.product.manufacturer}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Price */}
                      <td className="py-4 px-6 hidden sm:table-cell">
                        <div className="flex items-center">
                          <IndianRupee className="h-3 w-3 mr-1" />
                          <span>{formatPrice(price).replace("₹", "")}</span>
                        </div>
                      </td>

                      {/* Quantity */}
                      <td className="py-4 px-6">
                        <div className="flex">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-l-md border border-gray-300 dark:border-gray-700"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            className="w-10 text-center border-t border-b border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                            readOnly
                          />
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-r-md border border-gray-300 dark:border-gray-700"
                            disabled={item.quantity >= item.product.stock}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      {/* Total */}
                      <td className="py-4 px-6 text-right font-medium">
                        <div className="flex items-center justify-end">
                          <IndianRupee className="h-3 w-3 mr-1" />
                          <span>{formatPrice(price * item.quantity).replace("₹", "")}</span>
                        </div>
                      </td>

                      {/* Remove */}
                      <td className="py-4 px-6">
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-500 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Cart Actions */}
          <div className="mt-4 flex justify-between">
            <Button
              variant="outline"
              className="gap-2"
              asChild
            >
              <Link to="/products">
                Continue Shopping
              </Link>
            </Button>
            <Button
              variant="ghost"
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">GST (18%)</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mb-6">
              <div className="flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-xl">{formatPrice(total)}</span>
              </div>
              {shipping === 0 && (
                <div className="text-green-500 text-sm mt-1 flex items-center justify-end">
                  <Package className="h-4 w-4 mr-1" />
                  Free shipping applied
                </div>
              )}
            </div>

            <Button 
              onClick={handleCheckout} 
              className="w-full gap-2"
              size="lg"
            >
              Proceed to Checkout
              <ArrowRight className="h-4 w-4" />
            </Button>

            <div className="mt-4">
              <p className="text-xs text-center text-gray-500">
                By proceeding to checkout, you agree to our{" "}
                <Link to="#" className="text-bike-red hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-bike-red hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="font-semibold mb-3">We Accept</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm">Credit Card</div>
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm">Debit Card</div>
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm">Net Banking</div>
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm">UPI</div>
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm">EMI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
