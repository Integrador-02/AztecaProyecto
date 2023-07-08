import React, { useEffect } from 'react';
import { useState } from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from "@layouts/Baseof";
import { FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import ReactCardFlip from 'react-card-flip';
import axios from "axios";
import Cookies from "js-cookie";
import Button from '@layouts/shortcodes/Button';
import Link from 'next/link';


const Temprano = () => {
    const Titulo = () => {
        return (
            <div className="relative h-60 font-text">
                <img
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                    src={"https://elheraldoslp.com.mx/new/wp-content/uploads/2021/08/1-29-860x1024.jpg"}
                    alt="Imagen de fondo"
                />
                <div className="relative z-12 flex items-center justify-center h-full">
                    <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        <span className="text-green-600">Temprano Tenochtitlan (1325-1375)  y Tlatoque preimperial (1375-1427)
                        </span>
                    </h1>
                </div>
            </div>
        );
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'popover' : undefined;


    const Carta = () => {
        const [page, setPage] = useState(1);
        const itemsPerPage = 2; // Número de imágenes por página
        const dioses = [
            {
                nombreDios: "Tenoch",
                tipoDios: "",
                urlImage: "https://mexicolindoyquerido.com.mx/mexico2/images/IMAGENES_PARA_TEMPLATE/biografias/P07_Tenoch_Primer_Emperador_Azteca.png",
                texto1: "Reinado aproximado de 1325-1375. Fundador legendario de Tenochtitlan. Pocos detalles conocidos sobre su vida."
            },
            {
                nombreDios: "Acamapichtli",
                tipoDios: "",
                urlImage: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/AXSTK5BVUNC7NEFWPLHDVXOYAY.jpeg",
                texto1: " Reinado: C. 1375-1390 (15 años) Fue un gobernante importante de Tenochtitlan. Ayudó a expandir el territorio y murió de causas naturales."
            },

            {
                nombreDios: "Huitzilihuitl",
                tipoDios: "",
                urlImage: "https://pueblosoriginarios.com/textos/tovar/imagenes/huitxilhuitl.jpg",
                texto1: "  Reinado: C. 1391-1414 (23 años) Hijo de Acamapichtli. Conquistó tierras en nombre de los tepanecas. Durante su reinado, los mexicas se militarizaron. Murió por causas naturales en torno al año 1410."

            },
            {
                nombreDios: "Xihuitl Temoc",
                tipoDios: "",
                urlImage: "https://pueblosoriginarios.com/textos/tovar/imagenes/chimalpopoca.jpg",
                texto1: " Reinado: C. 1415-1427 (18 años) Hijo de Acamapichtli. Realizó proyectos de edificación y urbanismo. Considerado el primer mártir mexicano. Se vio envuelto en conflictos sucesorios tepanecas, apoyó al bando equivocado, fue encarcelado y se ahorcó en cautiverio."

            },










            // Agrega más objetos aquí
        ];

        // Calcula el número total de páginas
        const totalPages = Math.ceil(dioses.length / itemsPerPage);

        // Calcula los índices de inicio y fin según la página actual y los elementos por página
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        // Obtiene las imágenes para la página actual
        const paginatedImages = dioses.slice(start, end);

        // Calcula el número total de filas necesarias para las cartas paginadas
        const totalRows = Math.ceil(paginatedImages.length / 3);

        // Función para cambiar de página
        const handlePageChange = (newPage) => {
            setPage(newPage);
        };

        const [email, setEmail] = useState('');

        useEffect(() => {
            const user = Cookies.get('clave');
            setEmail(user);
        }, []);

        useEffect(() => {
            const guardarProgresoJeraquia = async () => {
                const pagina = 'temprano';
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
                    const response = await axios.post("http://localhost:4000/api/progresoJeraquia", { correo, pagina });
                    // Manejo de la respuesta exitosa
                    alert("Registrado correctamente");
                } catch (error) {
                    // Manejo de errores en caso de que falle la solicitud al backend
                    console.log(error);
                    alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
                }
            };

            if (email) {
                console.log(email)
                guardarProgresoJeraquia();
            }
        }, [email]);

        return (
            <div className="grid grid-cols-2 gap-4 center" style={{ margin: '10%', marginTop: '-7%', width: '80vw', padding: '0%' }} >

                {/* Mostrar las cartas  paginadas */}
                {paginatedImages.map((dioses, index) => (
                    <li key={index}>
                        {Imperio(
                            dioses.nombreDios,
                            dioses.tipoDios,
                            dioses.urlImage,
                            dioses.texto1
                        )}
                    </li>
                ))}

                {/* Agregar iconos de paginación */}
                <div className="pagination " style={{ justifyContent: 'center', marginTop: '-2.5rem' }}>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={page === index + 1 ? 'active' : ''}
                            style={{
                                backgroundColor: '#40E0D0',
                                border: '2px solid #40E0D0',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',

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

    const handleSubmit = async () => {

        window.location.href = "/categories/jerarquia/comentarioJeraquia";

    };


    return (
        <Base1 title={"Categorias Aztecas"}>
            <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>
                <Titulo />

                <Carta />




                <button id="invite-comment" onClick={handleSubmit}>
                    <img src="https://cdn-icons-png.flaticon.com/512/48/48733.png" alt="Muñeco invitando a comentar" />
                </button>
                <ul className="grid grid-cols-2 gap-1" style={{ justifyContent: 'center', marginTop: '-9.5rem' }}>

                    <li
                        key={`5`}
                        className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                        style={{
                            margin: 0,
                            padding: 0,
                            position: 'relative',
                            backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                        }}>


                        <Link
                            href={`/categories/jerarquia/emparadores`}
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
                            <span style={{ fontSize: '1.9em', color: '#006400' }}>Regresar a Lista de Gobernante</span>
                        </Link>

                    </li>
                    <li
                        key={`8`}
                        className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                        style={{
                            margin: 0,
                            padding: 0,
                            position: 'relative',
                            backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                        }}>


                        <Link
                            href={`/categories/jerarquia/imperioAzteca`}
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
                            <span style={{ fontSize: '1.9em', color: '#006400' }}>Imperio azteca (1427-1521) </span>
                        </Link>

                    </li>
                </ul>



            </section>
        </Base1>
    );
};


export default Temprano;
















const XīhuitlTēmoc = () => {
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
                    height: '40vh',
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
                    src="https://pueblodelalunametzitzin.files.wordpress.com/2021/01/chimalpopoca-3.jpg"
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
                    height: '40vh',
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
                <div style={{ margin: 10 }}>
                    <h2></h2>
                    <p>
                        Reinado: 60 días en 1427
                        Detalles: Hijo de Chimalpopoca. Joven en el momento de su adhesión. Su destino es incierto, posiblemente murió en batalla o fue asesinado por un pariente.
                    </p>
                </div>
            </div>


        </ReactCardFlip>
    );
};



const Imperio = (nombreDios, tipoDios, urlImage, texto1) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (

        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div
                    onClick={handleCardClick}
                    style={{
                        width: '100%',
                        height: '40vh',
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        boxShadow: '0px 0px 10px 6px rgba(0, 0, 0, 0.3)',
                        borderRadius: '10px',
                        margin: '10px',
                    }}>

                    <img
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
                        height: '40vh',
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        boxShadow: '0px 0px 9px 6px rgba(0, 0, 0, 0.2)',
                        borderRadius: '10px',
                        margin: '10px',
                    }}>

                    <div style={{ margin: 10 }}>
                        <h2>{tipoDios}
                        </h2>

                        <p style={{
                            fontSize: '0.7rem', // Tamaño de fuente deseado, puedes ajustarlo según tus necesidades
                        }}>
                            {texto1}

                        </p>
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
                        color: 'green', // Establecer el color del texto en verde
                        pointerEvents: 'none', // Desactivar la capacidad de hacer clic en el botón
                    }}
                >
                    {nombreDios}

                </p>
            </div>


        </div>
    );
}