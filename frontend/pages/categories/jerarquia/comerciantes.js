import React, { useEffect } from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from '@layouts/Baseof';
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import axios from "axios";
import Cookies from "js-cookie";
const Comerciantes = () => {

    const Titulo = () => {
      return (
        <div className="relative h-40 font-text">
          <img
            className="absolute inset-0 w-full h-full object-cover brightness-40"
            src={"https://www.socialhizo.com/images/edad_antigua/aztecas/economia/tianguis-azteca.jpg"}
            alt="Imagen de fondo"
          />
          <div className="relative z-12 flex items-center justify-center h-full">
            <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              <span className="text-green-600">Comerciantes</span>
            </h1>
          </div>
        </div>
      );
    };
    const handleSubmit = async () => {

      window.location.href = "/categories/jerarquia/comentarioJeraquia";
  
    };
    const [email, setEmail] = useState('');

    useEffect(() => {
      const user = Cookies.get('clave');
      setEmail(user);
    }, []);
    
    useEffect(() => {
      const guardarProgresoJeraquia = async () => {
        const pagina = 'comerciantes';
        const newCommentObject = {
          id:  1,
          text: 1,
          username: email,
          replyTo: 1,
          likes: 0,
          timestamp: 1,
        };
    
    
        const coment = newCommentObject.text
        const correo = newCommentObject.username
        try {
          const response = await axios.post("http://localhost:4000/api/progresoJeraquia", { correo, pagina });
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



    
  const TextWithBoldFirstLetter = ({ title, text }) => {
    const firstLetter = text.charAt(0);
    const restOfText = text.slice(1);

    return (
      <div>
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
          <span className="text-green-500">{title}</span>
        </h1>

        <p
          style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          <span >{firstLetter}</span>
          {restOfText}
        </p>
      </div>
    );
  };

  const Carta = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 1; // Número de imágenes por página
    const text = [
      {
        title: 'POCHTECATL',
        texto1: " Pochtecatl es el término náhuatl utilizado para referirse a los comerciantes profesionales en la sociedad azteca. Eran miembros de un gremio especializado y gozaban de un estatus y una posición distintiva en la sociedad azteca. Los pochtecas eran comerciantes de élite y se dedicaban al comercio a gran escala, tanto dentro del imperio azteca como en regiones más allá de sus fronteras."
      },
      {
        title: 'POCHTECATL',
        texto1: "Los pochtecatl eran considerados una élite en la sociedad azteca debido a su experiencia en el comercio a gran escala y su capacidad para establecer redes comerciales en diferentes regiones. Participaban en el comercio de diversos productos, desde alimentos básicos hasta bienes de lujo, y tenían un estatus y prestigio especial debido a su contribución económica y cultural. "
      },



      {

        title: 'POCHTECATL',
        texto1: " Además de su papel económico, los pochtecatl también tenían una influencia significativa en la vida social y política. Algunos comerciantes exitosos lograban acumular riquezas y poder, lo que les permitía ascender en la jerarquía social y participar en la política del imperio azteca. "

      }


    ];

    // Calcula el número total de páginas
    const totalPages = Math.ceil(text.length / itemsPerPage);

    // Calcula los índices de inicio y fin según la página actual y los elementos por página
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Obtiene los dioses para la página actual
    const paginatedDioses = text.slice(start, end);

    // Función para cambiar de página
    const handlePageChange = (newPage) => {
      setPage(newPage);
    };

    return (
      <div className="container" style={{ width: '55rem', height: '25rem', margin: '2%', marginTop: '-9.5%', width: '50vw' }}>
        {/* Mostrar las cartas paginadas */}
        {paginatedDioses.map((dios, index) => (
          <li key={index}>
            <TextWithBoldFirstLetter title={dios.title} text={dios.texto1} />
          </li>
        ))}

        {/* Agregar iconos de paginación */}
        <div className="pagination" style={{ justifyContent: 'left' }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={page === index + 1 ? 'active' : ''}
              style={{
                backgroundColor: '#40E0D0',
                border: '2px solid #40E0D0',
                borderRadius: '50%',


                cursor: 'pointer',
              }}
            >
              {index + 1}
            </button>

          ))}

        </div>
      </div>
    );
  };

  return (
    <Base1 title={"Categorias Aztecas"}>
      <section className="section pt-0"style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll'}}>
        <Titulo/>
       
        <div className="sketchfab-embed-wrapper"style={{marginTop:'3%'}}>
          
          <div className="grid grid-cols-2 gap-1">

          <iframe
            title="COL: Coyolxauhqui"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/73dff65bf4654de08d8db64298adc6ae/embed"
            style={{ width: '100%', height: '100%' }}
          ></iframe>

          <Carta/>

        
         
        </div>
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
              href={`/categories/jerarquia`}
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
              <span style={{ fontSize: '1.9em', color: '#006400' }}>Regresar a Jerarquía</span>
            </Link>

          </li>



        </ul>
        
       

      </section>
    </Base1>
  );
};

export default Comerciantes;

// Componente de información adicional
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
