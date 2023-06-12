import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AhorcadoAzteca = () => {
  const [word, setWord] = useState('');
  const [hint, setHint] = useState('');
  const [guessedWord, setGuessedWord] = useState([]);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(6);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [hangmanImage, setHangmanImage] = useState('');

  const words = [
    { word: 'calpulli', hint: 'Unidad social en la cultura azteca.' },
    { word: 'tepalcate', hint: 'Recipiente de barro para cocinar.' },
    { word: 'coatepantli', hint: 'Muro de serpientes.' },
    { word: 'quetzalcoatl', hint: 'Dios serpiente emplumada.' },
    { word: 'tenochtitlan', hint: 'La capital del Imperio Azteca.' },
  ];

  const checkGuess = () => {
    if (isGameOver) {
      return;
    }

    const newGuessedWord = [...guessedWord];
    let isCorrectGuess = false;

    for (let i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === guess.toLowerCase()) {
        newGuessedWord[i] = word[i];
        isCorrectGuess = true;
      }
    }

    if (!isCorrectGuess) {
      setIncorrectGuesses(incorrectGuesses + 1);
      setAttempts(attempts - 1);
    }

    setGuessedWord(newGuessedWord);
    setGuess('');

    if (newGuessedWord.join('') === word) {
      setIsGameOver(true);
    }
  };

  const resetGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex].word);
    setHint(words[randomIndex].hint);
    setGuessedWord(Array(words[randomIndex].word.length).fill(''));
    setGuess('');
    setAttempts(6);
    setIncorrectGuesses(0);
    setIsGameOver(false);
    setHangmanImage('');
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex].word);
    setHint(words[randomIndex].hint);
    setGuessedWord(Array(words[randomIndex].word.length).fill(''));
  }, []);

  useEffect(() => {
    if (incorrectGuesses > 0 && incorrectGuesses < 7) {
      setHangmanImage(getHangmanImage(incorrectGuesses));
    }
  }, [incorrectGuesses]);

  const getHangmanImage = (incorrectGuesses) => {
    const hangmanImages = [
      '   +---+\n   |   |\n       |\n       |\n       |\n       |\n=========', // 0
      '   +---+\n   |   |\n   O   |\n       |\n       |\n       |\n=========', // 1
      '   +---+\n   |   |\n   O   |\n   |   |\n       |\n       |\n=========', // 2
      '   +---+\n   |   |\n   O   |\n  /|   |\n       |\n       |\n=========', // 3
      '   +---+\n   |   |\n   O   |\n  /|\\  |\n       |\n       |\n=========', // 4
      '   +---+\n   |   |\n   O   |\n  /|\\  |\n  /    |\n       |\n=========', // 5
      '   +---+\n   |   |\n   O   |\n  /|\\  |\n  / \\  |\n       |\n=========', // 6
    ];

    return hangmanImages[incorrectGuesses];
  };

  const renderGuessedWord = () => {
    return guessedWord.map((letter, index) => (
      <span key={index}>{letter === '' ? '_ ' : letter + ' '}</span>
    ));
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
    },
    gameContainer: {
      display: 'flex ',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: '40px',
      width: '700px', // Tamaño fijo del recuadro del juego
      border: '1px solid rgba(0, 0, 0, 0.8)',
      borderRadius: '5px',
      padding: '20px',
      backgroundImage: 'url("https://qph.cf2.quoracdn.net/main-qimg-d48c1a577952f5a3020bb51c3fc09ab9-lq")', // Ruta de la imagen de fondo
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
      color: 'white', // Cambiar el color del texto a blanco
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Agregar sombra al texto
    },
    resultContainer: {
      display: 'float ',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '40px',
      width: '500px', // Tamaño fijo del recuadro del resultado
      border: '1px solid rgba(0, 0, 0, 0.8)',
      borderRadius: '5px',
      padding: '20px',
      backgroundImage: 'url("https://qph.cf2.quoracdn.net/main-qimg-d48c1a577952f5a3020bb51c3fc09ab9-lq")', // Ruta de la imagen de fondo
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
      color: 'green', // Cambiar el color del texto a blanco
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Agregar sombra al texto
    },
    hangmanDrawing: {
      fontFamily: 'monospace',
      fontSize: '20px',
      whiteSpace: 'pre',
    },
  };
  
  return (
    <div style={styles.container}>
    {!isGameOver && attempts > 0 && (
      <div style={styles.gameContainer}>
        <div style={{ fontSize: '2.5em', color: 'green', fontWeight: 'bold',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Pista: {hint}</div>
        <div style={{ fontSize: '1.8em', color: 'black', fontWeight: 'bold',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Intentos restantes: {attempts}</div>
        <div style={{ fontSize: '1.9em', color: 'green', fontWeight: 'bold',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Palabra: {renderGuessedWord()}</div>
        <input type="text"style={{ fontSize: '1.9em', color: 'green', fontWeight: 'bold',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} value={guess} onChange={(e) => setGuess(e.target.value)}  />
        <button onClick={checkGuess} style={{ fontSize: '1.9em', color: 'green', fontWeight: 'bold',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Adivinar</button>
      </div>
    )}
    {!isGameOver && attempts > 0 && (
      <div style={styles.hangmanDrawing}>{hangmanImage}</div>
    )}
    {(isGameOver || attempts === 0) && (
      <div style={styles.resultContainer}>
        <div style={{ fontSize: '2.5em', color: 'green', fontWeight: 'bold',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{guessedWord.join('') === word ? '¡Felicidades! Has adivinado la palabra.' : '¡Oh no! Has perdido.'}</div>
        {guessedWord.join('') !== word && <p style={{ fontSize: '1.9em', color: 'black', fontWeight: 'bold',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>La palabra correcta era: {word}</p>}
        <button onClick={resetGame}> Jugar de nuevo</button>
      </div>
    )}
  </div>
  );
      };

export default AhorcadoAzteca;
