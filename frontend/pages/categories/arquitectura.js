import { Base1 } from "@layouts/Baseof";

import Link from "next/link";
const Titulo = () => {
  return (
    <div className="relative h-60 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.uvg.edu.mx/hubfs/Imported_Blog_Media/original-87e22a31e81460aa83fcdae0a0bced06-1.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex flex-col items-center justify-center h-full text-center">
        <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
          <span className="text-green-600">Arquitectura</span>
        </h1>
      </div>
    </div>
  );
};


const Templos=()=>{

    return (
        <Base1>  
        <Titulo/>
        
        
        <div style={{padding:35}}>
      

        <div class="sketchfab-embed-wrapper">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1">
        
          <iframe
            className="w-full h-full "
            title="Aztec Temple"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/40f6f12130ef4fdaad6a9d2a28a7250e/embed"
          ></iframe>
        

             <p className="text-sm sm:text-sm md:text-lg lg:text-xl text-justify text-base font-normal ml-1 sm:ml-24 sm:mr-24 text-black">


            
Los templos aztecas eran estructuras piramidales utilizadas para adorar a las deidades. Se reconstruían periódicamente y en su interior se realizaban rituales de sacrificio, incluyendo sacrificios humanos. Eran construidos con ladrillos cubiertos de piedra y yeso, y a menudo estaban decorados con colores brillantes. Algunos de los principales centros de adoración aztecas eran Teotihuacán, Cholula y Tenochtitlán.   </p>

             
        </div>


      
        
        </div>
        
        </div>

        <ul className="grid grid-cols-2 gap-4 mt-0 " style={{ margin: 0, padding: 0 }}>
                  <li
                      key={`7`}
                      className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                      style={{
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
                       backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
                      }}>
                  
                  
                      <Link
                        href={`/categories`}
                        className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        }}
                      >
                       <span style={{ fontSize: '130%', color: '#006400' }}>Pagina Principal</span>
                      </Link>
                  
                  </li>

                  <li
                      key={`8`}
                      className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                      style={{
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
                       backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
                      }}>
                  
                  
                      <Link
                        href={`/arquitectura/templosA`}
                        className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        }}
                      >
                       <span style={{ fontSize: '130%', color: '#006400' }}>Temblos Principales</span>
                      </Link>
                  
                  </li>

                
              
              </ul>
        


        </Base1>
    );
}
export default Templos;