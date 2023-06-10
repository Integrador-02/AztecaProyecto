import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from "@layouts/Baseof";
import { FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';

const Emperador = () => {
  const Titulo = () => {
    return (
      <div className="relative h-80 font-text">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={"https://elheraldoslp.com.mx/new/wp-content/uploads/2021/08/1-29-860x1024.jpg"}
          alt="Imagen de fondo"
        />
        <div className="relative z-12 flex items-center justify-center h-full">
          <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-green-600">Emperador</span>
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
            <span style={{ fontSize: '43px', fontWeight: 'normal', margin: '0px', color: '#000' }}>
              Tlatoani
            </span>
            <span style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif',
          }}> 
            </span>
          </p>
          
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/MND2w63_wTc" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>

          </iframe>

          <p style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif',
          }}>            El emperador azteca era considerado un gobernante divino y se creía que tenía una conexión directa con los dioses. Se le atribuían poderes sobrenaturales y se esperaba que gobernara en nombre de los dioses y mantuviera el orden cósmico.
            <br/>
            era seleccionado entre la nobleza azteca y generalmente provenía de una línea dinástica. Sin embargo, la elección no era hereditaria, sino que se basaba en la capacidad y logros del candidato. Algunos emperadores aztecas eran elegidos por vía militar, demostrando su habilidad en la guerra y la conquista.
            <br/>
            El tlatoani tenía un papel central en la religión azteca y participaba en ceremonias y rituales sagrados. Era responsable de mantener la relación con los dioses y asegurar la prosperidad y protección del imperio.
          </p>
        </div>

        <MasInformacion />

      </section>
    </Base1>
  );
};

export default Emperador;

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
