import Link from "next/link";
import Logo from "../acom-logo";
import Search from "../search";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-evenly">
      <div>
        <Logo />
        <Link href={""}>All</Link>
        <Link href={""}>Kids</Link>
        <Link href={""}>Accesories</Link>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <button className="border-2px border-gray-700">Cart</button>
      </div>
    </div>
  );
}
