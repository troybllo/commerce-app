import { Product } from "@/app/lib/definitions";

export default async function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col p-7">
      <div key={product.id}>
        <div>{product.image}</div>
        <div className="flex flex-row">
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      </div>
    </div>
  );
}
