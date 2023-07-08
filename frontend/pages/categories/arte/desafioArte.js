import { Base1 } from "@layouts/Baseof";
import Link from "next/link";

const Titulo = () => {
  return (
    <div className="font-text relative h-80">
    <img
      className="absolute inset-0 h-full w-full object-cover brightness-50"
      src={"/images/60ececdb1ab3bd00957e108ed2f27ec6.gif"}
      alt="Imagen de fondo"
    />
    <div className="relative z-12 flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold">
        <span className="text-green-500">Desafios Aztecas</span>
      </h1>
      <p className="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-1xl text-[#FFFFFF] mt-4 mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-16">
      Diviertete aprendiendo mas sobre la civilización Aztecas a través de
              los siguientes minijuegos y quiz:
      </p>
    </div>
    </div>
  );
};

const Minijuegos = () => {
  return (
    <Base1 title={"Categorias Aztecas"}>
      <div className="mt-8">
        <Titulo />
        <section className="section pt-0 mt-8">
          <div className="container pt-12 text-center">
           
            <ul
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 " 
              style={{ marginTop: '-8%', padding: 0 }}
            >
              <li
                key={`1`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105 hover:bg-green-400"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("/images/agricultura.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(100%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/categories/jerarquia/ahorcadoJeraquia`}
                  className="flex transform flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition hover:scale-105 hover:bg-primary hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                   <span style={{ fontSize: '130%', color: '#006400' }}>Ahorcado</span>

                </Link>
              </li>

             

              <li
                key={`3`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("/images/TicTacToe.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(100%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/triquii`}
                  className="flex transform flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition hover:scale-105 hover:bg-green-400 hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                   <span style={{ fontSize: '130%', color: '#006400' }}>Tic Tac Toe</span>
                </Link>
              </li>

              <li
                key={`4`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("https://play-lh.googleusercontent.com/S91io1m21x1O9sFYjXku6b1N4mmBz4hxriNKPnagw9z5lTzmBbL9oCvLGY3n4nrvAUA")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(100%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/rapidoJ`}
                  className="flex transform flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition hover:scale-105 hover:bg-green-400 hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                   <span style={{ fontSize: '130%', color: '#006400' }}>Rompecabeza🧠</span>

                </Link>
              </li>
              

              <li
                key={`7`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("https://etniasdelmundo.com/wp-content/uploads/2020/02/religion-de-los-aztecas-31.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(100%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/quizArte`}
                  className="flex transform flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition hover:scale-105 hover:bg-green-400 hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                   <span style={{ fontSize: '130%', color: '#006400' }}>Quiz Arte</span>

                </Link>
              </li>
              <li
                key={`8`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("https://etniasdelmundo.com/wp-content/uploads/2020/02/religion-de-los-aztecas-31.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(100%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/categories/jerarquia/memoriJeraquia`}
                  className="flex transform flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition hover:scale-105 hover:bg-green-400 hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                   <span style={{ fontSize: '130%', color: '#006400' }}>Juego memoria</span>

                </Link>
              </li>
            


             

                

                
            
            </ul>

            <ul
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 " 
              style={{ margin: 0, padding: 0 }}
            >
              <li
                key={`1`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105 hover:bg-green-400"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("/images/agricultura.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(100%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/categories/arte`}
                  className="flex transform flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition hover:scale-105 hover:bg-primary hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                   <span style={{ fontSize: '130%', color: '#006400' }}>Regresar Arte</span>

                </Link>
              </li>

             

              <li
                key={`3`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url(/images/religion-azteca.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(100%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/categories/arquitectura`}
                  className="flex transform flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition hover:scale-105 hover:bg-green-400 hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                   <span style={{ fontSize: '130%', color: '#006400' }}>Arquitectura</span>
                </Link>
              </li>

              

             
            


             

                

                
            
            </ul>
          </div>
        </section>
      </div>
    </Base1>
  );
};

export default Minijuegos;