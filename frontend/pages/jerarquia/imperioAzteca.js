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



    return (
        <Base1 title={"Categorias Aztecas"}>
            <section className="section pt-0">
                <Titulo />


                {/* Temprano Tenochtitlan (1325-1375) y Tlatoque preimperial (1375-1427)*/}
                <ul className="grid grid-cols-2 gap-3" style={{ margin: 0, padding: 0 }}>
                    <div >
                        <Itzcóatl />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'green', // Establecer el color del texto en verde
                                    pointerEvents: 'none', // Desactivar la capacidad de hacer clic en el botón
                                }}
                            >
                                Itzcóatl
                            </button>
                        </div>
                    </div>



                    <div>
                        <MoctezumaI />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'green', // Establecer el color del texto en verde
                                    pointerEvents: 'none', // Desactivar la capacidad de hacer clic en el botón
                                }}
                            >
                                Moctezuma I
                            </button>
                        </div>

                    </div>

                    <div>
                        <Atotoztli />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'green', // Establecer el color del texto en verde
                                    pointerEvents: 'none', // Desactivar la capacidad de hacer clic en el botón
                                }}
                            >
                                Atotoztli
                            </button>
                        </div>

                    </div>

                    <div>
                        <Axayacatl />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'green', // Establecer el color del texto en verde
                                    pointerEvents: 'none', // Desactivar la capacidad de hacer clic en el botón
                                }}
                            >
                                Axayacatl
                            </button>
                        </div>

                    </div>



                    <div>
                        <Tizoc />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'green', // Establecer el color del texto en verde
                                    pointerEvents: 'none', // Desactivar la capacidad de hacer clic en el botón
                                }}
                            >
                                Tizoc
                            </button>
                        </div>

                    </div>

                    <div>
                        <Ahuitzotl />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'green', // Establecer el color del texto en verde
                                    pointerEvents: 'none', // Desactivar la capacidad de hacer clic en el botón
                                }}
                            >
                                Ahuitzotl
                            </button>
                        </div>

                    </div>

                    <div>
                        <MoctezumaII />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'green', // Establecer el color del texto en verde
                                    pointerEvents: 'none', // Desactivar la capacidad de hacer clic en el botón
                                }}
                            >
                                Moctezuma II
                            </button>
                        </div>

                    </div>

 <div>
                        <Cuitláhuac />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'green', // Establecer el color del texto en verde
                                    pointerEvents: 'none', // Desactivar la capacidad de hacer clic en el botón
                                }}
                            >
                               Cuitláhuac
                            </button>
                        </div>

                    </div>
                </ul>
               


             


                



            </section>
        </Base1>
    );
};


export default ImperioAzteca;

/* Temprano Tenochtitlan (1325-1375) y Tlatoque preimperial (1375-1427)*/
const Itzcóatl = () => {
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
                    height: '50vh',
                    backgroundColor: 'lightgreen',
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
                    src="https://cdn1.matadornetwork.com/blogs/2/2018/05/portada-tlatoani.jpg"
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
                    backgroundColor: 'lightgreen',
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
                    <h2>Itzcóatl</h2>
                    <p>
                    Reinado: 1427-1440 (13 años)
                    Detalles: Hijo de Acamapichtli y esclavo. Derrotó y mató a Maxtla, gobernante tepaneca, y estableció la Triple Alianza con Tetzcoco y Tlacopan. Murió por causas naturales en 1440.                        </p>
                </div>
            </div>

          
        </ReactCardFlip>
    );
};




const MoctezumaI = () => {
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
                    height: '50vh',
                    backgroundColor: 'lightgreen',
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
                    src="https://www.biografiasyvidas.com/biografia/m/fotos/moctezuma_i.jpg"
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
                    backgroundColor: 'lightgreen',
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
                    <h2>Moctezuma I</h2>
                    <p>
                    Reinado: 1440-1466 (26 años)
                    Detalles: Hijo de Huitzilihuitl. A pesar de enfrentar desastres naturales, Moctezuma I lideró proyectos de construcción y conquistas significativas. Inició la guerra de las flores. Murió por causas naturales en 1466.                    </p>
                </div>
            </div>

          
        </ReactCardFlip>
    );
};



