import React, { useEffect } from 'react';
import { Base1 } from '@layouts/Baseof';
import AhorcadoAzteca from './minijuego1';
import Swal from 'sweetalert2';


const Titulo = () => {
  useEffect(() => {
    Swal.fire({
      title: '¡Hola! ¡Bienvenido al clásico juego del ahorcado!',
      text: 'El objetivo del juego es adivinar una palabra oculta antes de que se completen todos los intentos.Tendrás un número limitado de intentos para adivinar la palabra. solo puedes ingresar una letra a la vez.',
      icon: 'info',
      confirmButtonText: 'Comenzar',
      customClass: {
        'title': 'my-title-style',
        'content': 'my-content-style',
        'confirmButton': 'my-confirm-button-style',
      },
    });
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
    </div>
    <div className="container pt-12 text-center" >
    <AhorcadoAzteca/>
    </div>
      </Base1>
  );
};

export default Ahorcado;
