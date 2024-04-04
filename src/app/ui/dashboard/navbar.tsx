"use client";

import Link from "next/link";
import Logo from "../acom-logo";
import Search from "../search";
import Cart from "./cart/cart-button";
import CartSection from "./cart/cart-section";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const [cartQuantity] = useState<number>(0);

  const toggleMode = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-row justify-between p-4 items-center">
      <div className="flex flex-row items-center gap-3">
        <Link href="/">
          <Logo color={false} />
        </Link>
        <Link href={"/dashboard"}>All</Link>
        <Link href={"/dashboard/Category/Tops"}>Kids</Link>
        <Link href={"/dashboard/Category/Accessories"}>Accessories</Link>
      </div>
      <div>
        <Search placeholder="Search for Products" />
      </div>
      <div onClick={toggleMode}>
        <Cart quantity={cartQuantity} />
      </div>
      {isOpen && (
        <CartSection onClose={toggleMode} cartQuantity={cartQuantity} />
      )}
    </div>
  );
}
