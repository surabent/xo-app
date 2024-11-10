export const NewBoard = ({
  handleNewBoard,
  disabled,
}: {
  handleNewBoard: () => void;
  disabled: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={handleNewBoard}
      className="rounded-xl p-2 bg-lofi-orange-1 shadow-[0_10px_#5d275d] text-lofi-five border-4 border-lofi-five disabled:border-lofi-two disabled:bg-[#f5b39d] disabled:shadow-[0_10px_#cf8dcf] disabled:text-lofi-two disabled:pointer-events-none active:shadow-[0_3px_#5d275d] active:translate-y-1 transition-all linear"
    >
      next board
    </button>
  );
};
