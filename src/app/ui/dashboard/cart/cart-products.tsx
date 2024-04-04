import { useEffect, useState } from "react";
import { fetchCartItems } from "@/app/lib/data";
import { CartCard } from "../product-card";
import { Product } from "@/app/lib/definitions";

export default function CartProduct() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        // Optionally, handle the error or set a default value for cartItems
      }
    };

    fetchItems();
  }, []);
  return (
    <div className="overflow-y-auto">
      {cartItems.map((product) => (
        <div key={product.id} className="px-4 py-3 border-b">
          <CartCard product={product} />
        </div>
      ))}
    </div>
  );
}
