import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";
const Chinampas=()=>{
    return (
        <Base title={"Chinampas"}>
            {markdownify(
          "Chinampas",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-8 text-center lg:text-[40px]"
        )}
        

        <div >
        <iframe 
        style={{justifyContent:'center',marginLeft:'auto', marginRight:'auto' ,margin:'auto',marginTop:'10px'}} 
        width="720" 
        height="480" src="https://www.youtube.com/embed/F0B2ynEV77Q" 
        title="Chinampas prehispánicas" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        >
        </iframe>


            
        </div>


        <div>
        <p style={{ fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }} >
            La chinampa es un método de cultivo que se utilizaba por los mexicas para ampliar el territorio en lagos y lagunas del Valle de México y en las que cultivaban flores y verduras.
        </p>
        <p style={{ fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }} >

        La palabra chinampa, proviene del náhuatl chinampan, que significa “en la cerca de cañas”, es un sistema artificial de cultivo, construido en zonas donde el agua es el principal recurso natural presente en el medio. Se construyen con el fin de cultivar plantas, verduras y hortalizas para el autoconsumo y mercado local.

        </p>
        <p style={{textAlign:'justify', fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }} >
        Se cree que es una técnica iniciada en la época de los toltecas, aunque fue en 1519 que este método de cultivo se popularizó y ocupó casi el 100 por ciento del lago Xochimilco, gracias a ello, una amplia población se pudo desarrollorar a sus orillas. 
        </p>
        <p style={{ fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }} >
        Sin embargo, este método no era exclusivo del Valle de México, también era popular en el lago de Texcoco. Actualmente, en México, aún sobreviven las chinampas tanto en Xochimilco como en Tláhuac, son las últimas del mundo, lo que las reviste de una gran importancia, además de que en producción de alimento y flores tienen un gran potencial.
        </p>
        <p style={{ fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }} >
        Además del impacto en productividad, las chinampas representan un sistema que permite conservar las áreas lacustres que, a su vez, son un complejo ecosistema con efectos benéficos sobre el clima y la calidad del aire de la Ciudad de México.
        </p>
        <h3 style={{ fontSize: '40px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}> Antecedentes </h3>
        <p style={{ fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }} >
        A comienzos de la época de gran importancia cultural mesoamericana conocida como Formativo Tardío, en la cual nacieron ciertas tradiciones que preparaban el camino para el período Clásico, surgió la necesidad de renovar los métodos para producir alimentos, sobre todo el en sector de la agricultura.
        </p>
        <p style={{textAlign:'justify', fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000' }}>
        Con el objetivo de trabajar sobre suelos de mayor riqueza y mejor irrigación, los productores comenzaron a aprovechar las márgenes de las concentraciones de agua que se formaban en las épocas de humedad, y también de los pantanos. Gracias a esta idea, sus cosechas por año se multiplicaron.
        </p>
        <p style={{textAlign:'justify', fontSize: '23px', fontWeight: 'normal',marginLeft:'125px',marginTop: '10px', marginRight: '125px', color: '#000', marginBottom: '100px' }}>
        Otra práctica que nació en aquella época fue el cultivo de jardines alrededor de las casa, con plantas que exigían una mayor atención. Uno de sus beneficios fue una mayor diversidad en la alimentación. También en algunas regiones modificaron las colinas para que pudieran albergar terrazas agrícolas, que detenían la erosión y potenciaban la producción. Pero fue recién con los drenajes y los llamados campos levantados que surgieron las primeras manifestaciones de las actuales chinampas.
        </p>
        </div>
        </Base>
    );
}
export default Chinampas;