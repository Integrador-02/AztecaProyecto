import config from "@config/config.json";
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
              className="grid grid-cols-3 gap-2"
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
                  backgroundSize: "cover",
                  backgroundPosition: "center",
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
                  <span>Ahorcado</span>
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
                  backgroundSize: "cover",
                  backgroundPosition: "center",
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
                  <span>Quiz</span>
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
                  backgroundSize: "cover",
                  backgroundPosition: "center",
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
                  <span>Tic Tac Toe</span>
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
