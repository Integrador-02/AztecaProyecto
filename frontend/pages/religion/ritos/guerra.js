import React from 'react';
import {Base1} from "@layouts/Baseof";
import Link from 'next/link';

const Guerra = () => {

  const Titulo = () => {
    return (
      <div className="relative h-80 font-text">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={"https://pueblosoriginarios.com/recursos/colecciones/azteca/imagenes/2_big.jpg"}
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

        <iframe style={{ width: '100%', height: '550px' }}  
        title="Widowed Grounds" frameborder="0" 
        allowfullscreen mozallowfullscreen="true" 
        webkitallowfullscreen="true"  xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
        src="https://2.bp.blogspot.com/-0z3SJhnOjIE/XrHNw4JDbBI/AAAAAAADNtU/1ior_MhXxQ86cn35yb578uXWXEgbAf8-QCLcBGAsYHQ/s1600/SMKZRD7NVNBENJX2DLJ7PHGCKM.jpg.webp"> </iframe> 
    


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
      En los rituales de guerra participaban no solo los propios 
      guerreros, sino también sus mujeres y los sacerdotes, los 
      primeros prisioneros eran sacrificados en campo y los restantes 
      eran llevados a la ciudad de Tenochtitlan,
      y para recibirlos el rey y los guerreros se sangraban.
      Los prisioneros de guerra eran la ofren­da más estimada, tanto más 
      si los cauti­vos habían demostrado bravura en los combates o si eran 
      parte de sus más ele­vadas jerarquías.
        </p>
        

    </div>
    </div> </div>
    <ul className="grid grid-cols-2 gap-1" style={{ margin: 0, padding: 0 }}>
           
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

export default Guerra;
