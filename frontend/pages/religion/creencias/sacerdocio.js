import React from 'react';
import {Base1} from "@layouts/Baseof";
import Link from 'next/link';

const Sacerdocio = () => {

  const Titulo = () => {
    return (
      <div className="relative h-80 font-text">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={"https://www.lifeder.com/wp-content/uploads/2022/08/vestimenta-mexica-hombres-mujeres.jpg"}
          alt="Imagen de fondo"
        />
        <div className="relative z-12 flex items-center justify-center h-full">
          <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-green-600">Sacerdocio</span>
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
     title="Aztec Priest" 
     frameborder="0" 
     allowfullscreen mozallowfullscreen="true" 
     webkitallowfullscreen="true" 
     allow="autoplay; fullscreen; xr-spatial-tracking" 
     xr-spatial-tracking execution-while-out-of-viewport 
     execution-while-not-rendered web-share 
     src="https://sketchfab.com/models/d5643b0c2e704abf92e3e45fcc9441ff/embed"> 
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
      El sacerdocio y la autoridad civil estaban estrechamente vinculados 
      en la sociedad azteca. Los líderes religiosos presidían las 
      ceremonias y el sacerdocio seguía una estructura jerárquica similar 
      a la del orden social. En Tenochtitlán, tanto el Jefe de los Hombres 
      como la Mujer Serpiente tenían responsabilidades tanto en asuntos 
      civiles como religiosos. El primero dirigía activamente los servicios 
      religiosos, mientras que la última supervisaba los templos, 
      los rituales y los asuntos relacionados con el sacerdocio.
      Seguían en categoría los sacerdotes que tenían a su cargo el culto, 
      el templo y el rito de cada dios o diosa en particular. También 
      había sacerdotisas y escuelas creadas para su mejor instrucción.
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

export default Sacerdocio;
