"use client";

import { Omark, Xmark } from "@/icons";
import { cx } from "@/utils";
import { useState } from "react";
import { NewBoard } from "./newBoard";
import { ResetGame } from "./resetGame";
import { ScoreBoard } from "./scoreBoard";
import { StreakCount } from "./streakCount";

interface ButtonProps {
  onPress: () => void;
  value: string;
  className?: string;
  win: boolean;
  // disabled: boolean;
}

const BoardButton = ({ onPress, value, className, win }: ButtonProps) => {
  return (
    <button
      onClick={onPress}
      className={cx(
        "focus:ring-none hover:bg-slate-300 text-white font-bold py-2 px-4 disabled:bg-slate-300 disabled:hover:bg-slate-300",
        className,
        win && "bg-lofi-green-1"
      )}
    >
      {value === "x" && (
        <div className="text-lofi-green-3">
          <Xmark />
        </div>
      )}
      {value === "o" && (
        <div className="text-lofi-orange-1">
          <Omark />{" "}
        </div>
      )}
    </button>
  );
};

const winnerList = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

const calWinner = (
  board: string[]
): { winner: string | null; winPath: number[] | null } => {
  for (const [a, b, c] of winnerList) {
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], winPath: [a, b, c] };
    }
  }
  return { winner: null, winPath: null };
};

const botCalculateMove = (board: string[], player: string): number => {
  for (const [a, b, c] of winnerList) {
    const board2 = [...board];
    if (board2[a] === player && board2[b] === player && board2[c] === "")
      return c;
    if (board2[a] === player && board2[c] === player && board2[b] === "")
      return b;
    if (board2[b] === player && board2[c] === player && board2[a] === "")
      return a;
  }
  return -1;
};

const botPlay = (board: string[]): number => {
  const levelOfMove = Math.floor(Math.random() * 4);

  const botWinningMove = botCalculateMove(board, "o");
  if (botWinningMove !== -1 && levelOfMove > 0) return botWinningMove;

  const botBlockingMove = botCalculateMove(board, "x");
  if (botBlockingMove !== -1 && levelOfMove > 1) return botBlockingMove;

  // take advantage of center, the center of the board have the most way to win: [3, 4, 5], [0, 4, 8], [1, 4, 7], [2, 4, 6],
  if (board[4] === "" && levelOfMove > 2) return 4;

  const availableSpaces = board
    .map((sq, i) => (sq === "" ? i : -1))
    .filter((i) => i !== -1);
  return availableSpaces[Math.floor(Math.random() * availableSpaces.length)];
};

