import config from "@config/config.json";
import { FaSpinner } from 'react-icons/fa';

import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Pagination from "@layouts/components/Pagination";
import Post from "@layouts/partials/Post";
import Sidebar from "@layouts/partials/Sidebar";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import Quiz from "./quiz";
import PostSingle from "./comentarios";
import AhorcadoAzteca from "./minijuego1";
import Menu from "./menu";


const { blog_folder, pagination } = config.settings;

const Home = ({
  banner,
  posts,
  categories,

}) => {
  // define state
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter(
    (post) => post.frontmatter.featured
  );
  const showPosts = pagination;




  return (
    <Base>
  {/* Banner */}
  <section className="section banner relative pb-0">
    
    <ImageFallback
      className="absolute bottom-0 left-0 z-[-1] w-full"
      src={"/images/banner-bg-shape.svg"}
      width={1905}
      height={295}
      alt="banner-shape"
      priority
    />

    <div className="container">
      <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
        <div className={banner.image_enable ? "mt-12 text-center lg:mt-0 lg:text-left lg:col-6" : "mt-12 text-center lg:mt-0 lg:text-left lg:col-12"}>
          <div className="banner-title">
            {markdownify(banner.title, "h1")}
          </div>
          {markdownify(banner.content, "p", "mt-4")}
          {banner.button.enable && (
            <Link
              className="btn btn-primary mt-6"
              href={banner.button.link}
              rel={banner.button.rel}
            >
              {banner.button.label}
            </Link>
          )}
        </div>
        {banner.image_enable && (
          <div className="col-9 lg:col-6">
            <ImageFallback
              className="mx-auto object-contain"
              src={banner.image}
              width={548}
              height={443}
              priority={true}
              alt="Banner Image"
            />
          </div>
        )}
      </div>

      <div className="mt-1"style={{padding:40}}> {/* Agrega un margen superior de 8 unidades */}
        <PostSingle />
      </div>

    </div>
  </section>
</Base>

  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, promotion } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      
      categories: categoriesWithPostsCount,
    },
  };
};


;

  const LoadingIcon = () => {
    return (
      <FaSpinner className="loading-icon" />
    );
  };
  
  const RegistrationMessage = () => {
    return (
      <div>
        
        <p>
          Para registrarte en la web, por favor, ponte en contacto con alguno de nuestros desarrolladores para que te puedan ayudar a crear y proporcionar tus credenciales.
        </p>
        <p>
          Próximamente se abrirá la sesión de registro para que puedas crear tu cuenta de forma autónoma.
        </p>
        <p>
          Agradecemos tu paciencia y te invitamos a estar atento a las actualizaciones y novedades de nuestro sitio web. ¡Estamos emocionados de tenerte como parte de nuestra comunidad!
        </p>
        <LoadingIcon />
      </div>
    );
  };