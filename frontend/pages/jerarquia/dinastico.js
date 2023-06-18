import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from "@layouts/Baseof";
import { FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import { Select, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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
                            <Button
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
                            </Button>
                        </div>
                    </div>



                    <div>
                        <Tehuetzquititzin />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
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
                            </Button>
                        </div>

                    </div>

                    <div>
                        < Cecetzin />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
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
                            </Button>
                        </div>

                    </div>
                    
                    <div>
                        < Cipac />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
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
                            </Button>
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
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(!flipped);
    };

    return (
        <Card
            onClick={handleCardClick}
            style={{
                width: '100%',
                height: '50vh',
                perspective: '1000vh',
                transformStyle: 'preserve-3d',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
            }}
        >
            <CardContent
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '50vh',
                    backfaceVisibility: 'hidden',
                    transform: flipped ? 'rotateY(0)' : 'rotateY(180deg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'lightgreen',
                    overflow: 'hidden', // Agregado para ocultar el desbordamiento
                }}
            >
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                    style={{
                        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
                        fontSize: '16px', // Ajusta el tamaño de fuente según tus preferencias
                        lineHeight: '1.5', // Ajusta el espaciado entre líneas según tus preferencias
                        textAlign: 'center', // Ajusta el alineamiento del texto según tus preferencias
                    }}
                >
                    Huanitzin (1538-1541): Diego de Alvarado Huanitzin, nieto de Axayácatl, fue designado por los españoles debido a su popularidad entre los nahuas y su habilidad para hablar español. Su reinado marcó la restauración de la línea real. Se le considera un destacado gobernante mexica del período colonial. Falleció por causas naturales.                </Typography>
            </CardContent>
            <CardContent
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '50vh',
                    backfaceVisibility: 'hidden',
                    transform: flipped ? 'rotateY(-180deg)' : 'rotateY(0)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/18/Huanitzin2.jpg"
                    alt="Front Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </CardContent>
        </Card>
    );
};




const Tehuetzquititzin = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(!flipped);
    };

    return (
        <Card
            onClick={handleCardClick}
            style={{
                width: '100%',
                height: '50vh',
                perspective: '1000vh',
                transformStyle: 'preserve-3d',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
            }}
        >
            <CardContent
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '50vh',
                    backfaceVisibility: 'hidden',
                    transform: flipped ? 'rotateY(0)' : 'rotateY(180deg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'lightgreen',
                    overflow: 'hidden', // Agregado para ocultar el desbordamiento
                }}
            >
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                    style={{
                        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
                    }}
                >

                    Tehuetzquititzin (1541-1554): Diego de San Francisco Tehuetzquititzin, nieto de Tizoc, fue nombrado por el virrey español a sugerencia de la nobleza nahua. Gozaba de gran popularidad entre sus súbditos y trabajó arduamente para proteger los recursos de su comunidad y la riqueza de su familia frente a los señores coloniales. Durante su reinado, una epidemia devastadora golpeó la región en la década de 1540. Falleció por causas naturales.                </Typography>
            </CardContent>
            <CardContent
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: flipped ? 'rotateY(-180deg)' : 'rotateY(0)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',

                }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Tizoc.jpg"
                    alt="Front Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </CardContent>
        </Card>
    );
};




const Cecetzin = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(!flipped);
    };

    return (
        <Card
            onClick={handleCardClick}
            style={{
                width: '100%',
                height: '50vh',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
            }}
        >
            <CardContent
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: flipped ? 'rotateY(0)' : 'rotateY(180deg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'lightgreen', // Establecer el fondo verde claro

                }}
            >
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                    style={{
                        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
                    }}
                >



                    Cecetzin (1557-1562): Cristóbal de Guzmán Cecetzin, hijo de Huanitzin, fue designado como gobernante por el virrey español, siguiendo la recomendación de la nobleza nahua. Se desconoce la razón del largo periodo interino que precedió a su ascenso al trono. Durante su reinado, se dedicó a gobernar y preservar los intereses de su comunidad. Falleció por causas naturales en el año 1562.
                </Typography>
            </CardContent>
            <CardContent
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: flipped ? 'rotateY(-180deg)' : 'rotateY(0)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',

                }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/47/Cipac_%28Aubin_Codex%29.png"
                    alt="Front Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </CardContent>
        </Card>
    );
};

const Cipac = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(!flipped);
    };

    return (
        <Card
            onClick={handleCardClick}
            style={{
                width: '100%',
                height: '50vh',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
            }}
        >
            <CardContent
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: flipped ? 'rotateY(0)' : 'rotateY(180deg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'lightgreen', // Establecer el fondo verde claro

                }}
            >
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                    style={{
                        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
                    }}
                >



                    Cipac (1563-1565): Luis de Santa María Cipac, también conocido como Nanacacipactzin, era nieto de Ahuitzotl y fue el último tlatoani. Fue designado como gobernante por el virrey español, siguiendo la recomendación de la nobleza nahua. Sin embargo, su mandato estuvo lleno de problemas legales y desacuerdos sobre impuestos con las autoridades coloniales. Lamentablemente, su salud se vio afectada debido al estrés de su cargo y falleció en diciembre de 1565.                </Typography>
            </CardContent>
            <CardContent
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: flipped ? 'rotateY(-180deg)' : 'rotateY(0)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',

                }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Codex_Borbonicus.jpg"
                    alt="Front Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </CardContent>
        </Card>
    );
};






