import { useState } from "react";

export const Instruct = () => {
  const [isOpenInstruct, setIsOpenInstruct] = useState(true);
  return (
    <>
      <label className="absolute w-10 h-10 active:bg-lofi-sky-1 active:translate-y-1 text-white font-bold bg-lofi-sky-2 flex flex-col items-center justify-center left-5 top-5 z-10 border-4 border-lofi-five rounded-full shadow-[0_5px] shadow-lofi-sky-4 active:shadow-[0_3px]">
        <input
          type="checkbox"
          className="w-0 h-0 z-20"
          defaultChecked={true}
          onChange={(e) => setIsOpenInstruct(e.target.checked)}
        />
        {isOpenInstruct ? "X" : "?"}
      </label>
      {isOpenInstruct && (
        <div className="absolute flex flex-col justify-center top-5 left-10">
          <div className="w-[500px] absolute space-y-2 top-5 border-4 border-lofi-five bg-white p-4 text-xl">
            <div>
              <p className="underline transition-all ease-linear op">
                how to play
              </p>
              <p className="mt-1 ml-2">You are x</p>
              <p className="ml-2">
                putting the X in empty squares to get 3 of X in a row (up, down,
                across, or diagonally) to win.
              </p>
              <p className="underline mt-4">score</p>
              <p className="mt-1 ml-2">win: + 1</p>
              <p className="ml-2">lose: - 1</p>
              <p className="ml-2">draw: + 0</p>
            </div>
            <div className="relative">
              <div className="flex flex-col absolute top-[50px] left-[62px]">
                <div className="bg-lofi-orange-1 animate-spin wavy-circle-small absolute -right-10 -top-5"></div>
                <div className="bg-lofi-yellow-1 animate-spin-mid wavy-circle-small absolute -right-10 -top-5"></div>
                <div className="absolute -right-10 -top-5 w-[50px] h-[50px] flex justify-center items-center">
                  <p className="text-sm text-lofi-magenta-1 font-bold">
                    x<span className="text-base">2</span>
                  </p>
                </div>
              </div>
              <p className="underline">win streak</p>
              <p className="mt-4 ml-2">win x2 board for + 1 bonus</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
