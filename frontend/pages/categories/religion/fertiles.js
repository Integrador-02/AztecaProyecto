import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import Base from "@layouts/Baseof";
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';

const Fertiles = () => {

  return (
    <Base title={"Categorias Aztecas"}>
      <section className="section pt-0">
        {markdownify(
          "Dioses ligados a la Fertilidad",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
        )}
        <div>
          <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000' }}>
          Algunos de los dioses que están vinculados a la fertilidad de la tierra, los cultivos y la reproducción
          <br/>
          Entre ellos:
          </p>
        </div>

        <MasInformacion />

      </section>
    </Base>
  );
};

export default Fertiles;

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
