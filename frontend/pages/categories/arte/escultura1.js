import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from '@layouts/Baseof';
import { FaQuestionCircle } from 'react-icons/fa';



const Escultura = () => {
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
    <Base1 title="Categorias Aztecas">
      <section className="section pt-0">
        {markdownify(
          "Escultura",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
        )}

        <div className="sketchfab-embed-wrapper">

        <iframe style={{ width: '40%', height: '400px' }}
         title="Figura Azteca de Madera"
         frameborder="0"
         allowfullscreen
         mozallowfullscreen="true"
         webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
           xr-spatial-tracking
           execution-while-out-of-viewport
           execution-while-not-rendered
           web-share
           src="https://sketchfab.com/models/a5035c1d5ad74f99944352238f6de3e4/embed">
          </iframe>

          <InteractionMessage />
          <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000' }}>
          Las esculturas astecas son una manifestación artística impresionante que nos permite adentrarnos en la rica cultura y cosmovisión de los aztecas. Estas esculturas <br></br>eran creadas por hábiles artistas y artesanos que dominaban la técnica de tallado en piedra, utilizando principalmente materiales como el basalto y la andesita.<br></br>
          Las esculturas astecas no solo eran apreciadas por su belleza y destreza técnica, sino también por su significado cultural y espiritual. Cada escultura contaba <br></br>una historia , transmitía valores y creencias, y servía como un recordatorio constante de la importancia de la religión y la identidad en la vida de los aztecas.
          </p>
        </div>
      </section>
    </Base1>
  );
};

export default Escultura;
