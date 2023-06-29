import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from '@layouts/Baseof';
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

const Comerciantes = () => {
    const Titulo = () => {
      return (
        <div className="relative h-80 font-text">
          <img
            className="absolute inset-0 w-full h-full object-cover brightness-50"
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

  return (
    <Base1 title={"Categorias Aztecas"}>
      <section className="section pt-0">
        <Titulo/>
       
        <div className="sketchfab-embed-wrapper">
          <p>
            <span style={{ fontSize: '43px', fontWeight: 'normal', margin: '5px', color: '#000' }}>
              Pochtecatl
            </span>
          </p>
          <div className="grid grid-cols-2 gap-1">

          <iframe
            title="COL: Coyolxauhqui"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/73dff65bf4654de08d8db64298adc6ae/embed"
            style={{ width: '100%', height: '500px' }}
          ></iframe>

          

        
          
          <p style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif',
          }}>            Pochtecatl es el término náhuatl utilizado para referirse a los comerciantes profesionales en la sociedad azteca. Eran miembros de un gremio especializado y gozaban de un estatus y una posición distintiva en la sociedad azteca. Los pochtecas eran comerciantes de élite y se dedicaban al comercio a gran escala, tanto dentro del imperio azteca como en regiones más allá de sus fronteras.
          
          Los pochtecatl eran considerados una élite en la sociedad azteca debido a su experiencia en el comercio a gran escala y su capacidad para establecer redes comerciales en diferentes regiones. Participaban en el comercio de diversos productos, desde alimentos básicos hasta bienes de lujo, y tenían un estatus y prestigio especial debido a su contribución económica y cultural.
          
          Además de su papel económico, los pochtecatl también tenían una influencia significativa en la vida social y política. Algunos comerciantes exitosos lograban acumular riquezas y poder, lo que les permitía ascender en la jerarquía social y participar en la política del imperio azteca.
          </p>
        </div>
        </div>
<InteractionMessage />
        <MasInformacion />
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
