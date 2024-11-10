"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-3xl">404</h1>
      <h3 className="text-xl">PAGE NOT FOUND</h3>
      <div className="mt-6">
        <button
          onClick={() => router.push("/")}
          className="transition-all linear text-sm rounded-xl p-2 bg-lofi-four active:bg-lofi-three text-lofi-one shadow-[0_5px_#1a1c2c] active:shadow-[0_2px_#1a1c2c] active:translate-y-1"
        >
          back to play
        </button>
      </div>
    </div>
  );
}
