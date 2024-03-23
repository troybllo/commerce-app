import { fetchProductsById } from "@/app/lib/data";
import { Card } from "@/app/ui/dashboard/product-card";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;

  const product = await fetchProductsById(id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <Card product={product} quantity={1} />
    </div>
  );
}
