import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from "@layouts/Baseof";
import { FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Dinastico = () => {
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
                        <span className="text-green-600">Reanudación del gobierno dinástico (1538-1565)</span>
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
                        <Huanitzin />
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
                                Huanitzin
                            </button>
                        </div>
                    </div>



                    <div>
                        <Tehuetzquititzin />
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
                                Tehuetzquititzin
                            </button>
                        </div>

                    </div>

                    <div>
                        < Cecetzin />
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
                                Cecetzin
                            </button>
                        </div>

                    </div>
                    
                    <div>
                        < Cipac />
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
                                Cipac
                            </button>
                        </div>

                    </div>






                </ul>





            </section>
        </Base1>
    );
};


export default Dinastico;

/* Temprano Tenochtitlan (1325-1375) y Tlatoque preimperial (1375-1427)*/
const Huanitzin = () => {
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
                    <h2> Huanitzin (1538-1541)</h2>
                    <p>
                    Diego de Alvarado Huanitzin, nieto de Axayácatl, fue designado por los españoles debido a su popularidad entre los nahuas y su habilidad para hablar español. Su reinado marcó la restauración de la línea real. Se le considera un destacado gobernante mexica del período colonial. Falleció por causas naturales.
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
                    src="https://upload.wikimedia.org/wikipedia/commons/1/18/Huanitzin2.jpg"
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




const Tehuetzquititzin = () => {
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
                    <h2>Tehuetzquititzin (1541-1554)</h2>
                    <p>
                    Diego de San Francisco Tehuetzquititzin, nieto de Tizoc, fue nombrado por el virrey español a sugerencia de la nobleza nahua. Gozaba de gran popularidad entre sus súbditos y trabajó arduamente para proteger los recursos de su comunidad y la riqueza de su familia frente a los señores coloniales. Durante su reinado, una epidemia devastadora golpeó la región en la década de 1540. Falleció por causas naturales.
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
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Tizoc.jpg"
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



const Cecetzin = () => {
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
                    <h2>Cecetzin (1557-1562)</h2>
                    <p>
                    Cristóbal de Guzmán Cecetzin, hijo de Huanitzin, fue designado como gobernante por el virrey español, siguiendo la recomendación de la nobleza nahua. Se desconoce la razón del largo periodo interino que precedió a su ascenso al trono. Durante su reinado, se dedicó a gobernar y preservar los intereses de su comunidad. Falleció por causas naturales en el año 1562.
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
                    src="https://upload.wikimedia.org/wikipedia/commons/4/47/Cipac_%28Aubin_Codex%29.png"
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
const Cipac= () => {
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
                    <h2>Cipac (1563-1565)</h2>
                    <p>
                    Luis de Santa María Cipac, también conocido como Nanacacipactzin, era nieto de Ahuitzotl y fue el último tlatoani. Fue designado como gobernante por el virrey español, siguiendo la recomendación de la nobleza nahua. Sin embargo, su mandato estuvo lleno de problemas legales y desacuerdos sobre impuestos con las autoridades coloniales. Lamentablemente, su salud se vio afectada debido al estrés de su cargo y falleció en diciembre de 1565.
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
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Codex_Borbonicus.jpg"
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





