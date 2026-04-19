import { useState } from "react";
import Grid from "./Grid";

function Game() {
  const [difficulty, setDifficulty] = useState("medium");
  const [lights, setLights] = useState(() => generateSolvableBoard("medium"));
  const [moves, setMoves] = useState(0);
  const [history, setHistory] = useState([]);

  // ✅ PURE TOGGLE FUNCTION (no mutation bugs)
  function applyToggle(board, index) {
    const newBoard = [...board];

    const row = Math.floor(index / 5);
    const col = index % 5;

    function toggle(i, j) {
      if (i >= 0 && i < 5 && j >= 0 && j < 5) {
        const idx = i * 5 + j;
        newBoard[idx] = !newBoard[idx];
      }
    }

    toggle(row, col);
    toggle(row - 1, col);
    toggle(row + 1, col);
    toggle(row, col - 1);
    toggle(row, col + 1);

    return newBoard;
  }

  // ✅ FIXED SOLVABLE GENERATOR (IMPORTANT)
  function generateSolvableBoard(level = "medium") {
    let board = Array(25).fill(false);

    let movesCount = 10;
    if (level === "easy") movesCount = 5;
    if (level === "hard") movesCount = 20;

    // ALWAYS apply valid moves from clean state
    for (let i = 0; i < movesCount; i++) {
      const randomIndex = Math.floor(Math.random() * 25);
      board = applyToggle(board, randomIndex);
    }

    return board;
  }

  // 🎮 CLICK
  function toggleLight(index) {
    const newBoard = applyToggle(lights, index);

    setHistory([...history, lights]);
    setLights(newBoard);
    setMoves((m) => m + 1);
  }

  // 🏆 WIN CHECK
  function checkWin() {
    return lights.every((l) => l === false);
  }

  // 🔄 RESET
  function resetGame() {
    setLights(generateSolvableBoard(difficulty));
    setMoves(0);
    setHistory([]);
  }

  // ↩️ UNDO
  function undo() {
    if (history.length === 0) return;

    const last = history[history.length - 1];
    setLights(last);
    setHistory(history.slice(0, -1));
    setMoves((m) => Math.max(0, m - 1));
  }

  const buttonStyle = {
    padding: "10px 16px",
    margin: "5px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const activeStyle = {
    transform: "scale(1.1)",
    border: "2px solid black",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  };

  return (
    <div
      style={{
        textAlign: "center",
        background: "linear-gradient(to right, #e0f2fe, #f8fafc)",
        minHeight: "100vh",
        paddingTop: "30px",
      }}
    >
      <h1>💡 Lights Out</h1>

      <h2>{checkWin() ? "🎉 You Win!" : `Moves: ${moves}`}</h2>

      {/* DIFFICULTY */}
      <div>
        <button
          onClick={() => {
            setDifficulty("easy");
            setLights(generateSolvableBoard("easy"));
            setMoves(0);
            setHistory([]);
          }}
          style={{
            ...buttonStyle,
            backgroundColor: "#4ade80",
            ...(difficulty === "easy" ? activeStyle : {}),
          }}
        >
          Easy
        </button>

        <button
          onClick={() => {
            setDifficulty("medium");
            setLights(generateSolvableBoard("medium"));
            setMoves(0);
            setHistory([]);
          }}
          style={{
            ...buttonStyle,
            backgroundColor: "#60a5fa",
            ...(difficulty === "medium" ? activeStyle : {}),
          }}
        >
          Medium
        </button>

        <button
          onClick={() => {
            setDifficulty("hard");
            setLights(generateSolvableBoard("hard"));
            setMoves(0);
            setHistory([]);
          }}
          style={{
            ...buttonStyle,
            backgroundColor: "#f87171",
            ...(difficulty === "hard" ? activeStyle : {}),
          }}
        >
          Hard
        </button>
      </div>

      {/* CONTROLS */}
      <div>
        <button
          onClick={resetGame}
          style={{ ...buttonStyle, backgroundColor: "#facc15" }}
        >
          🔄 New Game
        </button>

        <button
          onClick={undo}
          style={{ ...buttonStyle, backgroundColor: "#a78bfa" }}
        >
          ↩️ Undo
        </button>
      </div>

      {/* GRID */}
      <div style={{ marginTop: "25px" }}>
        <Grid lights={lights} onLightClick={toggleLight} />
      </div>
    </div>
  );
}

export default Game;