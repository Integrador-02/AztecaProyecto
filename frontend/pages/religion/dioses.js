import React from 'react';
import { Base1 } from '@layouts/Baseof';
import AztecButton from 'components/AztecButton';


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

        <div className="grid grid-cols-4 gap-1 center" style={{ margin:'15%', marginTop:'3%', justifyContent: 'center', padding: 0 }} >
          
          <figure>
            <img 
              src="https://images.vexels.com/media/users/3/182650/isolated/preview/68a34a7cd6d9ad9a28ce55382fd1e537-dios-azteca-color-centeotl.png" 
              alt="Centeotl - Diosa del maiz"
              width={200} >
            </img>
            <figcaption style={{width:200}}> <AztecButton textSize='1.5' texto="Centeotl, Diosa del maiz" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

          <figure>
            <img 
              src="https://mxcity.mx/wp-content/uploads/2020/11/chalchiuhtlicue-2-951x1024.jpg" 
              alt="Chalchiuhtlicue"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Chalchiuhtlicue" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

          <figure>
            <img 
              src="https://mxcity.mx/wp-content/uploads/2017/06/huitzilopochtli-1.jpg" 
              alt="Huitzilopochtli - dios de la guerra"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Huitzilopochtli" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>  

          <figure>
            <img 
              src="https://images.saatchiart.com/saatchi/1223401/art/8619278/additional_c9f77439bf078b6d9d44f9cfe41f1fa24505be8a-AICC2-8.jpg"
              alt="Mictecacihuatl"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Mictecacihuatl" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption> 
          </figure>

          <figure>
            <img 
              src="https://www.monstropedia.org/images/8/80/Mictecacihuatl.jpg"
              alt="Mictlantecuhtli"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Mictlantecuhtli" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption> 
          </figure>

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Quetzalcoatl.svg/1200px-Quetzalcoatl.svg.png" 
              alt="Quetzalcoatl"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Quetzalcoatl" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption> 
          </figure>

          <figure>
            <img 
              src="https://cdn1.matadornetwork.com/blogs/2/2019/12/shutterstock_1211759326.jpg" 
              alt="Tezcatlipoca"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Tezcatlipoca" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tlaloc_glyph.svg/1200px-Tlaloc_glyph.svg.png" 
              alt="Tlaloc"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Tlaloc" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

          <figure>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NeiyL4-_R7hvODT820c4YH9PDedzRYeAtw&usqp=CAU" 
              alt="Tlaltecuhtli"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Tlaltecuhtli" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>  

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tonatiuh.jpg/330px-Tonatiuh.jpg" 
              alt="Tonatiuh"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Tonatiuh" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Xipe-totec.svg/300px-Xipe-totec.svg.png" 
              alt="Xipe Totec"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Xipe Totec" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Xochiquetzal.jpg/330px-Xochiquetzal.jpg" 
              alt="Xochiquetzal"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Xochiquetzal" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

          <figure>
            <img 
              src="https://axolotlan.com/axolomoxtli/wp-content/uploads/2019/09/Xoloteotl-976x1024.png" 
              alt="Xolotl"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Xolotl" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure> 

          <figure>
            <img 
              src="https://ih1.redbubble.net/image.616842481.7919/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg" 
              alt="Ixtlilton"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Ixtlilton" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure> 
          
          <figure>
            <img 
              src="https://pbs.twimg.com/media/FGChkaoX0BELjh3.jpg" 
              alt="Cihuacóatl"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Cihuacóatl" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Rabbit_1.jpg" 
              alt="Metztli"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Metztli" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>
          
          <figure>
            <img 
              src="https://64.media.tumblr.com/42f29fd3a55a489f41dd9b91d831f1dc/bb848a390e8e196c-1f/s640x960/7378f61b3c000ee32e10298d5aa5ff69cc15341a.jpg" 
              alt="Yacatecuhtli"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Yacatecuhtli" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>
          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Huehuecoyotl_CB.jpg" 
              alt="Huehuecóyotl"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Huehuecóyotl" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

          <figure>
            <img 
              src="https://mythlok.com/wp-content/uploads/2022/09/Mythlok-Mixcoatl.png" 
              alt="Mixcóatl"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="Mixcóatl" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

          <figure>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Macuiltonaleque_1.jpg" 
              alt="ahuiateteo"
              width={400}>
            </img>
            <figcaption style={{width:265}}> <AztecButton texto="ahuiateteo" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

          <figure>
            <img 
              src="https://www.mitologia.info/wp-content/uploads/2017/11/ehecatl-dios-azteca-viento.jpg" 
              alt="ehécatl"
              width={200}>
            </img>
            <figcaption style={{width:200}}> <AztecButton texto="ehécatl" imageURL= '/images/textura.jpg' linkto='ses'/> </figcaption>
          </figure>

        </div>



        <ul className="grid grid-cols-1 gap-1" style={{ margin: 0, padding: 0 }}>
           <AztecButton linkto="/religion" imageURL="/images/religion-azteca.jpg" texto="Regresar a Religión"/>
        </ul>
      </section>
    </Base1>
  );
};

export default Dioses;