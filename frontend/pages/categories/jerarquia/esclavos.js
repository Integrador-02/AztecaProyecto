import React, { useEffect } from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from '@layouts/Baseof';
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import axios from "axios";
import Cookies from "js-cookie";
const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.socialhizo.com/images/edad_antigua/aztecas/organizacion-politica-y-militar/esclavitud-azteca.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Esclavos</span>
        </h1>
      </div>
    </div>
  );
};

const Esclavos = () => {
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
      const pagina = 'esclavos';
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
  return (
    <Base1 title={"Categorias Aztecas"}>
      <section className="section pt-0"style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll'}} >
       <Titulo/>

        <div class="sketchfab-embed-wrapper"style={{margin :10, padding :30}}> 
        <div className="grid grid-cols-2 gap-1">

          <iframe 
          style={{width:'100%', height :'100%'}}
            title="Les Esclaves" 
            frameborder="0" 
            allowfullscreen 
            mozallowfullscreen="true" 
            webkitallowfullscreen="true" 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            xr-spatial-tracking 
            execution-while-out-of-viewport 
            execution-while-not-rendered 
            web-share 
            src="https://sketchfab.com/models/4694928ced5348d3be8f37a2f2904d9c/embed"> 
            
          </iframe> 
         
          
          <p style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif',
          }}>              En la sociedad azteca, los esclavos no eran considerados propiedad personal de los amos y no se les trataba de la misma manera que en otras formas de esclavitud. Los esclavos en la sociedad azteca podían ser adquiridos a través de varias formas, como el comercio, la guerra o como castigo por ciertos delitos. A menudo, los esclavos eran utilizados para realizar trabajos domésticos, agrícolas o en la construcción.
            <br/>
            Aunque los esclavos en la sociedad azteca tenían una posición inferior y carecían de ciertos derechos y libertades, también tenían la posibilidad de obtener su liberación o ascender en la jerarquía social mediante la adquisición de propiedades, el matrimonio o la participación en actividades comerciales.
            <br/>Los esclavos eran considerados la clase más baja puesto que carecían de libertad; sin embargo una ventaja era que los esclavos podían a su vez tener esclavos.
          </p>
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

        <button id="invite-comment" onClick={handleSubmit}>
          <img src="https://cdn-icons-png.flaticon.com/512/48/48733.png" alt="Muñeco invitando a comentar" />
        </button>

      </section>
    </Base1>
  );
};

export default Esclavos;

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
