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
        src="https://www.infobae.com/new-resizer/OPVRxDKhnjBxdzzHS88fGpzOzDc=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/VY7HMNG5ARFEDLZOSGSHFPCIBI.jpg"
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Dioses</span>
        </h1>
      </div>
    </div>
  );
};

const Dioses = () => {

  return (
    <Base1 title={"Categorias Aztecas"}>
      <section className="section pt-0">
        <Titulo/>

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

        <ul className="grid grid-cols-3 gap-1 center" style={{ margin:'15%', marginTop:'3%', justifyContent: 'center', padding: 0 }} >

          { TDios("Ahuiateteo", "", "https://upload.wikimedia.org/wikipedia/commons/f/fb/Macuiltonaleque_1.jpg",
                  "Los Ahuiateteo, también conocidos como Centzonhuitznahua, eran un grupo de dioses en la mitología azteca. El término 'Ahuiateteo' significa 'los 400 del sur' en lengua náhuatl y hace referencia a un conjunto de deidades asociadas con la dirección sur."
                 ) }

          { TDios("Centeotl", "", "https://images.vexels.com/media/users/3/182650/isolated/preview/68a34a7cd6d9ad9a28ce55382fd1e537-dios-azteca-color-centeotl.png",
                  "Era considerado el dios del maíz y se le atribuía la responsabilidad de asegurar la prosperidad de los cultivos y la alimentación de la población."
                 ) }

          { TDios("Chalchiuhtlicue", "", "https://mxcity.mx/wp-content/uploads/2020/11/chalchiuhtlicue-2-951x1024.jpg",
                  "Era vista como una diosa benevolente que proporcionaba agua para la supervivencia de los seres humanos y la fertilidad de la tierra. Se la asociaba con la lluvia y los ciclos del agua, por lo que desempeñaba un papel crucial en la agricultura y la vida cotidiana de los aztecas."
                 ) }
          
          { TDios("Cihuacóatl", "", "https://pbs.twimg.com/media/FGChkaoX0BELjh3.jpg", 
                  "La Cihuacóatl serpiente femenina o serpiente hembra era una de las deidades más importantes en la religión nahua. Debido a su vínculo con el origen de la humanidad y su relación simbólica con la serpiente, fray Bernardino de Sahagún la comparó con Eva." 
                 ) }

          { TDios("Huehuecóyotl", "", "https://upload.wikimedia.org/wikipedia/commons/c/c8/Huehuecoyotl_CB.jpg",
                  "Representado como un dios y un ser sagrado con forma de coyote. Es conocido como el dios del engaño, la música, la danza y la dualidad. Se le considera un ser astuto y travieso, a menudo jugando trucos y travesuras, pero también se le atribuye la sabiduría y la inspiración artística."
                 ) }
          
          { TDios("Ehécatl", "", "https://www.mitologia.info/wp-content/uploads/2017/11/ehecatl-dios-azteca-viento.jpg",
                  "Considerado el dios del viento y se le atribuye el control sobre los vientos que traen la lluvia y los cambios estacionales. Se le representa como un dios joven con un rostro pintado de blanco y con un adorno en forma de espiral en la nariz, que simboliza el viento en movimiento."
                 ) }

          { TDios("Huitzilopochtli", "", "https://mxcity.mx/wp-content/uploads/2017/06/huitzilopochtli-1.jpg", 
                  "Era el dios del sol y la guerra, considerado el patrón de la capital azteca Tenochtitlán y asociado con el oro, los guerreros y los gobernantes. Su nombre calendárico era Ce Técpatl (Pedernal) y su nagual o espíritu animal era el águila."
                 ) }

          { TDios("Ixtlilton", "", "https://ih1.redbubble.net/image.616842481.7919/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg", 
                  "Era el dios prehispánico de la medicina y la curación, por lo que se hacía llamar también el dios curandero, porque la medicina científica no existía en aquel entonces. Gracias a estas adjudicaciones de sus facultados se le consideraba como hermano de Macuilxochitl (cinco flores, en náhuatl), un espíritu masculino encarnado de los hombres que murieron durante las batallas, el dios del bienestar y la buena suerte."
                 ) }
          
          { TDios("Metztli", "", "https://upload.wikimedia.org/wikipedia/commons/8/8e/Rabbit_1.jpg",
                  "Adorada como la diosa de la luna y la noche. Se la representaba como una figura femenina con rasgos relacionados con la oscuridad y la noche, y a menudo se la representaba con una cara de calavera. También se la asociaba con la transformación y la renovación."
                 ) }

          { TDios("Mictecacihuatl", "", "https://images.saatchiart.com/saatchi/1223401/art/8619278/additional_c9f77439bf078b6d9d44f9cfe41f1fa24505be8a-AICC2-8.jpg",
                  "Considerada la gobernante del inframundo y tenía un papel central en el culto a los muertos en la cultura azteca. Se creía que presidía el reino de Mictlán, el lugar al que iban las almas de los fallecidos. Era responsable de velar por el destino y el tránsito de las almas hacia el más allá."
                 ) }

          { TDios("Mictlantecuhtli", "", "https://www.monstropedia.org/images/8/80/Mictecacihuatl.jpg",
                  "Era considerado el dios supremo del inframundo azteca, conocido como Mictlán. Era representado como un esqueleto o un cadáver descarnado, con una apariencia aterradora y símbolos asociados a la muerte, como cráneos y huesos."
                 ) }

          { TDios("Mixcóatl", "", "https://mythlok.com/wp-content/uploads/2022/09/Mythlok-Mixcoatl.png",
                  "representado como un dios guerrero con una máscara de serpiente y una especie de tocado de plumas en la cabeza. A menudo se le muestra sosteniendo un arco y flechas, que simbolizan su papel como dios de la caza." 
                 ) }
          
          { TDios("Quetzalcoatl", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Quetzalcoatl.svg/1200px-Quetzalcoatl.svg.png",
                  "Conocido como un dios multifacético con atributos de una serpiente emplumada. Representa una combinación entre lo terrenal y lo celestial, y se le considera el dios del conocimiento, la sabiduría, la cultura, la creación y el viento."
                 ) }
          
          { TDios("Tezcatlipoca", "", "https://cdn1.matadornetwork.com/blogs/2/2019/12/shutterstock_1211759326.jpg", 
                  "Tezcatlipoca fue el dios azteca de la noche y todas las cosas materiales. Llevaba consigo un espejo de cualidades mágicas, que emanaba humo y era capaz de matar al enemigo, aspecto por el que también era llamado dios del espejo humeante."
                 ) }
          
          { TDios("Tlaloc", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tlaloc_glyph.svg/1200px-Tlaloc_glyph.svg.png",
                  "Considerado un dios poderoso y benefactor, encargado de proveer la lluvia necesaria para la agricultura y el sustento de la vida en la Tierra. Se creía que controlaba los fenómenos meteorológicos relacionados con la lluvia, como las tormentas y las sequías."
                 ) }
          
          { TDios("Tlaltecuhtli", "", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NeiyL4-_R7hvODT820c4YH9PDedzRYeAtw&usqp=CAU",
                  "Representado como una criatura monstruosa y feroz, con características reptilianas y elementos relacionados con la tierra. Se le representa con una boca abierta que simboliza la fertilidad de la tierra y se cree que su cuerpo es la base misma del mundo."
                 ) }
          
          { TDios("Tonatiuh", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tonatiuh.jpg/330px-Tonatiuh.jpg", 
                 "Dios del Sol. El pueblo azteca lo consideró como el líder del cielo. También fue conocido como el Quinto Sol, debido a que los aztecas creían que asumió el control cuando el Cuarto Sol fue expulsado del cielo, y de acuerdo con su cosmogonía, cada sol era un dios con su propia era cósmica y según los aztecas, ellos aún se encontraban en la era en la que reinaba Tonatiuh."
                 ) }

          { TDios("Xipe Totec", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Xipe-totec.svg/300px-Xipe-totec.svg.png", 
                  "Es una deidad de vida, muerte y resurrección de la cultura mexica; dios de la agricultura, vegetación, el Este, las enfermedades y los orfebres. Es la parte masculina del universo, la región de la juventud y de la aurora, del maíz tierno. Representa la renovación, el desprendimiento de lo que ya no es útil, la regeneración de la naturaleza espiritual en las personas, así como del suelo seco en suelo fértil."
                 ) }
          
          { TDios("Xochiquetzal", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Xochiquetzal.jpg/330px-Xochiquetzal.jpg",
                 "Considerada la diosa de la belleza femenina, la juventud y la sensualidad. Se le atribuye el poder de inspirar el amor, la pasión y la creatividad artística. Se la representa con vestidos y joyas ornamentadas, adornada con flores y plumas, que simbolizan su conexión con la naturaleza y la fertilidad."
                 ) }
          
          { TDios("Xolotl", "serpiente", "https://axolotlan.com/axolomoxtli/wp-content/uploads/2019/09/Xoloteotl-976x1024.png", 
                  "Xólotl era un dios del fuego y el relámpago. Era generalmente descrito como un hombre con cabeza de perro y era guía de las almas de los muertos.​ Era también dios de los gemelos, monstruos, las desgracias, la enfermedad, y las deformidades. Xólotl es el hermano canino y gemelo de Quetzalcóatl, siendo ambos hijos de la virgen Chimalma.​ Xólotl es la personificación vespertina del astro Venus, la estrella del ocaso, y estuvo asociado con el fuego celestial. El anfibio axólotl o ajolote está nombrado en honor a esta deidad."
                 ) }
          
          { TDios("Yacatecuhtli", "", "https://64.media.tumblr.com/42f29fd3a55a489f41dd9b91d831f1dc/bb848a390e8e196c-1f/s640x960/7378f61b3c000ee32e10298d5aa5ff69cc15341a.jpg",
                 "Considerado el dios patrón de los comerciantes y de aquellos que se dedican a los viajes. Se le representa como un hombre vestido con atuendos que simbolizan su estatus como señor de los caminos, a menudo portando una mochila en la espalda y sosteniendo un bastón en la mano."
                 ) }
          
        </ul>

        <ul className="grid grid-cols-1 gap-1" style={{ margin: 0, padding: 0 }}>
          <AztecButton linkto="/religion" imageURL="/images/religion-azteca.jpg" texto="Regresar a Religión"/>
        </ul>
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
              backgroundColor: 'lightgreen',
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
              backgroundColor: 'lightgreen',
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
            
            <p>
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