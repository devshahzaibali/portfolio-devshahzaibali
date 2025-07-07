"use client";

import { useState } from "react";

const emptyBoard = Array(9).fill(null);

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToeDemo() {
  const [squares, setSquares] = useState<string[]>([...emptyBoard]);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
      ? "Draw!"
      : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares([...emptyBoard]);
    setXIsNext(true);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">
        Tic Tac Toe Game
      </h1>
      <div className="mb-2 text-lg font-medium text-gray-700">{status}</div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {squares.map((square, i) => (
          <button
            key={i}
            className="w-20 h-20 bg-white border-2 border-blue-300 rounded-lg text-3xl font-bold shadow hover:bg-blue-50 transition disabled:opacity-60"
            onClick={() => handleClick(i)}
            disabled={!!square || !!winner}
          >
            {square}
          </button>
        ))}
      </div>
      <button
        onClick={handleReset}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Reset Game
      </button>
    </div>
  );
}
