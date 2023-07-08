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
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/10/dioses-aztecas-o-mexicas.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Religion</span>
        </h1>
      </div>
    </div>
  );
};


const Religion = ({ data }) => {
  const [email, setEmail] = useState('');
  const [selectedOptions2, setSelectedOptions2] = useState(0);
  useEffect(() => {
    const user = Cookies.get('clave');
    setEmail(user);
  }, []);

  useEffect(() => {
    const guardarProgresoJeraquia = async () => {
      const pagina = 'religion';
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
        const response = await axios.post("http://localhost:4000/api/progresorReligion", { correo, pagina });
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
        const url = `http://localhost:4000/api/recuperarprogresoReligion?correo=${email}`;
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
    <Base1 title={"Categorias Aztecas"}>

      <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>
        <Titulo />

        <div>

          <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000', marginTop: '40px' }}>
            Los aztecas tenian un sistema de creencias complejo donde adoraban una amplia variedad de dioses y deidades. Entre sus caracteristicas mas destacables, eran politeistas, constantemente hacian una division entre fuerzas opuestas.
            <br />
            Asi como tambien se veian envueltos en festividades y rituales religiosos.
          </p>

          <ul className="grid grid-cols-5 gap-1" style={{ margin: 0, padding: 0 }}>

            <li
              className="hover:no-underline block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("https://4.bp.blogspot.com/-TPo9OJEW0Bk/VfZAU6uZ0WI/AAAAAAAAEq0/E8MFbZHRCUM/s1600/dioses%2Baztecas.JPG")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(70%)',
              }}
            >

              <Link
                href={`/categories//religion/dioses`}
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
                <span style={{ fontSize: '1.9em', color: '#006400' }}>Dioses</span>
              </Link>
            </li>

            <li
              className="hover:no-underline block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("https://aventurateamexico.com/wp-content/uploads/2022/12/Religion_Azteca-1280x720-1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(70%)',
              }}
            >

              <Link
                href={`./religion/ritos`}
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
                <span style={{ fontSize: '1.9em', color: '#006400' }}>Ritos</span>
              </Link>

            </li>

            <li
              className="hover:no-underline block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("https://hablemosdeculturas.com/wp-content/uploads/2017/11/Cultura-azteca-5.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(70%)',
              }}
            >

              <Link
                href={`./religion/creencias`}
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
                <span style={{ fontSize: '1.9em', color: '#006400' }}>Creencias</span>
              </Link>

            </li>

            <li
            key={`4`}
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
              href={`/categories/religion/leyendas`}
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
              <span style={{ fontSize: '1.9em', color: '#006400' }}>Leyenda</span>
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

              filter: 'brightness(90%)',
            }}
          >


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


          


          <li
            key={`3`}
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
              href={`/categories/arte`}
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
              <span style={{ fontSize: '1.9em', color: '#006400' }}>Arte</span>
            </Link>
          </li>

         



        </ul>




        <button id="invite-comment" onClick={handleSubmit}>
          <img src="https://cdn-icons-png.flaticon.com/512/48/48733.png" alt="Muñeco invitando a comentar" />
        </button>
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

export default Religion;

const MasInformacion = () => {
  return (
    <div className="center-container">
      <FaInfoCircle size={50} />
      <span style={{ marginLeft: '5px' }}>Más información próximamente</span>
    </div>
  );
};

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