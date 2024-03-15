export default function Search() {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-[500px] rounded-md border bg-transparent  py-[7px] pl-5 pr-14 text-sm outline-2 placeholder:text-white"
        placeholder="Search for products..."
      />
    </div>
  );
}
