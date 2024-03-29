import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-3 text-red-500 bg-gray-800 rounded-3xl text-[32px] font-extrabold">
      <h2>Not Found</h2>
      <p>Could not find Product</p>
      <Link href="/" className="bg-white p-3 rounded-3xl">
        Return Home
      </Link>
    </div>
  );
}
