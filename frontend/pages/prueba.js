import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "@layouts/Baseof";
import { FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';

const Prueba = ({ data }) => {
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

  return (
    <Base title="Categorias Aztecas">
      <section className="section pt-0">
        {markdownify(
          "Agricultura",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
        )}

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <iframe
            title="Cultura"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            execution-while-out-of-viewport="true"
            execution-while-not-rendered="true"
            web-share="true"
            src="https://sketchfab.com/models/3be2b0a37a6d40e8860b7bff46c94179/embed"
            style={{ width: '40%', height: '400px' }}
          ></iframe>
          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A', textAlign: 'center' }}>
            <a
              href="https://sketchfab.com/3d-models/cultura-3be2b0a37a6d40e8860b7bff46c94179?utm_medium=embed&utm_campaign=share-popup&utm_content=3be2b0a37a6d40e8860b7bff46c94179"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Cultura
            </a>{' '}
            by{' '}
            <a
              href="https://sketchfab.com/rivas.lina?utm_medium=embed&utm_campaign=share-popup&utm_content=3be2b0a37a6d40e8860b7bff46c94179"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              rivas.lina
            </a>{' '}
            on{' '}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3be2b0a37a6d40e8860b7bff46c94179"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Sketchfab
            </a>
          </p>
          <InteractionMessage />
        </div>

        <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000', textAlign: 'center' }}>
          La agricultura azteca, también conocida como agricultura mesoamericana, fue una práctica fundamental en la sociedad azteca. Los aztecas desarrollaron sistemas agrícolas sofisticados que les permitieron cultivar una amplia variedad de alimentos para alimentar a su población en constante crecimiento.
        </p>
        <MasInformacion />
      </section>
    </Base>
  );
};

export default Prueba;
