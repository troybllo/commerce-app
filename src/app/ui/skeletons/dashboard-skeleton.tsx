import { CardSkeleton } from "./card-skeleton";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative p-9 mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-700`}
      />
      <div className="flex gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </>
  );
}
