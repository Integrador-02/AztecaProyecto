import React, { useState } from 'react';
import { Base1 } from '@layouts/Baseof';
import AztecButton from 'components/AztecButton';
import ReactCardFlip from 'react-card-flip';
import Image from 'next/image';

const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <Image
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src="https://www.infobae.com/new-resizer/OPVRxDKhnjBxdzzHS88fGpzOzDc=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/VY7HMNG5ARFEDLZOSGSHFPCIBI.jpg"
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

const Dioses = () => {
  const TDios = (nombreDios, tipoDios, urlImage, texto1) => {
    const [isFlipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!isFlipped);
    };

    return (
      <div>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div
            onClick={handleCardClick}
            style={{
              width: '100%',
              height: '50vh',
              backgroundColor: 'lightgreen',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: '0px 0px 10px 6px rgba(0, 0, 0, 0.3)',
              borderRadius: '10px',
              margin: '10px',
            }}
          >
            <Image
              src={urlImage}
              alt="Back Image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>

          <div
            onClick={handleCardClick}
            style={{
              width: '100%',
              height: '50vh',
              backgroundColor: 'lightgreen',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: '0px 0px 9px 6px rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
              margin: '10px',
            }}
          >
            <div style={{ margin: 10 }}>
              <h2>{tipoDios}</h2>
              <p>{texto1}</p>
            </div>
          </div>
        </ReactCardFlip>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'green',
              pointerEvents: 'none',
            }}
          >
            {nombreDios}
          </p>
        </div>
      </div>
    );
  };

  return (
    <Base1>
      <Titulo />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <TDios
          nombreDios="Zeus"
          tipoDios="Dios del trueno"
          urlImage="https://example.com/zeus.jpg"
          texto1="Zeus es el rey de los dioses en la mitología griega y dios del trueno."
        />
        <TDios
          nombreDios="Poseidón"
          tipoDios="Dios del mar"
          urlImage="https://example.com/poseidon.jpg"
          texto1="Poseidón es el dios del mar y los terremotos en la mitología griega."
        />
        <TDios
          nombreDios="Hades"
          tipoDios="Dios del inframundo"
          urlImage="https://example.com/hades.jpg"
          texto1="Hades es el dios del inframundo y las riquezas ocultas en la mitología griega."
        />
      </div>
      <AztecButton />
    </Base1>
  );
};

export default Dioses;
