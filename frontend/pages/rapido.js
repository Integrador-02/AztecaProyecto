import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import { Base1 } from '@layouts/Baseof';

const Game = () => {
    const [words, setWords] = useState([
        { word: 'Tenochtitlán', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/El_templo_mayor_en_Tenochtitlan.png/1200px-El_templo_mayor_en_Tenochtitlan.png' },
        { word: 'Quetzalcóatl', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Quetzalcoatl.svg/250px-Quetzalcoatl.svg.png' },
        { word: 'Tláloc', image: '/images/taclo.jpg' },
        { word: 'Huitzilopochtli', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Huitzilopochtli_V.png' },
        { word: 'Templo Mayor', image: 'https://imagenes.elpais.com/resizer/buNZw4RoHDsNLvcCiXQDooVwOYU=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZIKCWECQR5GORHHCFMA5YYJEVY.png' },
        { word: 'Chinampas', image: 'https://assets.puzzlefactory.com/puzzle/275/958/original.jpg' },
        { word: 'Calendario Azteca', image: 'https://mxcity.mx/wp-content/uploads/2016/02/calendario-azteca-ceramica-verde.jpg' },
        { word: 'Guerreros Águila y Jaguar', image: 'https://cdn1.matadornetwork.com/blogs/2/2018/12/guerreros-shutterstock_715984411.jpg' },
        { word: 'Sacrificios Humanos', image: 'https://www.infobae.com/new-resizer/FmMH5z0kPis3RHkV2Mll_uDXwnI=/1200x900/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/VY7HMNG5ARFEDLZOSGSHFPCIBI.jpg' },
        { word: 'Códices Aztecas', image: 'https://cdn0.unprofesor.com/es/posts/8/0/6/codice_mendoza_4608_2_600.jpg' },
        { word: 'Tlatoani', image: 'https://cdn1.matadornetwork.com/blogs/2/2018/05/portada-tlatoani-560x420.jpg' },
        { word: 'Pochteca', image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Pochtecas_con_su_carga.JPG' },
        { word: 'Chalchihuitlicue', image: 'https://1.bp.blogspot.com/-_jp0d0WQUew/YHj4D6qkobI/AAAAAAAAIp4/US8xdpSbUSciOc6Ov80zw3yuhWUQ6Y-WQCLcBGAsYHQ/s500/chalchiC%25C3%25B3diceBorb%25C3%25B3nico.jpg' },
        { word: 'Serpiente emplumada', image: '/images/serpiente.jpg' },
        { word: 'Serpiente emplumada', image: '/images/serpiente.jpg' }

    ]);


    const [currentWord, setCurrentWord] = useState({ word: '', image: '' });
    const [input, setInput] = useState('');
    const [score, setScore] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [wordChangeTime, setWordChangeTime] = useState(2);
    const [gameOver, setGameOver] = useState(false);
    const [guessedWords, setGuessedWords] = useState([]);
    const [showInstructions, setShowInstructions] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (!gameOver) {
            inputRef.current.focus();
            setCurrentWord(getRandomWord());
        }
    }, [gameOver]);

    useEffect(() => {
        if (timeRemaining > 0 && !gameOver) {
            const timer = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (timeRemaining === 0) {
            setGameOver(true);
        }
    }, [timeRemaining, gameOver]);

    useEffect(() => {
        if (!gameOver) {
            const wordChangeTimer = setInterval(() => {
                setCurrentWord(getRandomWord());
            }, wordChangeTime * 100);

            return () => clearInterval(wordChangeTimer);
        }
    }, [wordChangeTime, gameOver]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleInstructionsClick = () => {
        setShowInstructions(true);
        Swal.fire({
            title: 'Instrucciones del juego',
            html: `
                <p>En este juego, tendrás que adivinar palabras relacionadas con la cultura azteca antes de que se acabe el tiempo.</p>
                <p>Cada palabra se mostrará en la pantalla junto con una imagen relacionada.</p>
                <p>Debes escribir la palabra correcta en el campo de texto y hacer clic en "Comprobar" para verificar tu respuesta.</p>
                <p>Si adivinas correctamente, obtendrás un punto. Pero ten cuidado, solo puedes adivinar una palabra una vez.</p>
                <p>El juego dura 60 segundos. Intenta obtener la mayor cantidad de puntos antes de que se acabe el tiempo.</p>
                <p>¡Buena suerte y diviértete!</p>
            `,
            icon: 'info',
            confirmButtonText: 'Cerrar',
            customClass: {
                content: 'game-info',
            },
            allowOutsideClick: false,
        }).then(() => {
            setShowInstructions(false);
        });
    };
    const startGame = () => {
        setCurrentWord({ word: '', image: '' });
        setInput('');
        setScore(0);
        setTimeRemaining(10);
        setGameOver(false);
        setGuessedWords([]);
    };

    const endGame = () => {
        setGameOver(true);
    };


    const getRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    };
    const checkWord = () => {
        const trimmedInput = input.trim().toLowerCase();

        if (words.find((wordObj) => wordObj.word.toLowerCase() === trimmedInput)) {
            if (!guessedWords.includes(trimmedInput)) {
                setScore((prevScore) => prevScore + 1);
                setGuessedWords((prevGuessedWords) => [...prevGuessedWords, trimmedInput]);
            }
        }

        setCurrentWord(getRandomWord());
        setInput('');
    };
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
        },
        gameContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '90px',
            width: 'auto', // Tamaño fijo del recuadro del juego
            border: '1px solid rgba(0, 0, 0, 0.8)',
            borderRadius: '15px',
            padding: '20px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            color: 'white', // Cambiar el color del texto a blanco
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Agregar sombra al texto
        },
        resultContainer: {
            display: 'absolute',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '20px',
            width: '50hv', // Tamaño fijo del recuadro del resultado
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

        <div style={styles.gameContainer}>
            {gameOver ? (
                <div   >
                    <h2 style={{ color: 'green', fontSize: '2em' }}>¡Tiempo agotado!</h2>
                    <p style={{ color: 'green', fontSize: '1.9em' }}>Puntaje: {score}</p>
                    {guessedWords.length > 0 && (
                        <div>
                            <h3 style={{ color: 'green', fontSize: '1em' }}>Palabras adivinadas:</h3>
                            <ul>
                                {guessedWords.map((word, index) => (
                                    <li style={{ color: 'green', fontSize: '1em' }} key={index}>{word}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <button className="submit-button" onClick={startGame} style={{ color: 'white', fontSize: '1.5em' }}>Jugar de nuevo</button>
                </div>
            ) : (
                <div>
                    <h2>Palabra actual:</h2>
                    <p style={{ color: 'green', fontSize: '1em' }}>{currentWord.word}</p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '500px', maxWidth: '100%', margin: '0 auto' }}>
                        <img src={currentWord.image} alt={currentWord.word} style={{ width: '100%', height: '200px' }} />
                    </div>                    <h3>Tiempo restante: {timeRemaining} segundos</h3>
                    <h3>Puntaje: {score}</h3>
                    <input ref={inputRef} type="text" value={input} onChange={handleInputChange} style={{ color: 'green' }} />
                    <button className="submit-button" onClick={checkWord} style={{ marginRight: '10px' }}>Comprobar</button>
                    <button className="submit-button" onClick={endGame} style={{ marginRight: '10px' }}>Terminar juego</button>
                    <button className="submit-button" onClick={handleInstructionsClick} >Instrucciones</button>

                </div>
            )}
        </div>

    );
};

export default Game;
