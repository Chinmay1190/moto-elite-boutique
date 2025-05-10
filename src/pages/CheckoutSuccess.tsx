
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const CheckoutSuccess = () => {
  const orderNumber = `SB-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 mx-auto text-center">
        <div className="text-green-500 mb-4">
          <CheckCircle2 className="h-16 w-16 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6 text-left">
          <div className="mb-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">Order Number:</span>
            <span className="block font-semibold">{orderNumber}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400 text-sm">Date:</span>
            <span className="block font-semibold">{orderDate}</span>
          </div>
        </div>

        <p className="text-sm mb-6">
          We've sent a confirmation email with all the details of your purchase.
          You can track your order in the "My Orders" section.
        </p>

        <div className="space-y-3">
          <Button asChild size="lg" className="w-full">
            <Link to="/products">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="w-full">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
