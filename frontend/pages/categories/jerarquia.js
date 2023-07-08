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





const handleAddComment = () => {

  const newCommentObject = {
    correo: 'ejemplo@ciorreo.com',
    pagina: 'página de ejsd272wwwv8d88888emgdvdvdsfrplo'
  };




  const correo = newCommentObject.correo
  const pagina = newCommentObject.pagina


  ///api/progresoJeraquia
  axios.post("https://happy-fly-loincloth.cyclic.app/api/progresoJeraquia", { correo, pagina })
    .then(async () => {
      // Manejo de errores en caso de que falle la solicitud al backend
      alert("registrado correctamente");


    })
    .catch(async (error) => {
      console.log(error);
      // Manejo de errores en caso de que falle la solicitud al backend
      alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
    });





};
const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-x-0 top-0 w-full h-80 object-cover brightness-50"
        src={"/images/gobernantes-aztecas.jpg"}
        alt="Imagen de fondo"

      />
      <div className="relative z-12 flex flex-col items-center justify-center h-full text-center">
        <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
          <span className="text-green-500" style={{ fontSize: '180%', color: '#00CC00' }}>JERARQUÍA</span>
        </h1>
        <p className="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-1xl text-[#FFFFFF] mt-4 mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-16">
          La jerarquía en la sociedad azteca estaba fuertemente estratificada, con diferentes niveles y roles que determinaban el estatus y los privilegios de cada individuo. A continuación, se presenta una visión general de la jerarquía de los aztecas, comenzando desde la cúspide y descendiendo hacia los estratos inferiores:
        </p>

      </div>
    </div>
  );
};


const Jerarquia = ({ data }) => {
  const [email, setEmail] = useState('');
  const [selectedOptions2, setSelectedOptions2] = useState(0);


  useEffect(() => {
    const user = Cookies.get('clave');
    setEmail(user);
  }, []);

  useEffect(() => {
    const guardarProgresoJeraquia = async () => {
      const pagina = 'jeraquia';
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
        const response = await axios.post("https://happy-fly-loincloth.cyclic.app/api/progresoJeraquia", { correo, pagina });
        // Manejo de la respuesta exitosa
        alert("Registrado correctamente");
      } catch (error) {
        // Manejo de errores en caso de que falle la solicitud al backend
        console.log(error);
        alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      }
    };

    if (email) {
      console.log(email)
      guardarProgresoJeraquia();
    }
  }, [email]);

  const handleSubmit = async () => {

    window.location.href = "/categories/jerarquia/comentarioJeraquia";

  };

  useEffect(() => {
    const handlerRevision = async () => {
      try {
        console.log('sd', email);
        const url = `https://happy-fly-loincloth.cyclic.app/api/recuperarprogresoJeraquia?correo=${email}`;
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
        < Titulo />

        <div className="jerarquia-class" style={{ margin: 10, padding: 10 }}>




          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-6" style={{ margin: 0, padding: 0 }}>
            <li
              key={`1`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("https://plenitudazteca.com/wp-content/uploads/2022/12/1-1-1024x683-1-750x350.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
              }}>


              <Link
                href={`/categories/jerarquia/emperador`}
                className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span style={{ fontSize: '130%', color: '#006400' }}>Emperador</span>
              </Link>

            </li>


            <li
              key={`2`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url(https://historia.nationalgeographic.com.es/medio/2019/03/13/guerreros-aztecas-ataviados-con-sus-armas-y-vestimenta-tipicas_e7a6b441_800x800.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
              }}>

              <Link
                href={`/categories/jerarquia/nobles`}
                className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span style={{ fontSize: '130%', color: '#006400' }}>Nobles</span>
              </Link>
            </li>

            <li
              key={`3`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url(https://www.gaceta.unam.mx/wp-content/uploads/2019/10/190919-cult2-des-f1-tlamemes.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
              }}>



              <Link
                href={`/categories/jerarquia/comerciantes`}
                className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span style={{ fontSize: '130%', color: '#006400' }}>Comerciantes</span>
              </Link>

            </li>

            <li
              key={`4`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("https://www.worldhistory.org/img/c/p/1200x627/4198.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencia// Ajusta el valor de brillo según tus preferencias
              }}>



              <Link
                href={`/categories/jerarquia/plebeyos`}
                className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span style={{ fontSize: '130%', color: '#006400' }}>Plebeyos</span>
              </Link>

            </li>

            <li
              key={`5`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("https://cdn.shopify.com/s/files/1/2393/9365/files/main-qimg-ca9ec91b20d584cdf2c1a3c5893b3a1d-lq_480x480.jpg?v=1667844224")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencia// Ajusta el valor de brillo según tus preferencias
              }}>


              <Link
                href={`/categories/jerarquia/esclavos`}
                className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span style={{ fontSize: '130%', color: '#006400' }}>Esclavos</span>
              </Link>



            </li>

            <li
              key={`6`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("https://cdn.shopify.com/s/files/1/2393/9365/files/main-qimg-ca9ec91b20d584cdf2c1a3c5893b3a1d-lq_480x480.jpg?v=1667844224")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencia// Ajusta el valor de brillo según tus preferencias
              }}>


              <Link
                href={`/categories/jerarquia/desafioJeraquia`}
                className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span style={{ fontSize: '130%', color: '#006400' }}>Desafios</span>
              </Link>



            </li>
          </ul>



        </div>

        <ul className="grid grid-cols-2 gap-1" style={{ margin: 0, padding: 0 }}>
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
              className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
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
            key={`2`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url(/images/religion-azteca.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
            }}>

            <Link
              href={`/categories/religion`}
              className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <span style={{ fontSize: '130%', color: '#006400' }}>Religión</span>
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
// get 404 page data   error en  l abd 

export default Jerarquia;

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

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}