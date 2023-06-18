/**
 * 
 *Clase donde sale la lista de emparadores que han gobernado el imperio azteca
 */
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

const Emperador = () => {
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
            <span className="text-green-600">Lista de Gobernantes de Tenochtitlán: Períodos y Tlatoque destacados</span>
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
        <div className="text-center" style={{ padding: 30 }}>

          <p style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif',
          }}>

            Tenochtitlán fue la capital del Imperio Azteca en la actual Ciudad de México.
            Desde su fundación en 1325 hasta su destrucción en 1521, los gobernantes de Tenochtitlán,
            conocidos como tlatoque, ejercieron el poder. Bajo el liderazgo de Moctezuma II,
            alcanzaron la máxima autoridad en el imperio. Sin embargo, en 1521, Tenochtitlán fue conquistada 
            por los españoles y el cargo de tlatoani fue abolido en 1565.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-1" style={{ margin: 0, padding: 0 }}>
          <li
            key={`7`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
            }}>


            <Link
              href={`/jerarquia/temprano`}
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
              <span style={{ fontSize: '1.9em', color: '#006400' }}>Temprano Tenochtitlan (1325-1375) y Tlatoque preimperial (1375-1427)</span>
            </Link>

          </li>

          <li
            key={`8`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
            }}>


            <Link
              href={`/jerarquia/imperioAzteca`}
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
              <span style={{ fontSize: '1.9em', color: '#006400' }}>Imperio azteca (1427-1521) </span>
            </Link>

          </li>

         



          <li
            key={`9`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
            }}>


            <Link
              href={`/jerarquia/colonial`}
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
              <span style={{ fontSize: '1.9em', color: '#006400' }}>Período colonial (1525-1565)</span>
            </Link>

          </li>
          <li
            key={`10`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
            }}>


            <Link
              href={`/jerarquia/dinastico`}
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
              <span style={{ fontSize: '1.9em', color: '#006400' }}>Reanudación del gobierno dinástico (1538-1565)</span>
            </Link>

          </li>



        </ul>







      </section>
    </Base1>
  );
};


export default Emperador;

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tenoch.jpg/80px-Tenoch.jpg"
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
          Tenoch
          Nombre	Reinado	Sucesión y notas	detalles de la vida

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Codex_Mendoza_folio_2v_detail.jpg/80px-Codex_Mendoza_folio_2v_detail.jpg"
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
          Resumen de Tenochtitlan (1325-1375)


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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Huitzilihuitl%2C_~1379_-_~1415%2C_retrato_an%C3%B3nimo_%28~1541%29.png/80px-Huitzilihuitl%2C_~1379_-_~1415%2C_retrato_an%C3%B3nimo_%28~1541%29.png"
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
          Tenoch
          Nombre	Reinado	Sucesión y notas	detalles de la vida

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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
          Tenoch
          Nombre	Reinado	Sucesión y notas	detalles de la vida

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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




const Itzcoatl = () => {
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
          Tenoch
          Nombre	Reinado	Sucesión y notas	detalles de la vida

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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

/** segunda columna */


const MoctezumaI = () => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Card
      onClick={handleCardClick}
      style={{
        width: '220px',
        height: '300px',
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
          Tenoch
          Nombre	Reinado	Sucesión y notas	detalles de la vida

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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
        width: '220px',
        height: '300px',
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
          Tenoch
          Nombre	Reinado	Sucesión y notas	detalles de la vida

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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
        width: '220px',
        height: '300px',
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
          Tenoch
          Nombre	Reinado	Sucesión y notas	detalles de la vida

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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
        width: '220px',
        height: '300px',
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
          Tenoch
          Nombre	Reinado	Sucesión y notas	detalles de la vida

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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

const
  Ahuitzotl = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!flipped);
    };

    return (
      <Card
        onClick={handleCardClick}
        style={{
          width: '220px',
          height: '300px',
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
            Tenoch
            Nombre	Reinado	Sucesión y notas	detalles de la vida

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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







const
  MoctezumaII = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!flipped);
    };

    return (
      <Card
        onClick={handleCardClick}
        style={{
          width: '220px',
          height: '300px',
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
            Tenoch
            Nombre	Reinado	Sucesión y notas	detalles de la vida

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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



const
  Cuitláhuac = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!flipped);
    };

    return (
      <Card
        onClick={handleCardClick}
        style={{
          width: '220px',
          height: '300px',
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
            Tenoch
            Nombre	Reinado	Sucesión y notas	detalles de la vida

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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


const
  Cuauhtémoc = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!flipped);
    };

    return (
      <Card
        onClick={handleCardClick}
        style={{
          width: '220px',
          height: '300px',
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
            Tenoch
            Nombre	Reinado	Sucesión y notas	detalles de la vida

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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

const
  Tlacotzin = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!flipped);
    };

    return (
      <Card
        onClick={handleCardClick}
        style={{
          width: '220px',
          height: '300px',
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
            Tenoch
            Nombre	Reinado	Sucesión y notas	detalles de la vida

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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



const
  Motelchiuhtzin = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!flipped);
    };

    return (
      <Card
        onClick={handleCardClick}
        style={{
          width: '220px',
          height: '300px',
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
            Tenoch
            Nombre	Reinado	Sucesión y notas	detalles de la vida

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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



const
  Xochiquentzin = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!flipped);
    };

    return (
      <Card
        onClick={handleCardClick}
        style={{
          width: '220px',
          height: '300px',
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
            Tenoch
            Nombre	Reinado	Sucesión y notas	detalles de la vida

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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

const
  Huanitzin = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!flipped);
    };

    return (
      <Card
        onClick={handleCardClick}
        style={{
          width: '220px',
          height: '300px',
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
            Tenoch
            Nombre	Reinado	Sucesión y notas	detalles de la vida

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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

const
  HuaniTehuetzquititzintzin = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!flipped);
    };

    return (
      <Card
        onClick={handleCardClick}
        style={{
          width: '220px',
          height: '300px',
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
            Tenoch
            Nombre	Reinado	Sucesión y notas	detalles de la vida

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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



const
  Cecetzin = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!flipped);
    };

    return (
      <Card
        onClick={handleCardClick}
        style={{
          width: '220px',
          height: '300px',
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
            Tenoch
            Nombre	Reinado	Sucesión y notas	detalles de la vida

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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



const
  Cipac = () => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
      setFlipped(!flipped);
    };

    return (
      <Card
        onClick={handleCardClick}
        style={{
          width: '220px',
          height: '300px',
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
            Tenoch
            Nombre	Reinado	Sucesión y notas	detalles de la vida

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chimalpopoca.jpg/80px-Chimalpopoca.jpg"
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
