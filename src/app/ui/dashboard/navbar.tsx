import Link from "next/link";
import Logo from "../acom-logo";
import Search from "../search";
import Cart from "./cart/cart-button";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between p-4 items-center">
      <div className="flex flex-row items-center gap-3">
        <Link href="/">
          <Logo color={false} />
        </Link>
        <Link href={""}>All</Link>
        <Link href={""}>Kids</Link>
        <Link href={""}>Accesories</Link>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Cart quantity={1} />
      </div>
    </div>
  );
}
