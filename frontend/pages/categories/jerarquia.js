import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { Base1 } from "@layouts/Baseof";
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import Link from "next/link";
const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-x-0 top-0 w-full h-80 object-cover brightness-60"
        src={"/images/gobernantes-aztecas.jpg"}
        alt="Imagen de fondo"
        
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
          <span className="text-green-500"  style={{ fontSize: '180%', color: '#006400' }}>JERARQUÍA</span>
        </h1>
        
      </div>
    </div>
  );
};

const Jerarquia = ({ data }) => {
  
  return (
    <Base1 title={"Categorias Aztecas"}>
              
    <section className="section pt-0">
    < Titulo/>
    
      <div className="jerarquia-class" style={{margin :10, padding : 10}}>
                  
      <p style={{
                    fontSize: '23px',
                    fontWeight: 'normal',
                    margin: '20px',
                    color: '#000',
                    textAlign: 'justify',
                    lineHeight: '1.5',
                    fontFamily: 'Arial, sans-serif',
                }}>
                La jerarquía en la sociedad azteca estaba fuertemente estratificada, con diferentes niveles y roles que determinaban el estatus y los privilegios de cada individuo. A continuación, se presenta una visión general de la jerarquía de los aztecas, comenzando desde la cúspide y descendiendo hacia los estratos inferiores:
        </p>
                

        <ul className="grid grid-cols-3 gap-4" style={{ margin: 0, padding: 0 }}>
                  <li
                      key={`1`}
                      className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                      style={{
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        backgroundImage: 'url("https://plenitudazteca.com/wp-content/uploads/2022/12/1-1-1024x683-1-750x350.jpg")',
                       backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
                      }}>
                  
                  
                      <Link
                        href={`/categories/jerarquia/emperador`}
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
                       <span style={{ fontSize: '130%', color: '#006400' }}>Emperador</span>
                      </Link>
                  
                  </li>

                  
                  <li
                      key={`2`}
                      className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                      style={{
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        backgroundImage: 'url(https://historia.nationalgeographic.com.es/medio/2019/03/13/guerreros-aztecas-ataviados-con-sus-armas-y-vestimenta-tipicas_e7a6b441_800x800.jpg)',
                        backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
                      }}>
                    
                    <Link
                          href={`/categories/jerarquia/nobleza`}
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
                          <span style={{ fontSize: '130%', color: '#006400' }}>Nobles</span>
                        </Link>
                  </li>

                  <li
                     key={`3`}
                     className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                     style={{
                       margin: 0,
                       padding: 0,
                       position: 'relative',
                       backgroundImage: 'url(https://www.gaceta.unam.mx/wp-content/uploads/2019/10/190919-cult2-des-f1-tlamemes.jpg)',
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                       filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
                             }}>
                         
                  
                    
                      <Link
                          href={`/categories/jerarquia/comerciantes`}
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
                            <span style={{ fontSize: '130%', color: '#006400' }}>Comerciantes</span>
                      </Link>
                                      
                  </li>

                  <li
                    key={`4`}
                    className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                    style={{
                      margin: 0,
                      padding: 0,
                      position: 'relative',
                      backgroundImage: 'url("https://www.worldhistory.org/img/c/p/1200x627/4198.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencia// Ajusta el valor de brillo según tus preferencias
                    }}>
                  
                
                    
                      <Link
                          href={`/categories/jerarquia/plebeyos`}
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
                          <span style={{ fontSize: '130%', color: '#006400' }}>Plebeyos</span>
                      </Link>
                                      
                  </li>

                  <li
                    key={`5`}
                    className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                    style={{
                      margin: 0,
                      padding: 0,
                      position: 'relative',
                      backgroundImage: 'url("https://cdn.shopify.com/s/files/1/2393/9365/files/main-qimg-ca9ec91b20d584cdf2c1a3c5893b3a1d-lq_480x480.jpg?v=1667844224")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencia// Ajusta el valor de brillo según tus preferencias
                    }}>
                  
                    
                    <Link
                          href={`/categories/jerarquia/esclavos`}
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
                           <span style={{ fontSize: '130%', color: '#006400' }}>Esclavos</span>
                        </Link>
                                      
                        
      
                  </li>
        </ul>

  

      </div>

      <ul className="grid grid-cols-2 gap-1" style={{ margin: 0, padding: 0 }}>
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
                filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                      }}>
                  
                  
                      <Link
                        href={`/categories`}
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
                       <span style={{ fontSize: '1.9em', color: '#006400' }}>Pagina Principal</span>
                      </Link>
                  
                  </li>

                  
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
                          <span style={{ fontSize: '1.9em', color: '#006400' }}>Religión</span>
                        </Link>
                  </li>
                  </ul>

      
        
    </section>

    </Base1>
  );
};
// get 404 page data

export default Jerarquia;

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