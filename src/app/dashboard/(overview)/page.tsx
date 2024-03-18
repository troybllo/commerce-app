import { fetchProducts } from "@/app/lib/data";
import { products } from "@/app/lib/placeholder-data";
import ProductCard from "@/app/ui/dashboard/product-card";

export default async function Page() {
  const data = await fetchProducts();

  return (
    <div className="flex flex-row flex-wrap p-9 w-full gap-20 ">
      {data.map((product) => (
        <div
          key={product.id}
          className="w-1/4 border-white border-2 rounded-lg p-6"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
