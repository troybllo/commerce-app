"use client";

import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import { addToCart } from "./cart/handle-cart";
import { removeFromCart } from "./cart/handle-cart";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col p-7">
      <div key={product.id} className="flex flex-col gap-6">
        <div className="border-b-white border-b-2">
          <Image src="/hoodie.png" width={700} height={700} alt="_" />
        </div>
        <div className="flex flex-row items-center gap-4  bg-black  justify-start p-0">
          <div>{product.name}</div>
          <div className="flex bg-white text-black font-extrabold rounded-2xl ml-5 mr-0 justify-end p-1 ">
            <p>Price ${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function Card({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) {
  return (
    <div key={product.id} className="flex flex-row gap-6 p-2">
      <div className="border-b-white border-b-2 w-full">
        <Image src="/hoodie.png" width={2000} height={2000} alt="_" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 ">
        <div>{product.name}</div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
        <div className="flex bg-white text-black font-extrabold rounded-2xl ml-5 mr-0 justify-end p-1 ">
          <p>Price ${product.price}</p>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row">
            <button
              className="btn rounded-2xl bg-green-700 ml-5 p-2"
              onClick={() => addToCart(product.id, quantity)}
            >
              Add to Cart
            </button>
            <button
              className="btn rounded-2xl bg-red-600 ml-5 p-2"
              onClick={() => removeFromCart(product.id)}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CartCard({ product }: { product: Product }) {
  return (
    <div key={product.id} className="flex flex-row gap-6">
      <div className="flex flex-row">
        <Image src="/hoodie.png" alt="_" width={100} height={100} />
        <p>{product.name}</p>
      </div>
      <div className="flex flex-row">
        <p>${product.price} USD </p>
      </div>
    </div>
  );
}
