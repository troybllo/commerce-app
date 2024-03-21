import { fetchProductsById } from "@/app/lib/data";
import { Card } from "@/app/ui/dashboard/product-card";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;

  const products = await fetchProductsById(id);

  if (!products) {
    notFound();
  }

  const product = products[0];

  return (
    <div>
      <Card product={product} />
    </div>
  );
}
