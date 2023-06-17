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
            <span className="text-green-600">Emperador</span>
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
        <p className="text-center">
          <span style={{ fontSize: '40px', fontWeight: 'bold', margin: '0px', color: 'green' }}>
            Temprano Tenochtitlan (1325-1375)  y Tlatoque preimperial (1375-1427)
          </span>
        </p>


        <ul className="grid grid-cols-6 gap-1" style={{ margin: 0, padding: 0 }}>
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
            <XīhuitlTēmoc/>
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

        <p className="text-center">
          <span style={{ fontSize: '40px', fontWeight: 'bold', margin: '0px', color: 'green' }}>
          Imperio azteca (1427-1521)           </span>
        </p>

        <ul className="grid grid-cols-6 gap-2" style={{ margin: 0, padding: 0 }}>
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
                Itzcóatl
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
            <XīhuitlTēmoc/>
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


export default Emperador;

// Componente de información adicional
const MasInformacion = () => {
  return (
    <div className="center-container">
      <FaInfoCircle size={50} />
      <span style={{ marginLeft: '5px' }}>Más información próximamente</span>
    </div>
  );
};


const InteractionMessage = () => {
  const showMessage = () => {
    alert('Para interactuar con el modelo 3D, sigue estos pasos:\n\n1. Haz clic en el modelo para activarlo.\n2. Utiliza los controles del modelo para moverte, rotarlo y hacer zoom.\n3. Explora todas las características y detalles del modelo.\n\n¡Disfruta de la experiencia interactiva!');
  };

  return (
    <div className="interaction-message">
      <FaQuestionCircle className="help-icon" onClick={showMessage} />
      <span className="help-text">Haz clic para obtener instrucciones de interacción</span>
    </div>
  );
};
/**/


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
        perspective: '1000px',
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

          Resumen de Tenochtitlan (1325-1375)

          - Nombre: Tenoch
          - Reinado: C. 1325-1375 (?) [4]
          - Sucesión y notas: Fundador legendario de Tenochtitlan; historicidad no confirmada. Según la leyenda, Tenoch fue el primer líder humano de los mexicas, sucediendo al dios sol Huītzilōpōchtli. [4]
          - Detalles de la vida: Casi nada conocido [4]
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
