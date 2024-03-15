import Link from "next/link";
import Logo from "../acom-logo";
import Search from "../search";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between p-4 items-center">
      <div className="flex flex-row items-center gap-3">
        <Logo color={false} />
        <Link href={""}>All</Link>
        <Link href={""}>Kids</Link>
        <Link href={""}>Accesories</Link>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <button className="border-2 border-white rounded-lg p-4 ">Cart</button>
      </div>
    </div>
  );
}
