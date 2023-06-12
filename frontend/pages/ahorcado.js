import React from 'react';
import { Base1 } from '@layouts/Baseof';
import AhorcadoAzteca from './minijuego1';

const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.infobae.com/new-resizer/OPVRxDKhnjBxdzzHS88fGpzOzDc=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/VY7HMNG5ARFEDLZOSGSHFPCIBI.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Ahorcado</span>
        </h1>
      </div>
    </div>
  );
};

const Ahorcado = () => {


  return (
    <Base1>
    <div>
      < Titulo />
    </div>
    <div className="container pt-12 text-center">
    <AhorcadoAzteca/>
    </div>
      </Base1>
  );
};

export default Ahorcado;
