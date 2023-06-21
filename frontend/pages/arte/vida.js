
import { Base1 } from "@layouts/Baseof";
import Link from "next/link";

import { markdownify } from "@lib/utils/textConverter";



const Vida = () => {

    const Titulo = () => {
        return (
            <div className="relative h-80 font-text">
                <img
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                    src={"https://cultura-azteca.com/wp-content/uploads/2017/10/Musica-azteca-2.jpg"}
                    alt="Imagen de fondo"
                />
                <div className="relative z-12 flex items-center justify-center h-full">
                    <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        <span className="text-green-600"> La Música en sus Vidas Diarias</span>
                    </h1>
                </div>
            </div>
        );
    };
    return (
        <Base1 title="Vasijas y Ceramicas">
            <Titulo />

            <div class="sketchfab-embed-wrapper" style={{ margin: 20, padding: 20 }}>






                <p style={{
                    fontSize: '23px',
                    fontWeight: 'normal',
                    margin: '25px',
                    color: '#000',
                    textAlign: 'justify',
                    lineHeight: '1.5',
                    fontFamily: 'Arial, sans-serif',
                }}> La música jugaba un rol muy importante en la vida diaria de los Aztecas. Aunque fuera una ceremonia religiosa o una alabanza en casa, se utilizaba música. Aparte de eso, la música también acompañaba sus festivales culturales y ceremonias. En casa, la gente común tenía varios silbatos y sonajeros los cuales usaban para sus alabanzas. El uso de silbatos también se extendía a los cazadores para atraer a sus presas. En los templos, los Aztecas tenían diferentes himnos para diferentes grupos sociales y se tocaban instrumentos tales como tambores y grandes palos-sonajeros durante los rituales religiosos y sacrificios. Durante los sacrificios se tocaban también trompetas, para anunciar los tiempos de penitencia. Por lo tanto, la música jugaba un rol muy importante en la vida diaria de tanto el dominio público como el privado.

                </p>


                <ul className="grid grid-cols-3 gap-1" style={{ margin: 10, padding: 30 }}>
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
                            href={`/arte/guerreros`}
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
                            <span style={{ fontSize: '1.9em', color: '#006400' }}> Guerreros y Música Azteca
                            
                            </span>
                        </Link>
                    </li>
                    <li
                        key={`4`}
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
                            href={`/arte/musicos`}
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
                            <span style={{ fontSize: '1.9em', color: '#006400' }}> Músicos Aztecas
                            
                            </span>
                        </Link>
                    </li>
                    <li
                        key={`5`}
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
                            href={`/arte/instrumentos`}
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
                            <span style={{ fontSize: '1.9em', color: '#006400' }}>Instrumentos Musicales Aztecas

                            
                            </span>
                        </Link>
                    </li>

                </ul>


            </div>

            <ul className="grid grid-cols-2 gap-1" style={{ margin: 10, padding: 30 }}>



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
                        href={`/arte/musica`}
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
                        <span style={{ fontSize: '1.9em', color: '#006400' }}> Regresar a Musica</span>
                    </Link>
                </li>
            </ul>





        </Base1>


    );
}
export default Vida;