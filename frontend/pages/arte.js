import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "@layouts/Baseof";
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import Link from "next/link";
//clase culrura
const Arte = ({ data }) => {
  
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
    return (
        <Base title={"Categorias Aztecas"}>
            
      <section className="section pt-0">
      {markdownify(
          " Arte",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
        )}
        
        <div className="sketchfab-embed-wrapper">
            
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Tv3tdfW_jVM?start=5"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                >

            </iframe>
            < InteractionMessage/>
            <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000' }}>
            A la hora de hablar del arte azteca tenemos que destacar que este pueblo era un gran escultor ya que desarrollaba y<br />
            creaba esculturas de diferentes dimensiones, lo único que no cambiaba de ellas era los temas ya que todos estaban<br />
            relacionados con la naturaleza o la religión.  El arte azteca es, fundamentalmente, un arte al servicio del Estado,<br />
            un lenguaje utilizado por la sociedad para transmitir su visión del mundo, reforzando su propia identidad, frente<br />
            a las de las culturas foráneas.<br />
            </p>
            
            <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000' }}>
              Varios aspectos que podemos resaltar de el arte azteca son los siguientes
            </p>
            <ul className="grid grid-cols-4 gap-1" style={{ margin: 0, padding: 0 }}>
              <li
              className="hover:no-underline block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} 
              >
              
              <Link
                    href={`./arte/textiles`}
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
                    <span>Textiles</span>
                  </Link>
                                
                  


              </li>

              
                <li
                className="hover:no-underline block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                style={{
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} 
                >
                
                <Link
                      href={`./arte/ceramicas`}
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
                      <span>Ceramica</span>
                    </Link>
                </li>
                <li
                className="hover:no-underline block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                style={{
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} 
                >
                
                <Link
                      href={`./arte/musica`}
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
                      <span>Música</span>
                    </Link>
                                  
                    
  
  
                
                </li>
                <li
                className="hover:no-underline block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                style={{
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} 
                >
                
                <Link
                      href={`./arte/murales`}
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
                      <span>Murales y Pinturas</span>
                    </Link>
                                  
                    
  
                </li>
            </ul>
            
        </div>


    </section>

    </Base>
    );
  };
  


// get 404 page data

export default Arte;
const MasInformacion = () => {
    return (
      <div className="center-container">
        <FaInfoCircle size={50} />
        <span style={{ marginLeft: '5px' }}>Más información próximamente</span>
      </div>
    );
  };