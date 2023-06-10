import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";


const Ceramicas = ()=>{
    return (
        <Base title="Vasijas y Ceramicas">
            {markdownify(
          "Ceramicas",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-8 text-center lg:text-[40px]"
        )}

        <div class="sketchfab-embed-wrapper"> 
        <iframe style={{ width: '40%', height: '400px' }} title="Aztec Ceramic Figures" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/7758b157084c49cabf7c30a27c1e1527/embed"> 
        </iframe> 
        <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}> 
        <a href="https://sketchfab.com/3d-models/aztec-ceramic-figures-7758b157084c49cabf7c30a27c1e1527?utm_medium=embed&utm_campaign=share-popup&utm_content=7758b157084c49cabf7c30a27c1e1527" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}> 
            Aztec Ceramic Figures 
        </a> 
        by 
        <a href="https://sketchfab.com/toeppen?utm_medium=embed&utm_campaign=share-popup&utm_content=7758b157084c49cabf7c30a27c1e1527" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}> 
            John Toeppen 
        </a> 
        on 
            <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=7758b157084c49cabf7c30a27c1e1527" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                Sketchfab
            </a>
    </p>
</div>


        <div>
        <p style={{ fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }} >La cerámica estaba constituida por objetos de paredes delgadas, bien cocidos, de color naranja. 
                Se hicieron copas bicónicas y en forma de cáliz para que los ancianos bebiesen pulque, una fuerte 
                bebida alcohólica hecha de jugo de maguey fermentado.
                La decoración, pintada con líneas negras, fue a menudo geométrica, 
                aunque más tarde se incluyeron pájaros, animales y motivos florales.
            

            </p>
            <p style={{ fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}>
                La cerámica policroma mixteca fue una de las más finas y más apreciadas de las cerámicas aztecas. Se hizo en Cholula y está decorada con numerosos engobes coloreados. Se dice que ésta era la única cerámica que quería usar el rey Moctezuma.
                Fue principalmente una cerámica de lujo en la que se utilizaban los colores crema, amarillo crema, ocre rojo, siena quemada, gris y negro.
                Algunos de los diseños decorativos fueron figuras humanas, símbolos religiosos y seculares, plumas y volutas y los dibujos tenían una calidad de plenitud y minuciosidad.
                Se comercializó mucha cerámica y el soldado español Bernardo Díaz informó haber visto «toda clase de objetos hechos en miles de formas, desde grandes tinajas para agua a pequeñas jarras» 
                en el gran mercado de Tlatelolco, cerca de Tenochtitlan.
            </p>
            <p style={{ fontSize: '23px', fontWeight: 'normal',marginBottom:'100px',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}>La cerámica azteca representa un aspecto importante de la cultura material de los aztecas y proporciona valiosa información sobre su sociedad, creencias y habilidades artísticas. Hoy en día, 
                las piezas de cerámica azteca son altamente valoradas por su belleza y como artefactos históricos. Muchas de estas piezas se encuentran en museos y colecciones de arte en todo el mundo.

            </p>


        </div>

            



        </Base>


    );
}
export default Ceramicas;