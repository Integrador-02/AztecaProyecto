import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from "@layouts/Baseof";
import { FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import Button from '@layouts/shortcodes/Button';
const ImperioAzteca = () => {
    const Titulo = () => {
        return (
            <div className="relative h-80 font-text">
                <img
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                    src={"https://elheraldoslp.com.mx/new/wp-content/uploads/2021/08/1-29-860x1024.jpg"}
                    alt="Imagen de fondo"
                />
                <div className="relative z-12 flex items-center justify-center h-full">
                    <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        <span className="text-green-600">Imperio azteca (1427-1521)
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
                nombreDios: "Itzcóatl",
                tipoDios: "",
                urlImage: "https://cdn1.matadornetwork.com/blogs/2/2018/05/portada-tlatoani.jpg",
                texto1: " Reinado: 1427-1440 (13 años) Hijo de Acamapichtli y esclavo. Derrotó y mató a Maxtla, gobernante tepaneca, y estableció la Triple Alianza con Tetzcoco y Tlacopan. Murió por causas naturales en 1440."
            },
            {
                nombreDios: "MoctezumaI",
                tipoDios: "",
                urlImage: "https://www.biografiasyvidas.com/biografia/m/fotos/moctezuma_i.jpg",
                texto1: "Reinado: 1440-1466 (26 años) Hijo de Huitzilihuitl. A pesar de enfrentar desastres naturales, Moctezuma I lideró proyectos de construcción y conquistas significativas. Inició la guerra de las flores. Murió por causas naturales en 1466."
            },

            {
                nombreDios: "Atotoztli",
                tipoDios: "",
                urlImage: "https://upload.wikimedia.org/wikipedia/commons/2/24/G%C3%A9n%C3%A9alogie_des_seigneurs_de_Tenochtitlan_-_fragment_-_Atotoztli.jpg",
                texto1: " Reinado: 1466-1472 (6 años) Hija de Moctezuma I. Dos documentos indican que posiblemente gobernó como tlatoani por derecho propio entre los reinados de Moctezuma I y Axayácatl. Atotoztli fue la única mujer que gobernó como tlatoani en Tenochtitlán. Murió por causas naturales alrededor de 1472."

            },
            {
                nombreDios: "Axayacatl",
                tipoDios: "",
                urlImage: "https://www.infobae.com/new-resizer/BHCvPmPg5qItVSMwrNOZhLJqfqI=/1200x900/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/MMAE5VKGLZHFPITFBUKXL5IQIY.jpg",
                texto1: "Reinado: 1472-1481 (9 años) Axayacatl fue el nieto de Itzcóatl y es conocido como un famoso rey guerrero. Durante su reinado, continuó con la construcción de obras y la expansión del imperio. Sin embargo, su vida fue truncada por una enfermedad, falleciendo a la edad de 30 o 31 años."

            },





            {
                nombreDios: "Tizoc",
                tipoDios: "",
                urlImage: "https://pueblosoriginarios.com/biografias/imagenes/tizoc_mini.jpg",
                texto1: " Reinado: 1481-1486 (5 años) Tizoc fue el nieto de Itzcóatl y sucedió a su hermano Axayácatl como gobernante. A pesar de su salud delicada, Tizoc supervisó la expansión y embellecimiento de Tenochtitlan, así como el establecimiento de puestos de avanzada aztecas en territorios lejanos al centro imperial. Sin embargo, su reinado fue abruptamente interrumpido, ya que se sospecha que fue envenenado"

            },

            {
                nombreDios: "Ahuitzotl (1486-1502)",
                tipoDios: "",
                urlImage: "https://pueblosoriginarios.com/textos/tovar/imagenes/ahuitzotl.jpg",
                texto1: "Nieto de Itzcóatl. Gobernó durante 16 años y fue conocido por su expansión militar y los numerosos sacrificios humanos. Murió en una inundación de Tenochtitlan."

            },

            {
                nombreDios: "MoctezumaII (1502-1520)",
                tipoDios: "",
                urlImage: "https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/08/moctezuma-e1504075138432.jpg",
                texto1: "Hijo de Axayácatl. Gobernó durante 18 años y fortaleció el Imperio Azteca. Sin embargo, su reinado se vio afectado por la llegada de los españoles en 1519, lo que condujo a la conquista del imperio. Su muerte tiene diferentes versiones, posiblemente estrangulado por los españoles o golpeado en la cabeza por una piedra lanzada por uno de sus súbditos durante un discurso."



            },  //++++++++++++++++++++++
            {
                nombreDios: "Cuitláhuac (1520)",
                tipoDios: "",
                urlImage: "https://upload.wikimedia.org/wikipedia/commons/3/30/Cuitlahuac2.jpg",
                texto1: "Hijo de Axayácatl. Gobernó durante 80 días como tlatoani y lideró la resistencia contra los españoles en Tenochtitlán. Murió de viruela en diciembre de 1520."


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

        return (
            <div className="grid grid-cols-2 gap-4 center" style={{ margin: '10%', marginTop: '-4%', width: '80vw' }} >

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
                <div className="pagination " style={{ justifyContent: 'center', margin: '-2.5rem' }}>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={page === index + 1 ? 'active' : ''}
                            style={{
                                width: '100%', height: '100%',
                                backgroundColor: '#40E0D0',
                                border: '2px solid #40E0D0',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                margin: '5px',
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

            </section>


        </Base1>
    );
};


export default ImperioAzteca;











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
                        height: '50vh',
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
                        height: '50vh',
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