import { Base1 } from "@layouts/Baseof";
import Link from "next/link";
const Titulo = () => {
    return (
        <div className="relative h-80 font-text">
            <img
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                src={"https://ae01.alicdn.com/kf/Hf9be0b1eca7345489c81df96d5c4aeb6V/Dragon-azteca-FireworkPolyester-Cotton-4-way-Stretch-tela-Patchwork-coseing-Kid-Home-Textile-Cloth-Quilting-Dress.jpg"}
                alt="Imagen de fondo"
            />
            <div className="relative z-12 flex items-center justify-center h-full">
                <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    <span className="text-green-600">Textiles</span>
                </h1>
            </div>
        </div>
    );
};

const Textiles = () => {

    return (
        <Base1>
            <Titulo />

            <div className="sketchfab-embed-wrapper" style={{ marginTop: '40px' }} >



                <p style={{
                    fontSize: '23px',
                    fontWeight: 'normal',
                    margin: '20px',
                    color: '#000',
                    textAlign: 'justify',
                    lineHeight: '1.5',
                    fontFamily: 'Arial, sans-serif',
                }}>
                    Los textiles tenían un valor simbólico y se utilizaban como moneda en el Imperio Azteca. Los diseños representaban estatus, origen geográfico, historia familiar y ocupación. El arte del tejido estaba principalmente a cargo de mujeres, desde las comunes hasta las nobles, y se transmitía de generación en generación. Aunque se adoptaron técnicas modernas, actualmente hay un resurgimiento de las técnicas tradicionales debido al interés en el arte textil.
                </p>
            </div>
            <ul className="grid grid-cols-2 gap-1" style={{ margin: 0, padding: 10 }}>
                  

                  
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
              href={`/arte`}
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
                  </ul>

        </Base1>
    )

}

export default Textiles;