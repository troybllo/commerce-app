import { fetchFilteredProducts, fetchProducts } from "@/app/lib/data";
import ProductCard from "@/app/ui/dashboard/product-card";
import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "...",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const data = await fetchFilteredProducts(query);

  return (
    <Suspense>
      <div className="flex flex-row flex-wrap p-9 w-full gap-20 ">
        {data.map((product) => (
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
    </Suspense>
  );
}
