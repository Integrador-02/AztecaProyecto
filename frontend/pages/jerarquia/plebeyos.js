import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from '@layouts/Baseof';
import { FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
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
          <span className="text-green-600">Plebeyos</span>
        </h1>
      </div>
    </div>
  );
};
const Plebeyos = () => {

  return (
    <Base1 title={"Categorias Aztecas"}>
      <section className="section pt-0">
       <Titulo/>
        <div className="sketchfab-embed-wrapper">
        <p>
          <span style={{ fontSize: '43px', fontWeight: 'normal', margin: '0px', color: '#000' }}>
            Macehualtin
          </span>
          <span style={{ fontSize: '16px', fontWeight: 'normal', margin: '10px', color: '#808080' }}>
            (Gente comun) (Trabajadores)
          </span>
          </p>

          <iframe title="Mictlan: The Game Aztec Warrior Character" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/e3cb880e567d4bd08f53fa35e8518e74/embed"> 
          </iframe> 
          
          
          
          <InteractionMessage />
          <p style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif',
          }}>            Aunque estas personas fueran pobres y de clase inferior a las que pertenecían a lo que podríamos llamar la aristocracia, había una cosa que tenían, y que era su libertad. Tenían sus familias y el uno al otro. No era inaudito, sin embargo, que alguien de la clase baja se convirtiera en un noble a través de la valentía de enfrentar el servicio militar o incluso el matrimonio. Sus hogares y sus dietas eran simples. Dos grupos dentro de esta clase particular eran los cazadores de aves acuáticas y los agricultores.
          </p>
        </div>

        <MasInformacion />

      </section>
    </Base1>
  );
};

export default Plebeyos;

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
