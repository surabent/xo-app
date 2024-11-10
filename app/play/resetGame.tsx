"use client";

import { useState } from "react";

export const ResetGame = ({
  handleResetGame,
}: {
  handleResetGame: () => void;
}) => {
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpenAlertDialog(true)}
        className="text-lofi-one rounded-xl p-2 bg-lofi-red-1 shadow-[0_10px_#5d275d] border-4 border-red-500 disabled:border-lofi-two disabled:bg-[#f5b39d] disabled:shadow-[0_10px_#cf8dcf] disabled:text-lofi-two active:shadow-[0_3px_#5d275d] active:translate-y-1 transition-all linear"
      >
        reset game
      </button>
      {isOpenAlertDialog && (
        <div className="fixed flex flex-col justify-center items-center w-screen h-screen backdrop-blur-md top-0 left-0 z-50">
          <div className="bg-white rounded-2xl w-1/4 h-1/4 p-3 text-lofi-red-1 text-lg flex flex-col items-center">
            <p className="text-wrap">
              This action will remove your current score. Please confirm your
              actions
            </p>
            <div className="flex flex-row space-x-4 mt-14">
              <button
                className="bg-lofi-three border-4 border-lofi-five text-white p-2"
                onClick={() => setIsOpenAlertDialog(false)}
              >
                cancel
              </button>
              <button
                onClick={() => {
                  setIsOpenAlertDialog(false);
                  handleResetGame();
                }}
                className="bg-red-700 border-4 border-lofi-five text-white p-2"
              >
                confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
