import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";
const Palacios =()=>{
    return(
        <Base title="Palacios">
         {markdownify(
          "Palacios",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-8 text-center lg:text-[40px]"
        )}
        <div>
        <img style={{marginLeft:'auto', marginRight:'auto'}} width="500"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/El_templo_mayor_en_Tenochtitlan.png/1200px-El_templo_mayor_en_Tenochtitlan.png" >

        </img>

        </div>
        <div>
        <p style={{textAlign:'justify', fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}>
        Los palacios aztecas están altamente estandarizados en forma. Tenían un patio central con una sola entrada. El patio estaba rodeado por plataformas elevadas, que contenían habitaciones, salones, altares y otras estructuras. Este plan estándar fue seguido por todos los palacios, desde los magníficos palacios reales de Tenochtitlan y Tezcoco hasta las viviendas de la nobleza provincial.
        </p>
        <p style={{textAlign:'justify', fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}>
        El palacio azteca más famoso fue el que perteneció a Moctezuma II, el noveno y último emperador azteca. El palacio de Moctezuma estaba ubicado en el corazón de Tenochtitlán, la capital azteca. Era un vasto complejo de edificios que cubría un área de más de 100.000 metros cuadrados. El palacio incluía una serie de patios, jardines y templos. También fue el hogar de un zoológico, un jardín botánico y una serie de otras comodidades.
        </p>
        <p style={{textAlign:'justify', fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}>
        El palacio de Moctezuma era un símbolo del poder y la riqueza del imperio azteca. También era un lugar donde Moctezuma podía reunirse con dignatarios extranjeros y realizar negocios. El palacio fue destruido por los conquistadores españoles en 1521, pero sus ruinas todavía se pueden ver en la Ciudad de México en la actualidad.
        </p>
        <p style={{textAlign:'justify', fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}>
        Además del palacio de Moctezuma, había muchos otros palacios aztecas por todo el imperio. Estos palacios fueron construidos típicamente por gobernantes y nobles locales, y variaban en tamaño y complejidad. Sin embargo, todos compartían algunas características comunes, como el uso de plataformas elevadas, los jardines circundantes y su elaborada decoración.
        </p>
        <p style={{textAlign:'justify',  marginBottom:'100px',fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}>
            Los palacios aztecas eran importantes centros de actividad política, económica y cultural. También eran lugares donde los gobernantes aztecas podían mostrar su poder y riqueza. Los restos de los palacios aztecas todavía se pueden ver en muchas partes de México en la actualidad, y brindan una valiosa visión de la cultura y la sociedad de los aztecas.
        </p>
        </div>
        </Base>
    );
}
export default Palacios;