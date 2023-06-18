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

const TemplosA = () => {
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
                        <span className="text-green-600">Templos Aztecas Más Famosos</span>
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
                        <Mayor />
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
                                Templo Mayor – Ciudad de México
                            </Button>
                        </div>
                    </div>



                    <div>
                        <Teopanzolco />
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
                                Templos de Teopanzolco – Cuernavaca, Morelos
                            </Button>
                        </div>

                    </div>

                    <div>
                        < Teotihuacán />
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
                                La Pirámide del Sol – Teotihuacán, Estado de México
                            </Button>
                        </div>

                    </div>

                    <div>
                        < Luna />
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
                                Pirámide de la Luna – San Martín de las Pirámides, Estado de México
                            </Button>
                        </div>

                    </div>






                </ul>





            </section>
        </Base1>
    );
};


export default TemplosA;

/* Temprano Tenochtitlan (1325-1375) y Tlatoque preimperial (1375-1427)*/
const Mayor = () => {
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
                    El Templo Mayor de México-Tenochtitlan era un complejo religioso central para los aztecas. Contenía construcciones piramidales y torres, siendo el Templo Mayor la principal estructura. Era el lugar sagrado donde se llevaban a cabo rituales y adoración.                </Typography>
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
                    src="https://curiosfera-historia.com/wp-content/uploads/Templo-Mayor-de-Tenochtitlan.jpg"
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




const Teopanzolco = () => {
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
                    En el valle de Morelos, se encuentra el centro monumental construido en una colina de lava, resultado de la actividad volcánica que cerró el extremo sur de la cuenca de México. Esta región ha sido habitada desde al menos el año 2000 a.C. y ha experimentado un desarrollo regional, influenciado por la cultura teotihuacana durante el periodo Clásico.                </Typography>
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
                    src="https://contigoenladistancia.cultura.gob.mx/assets/uploads/blog/teopanzonco.JPG"
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




const Teotihuacán = () => {
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



                    La Pirámide del Sol en Teotihuacán, construida entre 1 y 150 d.C., es una impresionante estructura de 63,4 metros de altura. En su cúspide había un templo y una estatua, pero ahora solo queda una plataforma cuadrada. En 1971, se descubrió una gruta debajo de la pirámide, accesible a través de un pozo, con varias salas dispuestas como los pétalos de una flor
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
                    src="https://arqueologiamexicana.mx/sites/default/files/styles/arq1200x600/public/sarabiaiv_am92_1.jpg?itok=eqTPLekj"
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




const Luna = () => {
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



                    La Pirámide de la Luna en Teotihuacán es más pequeña que la Pirámide del Sol pero tiene una estructura más antigua. Se utilizaba para rituales religiosos, sacrificios y entierros. También servía como observatorio astronómico y centro ceremonial para honrar a la Gran Diosa de Teotihuacán.                </Typography>
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
                    src="https://journeytomexico.com/wp-content/uploads/2022/12/Pyramid-of-the-Moon.jpg"
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

