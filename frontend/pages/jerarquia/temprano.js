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
                                Tenoch
                            </Button>
                        </div>
                    </div>



                    <div>
                        <Acamapichtli />
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
                                Acamapichtli
                            </Button>
                        </div>

                    </div>

                    <div>
                        <Huītzilihhuitl />
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

                    <div>
                        <Chīmalpopōca />
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
                                Chīmalpopōca
                            </Button>
                        </div>

                    </div>



                    <div>
                        <XīhuitlTēmoc />
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
                                Xihuitl Temoc
                            </Button>
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
                    Tenoch: Reinado aproximado de 1325-1375. Fundador legendario de Tenochtitlan. Pocos detalles conocidos sobre su vida.
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
                    src="https://mexicolindoyquerido.com.mx/mexico2/images/IMAGENES_PARA_TEMPLATE/biografias/P07_Tenoch_Primer_Emperador_Azteca.png"
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




const Acamapichtli = () => {
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
                    Nombre: Acamapichtli
                    Reinado: C. 1375-1390 (15 años)
                    Detalles: Fue un gobernante importante de Tenochtitlan. Ayudó a expandir el territorio y murió de causas naturales.

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
                    src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/AXSTK5BVUNC7NEFWPLHDVXOYAY.jpeg"
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




const Huītzilihhuitl = () => {
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



                    Nombre: Huitzilihuitl
                    Reinado: C. 1391-1414 (23 años)
                    Detalles: Hijo de Acamapichtli. Conquistó tierras en nombre de los tepanecas. Durante su reinado, los mexicas se militarizaron. Murió por causas naturales en torno al año 1410.


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
                    src="https://pueblosoriginarios.com/textos/tovar/imagenes/huitxilhuitl.jpg"
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





const Chīmalpopōca = () => {
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
                    Nombre: Chīmalpopōca
                    Reinado: C. 1415-1427 (18 años)
                    Detalles: Hijo de Acamapichtli. Realizó proyectos de edificación y urbanismo. Considerado el primer mártir mexicano. Se vio envuelto en conflictos sucesorios tepanecas, apoyó al bando equivocado, fue encarcelado y se ahorcó en cautiverio.

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
                    src="https://pueblosoriginarios.com/textos/tovar/imagenes/chimalpopoca.jpg"
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



const XīhuitlTēmoc = () => {
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
                    Nombre: Xihuitl Temoc
Reinado: 60 días en 1427
Detalles: Hijo de Chimalpopoca. Joven en el momento de su adhesión. Su destino es incierto, posiblemente murió en batalla o fue asesinado por un pariente.

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
                    src="https://pueblodelalunametzitzin.files.wordpress.com/2021/01/chimalpopoca-3.jpg"
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



