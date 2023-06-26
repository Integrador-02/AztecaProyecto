import React, { useState } from 'react';
import { Base1 } from '@layouts/Baseof';
import Link from 'next/link';

const questions = [
    {
    question: '¿Cuál era la principal deidad en la religión azteca?',
    options: ['Huitzilopochtli', 'Quetzalcóatl', 'Tlaloc'],
    answer: 'Huitzilopochtli'
    },
    {
    question: '¿Qué función tenía el templo principal de Tenochtitlán, llamado Templo Mayor?',
    options: ['Era el lugar donde se realizaban sacrificios humanos.', 'Era el centro de peregrinación para los fieles.', 'Era la residencia del emperador azteca.'],
    answer: 'Era el lugar donde se realizaban sacrificios humanos.'
    },
    {
    question: '¿Cuál era la creencia principal sobre la creación del mundo según los aztecas?',
    options: ['Fue creado por los dioses mediante una serie de sacrificios.', 'El mundo fue creado a partir del sacrificio de Quetzalcóatl.', 'El mundo siempre ha existido, sin un origen específico.'],
    answer: 'Fue creado por los dioses mediante una serie de sacrificios.'
    },
    {
    question: '¿Qué papel desempeñaban los sacerdotes en la religión azteca?',
    options: ['Intermediarios entre los dioses y los seres humanos.', 'Encargados de la construcción de templos y monumentos.', 'Líderes políticos y militares.'],
    answer: 'Intermediarios entre los dioses y los seres humanos.'
    },
    {
    question: '¿Cuál era la importancia de los sacrificios humanos en la religión azteca?',
    options: ['Eran considerados ofrendas para aplacar a los dioses.', 'Eran realizados como castigo para los criminales.', 'No tenían una importancia religiosa específica.'],
    answer: 'Eran considerados ofrendas para aplacar a los dioses.'
    },
    {
    question: '¿Cuál era la importancia del juego de pelota en la religión azteca?',
    options: ['Representaba la lucha entre las fuerzas del bien y del mal.', 'Era un entretenimiento para el emperador y la nobleza.', 'Era una representación del ciclo de vida y muerte.'],
    answer: 'Representaba la lucha entre las fuerzas del bien y del mal.'
    },
    {
    question: '¿Cuál era el propósito de las peregrinaciones en la religión azteca?',
    options: ['Buscar el favor de los dioses y obtener bendiciones.', 'Explorar nuevas tierras y expandir el imperio.', 'Promover el comercio entre diferentes regiones.'],
    answer: 'Buscar el favor de los dioses y obtener bendiciones.'
    },
    {
    question: '¿Cuál era el propósito de los rituales de autosacrificio en la religión azteca?',
    options: ['Demostrar valentía y fortaleza ante los dioses.', 'Obtener visiones y entrar en contacto con lo divino.', 'Asegurar la fertilidad de los cultivos y el bienestar de la comunidad.'],
    answer: 'Obtener visiones y entrar en contacto con lo divino.'
    },
    {
    question: '¿Cuál era la visión azteca sobre la vida después de la muerte?',
    options: ['Creían en un cielo y un infierno como destinos finales.', 'Creían en la reencarnación en seres humanos o animales.', 'Creían en una vida después de la muerte en un paraíso llamado Tlalocan.'],
    answer: 'Creían en una vida después de la muerte en un paraíso llamado Tlalocan.'
    },
    {
    question: '¿Qué sucedió con la religión azteca después de la llegada de los españoles?',
    options: ['Fue completamente erradicada y prohibida.', 'Se fusionó con la religión católica durante el proceso de evangelización.', 'Perdió su relevancia y dejó de ser practicada.'],
    answer: 'Fue completamente erradicada y prohibida.'
    }
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
          <span className="text-green-600">QUIZ RELIGION</span>
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
          <div className="progress-bar" style={{ width: `${progress}%`, height: '10px', backgroundColor: 'green' }}></div>
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