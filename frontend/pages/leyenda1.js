import { Base1 } from "@layouts/Baseof";
import { useState } from 'react';


import Audio from "./audio";
const leyenda1=()=>{


  
const TextWithBoldFirstLetter = ({ text }) => {
 
  const firstLetter = text.charAt(0);
  const restOfText = text.slice(1);

  return (
 
      <p
        style={{
          textAlign: 'justify',
          fontSize: '12px',
          fontWeight: 'normal',
          marginLeft: '12px',
          marginTop: '10px',
          marginRight: '12px',
          color: '#001'
        }}
      >
        <span style={{ fontWeight: 'bold', fontSize: '30px' }}>{firstLetter}</span>
        {restOfText}
      </p>
    
  );
};
  
  const Carta = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 1; // Número de imágenes por página
    const text = [
      {
       
        texto1: "Cuenta una leyenda el origen del volcán Popocatépetl y del volcán con perfil de mujer, conocida como la (Mujer dormida)."
      },
      {

        texto1: "Hace mucho, mucho tiempo, gobernó entre los aztecas un hombre bueno y justo, al que todos querían muchísimo. Este emperador tuvo una hija, hermosa e inteligente. Según iba creciendo, sus dones aumentaban, hasta tal punto que su padre temía no encontrar una pareja lo suficientemente valiosa para ella."
      },
      {
        
        texto1: " Sin embargo, su hija, de nombre Izta, ya se había enamorado de un valiente guerrero, muy popular entre todos por sus victorias. Pero por supuesto, ambos jóvenes llevaban su amor en secreto."
      },
      {
        
        texto1: "El guerrero lucha por la mano de Izta. En una ocasión, el imperio se vio amenazado por un enemigo muy fuerte. El emperador estaba tan preocupado, que llamó a sus tres mejores guerreros. Entre ellos estaba Popocatépetl, el guerrero del que su hija se había enamorado en secreto"
      },
      {
        
        texto1: "Mandado llamar porque sois los mejores y confío en vosotros- dijo el emperador- Esta vez pienso pagar con algo más que gratitud vuestra honestidad y coraje. Aquel quien consiga derrotar al enemigo, gobernará el imperio y se ganará la mano de mi hija."
      }

    ];
  
    // Calcula el número total de páginas
    const totalPages = Math.ceil(text.length / itemsPerPage);
  
    // Calcula los índices de inicio y fin según la página actual y los elementos por página
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
  
    // Obtiene los dioses para la página actual
    const paginatedDioses = text.slice(start, end);
  
    // Función para cambiar de página
    const handlePageChange = (newPage) => {
      setPage(newPage);
    };
  
    return (
      <div className="grid grid-cols-1 gap-1 center" style={{ margin: '10%', marginTop: '-4%', width: '40vw' }}>
        {/* Mostrar las cartas paginadas */}
        {paginatedDioses.map((dios, index) => (
          <li key={index}>
            <TextWithBoldFirstLetter text={dios.texto1} />
          </li>
        ))}
  
        {/* Agregar iconos de paginación */}
        <div className="pagination" style={{ justifyContent: 'center', margin: '-2.5rem' }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={page === index + 1 ? 'active' : ''}
              style={{
                backgroundColor: '#40E0D0',
                border: '2px solid #40E0D0',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                margin: '5px',
                cursor: 'pointer',
              }}
            >
              {index + 1}
            </button>

          ))}
          
        </div>
      </div>
    );
  };

    return (
        <Base1>
      <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll'}}>
        <div className="relative h-30 font-text">
     
      <div className="relative z-9 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">La Leyenda del Volcán Popocatépetl</span>
        </h1>
      </div>
    </div>

    <div className="grid-container" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll'}}>
   <Audio />
    
 <Carta/> 
        </div>
        <style jsx>{`
        @media (min-width: 768px) {
          .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }

        .grid-container {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
          height: 'calc(100vh - 80px)'; 
          overflowY: 'scroll'
        }
      `}</style>
        </section>
        </Base1>
    )

}
export default leyenda1;


