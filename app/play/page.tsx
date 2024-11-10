"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Background } from "../background";
import { Instruct } from "./instruct";
import TicTacToe from "./theGame";
import { UserPanel } from "./userPanel";

export default function Page() {
  const session = useSession();

  if (session.status === "unauthenticated") {
    redirect("/");
  }

  return (
    session.status === "authenticated" && (
      <div className="bg-lofi-one w-screen h-screen relative overflow-hidden">
        <Background />
        <div className="bg-lofi-one bg-transparent relative flex flex-col space-y-2 p-10 min-h-screen items-center backdrop-blur-xl">
          <h1 className="text-4xl font-bold animate-press-slow">tic-tac-toe</h1>
          <Instruct />
          <UserPanel session={session.data} />
          <TicTacToe />
        </div>
      </div>
    )
  );
}
