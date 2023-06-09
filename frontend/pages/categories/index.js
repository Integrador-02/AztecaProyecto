import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { Base1 } from "@layouts/Baseof";
import { getTaxonomy } from "@lib/taxonomyParser";
import { humanize, markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
const { blog_folder } = config.settings;
import { getSinglePage } from "@lib/contentParser";
import { FaFolder ,FaSeedling ,FaPrayingHands,FaPalette,FaBuilding ,FaMoneyBillAlt} from "react-icons/fa";
import { slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import { FaPaintBrush } from 'react-icons/fa';
import Cookies from "js-cookie";
// CLASE QUE CONTINEN LOS ELEMENTOS DE LA CATEGORIAS
//TITULO DE LA PAGINA

const Titulo = () => {
  return (
    <div className="relative h-80 font-text">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"/images/60ececdb1ab3bd00957e108ed2f27ec6.gif"}
        alt="Imagen de fondo"
      />
      <div className="relative z-12 flex flex-col items-center justify-center h-full text-center">
        <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span className="text-green-500" style={{ fontSize: '1.9em', color: 'white' }}>Categorías Aztecas</span>
        </h1>
        <p className="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-1xl text-[#FFFFFF] mt-4 mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-16">
          Explora la fascinante civilización azteca. Haz clic en la categoría que más te interese para obtener información relevante sobre el tema. Descubre sus creencias religiosas, sumérgete en su cultura, conoce su economía y admira su arquitectura. ¡Sumérgete en el mundo de los aztecas y despierta tu curiosidad histórica!
        </p>
      </div>
    </div>
  );
};





 

const Categories = ({ categories }) => {const  a = Cookies.get('clave');
 console.log(a);
 

  return (

    <Base1 title={"Categorias Aztecas"}>
    <Titulo />

    <section className="section pt-0">

      <div className="container pt-12 text-center"> 
        <header style={{ textAlign: 'center' }}>



        </header>
        <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ margin: 0, padding: 0 }}>
          <li
            key={`1`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400 "
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("https://aventurateamexico.com/wp-content/uploads/2022/12/gobernantes-aztecas.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >
            <Link
              href={`/categories/jerarquia`}
              className="text-lg flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-primary hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white sm:text-lg md:text-xl"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',


              }}
            >
              <span style={{ fontSize: '130%', color: '#006400' }}>Jerarquia</span>
            </Link>
          </li>

          <li
            key={`2`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/religion-azteca.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >
            <Link
              href={`/categories/religion`}
              className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <span style={{ fontSize: '130%', color: '#006400' }}>Religión</span>
            </Link>
          </li>


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
              filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >
            <Link
              href={`/categories/arte`}
              className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <span style={{ fontSize: '130%', color: '#006400' }}>Arte</span>
            </Link>
          </li>

          <li
            key={`4`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/arquitectura.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >
            <Link
              href={`/categories/arquitectura`}
              className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
               <span style={{ fontSize: '130%', color: '#006400' }}>Arquitectura</span>
            </Link>
          </li>

          <li
            key={`5`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/economia.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >
            <Link
              href={`/categories/economia`}
              className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
                <span style={{ fontSize: '130%', color: '#006400' }}>Economía</span>
            </Link>
          </li>


          <li
            key={`6`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/Tlachtli.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(90%)', // Ajusta el valor de brillo según tus preferencias
            }}
          >
            <Link
              href={`/minijuegos`}
              className="text-lg sm:text-lg md:text-xl flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
               <span style={{ fontSize: '130%', color: '#006400' }}>Minijuegos/Quiz</span>
            </Link>
          </li>




        </ul>





      </div>







    </section>
  </Base1>
  );
};

export default Categories;

export const getStaticProps = () => {
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");
  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.map(e => slugify(e)).includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });
  return {
    props: {
      categories: categoriesWithPostsCount,
    },
  };
};
