
import { Base1 } from "@layouts/Baseof"; 
import Link from "next/link";
const Titulo = () => {
    return (
      <div className="relative h-80 font-text">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={"https://pueblosoriginarios.com/meso/valle/azteca/codices/magliabechiano/imagenes/60.jpg"}
          alt="Imagen de fondo"
        />
        <div className="relative z-12 flex items-center justify-center h-full">
          <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-green-600">Musica</span>
          </h1>
        </div>
      </div>
    );
  };



const Musica=()=>{


    return(

        <Base1>
        <Titulo/>
        <ul className="grid grid-cols-1 gap-2" style={{ display: 'flex', justifyContent: 'flex-end', float: 'left', margin: 20 ,padding :10}} >

       
        <div>
        <iframe style={{justifyContent:'center',margin:' auto',marginTop:'10px'}} width="720" height="480" src="https://www.youtube.com/embed/Jca78Q_E-Uc" title="Música Prehispánica | Jorge Reyes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
                }}>
        La música, danza y poesía eran parte integral de la cultura azteca. Estaban presentes en rituales, sacrificios, ofrendas y consumo de sustancias alucinógenas(péyotl, nanácatl) y otros tipos de hierbas. Los músicos gozaban de privilegios civiles y ocupaban jerarquías en los templos. Aunque recibían honores y riquezas, eran considerados parte del servicio doméstico de los señores. Los músicos llevaban un cordel distintivo en la cabeza y heredaron el instrumental de las culturas tolteca y teotihuacana, así como de otras culturas mesoamericanas contemporáneas.
        </p>
        <div className = "flex h-[10vh] items-center justify-center">
        <ul className="grid grid-cols-1 gap-2" style={{ display: 'flex', justifyContent: 'flex-end', float: 'center', margin: -50 ,padding :40}} >
          <li
            key={`5`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/religion-azteca.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(70%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >

            <Link
              href={`/categories//arte/caracteriztica`}
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
               <span style={{ fontSize: '1.9em', color: '#006400' }}>características</span>
            </Link>
          </li>
          

          <li
            key={`6`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/religion-azteca.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(70%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >

            <Link
              href={`/categories//arte/vida`}
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
               <span style={{ fontSize: '1.9em', color: '#006400' }}>Vida Cotidiana</span>
            </Link>
          </li>
        </ul>
        </div>
        </div>
        </ul>
        <ul className="grid grid-cols-2 gap-1" style={{ margin: 5, padding: 30}}>
                  

                  
                  <li
            key={`3`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/arte.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >
            <Link
              href={`/categories/arte`}
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
              <span style={{ fontSize: '1.9em', color: '#006400' }}> Regresar a Arte</span>
            </Link>
          </li>
                  </ul>

        </Base1>

    );
}

export default Musica;