const Atotoztli = () => {
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
                    height: '50vh',
                    backgroundColor: 'lightgreen',
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
                    src="https://upload.wikimedia.org/wikipedia/commons/2/24/G%C3%A9n%C3%A9alogie_des_seigneurs_de_Tenochtitlan_-_fragment_-_Atotoztli.jpg"
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
                    backgroundColor: 'lightgreen',
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
                    <h2> Atotoztli</h2>
                    <p>
                    Reinado: 1466-1472 (6 años)
                    Detalles: Hija de Moctezuma I. Dos documentos indican que posiblemente gobernó como tlatoani por derecho propio entre los reinados de Moctezuma I y Axayácatl. Atotoztli fue la única mujer que gobernó como tlatoani en Tenochtitlán. Murió por causas naturales alrededor de 1472.                    </p>
                </div>
            </div>

         
        </ReactCardFlip>
    );
};





const Axayacatl = () => {
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
                    height: '50vh',
                    backgroundColor: 'lightgreen',
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
                    src="https://www.infobae.com/new-resizer/BHCvPmPg5qItVSMwrNOZhLJqfqI=/1200x900/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/MMAE5VKGLZHFPITFBUKXL5IQIY.jpg"
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
                    backgroundColor: 'lightgreen',
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
                    <h2>Axayacatl</h2>
                    <p>
                    Reinado: 1472-1481 (9 años)
                    Detalles: Axayacatl fue el nieto de Itzcóatl y es conocido como un famoso rey guerrero. Durante su reinado, continuó con la construcción de obras y la expansión del imperio. Sin embargo, su vida fue truncada por una enfermedad, falleciendo a la edad de 30 o 31 años.                    </p>
                </div>
            </div>

          
        </ReactCardFlip>
    );
};


const Tizoc = () => {
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
                    height: '50vh',
                    backgroundColor: 'lightgreen',
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
                    src="https://pueblosoriginarios.com/biografias/imagenes/tizoc_mini.jpg"
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
                    backgroundColor: 'lightgreen',
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
                    <h2>Tizoc</h2>
                    <p>
                    Reinado: 1481-1486 (5 años)
                    Detalles: Tizoc fue el nieto de Itzcóatl y sucedió a su hermano Axayácatl como gobernante. A pesar de su salud delicada, Tizoc supervisó la expansión y embellecimiento de Tenochtitlan, así como el establecimiento de puestos de avanzada aztecas en territorios lejanos al centro imperial. Sin embargo, su reinado fue abruptamente interrumpido, ya que se sospecha que fue envenenado
                    </p>
                </div>
            </div>

          
        </ReactCardFlip>
    );
};



const Ahuitzotl = () => {
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
                    height: '50vh',
                    backgroundColor: 'lightgreen',
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
                    src="https://pueblosoriginarios.com/textos/tovar/imagenes/ahuitzotl.jpg"
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
                    backgroundColor: 'lightgreen',
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
                    <h2>Ahuitzotl (1486-1502)</h2>
                    <p>
                    Nieto de Itzcóatl. Gobernó durante 16 años y fue conocido por su expansión militar y los numerosos sacrificios humanos. Murió en una inundación de Tenochtitlan.                    </p>
                </div>
            </div>

         
        </ReactCardFlip>
    );
};
const MoctezumaII = () => {
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
                    height: '50vh',
                    backgroundColor: 'lightgreen',
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
                    src="https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/08/moctezuma-e1504075138432.jpg"
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
                    backgroundColor: 'lightgreen',
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
                    <h2>Moctezuma II (1502-1520)</h2>
                    <p>
                    Hijo de Axayácatl. Gobernó durante 18 años y fortaleció el Imperio Azteca. Sin embargo, su reinado se vio afectado por la llegada de los españoles en 1519, lo que condujo a la conquista del imperio. Su muerte tiene diferentes versiones, posiblemente estrangulado por los españoles o golpeado en la cabeza por una piedra lanzada por uno de sus súbditos durante un discurso.                    </p>
                </div>
            </div>

         
        </ReactCardFlip>
    );
};

const Cuitláhuac = () => {
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
                    height: '50vh',
                    backgroundColor: 'lightgreen',
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
                    src="https://upload.wikimedia.org/wikipedia/commons/3/30/Cuitlahuac2.jpg"
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
                    backgroundColor: 'lightgreen',
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
                    <h2>Cuitláhuac (1520):</h2>
                    <p>
                    Hijo de Axayácatl. Gobernó durante 80 días como tlatoani y lideró la resistencia contra los españoles en Tenochtitlán. Murió de viruela en diciembre de 1520.                     </p>
                </div>
            </div>

        
        </ReactCardFlip>
    );
};