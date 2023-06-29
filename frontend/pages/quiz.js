import React, { useState, useEffect } from "react";
import { Base1 } from "@layouts/Baseof";
const Titulo = () => {
  return (
    <div className="font-text relative h-80">
    <img
      className="absolute inset-0 h-full w-full object-cover brightness-50"
      src={"/images/60ececdb1ab3bd00957e108ed2f27ec6.gif"}
      alt="Imagen de fondo"
    />
    <div className="z-12 relative flex h-full items-center justify-center">
      <h1 className="text-4xl font-bold">
        <span className="text-green-500">Minijuegos Aztecas</span>
      </h1>
    </div>
    </div>
  );
};
 
const Quiz = () => {

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);
  const preguntas = [
    {
      titulo: "¿Cuál es el nombre del Dios principal de los aztecas?",
      opciones: [
        { textoRespuesta: "Huitzilopochtli", isCorrect: true },
        { textoRespuesta: "Quetzalcóatl", isCorrect: false },
        { textoRespuesta: "Tlaloc", isCorrect: false },
        { textoRespuesta: "Xochipilli", isCorrect: false },
      ],
    },
    {
      titulo: "¿Cuál era la capital del Imperio Azteca?",
      opciones: [
        { textoRespuesta: "Tenochtitlán", isCorrect: true },
        { textoRespuesta: "Teotihuacán", isCorrect: false },
        { textoRespuesta: "Tlatelolco", isCorrect: false },
        { textoRespuesta: "Chichén Itzá", isCorrect: false },
      ],
    },
    {
      titulo: "En un principio, sin embargo, había tres capitales aliadas entre sí.¿Sabrias decir cuáles eran las otras dos?",
      opciones: [
        { textoRespuesta: "Chichen Itzá", isCorrect: false },
        { textoRespuesta: "Teotihuacán y Tikal", isCorrect: false },
        { textoRespuesta: "Tetzcoco y Tlacopan", isCorrect: true },
      ],
    },
    {
      titulo: "¿Cual era el ave que se consideraba la encarnación del dios del aire y sus plumas eran artículos de lujo?",
      opciones: [
        { textoRespuesta: "La guacamaya", isCorrect: false },
        { textoRespuesta: "El pavo real", isCorrect: false },
        { textoRespuesta: "El quetzal", isCorrect: true },
        { textoRespuesta: "El Aguila", isCorrect: false },

      ],
    },
    {
      titulo: "¿Cual era el principal cultivo para la alimentación de los Aztecas?",
      opciones: [
        { textoRespuesta: "Maíz", isCorrect: true },
        { textoRespuesta: "Trigo", isCorrect: false },
        { textoRespuesta: "Cacao", isCorrect: false },
        { textoRespuesta: "Papa", isCorrect: false },
      ],
    },

    {
      titulo: "¿Cuál era el idioma que hablaban los Aztecas?",
      opciones: [
        { textoRespuesta: "Náhuatl", isCorrect: true },
        { textoRespuesta: "Quechua", isCorrect: false },
        { textoRespuesta: "Aymara", isCorrect: false },
        { textoRespuesta: "Español", isCorrect: false },
      ],
    },
    {
      titulo: "La guerra era una parte fundamental de la sociedad Azteca. sus unidades bélicas recibían nombres de distintos animes:",
      opciones: [
        { textoRespuesta: "Guerreros águila y guerreros quetzal", isCorrect: false },
        { textoRespuesta: "Guerreros águila y guerreros jaguar", isCorrect: true },
        { textoRespuesta: "Guerreros jaguar y guerreros serpiente", isCorrect: false },
        { textoRespuesta: "Guerreros gatos y guerreros perrros :v", isCorrect: false },
      ],
    },
    
    {
      titulo: "Aunque tradicionalmente se les ha llamado Aztecas, el nombre autoctono de este pueblo era otro. ¿Sabes cuál?",
      opciones: [
        { textoRespuesta: "Mayas", isCorrect: false },
        { textoRespuesta: "Mexicas", isCorrect: true },
        { textoRespuesta: "Incas", isCorrect: false },
        { textoRespuesta: "Taironas", isCorrect: false },
      ],
    },
    
   
  ];


  function handleAnswerSubmit(isCorrect, e) {
    // añadir puntuación
    if (isCorrect) setPuntuación(puntuación + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // cambiar a la siguiente pregunta
    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(10);
      }
    }, 1500);
  }

  function restartGame() {
    setPreguntaActual(0);
    setPuntuación(0);
    setIsFinished(false);
    setTiempoRestante(10);
    setAreDisabled(false);
    setAnswersShown(false);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFinished)
    return (
      <main className="app2">
        <div className="juego-terminado2">
          <span>
            Obtuviste {puntuación} de {preguntas.length}
          </span>
          <button onClick={restartGame} style={{margin:10}}>Volver a jugar</button>
          <button
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
            }}
          >
            Ver respuestas
          </button>
        </div>
      </main>
    );

  if (answersShown)
    return (
      
      <main className="app2">
        
        <div className="lado-izquierdo2">
          <div className="numero-pregunta">
            <span>Pregunta {preguntaActual + 1} de</span> {preguntas.length}
          </div>
          {preguntaActual < preguntas.length && (
            <div className="titulo-pregunta">
              {preguntas[preguntaActual].titulo}
            </div>
          )}
          {preguntaActual < preguntas.length && (
            <div>
              {
                preguntas[preguntaActual].opciones.filter(
                  (opcion) => opcion.isCorrect
                )[0].textoRespuesta
              }
            </div>
          )}
          <button
            onClick={() => {
              if (preguntaActual === preguntas.length - 1) {
                restartGame();
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === preguntas.length - 1 ? "Volver a jugar" : "Siguiente"}
          </button>
        </div>
      </main>
    );

  return (
    <main className="app2">
      <div className="lado-izquierdo2">
        <div className="numero-pregunta">
          <span>Pregunta {preguntaActual + 1} de</span> {preguntas.length}
        </div>
        {preguntaActual < preguntas.length && (
          <div className="titulo-pregunta">
            {preguntas[preguntaActual].titulo}
          </div>
        )}
        {preguntaActual < preguntas.length && (
          <div>
            {!areDisabled ? (
              <span className="tiempo-restante">
                Tiempo restante: {tiempoRestante}
              </span>
            ) : (
              <button
                onClick={() => {
                  setTiempoRestante(10);
                  setAreDisabled(false);
                  if (preguntaActual === preguntas.length - 1) {
                    setIsFinished(true);
                  } else {
                    setPreguntaActual(preguntaActual + 1);
                  }
                }}
              >
                Continuar
              </button>
            )}
          </div>
        )}
      </div>
      <div className="lado-derecho2">
        {preguntaActual < preguntas.length &&
          preguntas[preguntaActual].opciones.map((respuesta) => (
            <button
              disabled={areDisabled}
              key={respuesta.textoRespuesta}
              onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
            >
              {respuesta.textoRespuesta}
            </button>
          ))}
      </div>
    </main>
  
  );
};

export default Quiz;