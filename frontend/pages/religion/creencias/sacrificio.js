import React from 'react';
import { Base1 } from "@layouts/Baseof";
import Link from 'next/link';

const Sacrificio = () => {

  const Titulo = () => {
    return (
      <div className="relative h-80 font-text">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={"https://www.socialhizo.com/images/edad_antigua/aztecas/culto-y-rituales/sacrificio-por-decapitacion.jpg"}
          alt="Imagen de fondo"
        />
        <div className="relative z-12 flex items-center justify-center h-full">
          <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-green-600">El por que del sacrificio</span>
          </h1>
        </div>
      </div>
    );
  };
  return (
    <Base1 title="Vasijas y Ceramicas">
      <Titulo />

      <div class="sketchfab-embed-wrapper" style={{ margin: 20, padding: 20 }}>
        <div className="grid grid-cols-2 gap-1">

          <iframe
            style={{ width: '100%', height: '550px' }}
            title="Aztec Tecpatl Knife"
            frameborder="0" allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking execution-while-out-of-viewport
            execution-while-not-rendered web-share
            src="https://sketchfab.com/models/7fb848a7f37b4d2593e8a37b6b6dad97/embed">
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
              Los sacerdotes realizaban los sacrificios con un cuchillo de pedernal,
              habitualmente bellamente decorado en su mango de madera con mosaicos
              de jade, piedritas e incrustaciones de oro y plata. Según la más difundida
              creencia azteca, la sangre humana era el elemento necesario para el mantenimiento
              de Huitzilopochtli y otras divinidades. De hecho, los propios sacerdotes
              y la gente corriente procedían, en sus templos o frente a sus imágenes,
              a agujerearse distintas partes del cuerpo, y muy especialmente el lóbulo de
              la oreja, con una espina de maguey. A cambio de tanta sangría, los dioses
              aztecas se prodigaban en su buena voluntad y beneficiaban a sus adoradores
              con la mejor suerte en las batallas.
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

export default Sacrificio;
