"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "All", href: "/dashboard" },
  { name: "Hoodies", href: "/hoodies" },
  { name: "Outerwear", href: "/outerwear" },
  { name: "Accesories", href: "/accesories" },
  { name: "Footwear", href: "/footwear" },
  { name: "Kids", href: "/kids" },
  { name: "Pets", href: "/pets" },
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
