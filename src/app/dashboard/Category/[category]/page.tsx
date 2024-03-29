import { fetchProducts, fetchProductsByCategory } from "@/app/lib/data";
import { notFound } from "next/navigation";
import ProductCard from "@/app/ui/dashboard/product-card";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { category: string; data: number };
}) {
  const { category } = params;

  // Fetch products based on the selected category
  const products = await fetchProductsByCategory(category);

  if (!products) {
    notFound();
  }

  return (
    <div className="flex flex-row flex-wrap p-9 w-full gap-20 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-1/4 border-white border-2 rounded-lg p-6"
        >
          <Link href={`/dashboard/Product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
}
