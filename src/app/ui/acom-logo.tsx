import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-row gap-3">
      <Image src="/Logo1.svg" width={50} height={50} alt="_" />
      <p className="text-black font-extrabold text-[32px]">ACOM</p>
    </div>
  );
}
