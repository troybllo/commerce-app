"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "All", href: "/dashboard" },
  { name: "Tops", href: "/dashboard/Product/Tops" },
  { name: "Bottoms", href: "/dashboard/Product/Bottoms" },
  { name: "Outerwear", href: "/dashboard/Product/Outerwear" },
  { name: "Accessories", href: "dashboard/Product/Accessories" },
  { name: "Footwear", href: "dashboard/Product/Footwear" },
  { name: "Pets", href: "dashboard/Product/Pets" },
];

export default function Links() {
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
          <Link key={link.name} href={link.href} className="text-gray-400">
            <p
              onMouseEnter={() => onHover(link.name)}
              onMouseOut={onExit}
              style={{ color: isHover === link.name ? "white" : "gray" }}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
