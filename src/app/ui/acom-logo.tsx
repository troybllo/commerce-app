import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  color: boolean;
}

const Logo: React.FC<LogoProps> = ({ color }) => {
  return color ? (
    <div className="flex flex-row gap-3 pr-4">
      <Image src="/Logo1.svg" width={50} height={50} alt="_" />
      <p className="text-black font-extrabold text-[32px]">ACOM</p>
    </div>
  ) : (
    <div className="flex flex-row gap-3 pr-6">
      <Image src="/Logo1light.svg" width={40} height={40} alt="_" />
      <p className="text-white font-extrabold text-[28px]">ACOM</p>
    </div>
  );
};

export default Logo;