const Board = ({
  board,
  handleClick,
  loading,
  winPath,
}: {
  board: string[];
  handleClick: (index: number) => void;
  loading: boolean;
  winPath: number[] | null;
}) => {
  return (
    <div className="flex flex-col border-8 border-lofi-five bg-white rounded-xl p-4">
      {loading && (
        <div className="absolute w-full h-full backdrop-blur-sm backdrop-brightness-95 flex flex-col justify-center items-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="flex flex-row border-b-8 border-lofi-sky-3">
        <BoardButton
          win={winPath ? winPath.some((win) => win === 0) : false}
          value={board[0]}
          onPress={() => handleClick(0)}
          className="border-r-4 border-lofi-sky-3 w-28 h-28"
        />
        <BoardButton
          win={winPath ? winPath.some((win) => win === 1) : false}
          value={board[1]}
          onPress={() => handleClick(1)}
          className="border-x-4 border-lofi-sky-3 w-28 h-28"
        />
        <BoardButton
          win={winPath ? winPath.some((win) => win === 2) : false}
          value={board[2]}
          onPress={() => handleClick(2)}
          className="border-l-4 border-lofi-sky-3 w-28 h-28"
        />
      </div>
      <div className="flex flex-row border-b-8 border-lofi-sky-3">
        <BoardButton
          win={winPath ? winPath.some((win) => win === 3) : false}
          value={board[3]}
          onPress={() => handleClick(3)}
          className="border-r-4 border-lofi-sky-3 w-28 h-28"
        />
        <BoardButton
          win={winPath ? winPath.some((win) => win === 4) : false}
          value={board[4]}
          onPress={() => handleClick(4)}
          className="border-x-4 border-lofi-sky-3 w-28 h-28"
        />
        <BoardButton
          win={winPath ? winPath.some((win) => win === 5) : false}
          value={board[5]}
          onPress={() => handleClick(5)}
          className="border-l-4 border-lofi-sky-3 w-28 h-28"
        />
      </div>
      <div className="flex flex-row border-lofi-sky-3">
        <BoardButton
          win={winPath ? winPath.some((win) => win === 6) : false}
          value={board[6]}
          onPress={() => handleClick(6)}
          className="border-r-4 border-lofi-sky-3 w-28 h-28"
        />
        <BoardButton
          win={winPath ? winPath.some((win) => win === 7) : false}
          value={board[7]}
          onPress={() => handleClick(7)}
          className="border-x-4 border-lofi-sky-3 w-28 h-28"
        />
        <BoardButton
          win={winPath ? winPath.some((win) => win === 8) : false}
          value={board[8]}
          onPress={() => handleClick(8)}
          className="border-l-4 border-lofi-sky-3 w-28 h-28"
        />
      </div>
    </div>
  );
};

export default function TicTacToe() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [gameStatus, setGameStatus] = useState<"x" | "o" | "draw" | "play">(
    "play"
  );
  const [score, setScore] = useState({ points: 0, streak: 0 });

  const [loading, setLoading] = useState<boolean>(false);

  const [winPath, setWinPath] = useState<number[] | null>(null);

  const delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const updateScore = (status: string) => {
    setScore((prev) => {
      if (status === "x") {
        const newStreak = prev.streak >= 2 ? 0 : prev.streak + 1;
        const bonus = prev.streak >= 2 ? 2 : 1;
        return {
          points: prev.points + bonus,
          streak: newStreak,
        };
      }
      return {
        points: Math.max(
          0,
          status === "draw" ? prev.points - 0 : prev.points - 1
        ),
        streak: 0,
      };
    });
  };

  const handlePlayerMove = async (index: number) => {
    if (board[index] !== "" || gameStatus !== "play") return;

    const newBoard = [...board];
    newBoard[index] = "x";
    setBoard(newBoard);

    const PlayerWin = calWinner(newBoard);
    if (PlayerWin.winner === "x") {
      setGameStatus("x");
      updateScore("x");
      setLoading(false);
      setWinPath(PlayerWin.winPath);
      return;
    }
    if (newBoard.every((sq) => sq !== "")) {
      setGameStatus("draw");
      updateScore("draw");
      setLoading(false);
      setWinPath(PlayerWin.winPath);
      return;
    }

    setLoading(true);

    await delay(500);

    const botMove = botPlay(newBoard);
    newBoard[botMove] = "o";
    setBoard(newBoard);

    const botWin = calWinner(newBoard);
    if (botWin.winner === "o") {
      setGameStatus("o");
      updateScore("o");
      setLoading(false);
      setWinPath(botWin.winPath);
      return;
    }
    if (newBoard.every((sq) => sq !== "")) {
      setGameStatus("draw");
      updateScore("draw");
      setLoading(false);
      setWinPath(botWin.winPath);
      return;
    }

    setLoading(false);
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(""));
    setGameStatus("play");
    setWinPath(null);
  };

  const resetGame = () => {
    resetBoard();
    setScore({ points: 0, streak: 0 });
  };

  return (
    <div className="p-8 flex flex-col items-center w-full">
      <ScoreBoard score={score.points} />
      <div className="flex flex-col space-y-8 relative items-center">
        <StreakCount streak={score.streak} />
        <Board
          board={board}
          handleClick={handlePlayerMove}
          loading={loading}
          winPath={winPath}
        />
        <div>
          <NewBoard
            handleNewBoard={resetBoard}
            disabled={gameStatus === "play"}
          />
        </div>
        <div>
          <ResetGame handleResetGame={resetGame} />
        </div>
      </div>
    </div>
  );
}
