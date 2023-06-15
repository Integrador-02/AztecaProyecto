import React, { useState, useEffect } from 'react';
import { markdownify } from "@lib/utils/textConverter";
import { Base1 } from '@layouts/Baseof';
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import Link from 'next/link';
import Avatar from 'react-avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Cookies from 'js-cookie';


const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.infobae.com/new-resizer/OPVRxDKhnjBxdzzHS88fGpzOzDc=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/VY7HMNG5ARFEDLZOSGSHFPCIBI.jpg"}
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
          }}>          Los dioses aztecas eran parte fundamental de la religión y la mitología de la antigua civilización azteca. Tenían una amplia variedad de dioses que representaban diferentes aspectos de la naturaleza, el cosmos, la guerra, la fertilidad y otras esferas de la vida.
          <br/>
          Entre ellos:
          </p>

        <div className="grid grid-cols-3 gap-2 center" style={{ margin: 75, padding: 0 }} >
          
          <figure>
            <img 
              src="https://images.vexels.com/media/users/3/182650/isolated/preview/68a34a7cd6d9ad9a28ce55382fd1e537-dios-azteca-color-centeotl.png" 
              alt="Centeotl - Diosa del maiz"
              width={200} >
            </img>
            <MenuComponent/>
            
          </figure>

          <figure>
            <img 
              src="https://mxcity.mx/wp-content/uploads/2020/11/chalchiuhtlicue-2-951x1024.jpg" 
              alt="Chalchiuhtlicue"
              width={200}>
            </img>
            <figcaption> CHALCHIUHTLICUE (Diosa de los rios) </figcaption>
          </figure>

          <figure>
            <img 
              src="https://mxcity.mx/wp-content/uploads/2017/06/huitzilopochtli-1.jpg" 
              alt="Huitzilopochtli - dios de la guerra"
              width={200}>
            </img>
            <figcaption>HUITZILOPOCHTLI (Dios de la guerra y el sol)</figcaption>
          </figure>  

          <figure>
            <img 
              src="https://images.saatchiart.com/saatchi/1223401/art/8619278/additional_c9f77439bf078b6d9d44f9cfe41f1fa24505be8a-AICC2-8.jpg"
              alt="Mictecacihuatl"
              width={200}>
            </img>
            <figcaption>MICTECACIHUATL (Diosa de los muertos)</figcaption> 
          </figure>

          <figure>
            <img 
              src="https://www.monstropedia.org/images/8/80/Mictecacihuatl.jpg"
              alt="Mictlantecuhtli"
              height={200}>
            </img>
            <figcaption>MICTLANTECUHTLI (Dios del inframundo)</figcaption>
          </figure>

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Quetzalcoatl.svg/1200px-Quetzalcoatl.svg.png" 
              alt="Quetzalcoatl"
              width={200}>
            </img>
            <figcaption>QUETZALCOATL (Dios de la sabiduria, el viento y la fertilidad)</figcaption>  
          </figure>

          <figure>
            <img 
              src="../public/../images/tezcatlipoca-min.jpg" 
              alt="Tezcatlipoca"
              width={200}>
            </img>
            <figcaption>TEZCATLIPOCA (Dios de la noche)</figcaption>
          </figure>

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tlaloc_glyph.svg/1200px-Tlaloc_glyph.svg.png" 
              alt="Tlaloc"
              width={200}>
            </img>
            <figcaption>TLALOC ((Dios de la lluvia)</figcaption>
          </figure>

          <figure>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NeiyL4-_R7hvODT820c4YH9PDedzRYeAtw&usqp=CAU" 
              alt="Tlaltecuhtli"
              width={200}>
            </img>
            <figcaption>TLALTECUHTLI (Diosa de la tierra)</figcaption>
          </figure>  

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tonatiuh.jpg/330px-Tonatiuh.jpg" 
              alt="Tonatiuh"
              width={200}>
            </img>
            <figcaption>TONATIUH (DIOS DEL SOL)</figcaption>
          </figure>

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Xipe-totec.svg/300px-Xipe-totec.svg.png" 
              alt="Xipe Totec"
              width={200}>
            </img>
            <figcaption>XIPE TOTEC (Dios de la primavera)</figcaption>
          </figure>

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Xochiquetzal.jpg/330px-Xochiquetzal.jpg" 
              alt="Xochiquetzal"
              width={200}>
            </img>
            <figcaption>XOCHIQUETZAL (Diosa del amor y la belleza)</figcaption>
          </figure>

          <figure>
            <img 
              src="https://axolotlan.com/axolomoxtli/wp-content/uploads/2019/09/Xoloteotl-976x1024.png" 
              alt="Xolotl"
              width={200}>
            </img>
            <figcaption>XOLOTL (Dios del inframundo)</figcaption>
          </figure>  
        </div>


        <MasInformacion/>
 <ul className="grid grid-cols-2 gap-1" style={{ margin: 0, padding: 0 }}>
           
                  <li
                      key={`2`}
                      className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
                      style={{
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        backgroundImage: 'url(/images/religion-azteca.jpg)',
                        backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                      }}>
                    
                    <Link
                          href={`/religion`}
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
                          <span style={{ fontSize: '1.9em', color: '#006400' }}> Regresar a Religión</span>
                        </Link>
                  </li>
                  </ul>
      </section>
    </Base1>
  );
};

export default Dioses;

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

  const MenuComponent = () => {
    const [email, setEmail] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    useEffect(() => {
      const user = Cookies.get('clave');
      setEmail(user);
    }, []);
  
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleEmailClick = () => {
      setShowDialog(true);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setShowDialog(false);
    };
    const titleStyle = {
      fontSize: '50px',
      color: 'green',
      /* Agrega otros estilos según tus preferencias */
    };
  
    return (
      <div>
        <MenuItem onClick={handleEmailClick}><figcaption> CENTEOTL (Dios del maiz) </figcaption></MenuItem>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Configuración</MenuItem>
          <MenuItem onClick={handleClose}>Estadísticas</MenuItem>
          <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
        </Menu>
        <Dialog
          open={showDialog}
          onClose={handleClose}
          fullWidth
          maxWidth="md"
          PaperProps={{
            style: {
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          <Card>
            <CardContent>
            <h3 style={titleStyle}>CENTEOTL (Dios del maíz)</h3>
            <h3> Cintéotl (del náhuatl: Sinteotl ‘sintli, mazorca del maíz seco; teotl, dios o deidad’) o Centéotl1​ en la mitología mexica es el dios del maíz y el patrón de la ebriedad y la bebida en los rituales, es considerado en ocasiones como un dios dual, con identidad masculina y femenina.

Su identidad masculina lleva los nombres de Cintéotl y Centeotecuhtli (tekohtli, “señor”) y su identidad femenina Chicomecóatl y Centeocíhuatl (siwatl, “mujer”). Según algunas fuentes es hijo de Xochiquétzal (diosa joven asociada a la belleza, la sexualidad y el placer, patrona de los partos, los bordadores, los tejedores, los trabajadores de plumas, los joyeros, los escultores, los artistas y artesanos) y Piltzintecuhtli (dios de los temporales).

Otros autores afirman que Xochiquétzal era esposa de Centéotl 2​. Tras su nacimiento se escondió bajo la tierra convirtiendo su cuerpo en varios sustentos, entre ellos el maíz. Se celebra junto a Chicomecóatl, diosa de la agricultura y las cosechas en el mes Huey tozoztli del calendario azteca.3​ Le estaban supeditados los dioses Cinteteoh.</h3>
            </CardContent>
          </Card>
        </Dialog>
      </div>
    );
  };
  

  