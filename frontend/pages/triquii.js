import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Base1 } from '@layouts/Baseof';
import TicTacToe from './titack';

const Titulo = () => {
  return (
    <div className="relative h-70 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.arkiplus.com/wp-content/uploads/2016/09/ciudadela-tenochtitlan.jpg"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Triquii</span>
        </h1>
      </div>
    </div>
  );
};
const Triquii = () => {
  useEffect(() => {
    Swal.fire({
      title: '¡Bienvenido a Triquii!',
      text: 'Sumérgete en el clásico juego del Tic Tac Toe y desafía a tus habilidades estratégicas mientras compites contra la computadora. Coloca tus fichas en el tablero y busca formar una línea de tres para ganar. ¡Cada vez que obtengas la victoria, descubrirás un dato curioso sobre los aztecas! Pero si sufres una derrota, ¡te tocará a ti proporcionar un dato curioso! ¿Estás listo para el desafío? ¡Buena suerte y demuéstrale a la máquina quién manda!',
      icon: 'info',
      confirmButtonText: 'Comenzar',
      customClass: {
        'title': 'my-title-style',
        'content': 'my-content-style',
        'confirmButton': 'my-confirm-button-style',
      },
    });
  }, []);
  return (
    <Base1>
      <div className="center-container" style={{ margin:'-5rem' }}>
        <TicTacToe />
      </div>
     
    </Base1>
  );
};

export default Triquii;
