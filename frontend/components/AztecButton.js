import Link from "next/link";

const AztecButton =(props)=>{
  ///atributos
  //imageURL: link de la imagen
  //texto: texto del boton
  //linkto: next Link a donde quieres que te redirija el boton
  //textSize: tamaño del texto en unidades em (elemento padre), por default es 1.9

    return (
        <li
              key={`1`}
              className="block rounded-lg overflow-hidden transition transform hover:scale-105 hover:bg-green-400"
              style={{
                margin: 0,
                padding: 0,
                position: 'relative',
                backgroundImage: `url("${props.imageURL}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
              }}
            >
              <Link
                href={props.linkto}
                className="flex flex-col items-center justify-center bg-theme-light px-4 py-4 font-bold text-dark transition transform hover:bg-green-400 hover:text-white hover:scale-105 dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span style={{ fontSize: `${props.textSize ? props.textSize :1.9}em` , color: '#006400' }}>{props.texto}</span>
              </Link>
            </li>
    )
}
export default AztecButton;