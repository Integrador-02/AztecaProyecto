import React, { useState } from 'react';
import { Base1 } from '@layouts/Baseof';
import Link from 'next/link';

const questions = [
    {
      question: '¿Cuál es la leyenda azteca que narra la historia de dos dioses hermanos?',
      options: ['Leyenda de Quetzalcóatl y Tezcatlipoca', 'Leyenda de La Llorona', 'Leyenda del Quinto Sol', 'Leyenda de la fundación de México-Tenochtitlán'],
      answer: 'Leyenda de Quetzalcóatl y Tezcatlipoca'
    },
    {
      question: '¿Cuál es la serpiente emplumada que representa la dualidad en la mitología azteca?',
      options: ['Quetzalcóatl', 'Huitzilopochtli', 'Coatlicue', 'Xolotl'],
      answer: 'Quetzalcóatl'
    },
    {
      question: 'Según la leyenda azteca, ¿qué ocurrió con los dioses de los cuatro soles anteriores?',
      options: ['Se transformaron en animales', 'Fueron derrotados por los hombres', 'Se convirtieron en estrellas', 'Desaparecieron en el inframundo'],
      answer: 'Desaparecieron en el inframundo'
    },
    {
      question: '¿Cuál es la leyenda azteca que relata la historia de una mujer convertida en diosa?',
      options: ['Leyenda de La Malinche', 'Leyenda de La Llorona', 'Leyenda del Quinto Sol', 'Leyenda de Coatlicue'],
      answer: 'Leyenda de Coatlicue'
    },
    {
      question: '¿Quién es el dios azteca asociado con la muerte y el inframundo?',
      options: ['Quetzalcóatl', 'Mictlantecuhtli', 'Tlaloc', 'Xochiquetzal'],
      answer: 'Mictlantecuhtli'
    },
    {
      question: 'Según la leyenda azteca, ¿qué ocurrió cuando los dioses decidieron crear a los hombres?',
      options: ['Los hombres surgieron de un maíz', 'Los hombres fueron creados por Quetzalcóatl', 'Los hombres descendieron del cielo', 'Los hombres surgieron de la tierra'],
      answer: 'Los hombres surgieron de un maíz'
    },
    {
      question: '¿Cuál es la leyenda azteca que cuenta la historia de un guerrero y una princesa?',
      options: ['Leyenda de Popocatépetl e Iztaccíhuatl', 'Leyenda de La Malinche', 'Leyenda del Quinto Sol', 'Leyenda de Xólotl y el Mictlán'],
      answer: 'Leyenda de Popocatépetl e Iztaccíhuatl'
    },
    {
      question: '¿Qué animal era considerado sagrado en la mitología azteca y se asociaba con la guerra?',
      options: ['Águila', 'Coyote', 'Jaguar', 'Serpiente'],
      answer: 'Águila'
    },
    {
      question: '¿Quién es la diosa azteca de la luna y la fertilidad?',
      options: ['Quetzalcóatl', 'Cihuacóatl', 'Coyolxauhqui', 'Xochiquetzal'],
      answer: 'Coyolxauhqui'
    },
    {
      question: '¿Cuál es la leyenda azteca que relata el destino de los guerreros muertos en batalla?',
      options: ['Leyenda de Xólotl y el Mictlán', 'Leyenda de La Llorona', 'Leyenda del Quinto Sol', 'Leyenda de los Guerreros Águila'],
      answer: 'Leyenda de los Guerreros Águila'
    },
  ];
  
const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://media.istockphoto.com/id/605999042/es/vector/dibujos-animados-quetzalc%C3%B3atl.jpg?s=612x612&w=0&k=20&c=yhZQm0q1f1pJTZTNUf6tIQL1l2woU-RU3HyZDO9rc0Y="}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">QUIZ LEYENDA 1</span>
        </h1>
      </div>
    </div>
  );
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowResult(false);
  };
  const progress = ((currentQuestion + 1) / questions.length) * 100;


  return (
    <Base1 title={"Categorias Aztecas"}>
      <Titulo />
      <div style={{ padding: 40 }}>
        <div className="quiz-container" style={{ border: '1px solid black', padding: '20px', borderRadius: '5px', position: 'relative' }}>
          <div className="progress-bar-container" style={{ width: '100%', height: '10px', backgroundColor: '#e4e4e4', borderRadius: '5px', overflow: 'hidden' }}>
            <div className="progress-bar" style={{ width: `${progress}%`, height: '100%', backgroundColor: 'green' }}></div>
          </div>
          {showResult ? (
            <div>
              <h2 className="question">Resultados del Quiz</h2>
              <p>Tu puntaje: {score} de {questions.length}</p>
              <ul className="answer-review">
                {questions.map((question, index) => (
                  <li key={index} className={`review-item ${selectedOption === question.answer ? 'correct' : 'incorrect'}`}>
                    <p>{question.question}</p>
                    <p>Tu respuesta: {selectedOption}</p>
                    <p>Respuesta correcta: {question.answer}</p>
                  </li>
                ))}
              </ul>
              <button className="submit-button" onClick={resetQuiz}>
                Volver a intentar
              </button>
            </div>
          ) : (
            <div>
              <h2 className="question">Pregunta {currentQuestion + 1}</h2>
              <p>{questions[currentQuestion].question}</p>
              <ul className="options">
                {questions[currentQuestion].options.map((option, index) => (
                  <li className="option" key={index}>
                    <label>
                      <input
                        type="radio"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionSelect(option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              <button className="submit-button" onClick={handleNextQuestion}>
                Siguiente
              </button>
            </div>
          )}
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-1" style={{ margin: 0, padding: 10 }}>
        <li
          key={`7`}
          className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
          style={{
            margin: 0,
            padding: 0,
            position: 'relative',
            backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
          }}>


          <Link
            href={`/categories`}
            className="flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <span style={{ fontSize: '1.9em', color: '#006400' }}>Pagina Principal</span>
          </Link>

        </li>
      </ul>
    </Base1>

  );
};

export default Quiz;
