"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-lofi-one relative flex flex-col space-y-10 p-10 min-h-screen items-center">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-5xl font-bold text-lofi-five animate-scale-slow">
          Tic-Tac-Toe
        </h1>
        <h4 className="text-lg text-lofi-three">Let's Play Tic-Tac-Toe</h4>
      </div>
      <button
        onClick={() => router.push("/play")}
        className="transition-all linear rounded-xl p-4 bg-lofi-four active:bg-lofi-three active:shadow-[0_5px_#1a1c2c] active:translate-y-1 disabled:bg-lofi-three disabled:shadow-[0_5px_#1a1c2c] disabled:translate-y-1 text-lofi-one shadow-[0_10px_#1a1c2c]"
      >
        PLAY
      </button>
    </div>
  );
}
