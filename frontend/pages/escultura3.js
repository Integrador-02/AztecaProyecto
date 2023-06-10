import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from '@layouts/Baseof';
import { FaQuestionCircle } from 'react-icons/fa';

const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Cuauhxicalli_de_Moctezuma_Ilhuicamina.JPG/540px-Cuauhxicalli_de_Moctezuma_Ilhuicamina.JPG"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Escultura</span>
        </h1>
      </div>
    </div>
  );
};

const Escultura = () => {


  return (
    <Base1>
    <Titulo/>
      <section className="section pt-0">


        <div className="sketchfab-embed-wrapper">

        <iframe style={{ width: '40%', height: '400px' , marginTop: '40px'  }}
         title="Figura Azteca de Madera"
         frameborder="0"
         allowfullscreen
         mozallowfullscreen="true"
         webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
           xr-spatial-tracking
           execution-while-out-of-viewport
           execution-while-not-rendered
           web-share
           src="https://sketchfab.com/models/a5035c1d5ad74f99944352238f6de3e4/embed">
          </iframe>

          <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000' }}>
          Las esculturas astecas son una manifestación artística impresionante que nos permite adentrarnos en la rica cultura y cosmovisión de los aztecas. Estas esculturas <br></br>eran creadas por hábiles artistas y artesanos que dominaban la técnica de tallado en piedra, utilizando principalmente materiales como el basalto y la andesita.<br></br>
          Las esculturas astecas no solo eran apreciadas por su belleza y destreza técnica, sino también por su significado cultural y espiritual. Cada escultura contaba <br></br>una historia , transmitía valores y creencias, y servía como un recordatorio constante de la importancia de la religión y la identidad en la vida de los aztecas.
          </p>
        </div>
      </section>
      </Base1>
  );
};

export default Escultura;
