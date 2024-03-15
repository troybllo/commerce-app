import Link from "next/link";
import Image from "next/image";
import ButtonIcon from "./ui/button-icon";
import Logo from "./ui/acom-logo";

export default function Home() {
  return (
    <main className="flex flex-col p-6 gap-5">
      <div className="flex  bg-white rounded w-full p-10 items-start h-30">
        <Logo />
      </div>
      <div className="mt-40">
        <div className="flex flex-row">
          <p className="text-[90px]">
            <strong>Welcome to ACOM</strong>
          </p>
        </div>

        <div className=" flex mt-3 flex-col w-1/6 gap-6">
          <Link
            className="flex rounded-lg border-white border-2  p-4 "
            href="/(overview)"
          >
            <p>Catalog</p>
            <ButtonIcon />
          </Link>
          <Link
            className="flex flex-row rounded-lg border-white border-2 p-4"
            href="_"
          >
            <p>About Us</p>
            <ButtonIcon />
          </Link>
        </div>
        <div className="flex items-start justify-end">
          <Image
            src="/hoodie.png"
            width={500}
            height={400}
            className=""
            alt="blah"
          />
        </div>
      </div>
    </main>
  );
}
