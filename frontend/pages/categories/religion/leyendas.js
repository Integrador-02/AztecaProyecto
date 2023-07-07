import { Base1 } from "@layouts/Baseof";
import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";






/*
Las leyendas desempeñaron un papel fundamental en la cultura y cosmovisión de los aztecas, una antigua civilización mesoamericana que floreció en el territorio que hoy en día es México. Estas historias transmitidas oralmente de generación en generación, eran consideradas sagradas y funcionaban como una forma de preservar la memoria colectiva y transmitir conocimientos y valores fundamentales
*/
const Leyendas = () => {


  const TextWithBoldFirstLetter = ({ title, text }) => {


    return (
      <div>
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
          <span className="text-green-500">{title}</span>
        </h1>

        <p
          style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif'
          }}
        >

          {text}
        </p>
      </div>
    );
  };



  const Carta = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 1; // Número de imágenes por página
    const text = [
      {
        texto: "Leyenda del volcán Popocatépetl",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/c/c0/El_nervio_del_volcan.jpg",
        linkto: "/leyenda1"

      },
      {
        texto: "El monte de nuestro sustento",
        imageURL: "https://tucuentofavorito.com/wp-content/uploads/2020/06/campo-de-nuestro-sustento.jpg.webp",
        linkto: "/leyenda2"

      },

      {
        texto: "Los huicholes y el maíz",
        imageURL: "https://tucuentofavorito.com/wp-content/uploads/2020/06/maiz.jpg.webp",
        linkto: "/leyenda3"

      },
      {
        texto: "El conejo de la luna",
        imageURL: "https://cdn.bioguia.com/embed/cc0a3a9d1dfd562822941df06d70e8d441528478381/--Por_que_hay_un_conejo_en_la_luna-_Una_asombrosa_leyenda_maya",
        linkto: "/leyenda4"

      },
      {
        texto: "Tajín y los siete truenos",
        imageURL: "https://tucuentofavorito.com/wp-content/uploads/2020/07/Tajin-siete-truenos.jpg.webp",
        linkto: "/leyenda5"

      },
      {
        texto: "La leyenda del ajolote",
        imageURL: "https://i.guim.co.uk/img/media/5e993f3c5e6e46ef962a613bc1889dca864afe9a/0_339_5122_3074/master/5122.jpg?width=700&quality=85&auto=format&fit=max&s=3006c8b84e2fb95222e6e64c5d709cf4",
        linkto: "/leyenda6"

      },

      {
        texto: "El flechador del cielo",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2COBRhPNFpcJXw6RFWp6eH1Vo8oBxAD1kQ&usqp=CAU",
        linkto: "/leyenda7"

      },
      {
        texto: "El ahuízotl",
        imageURL: "https://pm1.aminoapps.com/6283/36fc92c000641e4b32bdb0b0f18b35a898dbf486_00.jpg",
        linkto: "/leyenda8"

      },
      {
        texto: "El espejo humeante",
        imageURL: "https://tucuentofavorito.com/wp-content/uploads/2022/11/leyenda-del-espejo-humeante.jpg.webp",
        linkto: "/leyenda9"

      },
    ];

    // Calcula el número total de páginas
    const totalPages = Math.ceil(text.length / itemsPerPage);

    // Calcula los índices de inicio y fin según la página actual y los elementos por página
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Obtiene los dioses para la página actual
    const paginatedDioses = text.slice(start, end);

    // Función para cambiar de página
    const handlePageChange = (newPage) => {
      setPage(newPage);
    };

    return (
      <div style={{ margin: 20, padding: 20 }}>
        {/* Mostrar las cartas paginadas */}
        {paginatedDioses.map((text, index) => (
         
          <AztecButton
            key={index} // Agrega la propiedad "key" aquí
            texto={text.texto}
            imageURL={text.imageURL}
            linkto={text.linkto}
          />
        

        ))}

        {/* Agregar iconos de paginación */}
        <div className="pagination" style={{ justifyContent: 'left' }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={page === index + 1 ? 'active' : ''}
              style={{
                backgroundColor: '#40E0D0',
                border: '2px solid #40E0D0',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const AztecButton = ({ texto, imageURL, linkto }) => {

    const [email, setEmail] = useState('');
    const [selectedOptions2, setSelectedOptions2] = useState(0);
    useEffect(() => {
      const user = Cookies.get('clave');
      setEmail(user);
    }, []);
  
    useEffect(() => {
      const guardarProgresoJeraquia = async () => {
        const pagina = 'leyendas';
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
  
    useEffect(() => {
      const handlerRevision = async () => {
        try {
          console.log('sd', email);
          const url = `http://localhost:4000/api/recuperarprogresoReligion?correo=${email}`;
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
  














    return (
      <li
        key={`1`}
        className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
        style={{
          margin: 0,
          padding: 0,
          position: 'relative',
          backgroundImage: `url("${imageURL}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(70%)', // Ajusta el valor de brillo según tus preferencias
          width: '100%', // Ajusta el ancho del botón al 100% del contenedor
          height: '100%', // Ajusta la altura del botón al 100% del contenedor
        }}
      >
        <Link
          href={linkto}
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
          <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
            <span className="text-green-500">{texto}</span>
          </h1>
        </Link>
      </li>
    );
  };


  const [email, setEmail] = useState('');
  const [selectedOptions2, setSelectedOptions2] = useState(0);
  useEffect(() => {
    const user = Cookies.get('clave');
    setEmail(user);
  }, []);

  useEffect(() => {
    const guardarProgresoJeraquia = async () => {
      const pagina = 'leyendas';
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


  return (
    <Base1>
      <section className="section pt-0"style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll'}}
      
      >

        <ul className="grid grid-cols-2 gap-1" style={{ height: '100%' }} >
          <TextWithBoldFirstLetter title={"LEYENDAS"} text={"Las leyendas desempeñaron un papel fundamental en la cultura y cosmovisión de los aztecas, una antigua civilización mesoamericana que floreció en el territorio que hoy en día es México. Estas historias transmitidas oralmente de generación en generación, eran consideradas sagradas y funcionaban como una forma de preservar la memoria colectiva y transmitir conocimientos y valores fundamentales."} />
          <Carta />



        </ul>

      </section>

    </Base1>


  );

}



export default Leyendas;
