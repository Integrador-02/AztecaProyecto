
import { Base1 } from "@layouts/Baseof";
import Link from "next/link";

import { markdownify } from "@lib/utils/textConverter";



const Ceramicas = ()=>{

    const Titulo = () => {
        return (
          <div className="relative h-80 font-text">
            <img
              className="absolute inset-0 w-full h-full object-cover brightness-50"
              src={"https://f5c4537feeb2b644adaf-b9c0667778661278083bed3d7c96b2f8.ssl.cf1.rackcdn.com/piezas/3439/cajete-museo-amparo-puebla-20191220-020002.jpg"}
              alt="Imagen de fondo"
            />
            <div className="relative z-12 flex items-center justify-center h-full">
              <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <span className="text-green-600">Ceramicas</span>
              </h1>
            </div>
          </div>
        );
      };
    return (
        <Base1 title="Vasijas y Ceramicas">
           <Titulo/>

        <div class="sketchfab-embed-wrapper" style={{margin :20,padding :20}}> 
        <div className="grid grid-cols-2 gap-1">

        <iframe style={{ width: '100%', height: '550px' }} title="Aztec Ceramic Figures" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/7758b157084c49cabf7c30a27c1e1527/embed"> 
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
          }}>                Se hicieron copas bicónicas y en forma de cáliz para que los ancianos bebiesen pulque, una fuerte 
                bebida alcohólica hecha de jugo de maguey fermentado.
                La decoración, pintada con líneas negras, fue a menudo geométrica, 
                aunque más tarde se incluyeron pájaros, animales y motivos florales.
                La cerámica policroma mixteca fue una de las más finas y más apreciadas de las cerámicas aztecas. Se hizo en Cholula y está decorada con numerosos engobes coloreados. Se dice que ésta era la única cerámica que quería usar el rey Moctezuma.
                Fue principalmente una cerámica de lujo en la que se utilizaban los colores crema, amarillo crema, ocre rojo, siena quemada, gris y negro.
                Algunos de los diseños decorativos fueron figuras humanas, símbolos religiosos y seculares, plumas y volutas y los dibujos tenían una calidad de plenitud y minuciosidad.
                Se comercializó mucha cerámica y el soldado español Bernardo Díaz informó haber visto «toda clase de objetos hechos en miles de formas, desde grandes tinajas para agua a pequeñas jarras» 
                en el gran mercado de Tlatelolco, cerca de Tenochtitlan.

            </p>
            

        </div>
        </div> </div>
        <ul className="grid grid-cols-2 gap-1" style={{ margin: 10, padding: 30}}>
                  

                  
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


    );
}
export default Ceramicas;