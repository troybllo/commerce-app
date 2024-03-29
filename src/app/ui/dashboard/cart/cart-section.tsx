import { showCart } from "./handle-cart";
import { CartCard } from "../product-card";
import { useEffect, useState } from "react";

interface Props {
  onClose: () => void;
}

export default function CartSection({ onClose }: Props) {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    showCart();
  }, []);

  return (
    <div className="fixed inset-y-0 right-0 w-64 bg-black text-white shadow-lg">
      <div className="flex justify-between items-center px-4 py-3">
        <h1 className="text-lg font-bold">My Cart</h1>
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="overflow-y-auto">
        {cartItems.map((product) => (
          <div key={product.id} className="px-4 py-3 border-b">
            <CartCard product={product} />
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t">
        <button className="w-full py-2 bg-white text-black font-semibold rounded-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
