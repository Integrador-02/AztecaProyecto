import React, { useEffect } from 'react';
import { useState } from 'react';
import { Base1 } from '@layouts/Baseof';
import Link from 'next/link';
import axios from "axios";
import Cookies from "js-cookie";



const Creencias = () => {
  const [email, setEmail] = useState('');
  const [selectedOptions2, setSelectedOptions2] = useState(0);
  useEffect(() => {
    const user = Cookies.get('clave');
    setEmail(user);
  }, []);

  useEffect(() => {
    const guardarProgresoJeraquia = async () => {
      const pagina = 'creencias';
      const newCommentObject = {
        id: 1,
        text: 1,
        username: email,
        replyTo: 1,
        likes: 0,
        timestamp: 1,
      };


      const coment = newCommentObject.text
      const correo = newCommentObject.username
      try {
        const response = await axios.post("http://localhost:4000/api/progresorReligion", { correo, pagina });
        // Manejo de la respuesta exitosa
        //alert("Registrado correctamente");
      } catch (error) {
        // Manejo de errores en caso de que falle la solicitud al backend
        console.log(error);
        //alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      }
    };

    if (email) {
      console.log(email)
      guardarProgresoJeraquia();
    }
  }, [email]);

  const handleSubmit = async () => {

    //window.location.href = "/categories/jerarquia/comentarioJeraquia";

  };


  const Titulo = () => {
    return (
      <div className="relative h-80 font-text">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={"https://i0.wp.com/www.turimexico.com/wp-content/uploads/2015/07/religion-y-dioses.jpg?resize=545%2C507&ssl=1"}
          alt="Imagen de fondo"
        />
        <div className="relative z-12 flex items-center justify-center h-full">
          <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-green-600">Creencias</span>
          </h1>
        </div>
      </div>
    );
  };
return (
    <Base1 title="Vasijas y Ceramicas">
            <section className="section pt-0"style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll'}}>
       <Titulo/>

    <div class="sketchfab-embed-wrapper" style={{margin :20,padding :20}}> 
    <div className="grid grid-cols-2 gap-1">

    <iframe style={{ width: '100%', height: '550px' }}
    title="Aztec temple" 
    frameborder="0" 
    allowfullscreen mozallowfullscreen="true" 
    webkitallowfullscreen="true" 
    allow="autoplay; fullscreen; xr-spatial-tracking" 
    xr-spatial-tracking execution-while-out-of-viewport 
    execution-while-not-rendered web-share 
    src="https://sketchfab.com/models/6dfe852b16bd4e0884be3cf2873c0492/embed"> 
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
      Los Aztecas eran politeístas. Los dioses Aztecas se consideraban 
      polifacéticos ya que no tenían un lugar definido, ellos los ubicaban 
      en el cielo y creían que tenían un carácter bondadoso o maléfico.
      Para los aztecas el Universo fue originado por la Cipactli, una 
      especie de serpiente-dragón que vivía sola en el cosmos. Según la 
      mitología fue dividida en tres partes, de su cabeza nacieron los 13 
      cielos, de su cuerpo nació el Tlalticpac o la Tierra y de su cola, 
      los nueve inframundos.
      El derramamiento de la propia san­gre era un procedimiento para procurar el favor divino. 



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
                   href={`/categories/religion`}
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

        

           </section>


    </Base1>


);
};

export default Creencias;
