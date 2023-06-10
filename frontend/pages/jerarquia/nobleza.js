import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from '@layouts/Baseof';
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://i.pinimg.com/originals/84/af/f7/84aff7d7e756523ca1b369a8ababea9d.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Nobles</span>
        </h1>
      </div>
    </div>
  );
};
const Nobleza = () => {

  return (
    <Base1 title={"Categorias Aztecas"}>
      <section className="section pt-0">
        <Titulo/>
        <div className="sketchfab-embed-wrapper">
          <p>
            <span style={{ fontSize: '43px', fontWeight: 'normal', margin: '0px', color: '#000' }}>
              Pipiltin
            </span>
            <span style={{ fontSize: '16px', fontWeight: 'normal', margin: '10px', color: '#808080' }}>
              (Hijos nobles)
            </span>
          </p>

          <iframe
            title="COL: Coyolxauhqui"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/73dff65bf4654de08d8db64298adc6ae/embed"
            style={{ width: '40%', height: '400px' }}
          ></iframe>

          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
              href="https://sketchfab.com/3d-models/col-coyolxauhqui-73dff65bf4654de08d8db64298adc6ae?utm_medium=embed&utm_campaign=share-popup&utm_content=73dff65bf4654de08d8db64298adc6ae"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              COL: Coyolxauhqui
            </a>{' '}
            by{' '}
            <a
              href="https://sketchfab.com/idiom-project?utm_medium=embed&utm_campaign=share-popup&utm_content=73dff65bf4654de08d8db64298adc6ae"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Text Database and Dictionary of Classic Mayan
            </a>{' '}
            on{' '}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=73dff65bf4654de08d8db64298adc6ae"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Sketchfab
            </a>

          </p>
          <InteractionMessage />
          <p style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif',
          }}>
            En la sociedad azteca, los nobles desempeñaban un papel destacado y ocupaban un estatus privilegiado. Eran miembros de la nobleza y pertenecían a familias aristocráticas que tenían un linaje y prestigio histórico.
          
          Se esperaba que los pipiltin cumplieran con ciertos roles y responsabilidades en la sociedad azteca. Además de su papel en la política y el gobierno, los pipiltin también participaban en actividades religiosas y militares. Algunos miembros de la nobleza podían convertirse en sacerdotes o líderes militares, llevando a cabo rituales sagrados o liderando ejércitos en campañas militares.
          </p>
        </div>

        <MasInformacion />

      </section>
    </Base1>
  );
};

export default Nobleza;

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
