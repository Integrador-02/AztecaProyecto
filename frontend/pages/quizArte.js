import React, { useState } from 'react';
import { Base1 } from '@layouts/Baseof';
import Link from 'next/link';

const questions = [
  {
    question: '¿Qué formas artísticas utilizaban los aztecas para expresar su arte?',
    options: ['Arquitectura y escultura', 'Pintura y cerámica', 'Todas las anteriores'],
    answer: 'Todas las anteriores'
  },
  {
    question: '¿Qué valor simbólico tenían los textiles en el Imperio Azteca?',
    options: ['Eran considerados obras de arte sagradas.', 'Se utilizaban como moneda en el imperio.', 'Representaban la identidad de la persona que los llevaba.'],
    answer: 'Representaban la identidad de la persona que los llevaba.'
  },
  {
    question: '¿Para qué se utilizaron las copas bicónicas y en forma de cáliz en el arte azteca?',
    options: ['Para que los ancianos bebiesen pulque, una bebida alcohólica.', 'Como recipientes para alimentos y agua.', 'Como vasos ceremoniales para ofrendas religiosas.'],
    answer: 'Para que los ancianos bebiesen pulque, una bebida alcohólica.'
  },
  {
    question: '¿En qué ocasiones se encontraba presente la música, la danza y la poesía en la cultura azteca?',
    options: ['Únicamente en festivales y celebraciones', 'En rituales, sacrificios, ofrendas y consumo de sustancias alucinógenas.','Durante reuniones sociales y banquetes.'],
    answer: 'En rituales, sacrificios, ofrendas y consumo de sustancias alucinógenas.'
  },
  {
    question: '¿Quiénes eran los tlacuilos en la cultura azteca?',
    options: ['Los sacerdotes encargados de los rituales religiosos.','Los artistas especializados encargados del arte pictórico.','Los gobernantes y líderes políticos.'],
    answer: 'Los artistas especializados encargados del arte pictórico.'
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
          <span className="text-green-600">QUIZ ARTE</span>
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
      <div style={{padding:40}}>
      <div className="quiz-container" style={{  border: '1px solid black', padding: '20px', borderRadius: '5px', position: 'relative' }}>
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
)   : (
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