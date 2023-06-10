import { Base1 } from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";

const Agricultura=()=>{
    const Titulo = () => {
        return (
          <div className="relative h-80 font-text">
            <img
              className="absolute inset-0 w-full h-full object-cover brightness-50"
              src={"https://images.squarespace-cdn.com/content/v1/6047d405b02148755fb6e601/a7763be6-7e3c-435d-b835-4871ac99aa9f/Dima_Svetlolazarovic_illustration_of_an_ancient_aztec_urban_riv_650b2c71-64b8-4d65-9658-f99e1fa13dbd.pn"}
              alt="Imagen de fondo"
            />
            <div className="relative z-12 flex items-center justify-center h-full">
              <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <span className="text-green-600">Agricultura</span>
              </h1>
            </div>
          </div>
        );
      };

    return (
        <Base1 title="Agricultura">
           <Titulo/>
           <div class="sketchfab-embed-wrapper" style={{margin:30,position :10 }} > 
            </div>
            <div>
            <p style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif',
          }}>                    Una de las mayores peculiaridades desarrolladas en el ámbito agrícola fueron los cultivos en las chinampas o balsas. Estas eran verdaderas islas flotantes en el gran lago mexicano, hechas con cañas, ramas y barro. A través  de las  chinampas o balsas, los aztecas consiguieron ganarle espacio al lago, lograr grandes rendimientos  en sus cultivos y evitar el agotamiento de los suelos. Los cultivos básicos de los aztecas eran el maíz, el frijol, las calabazas, el ají, el algodón, el cacao y el tomate. El alimento fundamental del pueblo azteca fue el maíz, el que se podía almacenar para los años en que las cosechas eran escasas debido a la escasez de lluvias. De la planta del maguey, obtenían fibras para confeccionar vestimentas y una miel que utilizaban como endulzante, con ella preparaban una bebida llamada pulque, consumían grandes cantidades de pescados y aves. La sal la obtenían de los lagos salinos .
                </p>
             
             
            </div>
        </Base1>
    );
}

export default Agricultura;
