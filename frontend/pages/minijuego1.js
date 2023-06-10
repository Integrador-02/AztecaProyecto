import React, { useState, useEffect } from 'react';

const AhorcadoAzteca = () => {
  const [word, setWord] = useState('');
  const [hint, setHint] = useState('');
  const [guessedWord, setGuessedWord] = useState([]);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(6);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [hangmanImage, setHangmanImage] = useState('/path/to/hangman_0.png');

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
  const Titulo = () => {
    return (
      <div className="relative h-80 font-text">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={"https://www.infobae.com/new-resizer/OPVRxDKhnjBxdzzHS88fGpzOzDc=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/VY7HMNG5ARFEDLZOSGSHFPCIBI.jpg"}
          alt="Imagen de fondo"
        />
        <div className="relative z-12 flex items-center justify-center h-full">
          <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-green-600">Ahorcado</span>
          </h1>
        </div>
      </div>
    );
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
    setHangmanImage('/images/0.jpg');
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex].word);
    setHint(words[randomIndex].hint);
    setGuessedWord(Array(words[randomIndex].word.length).fill(''));
  }, []);

  useEffect(() => {
    if (incorrectGuesses > 0 && incorrectGuesses < 7) {
      setHangmanImage(`/images/${incorrectGuesses}.jpg`);
      console.log(incorrectGuesses);
    }
  }, [incorrectGuesses]);

  return ( 
    <div className="relative z-12 flex items-center justify-center h-full">
     

      {!isGameOver && attempts > 0 && (
        <div>
          <h3>Pista: {hint}</h3>
          <p>Intentos restantes: {attempts}</p>
          <p>Palabra: {guessedWord.join(' ')}</p>
          <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} />
          <button onClick={checkGuess}>Adivinar</button>
        </div>
      )}
      <div className="absolute right-0 top-0">
        <img src={hangmanImage} alt="Hangman" style={{ display: 'block', margin: 'auto' }} />
      </div>
      {(isGameOver || attempts === 0) && (
        <div>
          <h2 style={{ textAlign: 'center' }}>{guessedWord.join('') === word ? '¡Felicidades! Has adivinado la palabra.' : '¡Oh no! Has perdido.'}</h2>
          {guessedWord.join('') !== word && <p style={{ textAlign: 'center' }}>La palabra correcta era: {word}</p>}
          <button onClick={resetGame} style={{ display: 'block', margin: 'auto' }}>Jugar de nuevo</button>
        </div>
      )}
    </div>
  );
};

export default AhorcadoAzteca;

