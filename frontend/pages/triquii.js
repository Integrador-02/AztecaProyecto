import React from 'react';
import { Base1 } from '@layouts/Baseof';
import TicTacToe from './titack';

const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.arkiplus.com/wp-content/uploads/2016/09/ciudadela-tenochtitlan.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Triquii</span>
        </h1>
      </div>
    </div>
  );
};

const Triquii = () => {


  return (
    <Base1><div className="center-container" style={ {margin:-4}}>
    <TicTacToe/>
</div>
    <Titulo/>
    
      </Base1>
  );
};

export default Triquii;
