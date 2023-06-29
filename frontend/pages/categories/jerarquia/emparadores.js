/**
 * 
 *Clase donde sale la lista de emparadores que han gobernado el imperio azteca
 */
import React from 'react';
import { Base1 } from "@layouts/Baseof";
import Link from 'next/link';

 const Emperador = () => {
   const Titulo = () => {
     return (
       <div className="relative h-80 font-text">
         <img
           className="absolute inset-0 w-full h-full object-cover brightness-50"
           src={"https://elheraldoslp.com.mx/new/wp-content/uploads/2021/08/1-29-860x1024.jpg"}
           alt="Imagen de fondo"
         />
         <div className="relative z-12 flex items-center justify-center h-full">
           <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
             <span className="text-green-600">Lista de Gobernantes de Tenochtitlán: Períodos y Tlatoque destacados</span>
           </h1>
         </div>
       </div>
     );
   };
 
   const [anchorEl, setAnchorEl] = React.useState(null);
 
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
 
   const handleClose = () => {
     setAnchorEl(null);
   };
 
   const open = Boolean(anchorEl);
   const id = open ? 'popover' : undefined;
 
 
 
   return (
     <Base1 title={"Categorias Aztecas"}>
       <section className="section pt-0"  style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll'}}>
         <Titulo />
         <div className="text-center" style={{ padding: 30 }}>
 
           <p style={{
             fontSize: '23px',
             fontWeight: 'normal',
             margin: '20px',
             color: '#000',
             textAlign: 'justify',
             lineHeight: '1.5',
             fontFamily: 'Arial, sans-serif',
           }}>
 
             Tenochtitlán fue la capital del Imperio Azteca en la actual Ciudad de México.
             Desde su fundación en 1325 hasta su destrucción en 1521, los gobernantes de Tenochtitlán,
             conocidos como tlatoque, ejercieron el poder. Bajo el liderazgo de Moctezuma II,
             alcanzaron la máxima autoridad en el imperio. Sin embargo, en 1521, Tenochtitlán fue conquistada 
             por los españoles y el cargo de tlatoani fue abolido en 1565.
           </p>
         </div>
         <ul className="grid grid-cols-2 gap-1" style={{ margin: 0, padding: 0 }}>
           <li
             key={`7`}
             className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
             style={{
               margin: 0,
               padding: 0,
               position: 'relative',
               backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
             }}>
 
 
             <Link
               href={`/categories/jerarquia/temprano`}
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
               <span style={{ fontSize: '1.9em', color: '#006400' }}>Temprano Tenochtitlan (1325-1375) y Tlatoque preimperial (1375-1427)</span>
             </Link>
 
           </li>
 
           <li
             key={`8`}
             className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
             style={{
               margin: 0,
               padding: 0,
               position: 'relative',
               backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
             }}>
 
 
             <Link
               href={`/categories/jerarquia/imperioAzteca`}
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
               <span style={{ fontSize: '1.9em', color: '#006400' }}>Imperio azteca (1427-1521) </span>
             </Link>
 
           </li>
 
          
 
 
 
           <li
             key={`9`}
             className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
             style={{
               margin: 0,
               padding: 0,
               position: 'relative',
               backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
             }}>
 
 
             <Link
               href={`/categories/jerarquia/colonial`}
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
               <span style={{ fontSize: '1.9em', color: '#006400' }}>Período colonial (1525-1565)</span>
             </Link>
 
           </li>
           <li
             key={`10`}
             className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
             style={{
               margin: 0,
               padding: 0,
               position: 'relative',
               backgroundImage: 'url("https://www.lareserva.com/home/fimage/mw.jpg")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
             }}>
 
 
             <Link
               href={`/categories/jerarquia/dinastico`}
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
               <span style={{ fontSize: '1.9em', color: '#006400' }}>Reanudación del gobierno dinástico (1538-1565)</span>
             </Link>
 
           </li>
 
 
 
         </ul>
 
 
 
 
 
 
 
       </section>
     </Base1>
   );
 };
 
 
 export default Emperador;