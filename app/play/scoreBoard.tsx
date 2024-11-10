export const ScoreBoard = ({ score }: { score: number }) => {
  return (
    <div className="border-8 border-lofi-five bg-white flex flex-col w-44 items-center">
      <h2 className="text-xl font-bold">score</h2>
      <p className="text-3xl text-lofi-green-2">{score}</p>
    </div>
  );
};
