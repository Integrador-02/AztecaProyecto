import React, { useEffect } from 'react';
import { useState } from 'react';
import { Base1 } from "@layouts/Baseof";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie"
const Titulo = () => {
    return (
        <div className="relative h-80 font-text">
            <img
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                src={"https://pueblosoriginarios.com/meso/valle/azteca/codices/magliabechiano/imagenes/60.jpg"}
                alt="Imagen de fondo"
            />
            <div className="relative z-12 flex items-center justify-center h-full">
                <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    <span className="text-green-600">Músicos Aztecas
                    </span>
                </h1>
            </div>
        </div>
    );
};



const Musicos = () => {
    const videoUrl = 'https://example.com/video.mp4';
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const [email, setEmail] = useState('');
    const [selectedOptions2, setSelectedOptions2] = useState(0);
    useEffect(() => {
        const user = Cookies.get('clave');
        setEmail(user);
    }, []);

    useEffect(() => {
        const guardarProgresoJeraquia = async () => {
            const pagina = 'musicos';
            const newCommentObject = {
                id: 1,
                text: 1,
                username: email,
                replyTo: 1,
                likes: 0,
                timestamp: 1,
            };


            const coment = newCommentObject.text
            const correo = newCommentObject.username
            try {
                const response = await axios.post("http://localhost:4000/api/progresorArte", { correo, pagina });
                // Manejo de la respuesta exitosa
                //alert("Registrado correctamente");
            } catch (error) {
                // Manejo de errores en caso de que falle la solicitud al backend
                console.log(error);
                //alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
            }
        };

        if (email) {
            console.log(email)
            guardarProgresoJeraquia();
        }
    }, [email]);

    const handleSubmit = async () => {

        //window.location.href = "/categories/jerarquia/comentarioJeraquia";

    };

    useEffect(() => {
        const handlerRevision = async () => {
            try {
                console.log('sd', email);
                const url = `http://localhost:4000/api/recuperarprogresoArte?correo=${email}`;
                const respuesta = await axios.get(url);
                setSelectedOptions2(respuesta.data.valor); // Utiliza respuesta.data.valor en lugar de respuesta.valor
            } catch (error) {
                console.error('Error al hacer la solicitud:', error);
                // Manejo de errores en caso de que falle la solicitud al backend
                alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
            }
        };

        if (email) {
            handlerRevision();
        }
    }, [email]);
    const TextWithBoldFirstLetter = ({ title, text }) => {
        const firstLetter = text.charAt(0);
        const restOfText = text.slice(1);

        return (
            <div>
                <h1 className="font-bold text-4xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)' }}>
                    <span className="text-green-600">{title}</span>
                </h1>

                <p
                    style={{
                        fontSize: '19px',
                        fontWeight: 'normal',
                        margin: '10px',
                        color: '#000',
                        textAlign: 'justify',
                        lineHeight: '1.7',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    <span >{firstLetter}</span>
                    {restOfText}
                </p>
            </div>
        );
    }

    /**Músicos Aztecas
*/

    return (
        <Base1>
            {/*<Titulo />*/}
            <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>

                <ul className="grid grid-cols-2 gap-1">


                    <TextWithBoldFirstLetter title={'Músicos Aztecas'} text={' Existían numerosos tipos de músicos aztecas en su sociedad. El tipo más obvio era el de los sacerdotes que tocaban música para rituales religiosos y sacrificios. Los juegos rituales, en conjunto con otras actividades, eran ejecutados durante las ceremonias sostenidas al final de cada mes azteca de 20 días. Otro tipo de música era realizada por músicos profesionales de la corte que tenían residencia permanente en el palacio del líder azteca. Eran populares las canciones con grandes bailes circulares entre los músicos de la corte, y a menudo cientos de bailarines formaban parte del entretenimiento. Los músicos de la corte también se presentaban a sus líderes durante los banquetes diarios y para los mercaderes ricos durante sus festines privados. Se creaban nuevos cantos y bailes por estos músicos en honor al líder. El tercer tipo eran los guerreros nobles que se reunían en la llamada “casa de las canciones” para bailar y cantar. Estos músicos también tocaban diversos instrumentos en el campo de batalla.'} />
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/hCLzfcyteq0"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>

                    </iframe>
                </ul>
                


                <ul className="grid grid-cols-2 gap-1" style={{ margin: 5, padding: 30 }}>



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
                            href={`/categories//arte/vida`}
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
                            <span style={{ fontSize: '1.9em', color: '#006400' }}> Regresar a Música</span>
                        </Link>
                    </li>
                </ul>
            </section>

        </Base1>
    );
}

export default Musicos;
