import React, { useState } from 'react';

const CrucigramaAzteca = () => {
  const [board, setBoard] = useState([
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
  ]);

  const [answers, setAnswers] = useState([
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
  ]);

  const blackCells = [
    { row: 1, col: 4 },
    { row: 3, col: 1 },
    { row: 6, col: 1 },
  ];

  const clues = {
    across: [
      { number: 1, clue: 'Rey del Sol', row: 1, col: 4, length: 5 },
      { number: 4, clue: 'Diosa del Agua', row: 3, col: 1, length: 5 },
      { number: 7, clue: 'Lugar de los Muertos', row: 6, col: 1, length: 5 },
    ],
    down: [
      { number: 1, clue: 'Capital del Imperio Azteca', row: 1, col: 1, length: 5 },
      { number: 2, clue: 'Diosa azteca del maíz', row: 1, col: 2, length: 5 },
      { number: 3, clue: 'Serpiente emplumada', row: 1, col: 3, length: 7 },
    ],
  };

  const handleInputChange = (event, row, col) => {
    const { value } = event.target;
    const newAnswers = answers.map((row) => [...row]);
    newAnswers[row][col] = value.toUpperCase();
    setAnswers(newAnswers);
  };

  const evaluateAnswers = () => {
    let correctCount = 0;

    blackCells.forEach((cell) => {
      const word = getWord(cell.row, cell.col, cell.length, cell.direction);
      const isCorrect = word.every((cell) => answers[cell.row][cell.col] === board[cell.row][cell.col]);
      if (isCorrect) {
        correctCount++;
      }
    });

    alert(`Has acertado ${correctCount} palabra(s) correctamente.`);
  };

  const getWord = (startRow, startCol, length, direction) => {
    const word = [];
    for (let i = 0; i < length; i++) {
      if (direction === 'across') {
        word.push({ row: startRow, col: startCol + i });
      } else {
        word.push({ row: startRow + i, col: startCol });
      }
    }
    return word;
  };

  const renderBoard = () => {
    return (
      <table className="crossword">
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => {
                const answer = answers[rowIndex][colIndex];
                const isBlackCell = blackCells.some(
                  (blackCell) => blackCell.row === rowIndex && blackCell.col === colIndex
                );
  
                let cellStyle = "";
                if (isBlackCell) {
                  cellStyle = "black";
                } else {
                  cellStyle = getClue(rowIndex, colIndex) ? "highlight" : "";
                }
  
                return (
                  <td
                    key={colIndex}
                    className={cellStyle}
                    style={{ width: '40px', height: '40px', position: 'relative' }}
                  >
                    {isBlackCell ? (
                      <div className="black-cell"></div>
                    ) : (
                      <input
                        type="text"
                        maxLength={1}
                        value={answer}
                        onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                        style={{ background: answer === ' ' ? '#FFEBD8' : 'white' }}
                      />
                    )}
                    {renderClue(rowIndex, colIndex)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  const getClue = (rowIndex, colIndex) => {
    const acrossClue = clues.across.find(
      (clue) =>
        clue.row === rowIndex && colIndex >= clue.col && colIndex < clue.col + clue.length
    );
    const downClue = clues.down.find(
      (clue) =>
        clue.col === colIndex && rowIndex >= clue.row && rowIndex < clue.row + clue.length
    );
    return acrossClue || downClue;
  };
  
  const renderClue = (rowIndex, colIndex) => {
    const clue = getClue(rowIndex, colIndex);
    if (clue) {
      const { number, clue: clueText, direction } = clue;
      return (
        <div className="clue">
          <span className="clue-number">{number}.</span>
          <span className="clue-text">{clueText}</span>
          <span className="clue-direction">{direction === 'across' ? 'A través de' : 'Abajo'}</span>
        </div>
      );
    }
    return null;
  };
  
  
  const getAcrossClue = (row, col) => {
    return clues.across.find((clue) => clue.row === row && clue.col <= col && col < clue.col + clue.length);
  };
  
  const getDownClue = (row, col) => {
    return clues.down.find((clue) => clue.col === col && clue.row <= row && row < clue.row + clue.length);
  };
  
  
  

  const renderClues = () => {
    return (
      <div className="clues">
        <div>
          <h3>Pistas:</h3>
          <h4>A través de:</h4>
          <ol>
            {clues.across.map((clue) => (
              <li key={clue.number}>
                <span className="clue-number">{clue.number}.</span> {clue.clue}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h4>Abajo:</h4>
          <ol>
            {clues.down.map((clue) => (
              <li key={clue.number}>
                <span className="clue-number">{clue.number}.</span> {clue.clue}
              </li>
            ))}
          </ol>
        </div>
        <button onClick={evaluateAnswers}>Evaluar</button>
      </div>
    );
  };

  return (
    <div className="crossword-container">
      <h2>Crucigrama Azteca</h2>
      <div className="crossword-wrapper">
        {renderBoard()}
        {renderClues()}
      </div>
    </div>
  );
};

export default CrucigramaAzteca;
