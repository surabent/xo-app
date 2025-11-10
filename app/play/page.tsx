"use client";

import { Background } from "../background";
import { Instruct } from "./instruct";
import TicTacToe from "./theGame";

export default function Page() {
  return (
    <div className="bg-lofi-one w-screen h-screen relative overflow-hidden">
      <Background />
      <div className="bg-lofi-one bg-transparent relative flex flex-col space-y-2 p-10 min-h-screen items-center backdrop-blur-xl">
        <h1 className="text-4xl font-bold animate-press-slow">tic-tac-toe</h1>
        <TicTacToe />
        <Instruct />
      </div>
    </div>
  );
}
