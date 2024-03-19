import { fetchProducts } from "@/app/lib/data";
import { Card } from "@/app/ui/dashboard/product-card";

export default async function Page() {
  const data = await fetchProducts();

  return (
    <div className="bg-gray-900 rounded-2xl p-2 boorder-white border-2">
      {data.map((product) => (
        <div key={product.id} className="flex flex-row">
          <Card product={product} />
        </div>
      ))}
    </div>
  );
}
