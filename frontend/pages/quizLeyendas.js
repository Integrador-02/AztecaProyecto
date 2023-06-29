import  React,{ useEffect, useState } from "react";
import { Base1 } from '@layouts/Baseof';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from "js-cookie";

const questions = [
    {
      question: '¿Cuál era el dios azteca asociado con el sol y la guerra?',
      options: ['Quetzalcóatl', 'Huitzilopochtli', 'Tlaloc', 'Xochiquetzal'],
      answer: 'Huitzilopochtli'
    },
    {
      question: '¿Cuál es la leyenda azteca que narra el origen de la ciudad de Tenochtitlán?',
      options: ['Leyenda de Popocatépetl e Iztaccíhuatl', 'Leyenda de La Llorona', 'Leyenda del Quinto Sol', 'Leyenda de la fundación de México-Tenochtitlán'],
      answer: 'Leyenda de la fundación de México-Tenochtitlán'
    },
    {
      question: 'Según la leyenda azteca, ¿qué sucede cada vez que llora La Llorona?',
      options: ['Ocurre un desastre natural', 'Se desata una guerra', 'Aparecen espíritus malignos', 'Alguien cercano a ella muere'],
      answer: 'Alguien cercano a ella muere'
    },
    {
      question: '¿Cuál es la serpiente emplumada de la mitología azteca?',
      options: ['Quetzalcóatl', 'Tezcatlipoca', 'Coatlicue', 'Xolotl'],
      answer: 'Quetzalcóatl'
    },
    {
      question: '¿Cuál es la leyenda azteca que cuenta la historia de dos volcanes?',
      options: ['Leyenda de Popocatépetl e Iztaccíhuatl', 'Leyenda de La Malinche', 'Leyenda del Quinto Sol', 'Leyenda de Xólotl y el Mictlán'],
      answer: 'Leyenda de Popocatépetl e Iztaccíhuatl'
    },
    {
      question: '¿Cuál era el dios azteca de la lluvia y la agricultura?',
      options: ['Quetzalcóatl', 'Huitzilopochtli', 'Tlaloc', 'Xochiquetzal'],
      answer: 'Tlaloc'
    },
    {
      question: 'Según la leyenda azteca del Quinto Sol, ¿cómo fue creado el actual mundo?',
      options: ['Por una gran inundación', 'Por una guerra entre dioses', 'Por la transformación de los hombres en aves', 'Por el sacrificio de los dioses'],
      answer: 'Por una guerra entre dioses'
    },
    {
      question: '¿Cuál es el animal sagrado en la leyenda azteca de Coatlicue?',
      options: ['Serpiente', 'Águila', 'Jaguar', 'Coyote'],
      answer: 'Serpiente'
    },
    {
      question: '¿Quién era la diosa azteca de la belleza, el amor y las flores?',
      options: ['Quetzalcóatl', 'Huitzilopochtli', 'Tlaloc', 'Xochiquetzal'],
      answer: 'Xochiquetzal'
    },
    {
      question: '¿Cuál es la leyenda azteca que cuenta la historia de un perro celestial?',
      options: ['Leyenda de Xólotl y el Mictlán', 'Leyenda de La Llorona', 'Leyenda del Quinto Sol', 'Leyenda de la fundación de México-Tenochtitlán'],
      answer: 'Leyenda de Xólotl y el Mictlán'
    },
  ];

  const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [selectedOptions2, setSelectedOptions2] = useState({});
    const [email, setEmail] = useState('');
  
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isReviewMode, setIsReviewMode] = useState(false);
    const [isInitialRender, setIsInitialRender] = useState(true);
  /**/
  useEffect(() => {
    const user = Cookies.get('clave');
    
    setEmail(user);
    
   
  
  
  
  }, []);
  
  const handleMergeSelectedOptions = () => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      ...selectedOptions2,
    }));
  };
  
  
    useEffect(() => {
      
    const handlerRevision = async () => {
  
      try {
          
          console.log('sd',email)
          const url = `http://localhost:4000/api/recuperarquizE?correo=${email}`;
          const respuesta = await axios.get(url);
          const opciones2 = respuesta.data.reduce((obj, opcion, index) => {
            obj[index] = opcion;
            return obj;
          }, {});
          setSelectedOptions2(opciones2);
          
        } catch (error) {
          console.error('Error al hacer la solicitud:', error);
          // Manejo de errores en caso de que falle la solicitud al backend
          alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
        } /* */
      };
    
      handlerRevision(); /* */
    }, [email]); 
    
  
  
    useEffect(() => {
      handleMergeSelectedOptions();
      console.log('ff',selectedOptions)
      
    }, [selectedOptions2]); /* */
    
  useEffect(() => {
  
      if (isInitialRender) {
        setIsInitialRender(false);
        return;
      }
     
      const selectedOptionsLength = Object.keys(selectedOptions2).length;
      if (selectedOptionsLength > 0) {
        // Mostrar SweetAlert para la revisión
  
        Swal.fire({
          title: `Hola ${email}. Ya has realizado este quiz`,
          text: 'Puedes ver las opciones que has marcado y posteriormente revisar el intento',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'vale',
          showLoaderOnConfirm: true,
  
          preConfirm: (selectedOption) => {
            if (selectedOption) { // Si es true, significa que el usuario eligió 'Ver intento anterior'
              handleReview3();
            } else { // Si es false, significa que el usuario eligió 'Nuevo Intento'
              setSelectedOptions({});
              resetQuiz();
            }
          }
        });
      }
        
    }, [selectedOptions2]); /* */
    
    
    
  
    
  
    const handleOptionSelect = (option) => {
      if (showResult || isReviewMode) return;
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [currentQuestion]: option
      }));
    };
  
    const handleNextQuestion = () => {
      const selectedOption = selectedOptions[currentQuestion];
    
      if (!isReviewMode && selectedOption === questions[currentQuestion].answer) {
        setScore((prevScore) => prevScore + 1);
      }
    
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    
      if (currentQuestion === questions.length - 1) {
        setShowResult(true);
      }
    };
    
  
    const resetQuiz = () => {
      handlerIngresar();
      setCurrentQuestion(0);
      setSelectedOptions({});
      setScore(0);
      setShowResult(false);
      setIsReviewMode(false);
      
    };
    const handleReview3 = async () => {
      setShowResult(false);
      setCurrentQuestion(0);
      setIsReviewMode(true);
    
      
    
     
    }
    
    const handleReview = async () => {
      setShowResult(false);
      setCurrentQuestion(0);
      setIsReviewMode(true);
      handlerIngresar();
      
    
     
    }
    const handleResultSection = () => {
      // Lógica de tu función cuando se llega a la sección de resultados
      console.log('Sección de resultados alcanzada');
     
     
    };
  
    useEffect(() => {
      if (showResult) {
        handleResultSection();
      }
    }, [showResult]);
    
    const handlerIngresar = async () => {
      try {
        const url = "http://localhost:4000/api/quizE";
        const opciones = Object.values(selectedOptions);
        console.log('aaa',opciones)
        const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0')
    
        const data = {
          correo: email,
          fecha: `${year}-${month}-${day}`,
          intento: 1,
          opciones : [],
          score :score
        };
        const opcion = 'Opción 1';
  
        opciones.forEach(opcion => {
          data.opciones.push(opcion);
        });
       
  
    
        const respuesta = await axios.post(url, data);
        console.log('Respuesta del servidor:', respuesta.data);
    
        // Resto del código en caso de éxito
      } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        // Manejo de errores en caso de que falle la solicitud al backend
        alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      }
  
  
    }
  
  
    const renderQuestion = (question, index) => {
      
      const userSelectedOption = selectedOptions[index];
      const isCorrectAnswer = userSelectedOption === question.answer;
      return (
        <div key={index}>
          <h2 className="question" style={{ marginBottom: '10px' }}>{question.question}</h2>
          <div className="options">
            
            {question.options.map((option, optionIndex) => {
              const isSelected = userSelectedOption === option;
              const isCorrect = option === question.answer;
  
              let optionClass = 'option';
              if (isSelected && isReviewMode) {
                if (isCorrect) {
                  optionClass += ' correct';
                } else {
                  optionClass += ' incorrect';
                }
              } else if (isSelected) {
                optionClass += ' selected';
              }
  
              return (
                <button
                  key={optionIndex}
                  className={optionClass}
                  onClick={() => handleOptionSelect(option)}
                  disabled={showResult || isReviewMode}
                >
                  {option}
                </button>
              );
            })}
          </div>
          <button
            className={`next-button ${userSelectedOption ? '' : 'disabled'}`}
            onClick={handleNextQuestion}
            disabled={!userSelectedOption || showResult}
          >
            Siguiente
          </button>
        </div>
      );
    };
  
    const progress = ((currentQuestion + 1) / questions.length) * 100;
     console.log(100)
    return (
      <Base1 title={"Categorias Aztecas"}>
        <div style={{ padding: 0 }}>
          <div className="quiz-container">
            <div className="progress-bar-container" style={{ width: '100%', height: '2.5rem' }}>
              <div className="progress-bar" style={{ width: `${progress}%`, height: '100%', backgroundColor: '#34D399', borderRadius: '5px' }}></div>
            </div>
            {!showResult ? (
              <div>
                {renderQuestion(questions[currentQuestion], currentQuestion)}
              </div>
            ) : (
              <div className="result-container">
                <h2 className="result-title">Resultados</h2>
                <p className="result-text">
                  Obtuviste {score} de {questions.length} respuestas correctas.
                </p>
  
                <button className="reset-button" onClick={resetQuiz}>
                  Reiniciar
                </button>
                <button className="reset-button" onClick={handleReview}>
                  Revisar
                </button>
              </div>
            )}
            
          </div>
        </div>
      </Base1>
    );
  };
  export default Quiz;
  