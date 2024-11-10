export const StreakCount = ({ streak }: { streak: number }) => {
  return (
    <div className="absolute right-0">
      {streak > 0 && (
        <div className="flex flex-col relative">
          {streak > 1 && (
            <div className="bg-lofi-orange-1 animate-spin wavy-circle absolute -right-10 -top-5"></div>
          )}
          <div className="bg-lofi-yellow-1 animate-spin-mid wavy-circle absolute -right-10 -top-5"></div>
          <div className="absolute -right-10 -top-5 w-[90px] h-[90px] flex justify-center items-center">
            <p className="text-xl text-lofi-magenta-1 font-bold">
              x<span className="text-3xl">{streak}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
