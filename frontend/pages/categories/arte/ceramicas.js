
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Base1 } from "@layouts/Baseof";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie"


const Ceramicas = ()=>{

  const [email, setEmail] = useState('');
  const [selectedOptions2, setSelectedOptions2] = useState(0);
  useEffect(() => {
    const user = Cookies.get('clave');
    setEmail(user);
  }, []);

  useEffect(() => {
    const guardarProgresoJeraquia = async () => {
      const pagina = 'ceramica';
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
        const response = await axios.post("https://happy-fly-loincloth.cyclic.app/api/progresorArte", { correo, pagina });
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

  useEffect(() => {
    const handlerRevision = async () => {
      try {
        console.log('sd', email);
        const url = `https://happy-fly-loincloth.cyclic.app/api/recuperarprogresoArte?correo=${email}`;
        const respuesta = await axios.get(url);
        setSelectedOptions2(respuesta.data.valor); // Utiliza respuesta.data.valor en lugar de respuesta.valor
      } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        // Manejo de errores en caso de que falle la solicitud al backend
        alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      }
    };

    if (email) {
      handlerRevision();
    }
  }, [email]);
    const Titulo = () => {
        return (
          <div className="relative h-40 font-text">
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

        <iframe style={{ width: '100%', height: '100%' }} title="Aztec Ceramic Figures" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/7758b157084c49cabf7c30a27c1e1527/embed"> 
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
          }}>                Durante el período azteca, se produjo una variedad de cerámica, incluyendo copas para beber pulque y cerámica policroma mixteca. Estas piezas presentaban decoraciones geométricas, figuras humanas, símbolos religiosos y motivos florales. La cerámica azteca era valorada por su belleza y se comercializaba ampliamente en el mercado de Tlatelolco.

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
              href={`/categories/arte`}
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