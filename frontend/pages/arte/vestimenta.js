import { Base1 } from "@layouts/Baseof";
import Link from "next/link";
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
const Titulo = () => {
    return (
        <div className="relative h-80 font-text">
            <img
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                src={"https://ae01.alicdn.com/kf/Hf9be0b1eca7345489c81df96d5c4aeb6V/Dragon-azteca-FireworkPolyester-Cotton-4-way-Stretch-tela-Patchwork-coseing-Kid-Home-Textile-Cloth-Quilting-Dress.jpg"}
                alt="Imagen de fondo"
            />
            <div className="relative z-12 flex items-center justify-center h-full">
                <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    <span className="text-green-600">Vestimenta típica de los aztecas
                    </span>
                </h1>
            </div>
        </div>
    );
};

const Textiles = () => {

    return (
        <Base1>
            <Titulo />

            <div className="sketchfab-embed-wrapper" style={{ marginTop: '40px' }} >
                <ul className="grid grid-cols-2 gap-3" style={{ margin: 0, padding: 0 }}>



                    <p style={{
                        fontSize: '23px',
                        fontWeight: 'normal',
                        margin: '20px',
                        color: '#000',
                        textAlign: 'justify',
                        lineHeight: '1.5',
                        fontFamily: 'Arial, sans-serif',
                    }}>
                        La vestimenta de los aztecas reflejaba la forma de vida y el rol social de cada individuo. Los accesorios, adornos y peinados eran elementos importantes para comprender la vestimenta típica de los aztecas. El estilo de ropa variaba según el sexo, la edad y la ocupación, ya fueran militares, religiosos, gobernantes o trabajadores.                    </p>

                    <div >

                        <p style={{
                            fontSize: '23px',
                            fontWeight: 'normal',
                            margin: '20px',
                            color: '#000',
                            textAlign: 'justify',
                            lineHeight: '1.5',
                            fontFamily: 'Arial, sans-serif',
                        }}>
                            Los aztecas utilizaban diversos materiales para fabricar su ropa, siendo los más comunes la fibra de algodón y la fibra de ayate obtenida del cactus de maguey. El algodón se consideraba un material exclusivo reservado para la nobleza y las personas de poder. Incluso se cree que un plebeyo que fuera sorprendido usando ropa de algodón podía ser condenado a muerte, según mencionan algunos historiadores</p>



                    </div>

                </ul></div>


            <ul className="grid grid-cols-4 gap-1" style={{ margin: 0, padding: 10 }}>
                <div>

                    <Textile
                        imageUrl="https://th.bing.com/th/id/OIP.c55B1qO73mr967dbafO7RwAAAA?pid=ImgDet&rs=1"
                        text="Vestía las mejores y más delicadas prendas y ornamentos, junto con un tocado real que solo él podía utilizar. Las plumas de quetzal caracterizaban su penacho."
                    />
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
                    <Textile
                        imageUrl="https://i.pinimg.com/474x/f1/7b/0c/f17b0cdeb7857b42bcaedb55f1a9b347.jpg"
                        text="A ellos les correspondía una indumentaria que los caracterizaba como representantes de la fauna local más fuerte y astuta"
                    />
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
                            Guerreros de élite </button>
                    </div>
                </div>
                <div>

                    <Textile
                        imageUrl="https://th.bing.com/th/id/R.71dce0425a6898e956a1c430c60d3de4?rik=8YVrtC07Xn71zg&riu=http%3a%2f%2fpbs.twimg.com%2fmedia%2fCOuhZ_FUkAAYh89.jpg&ehk=wOmEGone%2fauPC%2fSchYlgC86%2beEMIqY7ff3EygN0pxUY%3d&risl=&pid=ImgRaw&r=0"
                        text="Su ropa era confeccionada por mujeres escogidas por su pericia, principalmente en el bordado. Sus atuendos variaban según la importancia del sacerdote."
                    />

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
                            Sacerdotes
                        </button>
                    </div>
                </div>
                <div>
                    <Textile
                        imageUrl="https://th.bing.com/th/id/OIP.JBiu3xwkt8bF3Z6wM9jcFAAAAA?pid=ImgDet&rs=1"
                        text="Apenas vestían modelos de taparrabos (maztlat) y en ocasiones una capa (tlimatl). Las mujeres usaban el huipil (camisa) y un chal (quechquemitl)."
                    />
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
                            Campesino                        </button>
                    </div>
                </div>



            </ul>



            <ul className="grid grid-cols-2 gap-1" style={{ margin: 0, padding: 10 }}>



                <li
                    key={`3`}
                    className="block rounded-lg overflow-hidden transition transform hover:scale-105"
                    style={{
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        backgroundImage: 'url("/images/arte.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                    }}
                >
                    <Link
                        href={`/arte`}
                        className="flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        }}
                    >
                        <span style={{ fontSize: '1.9em', color: '#006400' }}> Regresar a Arte</span>
                    </Link>
                </li>
            </ul>

        </Base1>
    )

}

export default Textiles;

const Textile = ({ imageUrl, text }) => {
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
                    height: '90vh',
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
                    src={imageUrl}
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
                    height: '90vh',
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
                <div style={{ margin: '1rem' }}>
                    <p>{text}</p>
                </div>
            </div>
        </ReactCardFlip>
    );
};
