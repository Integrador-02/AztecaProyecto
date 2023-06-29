import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from "@layouts/Baseof";
import { FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import Button from '@layouts/shortcodes/Button';


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

    
    const Carta = () => {
        const [page, setPage] = useState(1);
        const itemsPerPage = 3; // Número de imágenes por página
        const dioses = [
          {
            nombreDios: "Tlacotzin (1525-1526)",
            tipoDios: "",
            urlImage: "https://www.noticonquista.unam.mx/sites/default/files/2020-06/cuauhcozcatzin.jpg",
            texto1: "  Nombrado por Hernán Cortés, previamente ocupó un alto cargo político.Aunque disfrutó de una posición privilegiada, murió de una enfermedad en el camino a Tenochtitlán y nunca llegó a tomar el poder en la ciudad.."
          },
          {
            nombreDios: "Motelchiuhtzin",
            tipoDios: "",
            urlImage:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Motelchiuhtzin.png",
            texto1: "Andrés de Tapia Motelchiuh, un plebeyo de Tenochtitlán y destacado capitán militar, fue rápidamente designado por Hernán Cortés después de la muerte de Tlacotzin. Sin embargo, fue asesinado por una flecha durante una batalla con Colhuacan."
          },
      
          {
            nombreDios: "Xochiquentzin (1532-1536)",
            tipoDios: "",
            urlImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Xochiquetzal.jpg/220px-Xochiquetzal.jpg",
            texto1: "Pablo Xochiquentzin, un comunero que previamente había servido como calpixqui, gobernó durante 4 años. Falleció por causas naturales."
      
          }
      
               
               
      
          // Agrega más objetos aquí
        ];

        // Calcula el número total de páginas
  const totalPages = Math.ceil(dioses.length / itemsPerPage);

  // Calcula los índices de inicio y fin según la página actual y los elementos por página
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Obtiene las imágenes para la página actual
  const paginatedImages = dioses.slice(start, end);

  // Calcula el número total de filas necesarias para las cartas paginadas
  const totalRows = Math.ceil(paginatedImages.length / 3);

  // Función para cambiar de página
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div   className="grid grid-cols-3 gap-4 center" style={{ margin:'10%', marginTop:'-4%' , width: '80vw'}} >
      
      {/* Mostrar las cartas  paginadas */}
        {paginatedImages.map((dioses, index) => (
          <li key={index}>
            {colonial2(
             dioses.nombreDios,
             dioses.tipoDios,
             dioses.urlImage,
             dioses.texto1
            )}
          </li>
        ))}

      {/* Agregar iconos de paginación */}
      <div className="pagination " style={{  justifyContent: 'center',margin:'-2.5rem'}}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={page === index + 1 ? 'active' : ''}
            style={{
             width: '100%', height: '100%',
              backgroundColor: '#40E0D0',
              border: '2px solid #40E0D0',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              margin: '5px',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </div>
    
  );
};



    return (
        <Base1 title={"Categorias Aztecas"}>
            <section className="section pt-0">
                <Titulo />
                <Carta/>
            </section>
        </Base1>
    );
};


export default Colonial;

/* Temprano Tenochtitlan (1325-1375) y Tlatoque preimperial (1375-1427)*/







const colonial2 = (nombreDios, tipoDios, urlImage, texto1) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };
  
    return (
  
      <div>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div
            onClick={handleCardClick}
            style={{
                width: '100%',
                height: '50vh',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '0px 0px 10px 6px rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                margin: '10px',
            }}>
              
            <img
              src={urlImage}
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
                height: '50vh',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '0px 0px 9px 6px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                margin: '10px',
            }}>
              
            <div style={{ margin: 10 }}>
              <h2>{tipoDios}
              </h2>
              
              <p style={{
      fontSize: '0.7rem', // Tamaño de fuente deseado, puedes ajustarlo según tus necesidades
    }}>
                {texto1}
                
              </p>
            </div>
            
          </div>
          
        </ReactCardFlip>
      
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p
              style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'green', // Establecer el color del texto en verde
                  pointerEvents: 'none', // Desactivar la capacidad de hacer clic en el botón
              }}
            >
              {nombreDios}
    
          </p>
        </div>
  
   
      </div>
    );
  }