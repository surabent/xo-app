"use client";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export const UserPanel = ({ session }: { session: Session }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="absolute flex flex-col justify-center top-5 right-10">
      <label className="cursor-pointer relative">
        <input
          type="checkbox"
          className="absolute opacity-0 h-0 w-0 peer z-10"
        />
        <div className="transition-all ease-linear duration-150 peer-checked:opacity-100 peer-checked:w-40 peer-checked:h-40 w-0 h-0 peer-checked:right-5 right-4 opacity-0 z-0 absolute flex flex-col space-y-2 justify-center items-center top-5 border-4 border-lofi-five bg-white">
          <p className="text-sm text-center">
            {session.user && session.user.name}
          </p>
          <button
            disabled={isClicked}
            className="bg-lofi-red-1 shadow-[0_5px_#5d275d] p-1 rounded-xl text-lofi-one active:shadow-[0_2px_#5d275d] active:translate-y-1 active:bg-lofi-orange-1 disabled:shadow-[0_2px_#5d275d] disabled:translate-y-1 disabled:bg-lofi-orange-1"
            onClick={() => {
              setIsClicked(true);
              signOut({ redirectTo: "/" });
            }}
          >
            logout
          </button>
        </div>
        <div className="z-10 right-0 absolute flex flex-col justify-center items-center w-14 h-14 bg-lofi-green-2 border-4 border-lofi-five shadow-[0_8px_#257179] rounded-full active:bg-lofi-green-3 active:shadow-[0_3px_#257179] active:active:translate-y-1 transition-all linear">
          {session.user && session.user.image && (
            <Image
              alt="userIcon"
              src={session.user.image}
              width={35}
              height={35}
              className="rounded-full"
            />
          )}
        </div>
      </label>
    </div>
  );
};
