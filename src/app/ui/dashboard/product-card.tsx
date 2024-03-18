import { Product } from "@/app/lib/definitions";
import Image from "next/image";

export default async function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col p-7">
      <div key={product.id}>
        <div className="border-b-white border-b-2">
          <Image src="/hoodie.png" width={700} height={700} alt="_" />
        </div>
        <div className="flex flex-row items-end gap-4 p-2 bg-blue-600 rounded-lg justify-start">
          <div>{product.name}</div>
          <div>
            <p>Price ${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
