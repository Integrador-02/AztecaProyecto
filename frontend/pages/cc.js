import React, { useEffect, useState } from "react";


const numRows = 8;
const numCols = 8;
const candyTypes = ["red", "blue", "green", "yellow"];

const generateBoard = () => {
  const board = [];
  for (let row = 0; row < numRows; row++) {
    const newRow = [];
    for (let col = 0; col < numCols; col++) {
      const randomType = candyTypes[Math.floor(Math.random() * candyTypes.length)];
      newRow.push(randomType);
    }
    board.push(newRow);
  }
  return board;
};

export default function CandyCrush() {
  const [board, setBoard] = useState(generateBoard());

  useEffect(() => {
    const checkCombinations = () => {
      const combinations = [];

      // Verificar combinaciones horizontales
      for (let row = 0; row < numRows; row++) {
        let count = 1;
        for (let col = 0; col < numCols - 1; col++) {
          if (board[row][col] !== null && board[row][col] === board[row][col + 1]) {
            count++;
          } else {
            if (count >= 3) {
              combinations.push({ row, colStart: col - count + 1, colEnd: col });
            }
            count = 1;
          }
        }
        if (count >= 3) {
          combinations.push({ row, colStart: numCols - count, colEnd: numCols - 1 });
        }
      }

      // Verificar combinaciones verticales
      for (let col = 0; col < numCols; col++) {
        let count = 1;
        for (let row = 0; row < numRows - 1; row++) {
          if (board[row][col] !== null && board[row][col] === board[row + 1][col]) {
            count++;
          } else {
            if (count >= 3) {
              combinations.push({ rowStart: row - count + 1, rowEnd: row, col });
            }
            count = 1;
          }
        }
        if (count >= 3) {
          combinations.push({ rowStart: numRows - count, rowEnd: numRows - 1, col });
        }
      }

      return combinations;
    };

    const handleMatchedCombinations = (combinations) => {
      const newBoard = [...board];

      combinations.forEach((combination) => {
        if (combination.row !== undefined) {
          for (let col = combination.colStart; col <= combination.colEnd; col++) {
            newBoard[combination.row][col] = null;
          }
        }
        if (combination.col !== undefined) {
          for (let row = combination.rowStart; row <= combination.rowEnd; row++) {
            newBoard[row][combination.col] = null;
          }
        }
      });

      setBoard(newBoard);
    };

    const combinations = checkCombinations();
    if (combinations.length > 0) {
      handleMatchedCombinations(combinations);
    }
  }, [board]);

  const handleCandyClick = (row, col) => {
    const newBoard = [...board];
    
    // Verificar si el clic está en el borde derecho o inferior
    const isRightEdge = col === numCols - 1;
    const isBottomEdge = row === numRows - 1;
  
    // Verificar si el clic está en el borde derecho o inferior
    if (!isRightEdge) {
      // Intercambiar dulces horizontalmente con el derecho
      [newBoard[row][col], newBoard[row][col + 1]] = [newBoard[row][col + 1], newBoard[row][col]];
    }
    if (!isBottomEdge) {
      // Intercambiar dulces verticalmente con el de abajo
      [newBoard[row][col], newBoard[row + 1][col]] = [newBoard[row + 1][col], newBoard[row][col]];
    }
  
    setBoard(newBoard);
  };
  

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((candyType, colIndex) => (
            <div
              key={colIndex}
              className={`candy ${candyType}`}
              onClick={() => handleCandyClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
