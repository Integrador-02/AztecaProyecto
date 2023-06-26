import React from 'react';
import { Base1 } from '@layouts/Baseof';
import AztecButton from 'components/AztecButton';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';


const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"/images/60ececdb1ab3bd00957e108ed2f27ec6.gif"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex flex-col items-center justify-center h-full text-center">
        <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span className="text-green-500" style={{ fontSize: '1.9em', color: 'white' }}>Dioses</span>
        </h1>
        <p className="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-1xl text-[#FFFFFF] mt-4 mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-16">
        Los dioses aztecas eran parte fundamental de la religión y la mitología de la antigua civilización azteca. Tenían una amplia variedad de dioses que representaban diferentes aspectos de la naturaleza, el cosmos, la guerra, la fertilidad y otras esferas de la vida.
          Entre ellos:        </p>
      </div>
    </div>
  );
};

const Carta = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3; // Número de imágenes por página
  const dioses = [
    {
      nombreDios: "Ahuiateteo",
      tipoDios: "",
      urlImage: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Macuiltonaleque_1.jpg",
      texto1: "Los Ahuiateteo, también conocidos como Centzonhuitznahua, eran un grupo de dioses en la mitología azteca. El término 'Ahuiateteo' significa 'los 400 del sur' en lengua náhuatl y hace referencia a un conjunto de deidades asociadas con la dirección sur."
    },
    {
      nombreDios: "Centeotl",
      tipoDios: "",
      urlImage:"https://images.vexels.com/media/users/3/182650/isolated/preview/68a34a7cd6d9ad9a28ce55382fd1e537-dios-azteca-color-centeotl.png",
      texto1: "Era considerado el dios del maíz y se le atribuía la responsabilidad de asegurar la prosperidad de los cultivos y la alimentación de la población."
    },

    {
      nombreDios: "Chalchiuhtlicue",
      tipoDios: "",
      urlImage:"https://mxcity.mx/wp-content/uploads/2020/11/chalchiuhtlicue-2-951x1024.jpg",
      texto1: "Era vista como una diosa benevolente que proporcionaba agua para la supervivencia de los seres humanos y la fertilidad de la tierra. Se la asociaba con la lluvia y los ciclos del agua, por lo que desempeñaba un papel crucial en la agricultura y la vida cotidiana de los aztecas."

    },
    {
      nombreDios:"Cihuacóatl",
      tipoDios:"",
      urlImage:"https://pbs.twimg.com/media/FGChkaoX0BELjh3.jpg",
      texto1:  "La Cihuacóatl serpiente femenina o serpiente hembra era una de las deidades más importantes en la religión nahua. Debido a su vínculo con el origen de la humanidad y su relación simbólica con la serpiente, fray Bernardino de Sahagún la comparó con Eva." 

    },

    {
      nombreDios:"Huehuecóyotl",
      tipoDios:"",
      urlImage:"https://upload.wikimedia.org/wikipedia/commons/c/c8/Huehuecoyotl_CB.jpg",
      texto1:  "Representado como un dios y un ser sagrado con forma de coyote. Es conocido como el dios del engaño, la música, la danza y la dualidad. Se le considera un ser astuto y travieso, a menudo jugando trucos y travesuras, pero también se le atribuye la sabiduría y la inspiración artística."

    },

    {
      nombreDios:"Ehécatl",
      tipoDios:"",
      urlImage:"https://www.mitologia.info/wp-content/uploads/2017/11/ehecatl-dios-azteca-viento.jpg",
      texto1:   "Considerado el dios del viento y se le atribuye el control sobre los vientos que traen la lluvia y los cambios estacionales. Se le representa como un dios joven con un rostro pintado de blanco y con un adorno en forma de espiral en la nariz, que simboliza el viento en movimiento."

    },

    {
      nombreDios:"Huitzilopochtli",
      tipoDios:"",
      urlImage:"https://mxcity.mx/wp-content/uploads/2017/06/huitzilopochtli-1.jpg",
      texto1: "Era el dios del sol y la guerra, considerado el patrón de la capital azteca Tenochtitlán y asociado con el oro, los guerreros y los gobernantes. Su nombre calendárico era Ce Técpatl (Pedernal) y su nagual o espíritu animal era el águila."


    },
    {
      nombreDios:"Ixtlilton",
      tipoDios:"",
      urlImage:"https://ih1.redbubble.net/image.616842481.7919/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg",
      texto1:  "Era el dios prehispánico de la medicina y la curación, por lo que se hacía llamar también el dios curandero, porque la medicina científica no existía en aquel entonces. Gracias a estas adjudicaciones de sus facultados se le consideraba como hermano de Macuilxochitl (cinco flores, en náhuatl), un espíritu masculino encarnado de los hombres que murieron durante las batallas, el dios del bienestar y la buena suerte."


    },

    {
      nombreDios:"Metztli",
      tipoDios:"",
      urlImage:"https://upload.wikimedia.org/wikipedia/commons/8/8e/Rabbit_1.jpg",
      texto1:      "Adorada como la diosa de la luna y la noche. Se la representaba como una figura femenina con rasgos relacionados con la oscuridad y la noche, y a menudo se la representaba con una cara de calavera. También se la asociaba con la transformación y la renovación."
    },

  
    {
      nombreDios:"Mictecacihuatl",
      tipoDios:"",
      urlImage: "https://www.monstropedia.org/images/8/80/Mictecacihuatl.jpg",
      texto1: "Era considerado el dios supremo del inframundo azteca, conocido como Mictlán. Era representado como un esqueleto o un cadáver descarnado, con una apariencia aterradora y símbolos asociados a la muerte, como cráneos y huesos."

    },

    {
      nombreDios:"Mixcóatl",
      tipoDios:"",
      urlImage: "https://mythlok.com/wp-content/uploads/2022/09/Mythlok-Mixcoatl.png",
      texto1: "representado como un dios guerrero con una máscara de serpiente y una especie de tocado de plumas en la cabeza. A menudo se le muestra sosteniendo un arco y flechas, que simbolizan su papel como dios de la caza." 

    },
    {
      nombreDios: "Quetzalcoatl",
      tipoDios: "",
      urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Quetzalcoatl.svg/1200px-Quetzalcoatl.svg.png",
      texto1: "Conocido como un dios multifacético con atributos de una serpiente emplumada. Representa una combinación entre lo terrenal y lo celestial, y se le considera el dios del conocimiento, la sabiduría, la cultura, la creación y el viento."
    },
    {
      nombreDios: "Tezcatlipoca",
      tipoDios: "",
      urlImage: "https://cdn1.matadornetwork.com/blogs/2/2019/12/shutterstock_1211759326.jpg",
      texto1: "Tezcatlipoca fue el dios azteca de la noche y todas las cosas materiales. Llevaba consigo un espejo de cualidades mágicas, que emanaba humo y era capaz de matar al enemigo, aspecto por el que también era llamado dios del espejo humeante."
    },
    {
      nombreDios: "Tlaloc",
      tipoDios: "",
      urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tlaloc_glyph.svg/1200px-Tlaloc_glyph.svg.png",
      texto1: "Considerado un dios poderoso y benefactor, encargado de proveer la lluvia necesaria para la agricultura y el sustento de la vida en la Tierra. Se creía que controlaba los fenómenos meteorológicos relacionados con la lluvia, como las tormentas y las sequías."
    },
    {
      nombreDios: "Tlaltecuhtli",
      tipoDios: "",
      urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NeiyL4-_R7hvODT820c4YH9PDedzRYeAtw&usqp=CAU",
      texto1: "Representado como una criatura monstruosa y feroz, con características reptilianas y elementos relacionados con la tierra. Se le representa con una boca abierta que simboliza la fertilidad de la tierra y se cree que su cuerpo es la base misma del mundo."
    },
    {
      nombreDios: "Tonatiuh",
      tipoDios: "",
      urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tonatiuh.jpg/330px-Tonatiuh.jpg",
      texto1: "Dios del Sol. El pueblo azteca lo consideró como el líder del cielo. También fue conocido como el Quinto Sol, debido a que los aztecas creían que asumió el control cuando el Cuarto Sol fue expulsado del cielo, y de acuerdo con su cosmogonía, cada sol era un dios con su propia era cósmica y según los aztecas, ellos aún se encontraban en la era en la que reinaba Tonatiuh."
    },
    {
      nombreDios: "Xipe Totec",
      tipoDios: "",
      urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Xipe-totec.svg/300px-Xipe-totec.svg.png",
      texto1: "Es una deidad de vida, muerte y resurrección de la cultura mexica; dios de la agricultura, vegetación, el Este, las enfermedades y los orfebres. Es la parte masculina del universo, la región de la juventud y de la aurora, del maíz tierno. Representa la renovación, el desprendimiento de lo que ya no es útil, la regeneración de la naturaleza espiritual en las personas, así como del suelo seco en suelo fértil."
    },
    {
      nombreDios: "Xochiquetzal",
      tipoDios: "",
      urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Xochiquetzal.jpg/330px-Xochiquetzal.jpg",
      texto1: "Considerada la diosa de la belleza femenina, la juventud y la sensualidad. Se le atribuye el poder de inspirar el amor, la pasión y la creatividad artística. Se la representa con vestidos y joyas ornamentadas, adornada con flores y plumas, que simbolizan su conexión con la naturaleza y la fertilidad."
    },
    {
      nombreDios: "Xolotl",
      tipoDios: "serpiente",
      urlImage: "https://axolotlan.com/axolomoxtli/wp-content/uploads/2019/09/Xoloteotl-976x1024.png",
      texto1: "Xólotl, dios del fuego y el relámpago, representado como un hombre con cabeza de perro. Guía de almas, dios de los gemelos y asociado a Venus. El ajolote lleva su nombre."
    },
    {
      nombreDios: "Yacatecuhtli",
      tipoDios: "",
      urlImage: "https://64.media.tumblr.com/42f29fd3a55a489f41dd9b91d831f1dc/bb848a390e8e196c-1f/s640x960/7378f61b3c000ee32e10298d5aa5ff69cc15341a.jpg",
      texto1: "Considerado el dios patrón de los comerciantes y de aquellos que se dedican a los viajes. Se le representa como un hombre vestido con atuendos que simbolizan su estatus como señor de los caminos, a menudo portando una mochila en la espalda y sosteniendo un bastón en la mano."
    },

    {
      nombreDios: "Mictlantecuhtli",
      tipoDios: "",
      urlImage: "https://www.monstropedia.org/images/8/80/Mictecacihuatl.jpg",
      texto1:     "Era considerado el dios supremo del inframundo azteca, conocido como Mictlán. Era representado como un esqueleto o un cadáver descarnado, con una apariencia aterradora y símbolos asociados a la muerte, como cráneos y huesos."

    },






  

         
         

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
    <div   className="grid grid-cols-3 gap-1 center" style={{ margin:'10%', marginTop:'-4%' }} >
      
      {/* Mostrar las cartas  paginadas */}
        {paginatedImages.map((dioses, index) => (
          <li key={index}>
            {TDios(
             dioses.nombreDios,
             dioses.tipoDios,
             dioses.urlImage,
             dioses.texto1
            )}
          </li>
        ))}

      {/* Agregar iconos de paginación */}
      <div className="pagination" style={{  justifyContent: 'center',margin:'-2.5rem'}}>
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

const Dioses = () => {


  return (
    <Base1 title={"Categorias Aztecas"}>
      <section className="section pt-0">
        <Titulo/>
        <div className="grid grid-cols-2 gap-1 center">
       
        
        <p style={{
          fontSize: '23px',
          fontWeight: 'normal',
          margin: '20px',
          color: '#000',
          textAlign: 'justify',
          lineHeight: '1.5',
          fontFamily: 'Arial, sans-serif',
          marginTop :'40px'
          }}>          
          Los dioses aztecas eran parte fundamental de la religión y la mitología de la antigua civilización azteca. Tenían una amplia variedad de dioses que representaban diferentes aspectos de la naturaleza, el cosmos, la guerra, la fertilidad y otras esferas de la vida.
          <br/>
          Entre ellos:
        </p>
      
 <Carta/>
       
</div>
        
      </section>
    </Base1>
  );
};


export default Dioses;


const TDios = (nombreDios, tipoDios, urlImage, texto1) => {
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