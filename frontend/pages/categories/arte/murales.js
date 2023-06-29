
import { Base1 } from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Murales = () => {
  const Titulo = () => {
    return (
      <div className="relative h-80 font-text">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={"https://www.cultura10.org/wp-content/uploads/2018/05/4pinturas-aztecas.jpg"}
          alt="Imagen de fondo"
        />
        <div className="relative z-12 flex items-center justify-center h-full">
          <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-green-600">Murales</span>
          </h1>
        </div>
      </div>
    );
  };



  return (
    <Base1>
      < Titulo />
      <div class="sketchfab-embed-wrapper" style={{ margin: 20, padding: 20 }}>
      < div className="grid grid-cols-2 gap-1">
        <iframe
          style={{ width: '100%', height: '400px' }}
          title="Aztec Brazier" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/658455653c3245d2bccc929563e58c38/embed">
        </iframe>

     


      <div style={{ margin: 2, padding: 10 }}>
        <p style={{
          fontSize: '23px',
          fontWeight: 'normal',
          margin: '20px',
          color: '#000',
          textAlign: 'justify',
          lineHeight: '1.5',
          fontFamily: 'Arial, sans-serif',
        }}>          El arte pictórico azteca es creativo y simbólico. Representa escenas religiosas y cotidianas en templos, tejidos y vasijas. Los tlacuilos eran artistas especializados que utilizaban diferentes estilos y tintas. Las pinturas eran infantilizadas y coloridas, con contornos precisos. Los colores intensos y vivos sin sombras añadían pasión a las figuras. El arte azteca tenía un componente político-religioso y se usaba como lenguaje para transmitir la visión del mundo y reforzar la identidad azteca

        </p></div> </div>
       

       



      </div>
      <ul className="grid grid-cols-2 gap-1" style={{margin:10,padding:20}}> 




        
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
    href={`/categories/arte`}
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
<li
  key={`4`}
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
    href={`/categories/arte`}
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
     <span style={{ fontSize: '1.9em', color: '#006400' }}>Escultura</span>
  </Link>
</li>




</ul>
     



    </Base1>
  );

}
export default Murales;