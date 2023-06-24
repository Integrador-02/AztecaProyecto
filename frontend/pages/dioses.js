
import Base from "@layouts/Baseof";
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import Link from "next/link";
const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/10/dioses-aztecas-o-mexicas.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Dioses</span>
        </h1>
      </div>
    </div>
  );
};
const Religion = ({ data }) => {
  
  return (
    <Base title={"Categorias Aztecas"}>
          <Titulo/>     
    <section className="section pt-0"style={{margin :10, padding : 10}}>
   

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
        Los dioses aztecas eran parte fundamental de la religión y la mitología de la antigua civilización azteca. Tenían una amplia variedad de dioses que representaban diferentes aspectos del cosmos, la guerra y otras esferas de la vida, como: 
        </p>
                
        <ul className="grid grid-cols-4 gap-1" style={{ margin: 0, padding: 0 }}>

          <li
              key={`1`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: 'url("/images/principales.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(70%)', // Ajusta el valor de brillo según tus preferencias
              }}
          >
            
            
            <Link
              href={`./religion/principales`}
              className="flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                filter: 'brightness(70%)', // Ajusta el valor de brillo según tus preferencias
              }}
              >
              <span>Principales</span>
            </Link>
          </li>

          <li
            key={`2`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/natu.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
        >
         
            
            <Link
              href={`./religion/naturales`}
              className="flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                filter: 'brightness(70%)', // Ajusta el valor de brillo según tus preferencias
              }}
            >
                <span>Naturaleza</span>
            </Link>
                              
          </li>

         

          <li
            key={`2`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/diosaL.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
        >
            
          <Link
            href={`./religion/fertiles`}
            className="flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              filter: 'brightness(70%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >
              <span>Fertilidad</span>
          </Link>
                              
          </li>

          <li
            key={`3`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/muerte.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(70%)', // Ajusta el valor de brillo según tus preferencias
            }}
        >
            
            <Link
              href={`./religion/muerte`}
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
              <span>Muerte</span>
            </Link>
          </li>
        </ul>
      </div>
     
        
    </section>

    </Base>
  );
};
// get 404 page data

export default Religion;

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