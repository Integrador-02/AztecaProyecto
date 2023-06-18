import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from "@layouts/Baseof";
import { FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import Button from '@layouts/shortcodes/Button';


const Colonial = () => {
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
                        <span className="text-green-600">Período colonial (1525-1565)</span>
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
                        <Tlacotzin />
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
                                Tlacotzin
                            </button>
                        </div>
                    </div>



                    <div>
                        <Motelchiuhtzin />
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
                                Motelchiuhtzin
                            </button>
                        </div>

                    </div>

                    <div>
                        < Xochiquentzin />
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
                                Xochiquentzin
                            </button>
                        </div>

                    </div>






                </ul>





            </section>
        </Base1>
    );
};


export default Colonial;

/* Temprano Tenochtitlan (1325-1375) y Tlatoque preimperial (1375-1427)*/

const Tlacotzin = () => {
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
                    boxShadow: '0px 0px 9px 6px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px',
                    margin: '10px',
                }}
            >
                <div style={{ margin: 10 }}>
                    <h2>Tlacotzin (1525-1526)</h2>
                    <p>
                        Nombrado por Hernán Cortés, previamente ocupó un alto cargo político.
                        Aunque disfrutó de una posición privilegiada, murió de una enfermedad en el camino a Tenochtitlán
                        y nunca llegó a tomar el poder en la ciudad.
                    </p>
                </div>
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
                    boxShadow: '0px 0px 10px 6px rgba(0, 0, 0, 0.3)',
                    borderRadius: '10px',
                    margin: '10px',
                }}
            >
                <img
                    src="https://www.noticonquista.unam.mx/sites/default/files/2020-06/cuauhcozcatzin.jpg"
                    alt="Back Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                />
            </div>
        </ReactCardFlip>
    );
};

const Motelchiuhtzin = () => {
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
                    boxShadow: '0px 0px 9px 6px rgba(0, 0, 0, 0.2)',
                    borderRadius: '9px',
                    margin: '8px',
                }}
            >
                <div style={{ margin: 10 }}>
                    <h2> Motelchiuhtzin</h2>
                    <p>
                        Andrés de Tapia Motelchiuh, un plebeyo de Tenochtitlán y destacado capitán militar, fue rápidamente designado por Hernán Cortés después de la muerte de Tlacotzin. Sin embargo, fue asesinado por una flecha durante una batalla con Colhuacan.
                    </p>
                </div>
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
                    boxShadow: '0px 0px 10px 6px rgba(0, 0, 0, 0.3)',
                    borderRadius: '10px',
                    margin: '10px',
                }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Motelchiuhtzin.png"
                    alt="Back Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                />
            </div>
        </ReactCardFlip>
    );
};

const Xochiquentzin = () => {
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
                    boxShadow: '0px 0px 9px 6px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px',
                    margin: '10px',
                }}
            >
                <div style={{ margin: 10 }}>
                    <h2>Xochiquentzin (1532-1536)</h2>
                    <p>
                        Pablo Xochiquentzin, un comunero que previamente había servido como calpixqui, gobernó durante 4 años. Falleció por causas naturales.
                    </p>
                </div>
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
                    boxShadow: '0px 0px 10px 6px rgba(0, 0, 0, 0.3)',
                    borderRadius: '10px',
                    margin: '10px',
                }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Xochiquetzal.jpg/220px-Xochiquetzal.jpg" alt="Back Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                />
            </div>
        </ReactCardFlip>
    );
};
