import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import Base from "@layouts/Baseof";
import { FaQuestionCircle } from 'react-icons/fa';
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
    <Base title="Categorias Aztecas">
      <section className="section pt-0">
        {markdownify(
          "Arquitectura",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
        )}

        <div className="sketchfab-embed-wrapper">
          <iframe
            style={{ width: '40%', height: '400px' }}
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
              rel="nofollow"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Templo
            </a>{' '}
            by{' '}
            <a
              href="https://sketchfab.com/rivas.lina?utm_medium=embed&utm_campaign=share-popup&utm_content=365e637944d84d48837ffdd96163287e"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              rivas.lina
            </a>{' '}
            on{' '}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=365e637944d84d48837ffdd96163287e"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Sketchfab
            </a>
          </p>
          < InteractionMessage 
           />
          <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000' }}>
            El Templo Mayor de Tenochtitlán, también conocido como Templo Mayor Azteca, era uno de los principales templos y centros religiosos de la antigua ciudad azteca de Tenochtitlán, que actualmente se encuentra en el corazón de la Ciudad de México.
          </p>
        </div>

        
      </section>
    </Base>
  );
};

export default Arquitectura;
