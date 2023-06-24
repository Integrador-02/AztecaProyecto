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
      <div className="z-12 relative flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold">
          <span className="text-green-500">Minijuegos Aztecas</span>
        </h1>
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
            <p className="mb-2 text-xl text-[#49B675]">
              Diviertete aprendiendo mas sobre la civilización Aztecas a través de
              los siguientes minijuegos:
            </p>
            <header style={{ textAlign: "center" }}></header>
            <ul
              className="grid grid-cols-4 gap-2"
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
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/ahorcado`}
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>Ahorcado</span>
                </Link>
              </li>

              <li
                key={`2`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("/images/quiz.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/quices`}
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>Quiz</span>
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
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>Tic Tac Toe</span>
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
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/pulz`}
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>rompecabeza🧠</span>
                </Link>
              </li>
              <li
                key={`5`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("https://www.cinconoticias.com/wp-content/uploads/xolotl.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/quizDioses`}
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>Quiz Dioses</span>
                </Link>
              </li>
              <li
                key={`6`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("https://etniasdelmundo.com/wp-content/uploads/2020/02/religion-de-los-aztecas-31.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/quizReligion`}
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>Quiz Religion</span>
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
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/quizJeraquia`}
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>Quiz Jerarquía</span>
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
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>Quiz Arte</span>
                </Link>



                

                
              </li>


              <li
                key={`9`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("https://etniasdelmundo.com/wp-content/uploads/2020/02/religion-de-los-aztecas-31.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/quizLeyendas`}
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>Quiz LEYENDA 1</span>
                </Link>



                

                
              </li>

              <li
                key={`10`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("https://etniasdelmundo.com/wp-content/uploads/2020/02/religion-de-los-aztecas-31.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/quizLenyenda2`}
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>Quiz LEYENDA 2</span>
                </Link>



                

                
              </li>

              <li
                key={`11`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("https://etniasdelmundo.com/wp-content/uploads/2020/02/religion-de-los-aztecas-31.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/quizEmparador`}
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>Quiz Gobernantes</span>
                </Link>



                

                
              </li>

              <li
                key={`12`}
                className="block transform overflow-hidden rounded-lg transition hover:scale-105"
                style={{
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  backgroundImage: 'url("https://etniasdelmundo.com/wp-content/uploads/2020/02/religion-de-los-aztecas-31.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                }}
              >
                <Link
                  href={`/quizTextil`}
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
                  <span style={{ fontSize: '1.9em', color: '#006400' }}>Quiz Textil</span>
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