import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from '@layouts/Baseof';
import { FaQuestionCircle } from 'react-icons/fa';
import Link from 'next/link';

const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.uvg.edu.mx/hubfs/Imported_Blog_Media/original-87e22a31e81460aa83fcdae0a0bced06-1.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Arquitectura</span>
        </h1>
      </div>
    </div>
  );
};

const Arquitectura = () => {
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

  return (
    <Base1>
      <section className="section pt-0">
        <Titulo/>

        <div className="sketchfab-embed-wrapper">
          <iframe
            style={{ width: '40%', height: '400px' , marginTop: '40px'}}
            title="Templo"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking="true"
            execution-while-out-of-viewport="true"
            execution-while-not-rendered="true"
            web-share="true"
            src="https://sketchfab.com/models/365e637944d84d48837ffdd96163287e/embed?ui_theme=dark"
          ></iframe>
          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
              href="https://sketchfab.com/3d-models/templo-365e637944d84d48837ffdd96163287e?utm_medium=embed&utm_campaign=share-popup&utm_content=365e637944d84d48837ffdd96163287e"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Templo
            </a>{' '}
            by{' '}
            <a
              href="https://sketchfab.com/rivas.lina?utm_medium=embed&utm_campaign=share-popup&utm_content=365e637944d84d48837ffdd96163287e"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              rivas.lina
            </a>{' '}
            on{' '}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=365e637944d84d48837ffdd96163287e"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Sketchfab
            </a>
          </p>
          <InteractionMessage />
          <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '100px', color: '#000' }}>
          La arquitectura azteca era simple y elegante, audaz y poderosa, y mezclaba colores y símbolos que ayudaron a crear un estilo único.
          Los templos poderosos y dominantes fueron, por supuesto, las obras maestras del imperio azteca, pero hay mucho más en la arquitectura azteca que solo estos templos poderosos.
          </p>

          </div>

          <div style={{ marginTop: '-150px' }}>
          <ul className="grid grid-cols-3 gap-1" style={{  margin: 100, padding: 0 }}>
            <li
            className="hover:no-underline block rounded-lg overflow-hidden transition transform hover:scale-90 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("https://www.lacapital.com.mx/files/news/2018-07-16-115413CHINAMPAS.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(70%)',
            }}
            >

            <Link
                  href={`./arquitectura/chinampas`}
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
                  <span>Chinampas</span>
                </Link>


            </li>
            <li
              className="hover:no-underline block rounded-lg overflow-hidden transition transform hover:scale-90 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("https://www.arkiplus.com/wp-content/uploads/2011/10/Tenochtitlan-Mexico.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(70%)',
              }}
              >

              <Link
                    href={`./arquitectura/palacios`}
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
                    <span>Palacios</span>
                  </Link>


            </li>

            <li
            className="hover:no-underline block rounded-lg overflow-hidden transition transform hover:scale-90 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url("https://human.libretexts.org/@api/deki/files/18443/image23.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(70%)',
            }}
            >

            <Link
                  href={`./arquitectura/templos`}
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
                  <span>Piramides y Templos</span>
                </Link>
            </li>
          </ul>

         </div>

      </section>
    </Base1>
  );
};

export default Arquitectura
