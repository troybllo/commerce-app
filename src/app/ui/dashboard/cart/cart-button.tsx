export default function Cart({ quantity }: { quantity: number }) {
  return (
    <div className="border-2 border-white rounded-lg p-4 ">
      <button>Cart</button>
      {quantity ? (
        <div className="absolute flex items-center justify-center right-6 top-3 -mr-2 -mt-2 p-3 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
