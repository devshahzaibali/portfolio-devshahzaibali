"use client";

const code = `import { useState } from "react";

const emptyBoard = Array(9).fill(null);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
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
  const [squares, setSquares] = useState([...emptyBoard]);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? "Draw!"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleClick(i) {
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
    <div>
      {/* ...UI code... */}
    </div>
  );
}
`;

export default function TicTacToeCode() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">Tic Tac Toe Game Source Code</h1>
      <pre className="bg-gray-900 text-green-200 rounded-lg p-4 overflow-x-auto w-full max-w-3xl text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
} 