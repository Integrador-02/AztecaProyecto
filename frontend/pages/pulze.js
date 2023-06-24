import React, { useEffect } from 'react';
import App from './pulz';
import { Header3 } from '@layouts/partials/Header';


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
        src={"https://cdn.shopify.com/s/files/1/0294/6262/6348/products/Rompecabezas-de-Madera-REDONDO-COLORIDO-AZTECA-6_1024x1024@2x.jpg?v=1675972275"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Resuelve el rompecabeza🧠</span>
        </h1>
      </div>
    </div>
  );
};

const Ahorcado = () => {


  return (
    <>
      
     
      <div className="app-container">
        <Header3 />
       
        <Titulo/>
      </div>
      
        <App/>
 
      
      <style jsx global>{`
        .app-container {
          position: relative;
          min-height: 90vh;
          overflow: hidden;
        }

        .content {
          padding-top: 0px; /* Ajusta el valor según sea necesario */
          overflow-y: auto;
          height: calc(100vh - 80px); /* Ajusta el valor según el padding-top */
        }

        html,
        body {
          overflow: hidden; /* Oculta la barra de desplazamiento principal */
        }
      `}</style>
    </>
   
       
    
  );
};

export default Ahorcado;
