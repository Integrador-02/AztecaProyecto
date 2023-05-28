import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "@layouts/Baseof";
import { FaInfoCircle } from 'react-icons/fa';
const Religion = ({

  }) => {




    return (
        <Base title={"Categorias Aztecas"}>

        <section className="section pt-0">
        {markdownify(
            " Religión",
            "h1",
            "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
          )}
        <div className="sketchfab-embed-wrapper">
        <p style={{ fontSize: '43px', fontWeight: 'normal', margin: '5px', color: '#000' }}>
        Coyolxauhqui
        </p>
        <iframe style={{width: '40%', height: '400px'}} title="COL: Coyolxauhqui" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/73dff65bf4654de08d8db64298adc6ae/embed"></iframe>
        <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a href="https://sketchfab.com/3d-models/col-coyolxauhqui-73dff65bf4654de08d8db64298adc6ae?utm_medium=embed&utm_campaign=share-popup&utm_content=73dff65bf4654de08d8db64298adc6ae" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>COL: Coyolxauhqui</a> by <a href="https://sketchfab.com/idiom-project?utm_medium=embed&utm_campaign=share-popup&utm_content=73dff65bf4654de08d8db64298adc6ae" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>Text Database and Dictionary of Classic Mayan</a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=73dff65bf4654de08d8db64298adc6ae" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>Sketchfab</a>
        </p>
        <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000' }}>
        Coyolxauhqui (pron. Koy-ol-shauw-kee) fue la diosa azteca de la luna o la vía láctea quien fue masacrada <br />
        por su hermano Huitzilopochtli, el dios de la guerra, en la mitología azteca. Esta historia fue conmemorada <br />
        en una célebre piedra de gran relieve encontrada al pie de la pirámide de los sacrificios, el Templo Mayor de<br />
        la capital azteca, Tenochtitlan.<br />
        </p>
    </div>
    <MasInformacion />
    </section>

</Base>
    );
  };

  export default Religion;

  // for homepage data
  const MasInformacion = () => {
    return (
      <div className="center-container">
        <FaInfoCircle size={50} />
        <span style={{ marginLeft: '5px' }}>Más información próximamente</span>
      </div>
    );
  };
