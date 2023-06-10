import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";

const Agricultura=()=>{
    

    return (
        <Base title="Agricultura">
            {markdownify(
            "Agricultura",
            "h1",
            "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-8 text-center lg:text-[40px]"
            )}
            
            <div>
            <img style={{marginLeft:'auto', marginRight:'auto'}} width="500"  src="https://images.squarespace-cdn.com/content/v1/6047d405b02148755fb6e601/a7763be6-7e3c-435d-b835-4871ac99aa9f/Dima_Svetlolazarovic_illustration_of_an_ancient_aztec_urban_riv_650b2c71-64b8-4d65-9658-f99e1fa13dbd.png" ></img>
            </div>
            <div>
                <p style={{textAlign:'justify', fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}>
                    Una de las mayores peculiaridades desarrolladas en el ámbito agrícola fueron los cultivos en las chinampas o balsas. Estas eran verdaderas islas flotantes en el gran lago mexicano, hechas con cañas, ramas y barro. A través  de las  chinampas o balsas, los aztecas consiguieron ganarle espacio al lago, lograr grandes rendimientos  en sus cultivos y evitar el agotamiento de los suelos. Los cultivos básicos de los aztecas eran el maíz, el frijol, las calabazas, el ají, el algodón, el cacao y el tomate. El alimento fundamental del pueblo azteca fue el maíz, el que se podía almacenar para los años en que las cosechas eran escasas debido a la escasez de lluvias. De la planta del maguey, obtenían fibras para confeccionar vestimentas y una miel que utilizaban como endulzante, con ella preparaban una bebida llamada pulque, consumían grandes cantidades de pescados y aves. La sal la obtenían de los lagos salinos .
                </p>
                <p style={{textAlign:'justify', fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}>
                    Fueron muy eficientes en el aprovechamiento de las ventajas naturales que tenía el valle de México donde se encontraban asentados. Usando adecuadamente el terreno y el sistema de cultivo lograron garantizar un proceso apropiado de producción que servía para el sustento de su población y para poder intercambiar.
                </p>
                <p style={{textAlign:'justify', fontSize: '23px', marginBottom: '100px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}>
                    Sin embargo, el terreno que habitaron tenía pantanos, elevaciones y colinas, por esa razón se vieron en la necesidad de buscar métodos alternativos de producción. Utilizaron el sistema de huertos flotantes o chinampas donde lograban cultivar suficiente cantidad de productos. Entre los huertos flotantes más importantes están los del lago de Xochimilco.
                </p>
            </div>
        </Base>
    );
}

export default Agricultura;
