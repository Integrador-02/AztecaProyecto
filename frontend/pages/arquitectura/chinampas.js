
import { Base1 } from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";

const Titulo = () => {
    return (
      <div className="relative h-80 font-text">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={"https://hidroponia.mx/wp-content/uploads/2016/10/chinampas.jpg"}
          alt="Imagen de fondo"
        />
        <div className="relative z-12 flex items-center justify-center h-full">
          <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-green-600">Chinampas</span>
          </h1>
        </div>
      </div>
    );
  };
const Chinampas=()=>{
    return (
        <Base1 title={"Chinampas"}>
           <Titulo/>
        


           <div className="grid grid-cols-2 gap-1" style={{margin:30,position :10 }}>

        <iframe 
        style={{justifyContent:'center',marginLeft:'auto', marginRight:'auto' ,margin:'auto',marginTop:'10px'}} 
        width="100%" 
        height="100%" src="https://www.youtube.com/embed/F0B2ynEV77Q" 

        title="Chinampas prehispánicas" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        >
        </iframe>



      
        <p style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif',
          }}>               La chinampa es un método de cultivo que se utilizaba por los mexicas para ampliar el territorio en lagos y lagunas del Valle de México y en las que cultivaban flores y verduras.
            La palabra chinampa, proviene del náhuatl chinampan, que significa “en la cerca de cañas”, es un sistema artificial de cultivo, construido en zonas donde el agua es el principal recurso natural presente en el medio. Se construyen con el fin de cultivar plantas, verduras y hortalizas para el autoconsumo y mercado local.
            Se cree que es una técnica iniciada en la época de los toltecas, aunque fue en 1519 que este método de cultivo se popularizó y ocupó casi el 100 por ciento del lago Xochimilco, gracias a ello, una amplia población se pudo desarrollorar a sus orillas. 

        </p>
        </div>
          
        
        </Base1>

    );
}
export default Chinampas;