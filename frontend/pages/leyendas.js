import { Base1 } from "@layouts/Baseof";
import AztecButton from "components/AztecButton";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Leyendas = ()=>{
    return (
        <Base1>
            <section className="section pt-0" >
            <div className="relative h-80 font-text">
                <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={"https://www.turimexico.com/wp-content/uploads/2015/07/la-leyenda-de-los-soles.jpg"}
        alt="Imagen de fondo"
            />
                <div className="relative z-12 flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span className="text-green-600">Leyendas</span>
        </h1>
      </div>
    </div>

    <div className="sketchfab-embed-wrapper" style={{ marginTop: '40px' }}>
        <p style={{
            fontSize: '23px',
            fontWeight: 'normal',
            margin: '20px',
            color: '#000',
            textAlign: 'justify',
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif',
          }}>
            Aquí nueve leyendas aztecas

          </p>
    </div>
    <div className="flex justify-center">
        <ul className="grid gap-y-3 gap-x-2 grid-cols-2 w-4/5">
        <AztecButton texto="Leyenda del volcán Popocatépetl" imageURL="https://upload.wikimedia.org/wikipedia/en/c/c0/El_nervio_del_volcan.jpg" linkto="leyendas/leyenda1"/>
        <AztecButton imageURL="https://tucuentofavorito.com/wp-content/uploads/2020/06/campo-de-nuestro-sustento.jpg.webp" texto="El monte de nuestro sustento" linkto="leyendas/leyenda2"/>
        <AztecButton imageURL="https://tucuentofavorito.com/wp-content/uploads/2020/06/maiz.jpg.webp" texto="Los huicholes y el maíz" linkto="leyendas/leyenda3"/>
        <AztecButton imageURL="https://cdn.bioguia.com/embed/cc0a3a9d1dfd562822941df06d70e8d441528478381/--Por_que_hay_un_conejo_en_la_luna-_Una_asombrosa_leyenda_maya" texto ="El conejo de la luna" linkto="leyendas/leyenda4"/>
        <AztecButton imageURL="https://tucuentofavorito.com/wp-content/uploads/2020/07/Tajin-siete-truenos.jpg.webp" texto="Tajín y los siete truenos" linkto="leyendas/leyenda5"/>
        <AztecButton imageURL="https://i.guim.co.uk/img/media/5e993f3c5e6e46ef962a613bc1889dca864afe9a/0_339_5122_3074/master/5122.jpg?width=700&quality=85&auto=format&fit=max&s=3006c8b84e2fb95222e6e64c5d709cf4" texto="La leyenda del ajolote" linkto="leyendas/leyenda6"/>
        <AztecButton imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2COBRhPNFpcJXw6RFWp6eH1Vo8oBxAD1kQ&usqp=CAU" texto="El flechador del cielo" linkto="leyendas/leyenda7"/>
        <AztecButton imageURL="https://pm1.aminoapps.com/6283/36fc92c000641e4b32bdb0b0f18b35a898dbf486_00.jpg" texto="El ahuízotl" linkto="leyendas/leyenda8"/>
        <AztecButton imageURL="https://tucuentofavorito.com/wp-content/uploads/2022/11/leyenda-del-espejo-humeante.jpg.webp" texto="El espejo humeante" linkto="leyendas/leyenda9"/>
        </ul>

    </div>
                

            </section>

        </Base1>


    );

}



export default Leyendas;