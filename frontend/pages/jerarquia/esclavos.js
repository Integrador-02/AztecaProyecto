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

  return (
    <Base1 title={"Categorias Aztecas"}>
      <section className="section pt-0">
       <Titulo/>

        <div class="sketchfab-embed-wrapper"style={{margin :10, padding :30}}> 
        
          <iframe 
          style={{width:'40%', height :'380px'}}
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
         
          <InteractionMessage />
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

        <MasInformacion />

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
