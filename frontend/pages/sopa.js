import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const words = ['apple', 'banana', 'cherry', 'grape', 'kiwi'];
const gridSize = 8;

const SoupOfLetters = () => {
  const [grid, setGrid] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  // Generar la cuadrícula de la sopa de letras
  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newGrid = [];

    // Generar una cuadrícula de letras aleatorias
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        row.push({ letter: randomLetter, highlighted: false });
      }
      newGrid.push(row);
    }

    // Insertar las palabras en la cuadrícula
    words.forEach((word) => {
      const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
      const startX = Math.floor(Math.random() * (gridSize - word.length + 1));
      const startY = Math.floor(Math.random() * (gridSize - word.length + 1));

      if (direction === 'horizontal') {
        for (let i = 0; i < word.length; i++) {
          newGrid[startY][startX + i] = { letter: word[i], highlighted: false };
        }
      } else {
        for (let i = 0; i < word.length; i++) {
          newGrid[startY + i][startX] = { letter: word[i], highlighted: false };
        }
      }
    });

    setGrid(newGrid);
  }, []);

  const handleLetterClick = (row, col) => {
    const newGrid = [...grid];
    newGrid[row][col].highlighted = !newGrid[row][col].highlighted;
    setGrid(newGrid);

    const clickedLetter = newGrid[row][col].letter;
    const foundWord = words.find((word) => {
      if (word[0] === clickedLetter) {
        return isWordFound(word, row, col);
      }
      return false;
    });
    console.log(foundWord)

    if (foundWord && !foundWords.includes(foundWord)) {
      setFoundWords((prevFoundWords) => [...prevFoundWords, foundWord]);
      Swal.fire({
        icon: 'success',
        title: 'Palabra encontrada',
        text: `¡${foundWord} ha sido encontrada en la sopa de letras!`,
      });
    }
  };

  const isWordFound = (word, row, col) => {
    const directions = [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: -1, y: 1 },
      { x: -1, y: 0 },
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 1, y: -1 },
    ];

    for (const direction of directions) {
      let found = true;

      for (let i = 1; i < word.length; i++) {
        const newRow = row + direction.y * i;
        const newCol = col + direction.x * i;

        if (
          newRow < 0 ||
          newRow >= gridSize ||
          newCol < 0 ||
          newCol >= gridSize ||
          grid[newRow][newCol].letter !== word[i] ||
          !grid[newRow][newCol].highlighted
        ) {
          found = false;
          break;
        }
      }

      if (found) {
        return true;
      }
    }

    return false;
  };

  return (
    <div>
      <h1>Sopa de Letras</h1>
      <div className="grid-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell.highlighted ? 'highlighted' : ''}`}
                onClick={() => handleLetterClick(rowIndex, colIndex)}
              >
                {cell.letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="word-list">
        <h2>Palabras encontradas:</h2>
        {words.map((word, index) => (
          <div key={index} className={`word ${foundWords.includes(word) ? 'found' : ''}`}>
            {word}
          </div>
        ))}
      </div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-rows: repeat(${gridSize}, 1fr);
          gap: 5px;
        }

        .row {
          display: flex;
        }

        .cell {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: 1px solid #ccc;
          cursor: pointer;
        }

        .highlighted {
          background-color: yellow;
        }

        .word-list {
          margin-top: 20px;
        }

        .word {
          margin-bottom: 5px;
          color: #333;
          font-weight: bold;
          text-decoration: ${(foundWords) => (foundWords ? 'line-through' : 'none')};
        }

        .found {
          color: green;
        }
      `}</style>
    </div>
  );
};

export default SoupOfLetters;
