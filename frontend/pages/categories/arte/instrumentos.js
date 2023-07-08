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
                    <span className="text-green-600">Instrumentos Musicales Aztecas
                    </span>
                </h1>
            </div>
        </div>
    );
};



const Instrumentos = () => {
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
            const pagina = 'istrumento';
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
                const response = await axios.post("https://happy-fly-loincloth.cyclic.app/api/progresorArte", { correo, pagina });
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
                const url = `https://happy-fly-loincloth.cyclic.app/api/recuperarprogresoArte?correo=${email}`;
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


    return (
        <Base1>
            <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>

                <ul className="grid grid-cols-2 gap-1">


                    <TextWithBoldFirstLetter title={'Instrumentos Musicales Aztecas'} text={'Los aztecas usaban una gran variedad de instrumentos musicales que incluían tanto de viento como de percusión. Los instrumentos de viento populares usados por los aztecas incluían flautas de arcilla, trompetas de concha de mar y ocarinas. Por otra parte, los instrumentos de percusión populares de los aztecas incluían tambores de varios tipos, rayadores, batidores y sonajeros, entre otros. Los tambores eran particularmente importantes entre los instrumentos musicales aztecas y se hacían de varios tipos.'} />
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/HypFqJgZKXY" 
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

export default Instrumentos;
