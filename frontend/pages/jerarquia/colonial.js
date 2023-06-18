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
                                Tlacotzin
                            </Button>
                        </div>
                    </div>



                    <div>
                        <Motelchiuhtzin />
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
                                Motelchiuhtzin
                            </Button>
                        </div>

                    </div>

                    <div>
                        < Xochiquentzin />
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
                                Huitzilihuitl
                            </Button>
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
                    Tlacotzin (1525-1526): Nombrado por Hernán Cortés, previamente ocupó un alto cargo político. Aunque disfrutó de una posición privilegiada, murió de una enfermedad en el camino a Tenochtitlán y nunca llegó a tomar el poder en la ciudad.
                </Typography>
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
                    src="https://www.noticonquista.unam.mx/sites/default/files/2020-06/cuauhcozcatzin.jpg"
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




const Motelchiuhtzin = () => {
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
                    Motelchiuhtzin (1525/1526-1530/1531): Andrés de Tapia Motelchiuh, un plebeyo de Tenochtitlán y destacado capitán militar, fue rápidamente designado por Hernán Cortés después de la muerte de Tlacotzin. Sin embargo, fue asesinado por una flecha durante una batalla con Colhuacan.
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
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Motelchiuhtzin.png"
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




const Xochiquentzin = () => {
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



                    Xochiquentzin (1532-1536): Pablo Xochiquentzin, un comunero que previamente había servido como calpixqui, gobernó durante 4 años. Falleció por causas naturales.

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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Xochiquetzal.jpg/220px-Xochiquetzal.jpg"
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




