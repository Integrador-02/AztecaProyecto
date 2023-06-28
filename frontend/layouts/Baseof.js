import React from "react";
import config from "@config/config.json";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
import { Header3 } from "@partials/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import Breadcrumbs from "pages/nave";

const Base = ({ children }) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();

  return (
    <>
      <Head>
        {/* configuracion de  las etiquetas de encabezado */}
        <title>AZTECAS</title>
        {/* ... */}
      </Head>
      <div className="app-container">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
      <style jsx global>{`
        .app-container {
          position: relative;
          min-height: 90vh;
          overflow: hidden;
        }

        .content {
          padding-top: 0px; /* Ajusta el valor según sea necesario */
          overflow-y: auto;
          height: calc(100vh - 80px); /* Ajusta el valor según el padding-top */
        }

        html,
        body {
          overflow: hidden; /* Oculta la barra de desplazamiento principal */
        }
      `}</style>
    </>
  );
};

export default Base;

export const Base1 = ({ children }) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();

  return (
    <>

      <Head>

        {/* configuracion de  las etiquetas de encabezado */}
        <title>AZTECAS</title>
        {/* ... */}
      </Head>
      <div className="app-container">
        <Header3 />
        <div style={{ margin: '1rem' }}>
          <Breadcrumbs className="my-breadcrumbs" />
        </div>


        <div className="content">{children}</div>
        <Footer />
      </div>
      <style jsx global>{`
        .app-container {
          position: relative;
          min-height: 90vh;
          overflow: hidden;
        }

        .content {
          padding-top: 0px; /* Ajusta el valor según sea necesario */
          height: calc(100vh - 80px); /* Ajusta el valor según el padding-top */
        }

        html,
        body {
          overflow: hidden; /* Oculta la barra de desplazamiento principal */
        }

        
      `}</style>
    </>
  );
};

