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
                                Itzcóatl
                            </Button>
                        </div>
                    </div>



                    <div>
                        <MoctezumaI />
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
                                Moctezuma I
                            </Button>
                        </div>

                    </div>

                    <div>
                        <Atotoztli />
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
                                Atotoztli
                            </Button>
                        </div>

                    </div>

                    <div>
                        <Axayacatl />
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
                                Axayacatl
                            </Button>
                        </div>

                    </div>



                    <div>
                        <Tizoc />
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
                                Tizoc
                            </Button>
                        </div>

                    </div>

                    <div>
                        <Ahuitzotl />
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
                                Ahuitzotl
                            </Button>
                        </div>

                    </div>

                    <div>
                        <MoctezumaII />
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
                                Moctezuma II
                            </Button>
                        </div>

                    </div>

 <div>
                        <Cuitláhuac />
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
                               Cuitláhuac
                            </Button>
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
                    Nombre: Itzcóatl
                    Reinado: 1427-1440 (13 años)
                    Detalles: Hijo de Acamapichtli y esclavo. Derrotó y mató a Maxtla, gobernante tepaneca, y estableció la Triple Alianza con Tetzcoco y Tlacopan. Murió por causas naturales en 1440.                </Typography>

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
                    src="https://cdn1.matadornetwork.com/blogs/2/2018/05/portada-tlatoani.jpg"
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




const MoctezumaI = () => {
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
                    Nombre: Moctezuma I (Moteuczoma Ilhuicamina)
                    Reinado: 1440-1466 (26 años)
                    Detalles: Hijo de Huitzilihuitl. A pesar de enfrentar desastres naturales, Moctezuma I lideró proyectos de construcción y conquistas significativas. Inició la guerra de las flores. Murió por causas naturales en 1466.
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
                    src="https://www.biografiasyvidas.com/biografia/m/fotos/moctezuma_i.jpg"
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




const Atotoztli = () => {
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


                    Nombre: Atotoztli
                    Reinado: 1466-1472 (6 años)
                    Detalles: Hija de Moctezuma I. Dos documentos indican que posiblemente gobernó como tlatoani por derecho propio entre los reinados de Moctezuma I y Axayácatl. Atotoztli fue la única mujer que gobernó como tlatoani en Tenochtitlán. Murió por causas naturales alrededor de 1472.


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
                    src="https://upload.wikimedia.org/wikipedia/commons/2/24/G%C3%A9n%C3%A9alogie_des_seigneurs_de_Tenochtitlan_-_fragment_-_Atotoztli.jpg"
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





const Axayacatl = () => {
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
                    Nombre: Axayacatl
                    Reinado: 1472-1481 (9 años)
                    Detalles: Axayacatl fue el nieto de Itzcóatl y es conocido como un famoso rey guerrero. Durante su reinado, continuó con la construcción de obras y la expansión del imperio. Sin embargo, su vida fue truncada por una enfermedad, falleciendo a la edad de 30 o 31 años.
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
                    src="https://www.infobae.com/new-resizer/BHCvPmPg5qItVSMwrNOZhLJqfqI=/1200x900/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/MMAE5VKGLZHFPITFBUKXL5IQIY.jpg"
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



const Tizoc = () => {
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
                >Nombre: Tizoc
                    Reinado: 1481-1486 (5 años)
                    Detalles: Tizoc fue el nieto de Itzcóatl y sucedió a su hermano Axayácatl como gobernante. A pesar de su salud delicada, Tizoc supervisó la expansión y embellecimiento de Tenochtitlan, así como el establecimiento de puestos de avanzada aztecas en territorios lejanos al centro imperial. Sin embargo, su reinado fue abruptamente interrumpido, ya que se sospecha que fue envenenado

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
                    src="https://pueblosoriginarios.com/biografias/imagenes/tizoc_mini.jpg"
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




const Ahuitzotl = () => {
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
                >Ahuitzotl (1486-1502): Nieto de Itzcóatl. Gobernó durante 16 años y fue conocido por su expansión militar y los numerosos sacrificios humanos. Murió en una inundación de Tenochtitlan.
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
                    src="https://pueblosoriginarios.com/textos/tovar/imagenes/ahuitzotl.jpg"
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

const MoctezumaII = () => {
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
                    Moctezuma II (1502-1520): Hijo de Axayácatl. Gobernó durante 18 años y fortaleció el Imperio Azteca. Sin embargo, su reinado se vio afectado por la llegada de los españoles en 1519, lo que condujo a la conquista del imperio. Su muerte tiene diferentes versiones, posiblemente estrangulado por los españoles o golpeado en la cabeza por una piedra lanzada por uno de sus súbditos durante un discurso.
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
                    src="https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/08/moctezuma-e1504075138432.jpg"
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

const Cuitláhuac = () => {
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
Cuitláhuac (1520): Hijo de Axayácatl. Gobernó durante 80 días como tlatoani y lideró la resistencia contra los españoles en Tenochtitlán. Murió de viruela en diciembre de 1520.                </Typography>
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
                    src="https://upload.wikimedia.org/wikipedia/commons/3/30/Cuitlahuac2.jpg"
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