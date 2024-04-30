import Link from "next/link";
import Logo from "../acom-logo";
import Search from "../search";
import Cart from "./cart/cart-button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartProduct from "./cart/cart-products";

export default async function NavBar() {
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
      <Sheet>
        <SheetTrigger>
          <Cart quantity={1} />
        </SheetTrigger>
        <SheetContent>
          <div className=" bg-black text-white shadow-lg">
            <div className="flex justify-between items-center px-4 py-3">
              <h1 className="text-lg font-bold">My Cart</h1>
            </div>
            <div>
              <CartProduct />
            </div>
            <div className="px-4 py-3 border-t">
              <button className="w-full py-2 bg-white text-black font-semibold rounded-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
