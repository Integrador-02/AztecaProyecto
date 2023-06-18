import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from "@layouts/Baseof";
import { FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import Button from '@layouts/shortcodes/Button';


const Temprano = () => {
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



    return (
        <Base1 title={"Categorias Aztecas"}>
            <section className="section pt-0">
                <Titulo />


                {/* Temprano Tenochtitlan (1325-1375) y Tlatoque preimperial (1375-1427)*/}
                <ul className="grid grid-cols-2 gap-3" style={{ margin: 0, padding: 0 }}>
                    <div >
                        <Tenoch />
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
                                Tenoch
                            </button>
                        </div>
                    </div>



                    <div>
                        <Acamapichtli />
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
                                Acamapichtli
                            </button>
                        </div>

                    </div>

                    <div>
                        <Huītzilihhuitl />
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
                                Huitzilihuitl
                            </button>
                        </div>

                    </div>

                    <div>
                        <Chīmalpopōca />
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
                                Chīmalpopōca
                            </button>
                        </div>

                    </div>



                    <div>
                        <XīhuitlTēmoc />
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
                                Xihuitl Temoc
                            </button>
                        </div>

                    </div>
                </ul>





            </section>
        </Base1>
    );
};


export default Temprano;

/* Temprano Tenochtitlan (1325-1375) y Tlatoque preimperial (1375-1427)*/
const Tenoch = () => {
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
                    <h2>Tenoch</h2>
                    <p>
                        Reinado aproximado de 1325-1375. Fundador legendario de Tenochtitlan. Pocos detalles conocidos sobre su vida.
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
                    src="https://mexicolindoyquerido.com.mx/mexico2/images/IMAGENES_PARA_TEMPLATE/biografias/P07_Tenoch_Primer_Emperador_Azteca.png"
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



const Acamapichtli = () => {
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
                    <h2>Acamapichtli</h2>
                    <p>
                        Reinado: C. 1375-1390 (15 años)
                        Detalles: Fue un gobernante importante de Tenochtitlan. Ayudó a expandir el territorio y murió de causas naturales.
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
                    src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/AXSTK5BVUNC7NEFWPLHDVXOYAY.jpeg"
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




const Huītzilihhuitl = () => {
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
                    <h2>Huitzilihuitl</h2>
                    <p>
                        Reinado: C. 1391-1414 (23 años)
                        Detalles: Hijo de Acamapichtli. Conquistó tierras en nombre de los tepanecas. Durante su reinado, los mexicas se militarizaron. Murió por causas naturales en torno al año 1410.

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
                    src="https://pueblosoriginarios.com/textos/tovar/imagenes/huitxilhuitl.jpg"
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





const Chīmalpopōca = () => {
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
                    <h2>Chīmalpopōca</h2>
                    <p>
                        Reinado: C. 1415-1427 (18 años)
                        Detalles: Hijo de Acamapichtli. Realizó proyectos de edificación y urbanismo. Considerado el primer mártir mexicano. Se vio envuelto en conflictos sucesorios tepanecas, apoyó al bando equivocado, fue encarcelado y se ahorcó en cautiverio.

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
                    src="https://pueblosoriginarios.com/textos/tovar/imagenes/chimalpopoca.jpg"
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
                    <h2>Xihuitl Temoc</h2>
                    <p>
                        Reinado: 60 días en 1427
                        Detalles: Hijo de Chimalpopoca. Joven en el momento de su adhesión. Su destino es incierto, posiblemente murió en batalla o fue asesinado por un pariente.
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
        </ReactCardFlip>
    );
};



