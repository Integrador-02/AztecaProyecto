import { Base1 } from "@layouts/Baseof";
import Link from "next/link";



const Caracteriztica = () => {

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
                        <span className="text-green-600">Características de la Música Azteca</span>
                    </h1>
                </div>
            </div>
        );
    };
    return (
        <Base1 title="Vasijas y Ceramicas">
            <Titulo />

            <div class="sketchfab-embed-wrapper" style={{ margin: 20, padding: 20 }}>
                <div className="grid grid-cols-2 gap-1">

                    <iframe
                        style={{ width: '100%', height: '100%' }}
                        title="Video de música azteca"
                        frameborder="0"
                        allowfullscreen
                        src="https://www.youtube.com/embed/your-video-id"
                    ></iframe>



                    <div>
                        <p style={{
                            fontSize: '23px',
                            fontWeight: 'normal',
                            margin: '25px',
                            color: '#000',
                            textAlign: 'justify',
                            lineHeight: '1.5',
                            fontFamily: 'Arial, sans-serif',
                        }}>
                            La música azteca, reservada para ceremonias religiosas, se caracterizaba por sus propios sonidos, canciones y movimientos de danza con connotaciones religiosas. Acompañaba rituales, incluyendo sacrificios humanos. En el idioma azteca (náhuatl), la música se llamaba (arte de la canción). Era principalmente vocal y se usaban diversos instrumentos, sonajeros y silbatos para alabanzas en el hogar
                        </p>


                    </div>
                </div> </div>
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
                        href={`/categories//arte/musica`}
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
export default Caracteriztica;