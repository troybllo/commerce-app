"use client";

import { CartCard } from "../product-card";
import { useEffect, useState } from "react";

export default function CartSection() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("/api/cart");
        if (response.ok) {
          const cartItemsData = await response.json();
          setCartItems(cartItemsData);
        } else {
          console.error("Failed to fetch cart items:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className="fixed flex flex-col right-0  bottom-0 h-full   bg-black border-l-gray-400 border-l-2 overflow-y-auto ">
      <div className="flex flex-row">
        <h1 className="font-extrabold text-[30px] p-2 mb-14">My Cart</h1>
      </div>
      <div className="flex flex-col gap-6 mb-10">
        {cartItems.map((product) => (
          <div
            key={product.id}
            className="flex flex-col p-3 gap-3 border-b-2 border-b-white"
          >
            <CartCard product={product} />
          </div>
        ))}
      </div>
      <div className="flex w-full">
        <button className="flex flex-col btn bg-white font-extrabold p-3 justify-center items-center  text-black rounded-3xl">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
