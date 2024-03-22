import { fetchProductsByCategory } from "@/app/lib/data";
import ProductCard from "@/app/ui/dashboard/product-card";
import { notFound } from "next/navigation";
export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;

  let products = await fetchProductsByCategory(category);

  if (!products) {
    notFound();
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
