import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { FaInfoCircle } from 'react-icons/fa';
import Base from "@layouts/Baseof";

const Economia = ({ data }) => {
  const MasInformacion = () => {
    return (
      <div className="center-container">
        <FaInfoCircle size={50} />
        <span style={{ marginLeft: '5px' }}>Más información próximamente</span>
      </div>
    );
  };

  return (
    <Base title="Categorias Aztecas">
      <section className="section pt-0">
        {markdownify(
          "Economía",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
        )}

        <div className="sketchfab-embed-wrapper">
          <iframe
            style={{ width: '40%', height: '400px' }}
            title="Pirate's-Aztec-Gold-Coin"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/8a72e7d50c0d45efa902adbdc6ceb6a5/embed"
          ></iframe>

          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
              href="https://sketchfab.com/3d-models/pirates-aztec-gold-coin-8a72e7d50c0d45efa902adbdc6ceb6a5?utm_medium=embed&utm_campaign=share-popup&utm_content=8a72e7d50c0d45efa902adbdc6ceb6a5"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Pirate's-Aztec-Gold-Coin
            </a>{' '}
            by{' '}
            <a
              href="https://sketchfab.com/bsmeher1986?utm_medium=embed&utm_campaign=share-popup&utm_content=8a72e7d50c0d45efa902adbdc6ceb6a5"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Banendu
            </a>{' '}
            on{' '}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8a72e7d50c0d45efa902adbdc6ceb6a5"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Sketchfab
            </a>
          </p>
        </div>

        <div>
          <p className="text-justify" style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000' }}>
            El comercio en el mundo azteca fue indispensable para su economía, lo que les permitía comercializar con otras ciudades los productos con los cuales no se contaba, entre los productos más demandados por ellos se encontraba el cacao, la vainilla, el algodón, el caucho, la miel, las plumas, los metales y las piedras preciosas. Los aztecas utilizaban el cacao como moneda. Las caravanas comerciales y los mercados en cada ciudad eran controlados por la poderosa clase de mercaderes llamados pochtecas.
            Un elemento que causó gran admiración cuando los españoles llegaron a Tenochtitlan fue el mercado de Tlatelolco, en este lugar se comercializaba todo tipo de mercancías como, por ejemplo, verduras, hierbas medicinales, maíz, algodón, aves, tejidos, cerámica, adornos de plumas, herramientas de piedra, productos marinos, etc. Estos productos eran intercambiados por medio del trueque y si no alcanzaban a cubrir la diferencia que existía se recurría a una forma de moneda como era el grano de cacao o las plumas de quetzal.
          </p>
        </div>

        <MasInformacion />
      </section>
    </Base>
  );
};

export default Economia;
