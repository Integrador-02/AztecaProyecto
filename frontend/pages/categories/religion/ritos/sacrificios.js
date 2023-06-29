
import React from 'react';
import {Base1} from "@layouts/Baseof";
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import Link from 'next/link';

const Sacrificios = () => {

  const Titulo = () => {
    return (
      <div className="relative h-80 font-text">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={"https://www.socialhizo.com/images/edad_antigua/aztecas/culto-y-rituales/sacrificio-por-precipitacion.jpg"}
          alt="Imagen de fondo"
        />
        <div className="relative z-12 flex items-center justify-center h-full">
          <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-green-600">Ritos de Guerra</span>
          </h1>
        </div>
      </div>
    );
  };
return (
    <Base1 title="Vasijas y Ceramicas">
       <Titulo/>

    <div class="sketchfab-embed-wrapper" style={{margin :20,padding :20}}> 
    <div className="grid grid-cols-2 gap-1">


  <iframe 
  style={{ width: '100%', height: '550px' }}
  title="Ximena Sacriface Temple" 
  frameborder="0" 
  allowfullscreen mozallowfullscreen="true" 
  webkitallowfullscreen="true" 
  allow="autoplay; fullscreen; xr-spatial-tracking" 
  xr-spatial-tracking execution-while-out-of-viewport 
  execution-while-not-rendered web-share 
  src="https://sketchfab.com/models/d9343bdac3bc4667bacf622e3d360945/embed"> 
  </iframe> 


    <div>
    <p style={{
        fontSize: '23px',
        fontWeight: 'normal',
        margin: '20px',
        color: '#000',
        textAlign: 'justify',
        lineHeight: '1.5',
        fontFamily: 'Arial, sans-serif',
      }}>     
      En los sacrificios agrarios, los campesinos realizaban rituales
       donde sacrificaban a una víctima vestida como una deidad para 
       obtener el favor divino en la agricultura. El ritual también era 
       practicado por todos los participantes porque era necesario 
       encontrarse «puro», es decir haber dejado toda falta, 
       y para ello se requería hacer ofrendas a los dioses, abstinencia sexual 
       y autosacrificio, derramando sangre en altares o utilizando navajas. Estas prácticas eran fundamentales para mantener la conexión con los dioses y asegurar el crecimiento de las plantas.

        </p>
        

    </div>
    </div> </div>
    <ul className="grid grid-cols-2 gap-1" style={{ margin: 10, padding: 30}}>
              

              
              <li
        key={`3`}
        className="block rounded-lg overflow-hidden transition transform hover:scale-105"
        style={{
          margin: 0,
          padding: 0,
          position: 'relative',
          backgroundImage: 'url("/images/arte.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
        }}
      >
        <Link
          href={`/arte`}
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
          <span style={{ fontSize: '1.9em', color: '#006400' }}> Regresar a Arte</span>
        </Link>
      </li>
              </ul> <ul className="grid grid-cols-2 gap-1" style={{ margin: 0, padding: 0 }}>
           
           <li
               key={`2`}
               className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
               style={{
                 margin: 0,
                 padding: 0,
                 position: 'relative',
                 backgroundImage: 'url(/images/religion-azteca.jpg)',
                 backgroundSize: 'cover',
         backgroundPosition: 'center',
         filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
               }}>
             
             <Link
                   href={`/religion`}
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
                   <span style={{ fontSize: '1.9em', color: '#006400' }}> Regresar a Religión</span>
                 </Link>
           </li>
           </ul>

        



    </Base1>


);
};

export default Sacrificios;

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
