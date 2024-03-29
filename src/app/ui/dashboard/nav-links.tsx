"use client";

import Link from "next/link";
import { useState } from "react";
import { fetchProductsByCategory } from "@/app/lib/data";

const links = [
  { name: "All", href: "/dashboard" },
  { name: "Tops", href: "/dashboard/Category/Tops" },
  { name: "Bottoms", href: "/dashboard/Category/Bottoms" },
  { name: "Outerwear", href: "/dashboard/Category/Outerwear" },
  { name: "Accessories", href: "/dashboard/Category/Accessories" },
  { name: "Footwear", href: "/dashboard/Category/Footwear" },
  { name: "Pets", href: "/dashboard/Category/Pets" },
];

export default function Links() {
  const [isHover, setIsHover] = useState(null);

  const onHover = (name: any) => {
    setIsHover(name);
  };

  const onExit = () => {
    setIsHover(null);
  };

  const handleClick = async (category: string) => {
    try {
      const products = await fetchProductsByCategory(category);
      console.log(products);
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
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
