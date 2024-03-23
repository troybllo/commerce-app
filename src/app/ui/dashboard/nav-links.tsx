"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { products } from "@/app/lib/placeholder-data";
import { useRouter } from "next/router";

const links = [
  { name: "All", category: "/dashboard" },
  { name: "Tops", category: "/Tops" },
  { name: "Bottoms", category: "/dashboard/Product/Bottoms" },
  { name: "Outerwear", category: "/dashboard/Product/OuterOuterwear" },
  { name: "Accessories", category: "/dashboard/Product/Accessories" },
  { name: "Footwear", category: "/dashboard/Product/FootFootwear" },
  { name: "Pets", category: "/dashboard/Product/Pets" },
];

export default function Links() {
  const router = useRouter();
  const [productData, setProductData] = useState(products);
  const { category } = router.query;

  useEffect(() => {
    if (category) {
      const filteredProducts = products.filter(
        (product) => product.category === category,
      );
      setProductData(filteredProducts);
    } else {
      setProductData(products);
    }
  }, [category]);

  const [isHover, setIsHover] = useState(null);

  const onHover = (name: any) => {
    setIsHover(name);
  };

  const onExit = () => {
    setIsHover(null);
  };

  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={{
                pathname: "/Products",
                query: { category: link.category },
              }}
              className="text-gray-400"
            >
              <p
                onMouseEnter={() => onHover(link.name)}
                onMouseOut={onExit}
                style={{ color: isHover === link.name ? "white" : "gray" }}
              >
                {link.name}
              </p>
            </Link>
          </li>
        );
      })}
    </>
  );
}
