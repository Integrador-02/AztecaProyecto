import React, { useEffect } from 'react';
import { Base1 } from '@layouts/Baseof';
import Game from './rapido';


const Titulo = () => {
  useEffect(() => {
    
  }, []);

  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.infobae.com/new-resizer/OPVRxDKhnjBxdzzHS88fGpzOzDc=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/VY7HMNG5ARFEDLZOSGSHFPCIBI.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Atento y Rapido</span>
        </h1>
      </div>
    </div>
  );
};

const Rapidoj = () => {


  return (
    <Base1>
    
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 "  > 
    <Game/>
</div>
  

      </Base1>
  );
};

export default  Rapidoj;
    ;