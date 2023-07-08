import React, { useEffect } from 'react';
import { useState } from 'react';
import { Base1 } from "@layouts/Baseof"; 
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import Link from "next/link";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import axios from "axios";
import Cookies from "js-cookie";

const Titulo = () => {
  return (
    <div className="relative h-60 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"/images/arte2.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex flex-col items-center justify-center h-full text-center">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">ARTE</span>
        </h1>
        <p className="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-1xl text-[#FFFFFF] mt-4 mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-16">
        El arte para los aztecas era sagrado y estaba estrechamente relacionado con su cultura y religión. Utilizaban una variedad de formas artísticas, como arquitectura, escultura, pintura y cerámica, para honrar a los dioses y transmitir sus creencias. El arte azteca era rico en simbolismo y motivos relacionados con la naturaleza, la guerra y el cosmos.
          </p>
      </div>
    </div>
  );
};


const Arte = ({ data }) => {

  const InteractionMessage = () => {
    const showMessage = () => {
      alert('Para interactuar con el modelo 3D, sigue estos pasos:\n\n1. Haz clic en el modelo para activarlo.\n2. Utiliza los controles del modelo para moverte, rotarlo y hacer zoom.\n3. Explora todas las características y detalles del modelo.\n\n¡Disfruta de la experiencia interactiva!');
    };

    return (
      <div className="interaction-message">
        <FaQuestionCircle className="help-icon" onClick={showMessage} />
        <span className="help-text">Haz clic para obtener instrucciones de interacción</span>
      </div>
    );
  };

  const [email, setEmail] = useState('');
  const [selectedOptions2, setSelectedOptions2] = useState(0);
  useEffect(() => {
    const user = Cookies.get('clave');
    setEmail(user);
  }, []);

  useEffect(() => {
    const guardarProgresoJeraquia = async () => {
      const pagina = 'arte';
      const newCommentObject = {
        id: 1,
        text: 1,
        username: email,
        replyTo: 1,
        likes: 0,
        timestamp: 1,
      };


      const coment = newCommentObject.text
      const correo = newCommentObject.username
      try {
        const response = await axios.post("http://localhost:4000/api/progresorArte", { correo, pagina });
        // Manejo de la respuesta exitosa
        //alert("Registrado correctamente");
      } catch (error) {
        // Manejo de errores en caso de que falle la solicitud al backend
        console.log(error);
        //alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      }
    };

    if (email) {
      console.log(email)
      guardarProgresoJeraquia();
    }
  }, [email]);

  const handleSubmit = async () => {

    //window.location.href = "/categories/jerarquia/comentarioJeraquia";

  };

  useEffect(() => {
    const handlerRevision = async () => {
      try {
        console.log('sd', email);
        const url = `http://localhost:4000/api/recuperarprogresoArte?correo=${email}`;
        const respuesta = await axios.get(url);
        setSelectedOptions2(respuesta.data.valor); // Utiliza respuesta.data.valor en lugar de respuesta.valor
      } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        // Manejo de errores en caso de que falle la solicitud al backend
        alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      }
    };

    if (email) {
      handlerRevision();
    }
  }, [email]);

  

  return (
    <Base1 >

      <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>

        <Titulo />
        <div className="sketchfab-embed-wrapper" style={{ marginTop: '40px' }} >



          <p className="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-1xl text-base font-normal m-5 text-black text-justify leading-6 font-sans"
          >
            Los colores vibrantes y los detalles ornamentales eran características destacadas. Además, el arte azteca servía como una forma de educación y comunicación, transmitiendo conocimientos y mitos a través de imágenes y códices. En resumen, el arte azteca era una expresión sagrada que reflejaba su identidad cultural y religiosa.
             Varios aspectos que podemos resaltar de el arte azteca son los siguientes :
          </p>
          <ul className="grid grid-cols-5 " style={{ margin: '1rem', padding: 0 }}>




            <li
              key={`1`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("/images/textura.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
              }}
            >
              <Link
                href={`./arte/textiles`}
                className="sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span style={{ fontSize: '130%', color: '#006400' }}>Textiles</span>
              </Link>




            </li>


            <li
              key={`2`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("/images/ceramica.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
              }}
            >

              <Link
                href={`./arte/ceramicas`}
                className="sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span style={{ fontSize: '130%', color: '#006400' }}>Ceramica</span>
              </Link>
            </li>
            <li
              key={`3`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("/images/Musica-azteca-2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
              }}

            >

              <Link
                href={`./arte/musica`}
                className="sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span style={{ fontSize: '130%', color: '#006400' }}>Música</span>
              </Link>





            </li>

            <li
              key={`3`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("/images/muralesypinturas.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
              }}
            >

              <Link
                href={`./arte/murales`}
                className="sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span style={{ fontSize: '130%', color: '#006400' }}>Arquitectura</span>
              </Link>

              

            </li>
            <li
            key={`5`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/arte.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >
            <Link
              href={`/categories/arte/desafioArte`}
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
              <span style={{ fontSize: '1.9em', color: '#006400' }}>Desafios ARTE</span>
            </Link>
          </li>

          </ul>


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
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
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
                       <span style={{ fontSize: '130%', color: '#006400' }}>Pagina Principal</span>
                      </Link>
                  
                  </li>


                  
                  <li
            key={`4`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/arquitectura.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >
            <Link
              href={`/categories/arquitectura`}
              className="sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
               <span style={{ fontSize: '130%', color: '#006400' }}>Arquitectura</span>
            </Link>
          </li>
                  </ul>

        {/* */}
        <div
          style={{
            position: 'fixed',
            bottom: '55%',
            right: '1%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            padding: '2%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            width: '10%',
            height: 'auto',
            minWidth: '100px',
            minHeight: '100px',
            maxWidth: '200px',
            maxHeight: '200px',
            fontWeight: 'bold',
          }}
        >
          <div style={{ width: '100%', height: '100%' }}>
            {/**/}
            <CircularProgressbar
              value={selectedOptions2}
              text={`${selectedOptions2}%`}
              strokeWidth={14}
              styles={buildStyles({
                textColor: '#2ecc71',
                pathColor: '#2ecc71',
                trailColor: 'white',
                strokeLinecap: 'round',
                textSize: '20px',
                transformOrigin: 'center center',
                pathTransitionDuration: 2,
                textStyle: {
                  fontFamily: 'fantasy',
                  left: '-90%', // Ajusta la posición del texto a la izquierda
                  fontWeight: 'bold', // Aplica negrita al texto
                },
              })}
            ></CircularProgressbar>
          </div>
        </div>




      </section>

    </Base1>
  );
};



// get 404 page data

export default Arte;
const MasInformacion = () => {
  return (
    <div className="center-container">
      <FaInfoCircle size={50} />
      <span style={{ marginLeft: '5px' }}>Más información próximamente</span>
    </div>
  );
};