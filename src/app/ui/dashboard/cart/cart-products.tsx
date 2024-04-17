"use client";

import { useEffect, useState } from "react";
import { fetchCartItems } from "@/app/lib/data";
import { CartCard } from "../product-card";
import { Product } from "@/app/lib/definitions";

export default function CartProduct() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }

    fetchItems();
  }, []); // Fetch cart items when the component mounts

  return (
    <div>
      {cartItems.map((product) => (
        <div key={product.id}>
          <CartCard product={product} />
        </div>
      ))}
    </div>
  );
}
