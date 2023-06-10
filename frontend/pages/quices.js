import React from 'react';
import { Base1 } from '@layouts/Baseof';
import Quiz from './quiz';
const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.socialhizo.com/images/edad_antigua/aztecas/organizacion-politica-y-militar/azteca.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Quices</span>
        </h1>
      </div>
    </div>
  );
};

const Quices = () => {


  return (
    <Base1>
    <Titulo/>
    <Quiz/>

      </Base1>
  );
};

export default Quices;
