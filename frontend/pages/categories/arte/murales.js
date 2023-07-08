import React, { useEffect } from 'react';
import { useState } from 'react';
import { Base1 } from "@layouts/Baseof";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie"


const Murales = () => {
  const Titulo = () => {
    return (
      <div className="relative h-80 font-text">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={"https://www.cultura10.org/wp-content/uploads/2018/05/4pinturas-aztecas.jpg"}
          alt="Imagen de fondo"
        />
        <div className="relative z-12 flex items-center justify-center h-full">
          <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-green-600">Murales</span>
          </h1>
        </div>
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
      const pagina = 'murales';
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
        const response = await axios.post("https://happy-fly-loincloth.cyclic.app/api/progresorArte", { correo, pagina });
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
        const url = `https://happy-fly-loincloth.cyclic.app/api/recuperarprogresoArte?correo=${email}`;
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
  const TextWithBoldFirstLetter = ({ title, text }) => {
    const firstLetter = text.charAt(0);
    const restOfText = text.slice(1);

    return (
      <div>
        <h1 className="font-bold text-4xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)' }}>
          <span className="text-green-600">{title}</span>
        </h1>

        <p
          style={{
            fontSize: '19px',
            fontWeight: 'normal',
            margin: '10px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.7',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          <span >{firstLetter}</span>
          {restOfText}
        </p>
      </div>
    );
  }




  return (
    <Base1>

      <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>
          <div className="grid grid-cols-2 gap-1">
            <iframe
              style={{ width: '100%', height: '100%' }}
              title="Aztec Brazier" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/658455653c3245d2bccc929563e58c38/embed">
            </iframe>
            <TextWithBoldFirstLetter title={'Murales'} text={'El arte pictórico azteca es creativo y simbólico. Representa escenas religiosas y cotidianas en templos, tejidos y vasijas. Los tlacuilos eran artistas especializados que utilizaban diferentes estilos y tintas. Las pinturas eran infantilizadas y coloridas, con contornos precisos. Los colores intensos y vivos sin sombras añadían pasión a las figuras. El arte azteca tenía un componente político-religioso y se usaba como lenguaje para transmitir la visión del mundo y reforzar la identidad azteca.'} />




          </div>






       

        <ul className="grid grid-cols-2 gap-1" style={{ margin: 10, padding: 20 }}>





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
              <span style={{ fontSize: '1.9em', color: '#006400' }}> Regresar a Arte</span>
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
              <span style={{ fontSize: '1.9em', color: '#006400' }}>Escultura</span>
            </Link>
          </li>




        </ul>


      </section>

    </Base1>
  );

}
export default Murales;