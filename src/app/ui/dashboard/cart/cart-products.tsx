"use server";

import { fetchCartItems } from "@/app/lib/data";
import { CartCard } from "../product-card";

export default async function CartProduct() {
  const data = await fetchCartItems();

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <CartCard product={product} />
        </div>
      ))}
    </div>
  );
}
