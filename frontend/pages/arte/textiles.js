import { Base1 } from "@layouts/Baseof";
const Titulo = () => {
    return (
        <div className="relative h-80 font-text">
            <img
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                src={"https://ae01.alicdn.com/kf/Hf9be0b1eca7345489c81df96d5c4aeb6V/Dragon-azteca-FireworkPolyester-Cotton-4-way-Stretch-tela-Patchwork-coseing-Kid-Home-Textile-Cloth-Quilting-Dress.jpg"}
                alt="Imagen de fondo"
            />
            <div className="relative z-12 flex items-center justify-center h-full">
                <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    <span className="text-green-600">Textiles</span>
                </h1>
            </div>
        </div>
    );
};

const Textiles = () => {

    return (
        <Base1>
            <Titulo />

            <div className="sketchfab-embed-wrapper" style={{ marginTop: '40px' }} >



                <p style={{
                    fontSize: '23px',
                    fontWeight: 'normal',
                    margin: '20px',
                    color: '#000',
                    textAlign: 'justify',
                    lineHeight: '1.5',
                    fontFamily: 'Arial, sans-serif',
                }}>
                    Los textiles tenían un valor simbólico y se utilizaban como moneda en el Imperio Azteca. Los diseños representaban estatus, origen geográfico, historia familiar y ocupación. El arte del tejido estaba principalmente a cargo de mujeres, desde las comunes hasta las nobles, y se transmitía de generación en generación. Aunque se adoptaron técnicas modernas, actualmente hay un resurgimiento de las técnicas tradicionales debido al interés en el arte textil.
                </p>
            </div>
        </Base1>
    )

}

export default Textiles;