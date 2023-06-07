import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import Base from "@layouts/Baseof";
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';

const Religion = () => {

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
    <Base title={"Categorias Aztecas"}>
      <section className="section pt-0">
        {markdownify(
          " Religión",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
        )}
        <div className="sketchfab-embed-wrapper">
          <p style={{ fontSize: '43px', fontWeight: 'normal', margin: '5px', color: '#000' }}>
            Coyolxauhqui
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
          <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000' }}>
            Coyolxauhqui (pron. Koy-ol-shauw-kee) fue la diosa azteca de la luna o la vía láctea quien fue masacrada
            <br />
            por su hermano Huitzilopochtli, el dios de la guerra, en la mitología azteca. Esta historia fue conmemorada
            <br />
            en una célebre piedra de gran relieve encontrada al pie de la pirámide de los sacrificios, el Templo Mayor de
            <br />
            la capital azteca, Tenochtitlan.<br />
          </p>
        </div>

        <MasInformacion />

      </section>
    </Base>
  );
};

export default Religion;

// Componente de información adicional
const MasInformacion = () => {
  return (
    <div className="center-container">
      <FaInfoCircle size={50} />
      <span style={{ marginLeft: '5px' }}>Más información próximamente</span>
    </div>
  );
};
