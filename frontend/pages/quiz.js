import React, { useState, useEffect } from "react";


const Quiz = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);
  const preguntas = [
    {
      titulo: "¿Cuál es el nombre del dios principal de los aztecas?",
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
    }


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
        <div className="juego-terminado">
          <span>
            Obtuviste {puntuación} de {preguntas.length}
          </span>
          <button onClick={restartGame}>Volver a jugar</button>
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
      <main className="app">
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
