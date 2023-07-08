import React, { useEffect } from 'react';
import AhorcadoAzteca from './ahorcadoJ';
import Swal from 'sweetalert2';
import { Base1 } from '@layouts/Baseof';
import Link from 'next/link';

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

const AhorcadoJ = () => {

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
    <Base1>
    <div>
    </div>
    <div className="container pt-12 text-center" >
    <AhorcadoAzteca/>
    </div>
    <ul className="grid grid-cols-2 gap-1" >

          <li
            key={`5`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
            }}>


            <Link
              href={`/categories/jerarquia/desafioJeraquia`}
              className="flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <span style={{ fontSize: '1.9em', color: '#006400' }}>Regresar</span>
            </Link>

          </li>
          </ul>
      </Base1>
  );
};

export default AhorcadoJ;
