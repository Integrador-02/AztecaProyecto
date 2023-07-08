import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from "next/link";
import ReactCardFlip from 'react-card-flip';
import { Base1 } from '@layouts/Baseof';
import axios from "axios";
import Cookies from "js-cookie"
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
                    <span className="text-green-600">Vestimenta típica de los aztecas
                    </span>
                </h1>
            </div>
        </div>
    );
};

const Textiles = () => {
    const [email, setEmail] = useState('');
  const [selectedOptions2, setSelectedOptions2] = useState(0);
  useEffect(() => {
    const user = Cookies.get('clave');
    setEmail(user);
  }, []);

  useEffect(() => {
    const guardarProgresoJeraquia = async () => {
      const pagina = 'vestimenta';
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

    const TextWithBoldFirstLetter = ({ title, text }) => {
        const firstLetter = text.charAt(0);
        const restOfText = text.slice(1);

        return (
            <div>
                <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                    <span className="text-green-600">{title}</span>
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
                    <span >{firstLetter}</span>
                    {restOfText}
                </p>
            </div>
        );
    };

    const Carta = () => {
        const [page, setPage] = useState(1);
        const itemsPerPage = 1; // Número de imágenes por página
        const text = [
            {
                imageUrl: "https://th.bing.com/th/id/OIP.c55B1qO73mr967dbafO7RwAAAA?pid=ImgDet&rs=1",
                text: "Vestía las mejores y más delicadas prendas y ornamentos, junto con un tocado real que solo él podía utilizar. Las plumas de quetzal caracterizaban su penacho."
            },
            {
                imageUrl: "https://i.pinimg.com/474x/f1/7b/0c/f17b0cdeb7857b42bcaedb55f1a9b347.jpg",
                text: "A ellos les correspondía una indumentaria que los caracterizaba como representantes de la fauna local más fuerte y astuta"
            },



            {

                imageUrl: "https://th.bing.com/th/id/R.71dce0425a6898e956a1c430c60d3de4?rik=8YVrtC07Xn71zg&riu=http%3a%2f%2fpbs.twimg.com%2fmedia%2fCOuhZ_FUkAAYh89.jpg&ehk=wOmEGone%2fauPC%2fSchYlgC86%2beEMIqY7ff3EygN0pxUY%3d&risl=&pid=ImgRaw&r=0",
                text: "Su ropa era confeccionada por mujeres escogidas por su pericia, principalmente en el bordado. Sus atuendos variaban según la importancia del sacerdote."

            },

            {
                imageUrl: "https://th.bing.com/th/id/OIP.JBiu3xwkt8bF3Z6wM9jcFAAAAA?pid=ImgDet&rs=1",
                text: "Apenas vestían modelos de taparrabos (maztlat) y en ocasiones una capa (tlimatl). Las mujeres usaban el huipil (camisa) y un chal (quechquemitl)."
            }


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
            <div className="container" style={{ width: '50rem', height: '9rem', margin: '5%', marginTop: '-9.5%', width: '40vw' }}>
                {/* Mostrar las cartas paginadas */}
                {paginatedDioses.map((text, index) => (
                    <li key={index}>
                        <Textile imageUrl={text.imageUrl} text={text.text} />
                    </li>
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








    return (
        <Base1>

            <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>

            <ul className="grid grid-cols-2 gap-3" style={{ margin: 0, padding: 0 }}>
                    <TextWithBoldFirstLetter title={'Textil'} text={' La vestimenta de los aztecas reflejaba la forma de vida y el rol social de cada individuo. Los accesorios, adornos y peinados eran elementos importantes para comprender la vestimenta típica de los aztecas. El estilo de ropa variaba según el sexo, la edad y la ocupación, ya fueran militares, religiosos, gobernantes o trabajadores.                             Los aztecas utilizaban diversos materiales para fabricar su ropa, siendo los más comunes la fibra de algodón y la fibra de ayate obtenida del cactus de maguey. El algodón se consideraba un material exclusivo reservado para la nobleza y las personas de poder. Incluso se cree que un plebeyo que fuera sorprendido usando ropa de algodón podía ser condenado a muerte, según mencionan algunos historiadores'} />
                    <Carta />


                </ul>



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
            </section>
        </Base1>
    )

}

export default Textiles;

const Textile = ({ imageUrl, text }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div
                onClick={handleCardClick}
                style={{
                    width: '100%',
                    height: '32rem',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0px 0px 10px 6px rgba(0, 0, 0, 0.3)',
                    borderRadius: '10px',
                    margin: '10px',
                }}
            >
                <img
                    src={imageUrl}
                    alt="Back Image"
                    style={{
                        width: '100%',
                        height: '32rem',
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                />
            </div>
            <div
                onClick={handleCardClick}
                style={{
                    width: '100%',
                    height: '32rem',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0px 0px 9px 6px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px',
                    margin: '10px',
                }}
            >
                <div style={{ margin: '1rem' }}>
                    <p>{text}</p>
                </div>
            </div>
        </ReactCardFlip>
    );
};
