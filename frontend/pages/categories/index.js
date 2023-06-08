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
      <div className="relative z-12 flex items-center justify-center h-full">
  <h1 className="font-bold text-4xl">
    <span className="text-green-500">Categorias Aztecas</span>
  </h1>
</div>

      </div>

  );
};





const Categories = ({ categories }) => {
  return (

    <Base title={"Categorias Aztecas"}>

      <Titulo/>

      <section className="section pt-0">

        <div className="container pt-12 text-center">
          <p className="text-xl text-[#49B675] mb-2">
              Explora la fascinante civilización azteca. Haz clic en la
              categoría que más te interese para obtener información relevante
              sobre el tema. Descubre sus creencias religiosas, sumérgete en su
               cultura, conoce su economía y admira su arquitectura. ¡Sumérgete en
               el mundo de los aztecas y despierta tu curiosidad histórica!
          </p>

          <ul className="grid grid-cols-5 gap-1" style={{ margin: 0, padding: 0 }}>


          <li
            key={`1`}
            className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/agricultura.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Link
              href={`/prueba`}
              className="flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-primary hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
            <span>Agricultura</span>
           </Link>
  </li>

  <li
    key={`2`}
    className="mt-4 block lg:col-4 xl:col-3"
    style={{ margin: 0, padding: 0 }}
  >
    <Link
      href={`/religion`}
      className="flex w-full items-center justify-center rounded-full bg-theme-light px-4 py-4 font-bold text-dark transition hover:bg-primary hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
      style={{
        width: '75px',
        height: '75px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FaPrayingHands className="mr-1.5" />
    </Link>
    <span>Religión</span>
  </li>

  <li
    key={`3`}
    className="mt-4 block lg:col-4 xl:col-3"
    style={{ margin: 0, padding: 0 }}
  >
    <Link
      href={`/arte`}
      className="flex w-full items-center justify-center rounded-full bg-theme-light px-4 py-4 font-bold text-dark transition hover:bg-primary hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
      style={{
        width: '75px',
        height: '75px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FaPalette className="mr-1.5" />
    </Link>
    <span>Arte</span>
  </li>

  <li
    key={`4`}
    className="mt-4 block lg:col-4 xl:col-3"
    style={{ margin: 0, padding: 0 }}
  >
    <Link
      href={`/arquitectura`}
      className="flex w-full items-center justify-center rounded-full bg-theme-light px-4 py-4 font-bold text-dark transition hover:bg-primary hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
      style={{
        width: '75px',
        height: '75px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FaBuilding className="mr-1.5" />
    </Link>
    <span>Arquitectura</span>
  </li>

  <li
    key={`5`}
    className="mt-4 block lg:col-4 xl:col-3"
    style={{ margin: 0, padding: 0 }}
  >
    <Link
      href={`/economia`}
      className="flex w-full items-center justify-center rounded-full bg-theme-light px-4 py-4 font-bold text-dark transition hover:bg-primary hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
      style={{
        width: '75px',
        height: '75px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <FaMoneyBillAlt className="mr-1.5" />
    </Link>
    <span>Economía</span>
  </li>
</ul>

        </div>







      </section>
    </Base>
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
