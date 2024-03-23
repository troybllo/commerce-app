"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/app/lib/placeholder-data";

const links = [
  { name: "All", href: "/dashboard" },
  { name: "Tops", href: "/Tops" },
  { name: "Bottoms", href: "/dashboard/Product/Bottoms" },
  { name: "Outerwear", href: "/dashboard/Product/Outerwear" },
  { name: "Accessories", href: "dashboard/Product/Accessories" },
  { name: "Footwear", href: "dashboard/Product/Footwear" },
  { name: "Pets", href: "dashboard/Product/Pets" },
];

export default function Links() {
  const [productData, setProductData] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category: any) => {
    setSelectedCategory(category);
    const filteredProducts = products.filter(
      (product) => product.category === category,
    );
    setProductData(filteredProducts);
  };

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
            <Link href={link.href} className="text-gray-400">
              <p
                onMouseEnter={() => onHover(link.name)}
                onMouseOut={onExit}
                onClick={() => handleClick(link.name)}
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
