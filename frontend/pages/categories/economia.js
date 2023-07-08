import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

import { Base1 } from "@layouts/Baseof";
import { FaInfoCircle } from 'react-icons/fa';
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";
//clase Economia
const Titulo = () => {
  return (
    <div className="relative h-60 font-text mt-[-2%]">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://img.over-blog-kiwi.com/1/06/54/81/20140530/ob_754e74_aztecas-imagen.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Economia</span>
        </h1>
      </div>
    </div>
  );
};

const Economia = ({ data }) => {
  
  
    return (

        < Base1 title={"Categorias Aztecas"}>
            
      <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>
      <Titulo/>
        
         
        <div class="sketchfab-embed-wrapper" style={{margin:50,position :10 }} > 
        <div className="grid grid-cols-2 gap-1">

        
            <iframe style={{width: '100%', height: '100%'}} title="Pirate's-Aztec-Gold-Coin" frameborder="0" 

                allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" 
                allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking 
                execution-while-out-of-viewport execution-while-not-rendered web-share 
                src="https://sketchfab.com/models/8a72e7d50c0d45efa902adbdc6ceb6a5/embed"> 
            </iframe> 

            <p style={{
                    fontSize: '18px',
                    fontWeight: 'normal',
                    margin: '20px',
                    color: '#000',
                    textAlign: 'justify',
                    lineHeight: '1.5',
                    fontFamily: 'Arial, sans-serif',
                }}>            El comercio en el mundo azteca fue indispensable para

            su economía, lo que les permitía comercializar con otras
            ciudades los productos con los cuales no se contaba,
            entre los productos más demandados por ellos se
            encontraba el cacao, la vainilla, el algodón, el caucho, la
            miel, las plumas, los metales y las piedras preciosas. Los
            aztecas utilizaban el cacao como moneda. Las caravanas
            comerciales y los mercados en cada ciudad eran
            controlados por la poderosa clase de mercaderes
            llamados pochtecas.
            Un elemento que causó gran admiración cuando los
            españoles llegan a Tenochtitlan fue el mercado de
            Tlatelolco, en este lugar se comercializaba todo tipo de
            mercancías como, por ejemplo; verduras, hierbas
            medicinales, maíz, algodón, aves, tejidos, cerámica,
            adornos de plumas, herramientas de piedra, productos
            marinos, etc. Estos productos eran intercambiados por
            medio del trueque y si no alcanzaban a cubrir la
            diferencia que existía se recurría a una forma de moneda
            como era el grano de cacao o las plumas de quetzal.
            </p>

            
        </div></div>
         <div>
              

         </div>

        
        


    </section>

    </ Base1>
    );
  };
  


// get 404 page data

export default Economia;
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

