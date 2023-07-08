import React, { useEffect } from 'react';
import { Base1 } from "@layouts/Baseof";
import Link from "next/link";
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import axios from "axios";
import Cookies from "js-cookie"
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
    const [email, setEmail] = useState('');
    const [selectedOptions2, setSelectedOptions2] = useState(0);
    useEffect(() => {
      const user = Cookies.get('clave');
      setEmail(user);
    }, []);
  
    useEffect(() => {
      const guardarProgresoJeraquia = async () => {
        const pagina = 'textiles';
        const newCommentObject = {
          id: 1,
          text: 1,
          username: email,
          replyTo: 1,
          likes: 0,
          timestamp: 1,
        };
  
  
        const coment = newCommentObject.text
        const correo = newCommentObject.username
        try {
          const response = await axios.post("https://happy-fly-loincloth.cyclic.app/api/progresorArte", { correo, pagina });
          // Manejo de la respuesta exitosa
          //alert("Registrado correctamente");
        } catch (error) {
          // Manejo de errores en caso de que falle la solicitud al backend
          console.log(error);
          //alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
        }
      };
  
      if (email) {
        console.log(email)
        guardarProgresoJeraquia();
      }
    }, [email]);
  
    const handleSubmit = async () => {
  
      //window.location.href = "/categories/jerarquia/comentarioJeraquia";
  
    };
  
    useEffect(() => {
      const handlerRevision = async () => {
        try {
          console.log('sd', email);
          const url = `https://happy-fly-loincloth.cyclic.app/api/recuperarprogresoArte?correo=${email}`;
          const respuesta = await axios.get(url);
          setSelectedOptions2(respuesta.data.valor); // Utiliza respuesta.data.valor en lugar de respuesta.valor
        } catch (error) {
          console.error('Error al hacer la solicitud:', error);
          // Manejo de errores en caso de que falle la solicitud al backend
          alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
        }
      };
  
      if (email) {
        handlerRevision();
      }
    }, [email]);
  

    const TextWithBoldFirstLetter = ({ title, text }) => {
        const firstLetter = text.charAt(0);
        const restOfText = text.slice(1);
    
        return (
          <div>
            <h1 className="font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
              <span className="text-green-600">{title}</span>
            </h1>
    
            <p
              style={{
                fontSize: '23px',
                fontWeight: 'normal',
                margin: '20px',
                color: '#000',
                textAlign: 'justify',
                lineHeight: '1.5',
                fontFamily: 'Arial, sans-serif'
              }}
            >
              <span >{firstLetter}</span>
              {restOfText}
            </p>
          </div>
        );
      };
    return (
        <Base1>
            

            <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>
                <ul className="grid grid-cols-2 gap-3" style={{ margin: 0, padding: 0 }}>

                <TextWithBoldFirstLetter title={'Textil'} text={' Los textiles tenían un valor simbólico y se utilizaban como moneda en el Imperio Azteca. Los diseños representaban estatus, origen geográfico, historia familiar y ocupación. El arte del tejido estaba principalmente a cargo de mujeres, desde las comunes hasta las nobles, y se transmitía de generación en generación. Aunque se adoptaron técnicas modernas, actualmente hay un resurgimiento de las técnicas tradicionales debido al interés en el arte textil.'} />

                  

                    <div >
                        <Textile />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <a href={"/categories/arte/vestimenta"}>
                                <button
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'green',
                                    }}
                                >
                                    Vestimenta Azteca
                                </button>
                            </a>
                        </div>
                    </div>




                </ul>
            <ul className="grid grid-cols-2 gap-1" style={{ margin: 0, padding: 10 }}>



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
                        filter: 'brightness(80%)', // Ajusta el valor de brillo según tus preferencias
                    }}
                >
                    <Link
                        href={`/categories/arte`}
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
                        <span style={{ fontSize: '1.9em', color: '#006400' }}> Regresar a Arte</span>
                    </Link>
                </li>
            </ul>
            </section>
        </Base1>

    )

}


export default Textiles;


const Textile = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div
                onClick={handleCardClick}
                style={{
                    width: '100%',
                    height: '50vh',
                    backgroundColor: 'lightgreen',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0px 0px 10px 6px rgba(0, 0, 0, 0.3)',
                    borderRadius: '10px',
                    margin: '10px',
                }}
            >
                <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQTExYUFBQYGBYWGRgZGxoaGxYaHBkaGh8aGRkfHxoaICsiGiAoHRobJDYjKCwuMTExGiE3PDcwOyswMS4BCwsLDw4PHRERHDsoIikyMjIwNjIyMDAwMjIyMDAwMjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAMYA/wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAEEBQcDAgj/xABCEAACAQIEAwYDBAgEBgMBAAABAhEAAwQSITEFQVEGEyJhcYEykaEHQlKxFCNygsHR4fBikqLxFRYzU8LiNGPSsv/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAArEQACAgEEAQIGAgMBAAAAAAABAgADEQQSITFBE1EFFCIyYXGBoZHR4UL/2gAMAwEAAhEDEQA/ANkilT0qrEkaKVPSqYkjUhT0wqSRRSp6VSSNSpU9SSNSNPTEVJI1PTCnqSRU1PSqpI1Knimq5I8UxpTT1JI1eophT1JJ5NQuIcTt2VzMdzAAiSa9cVv5LbnyjpBaFBn3rNOKqpvvBzutoArBEHUoygEh2add4Efh0y6i8p9I7xH0VBzyeIXcR7c4e2juhNzugDcyx4SYASRINwkgZfmRFV/CO3NzE3D3VlRaIGUksWJ5kiAunRWPUkbUF2uD4h8PirJXIbjpctuSBmKsrRoSy89SOQqb2T4ddwxBvJbbWS2e45HnlfSfMRvTa2JXJg2emjYBhP2v7S3MNbVu9UEsAFOQFzvzZYXTWJnaRVbw3trfdpTEW7pnW2bDqfMZlJPvBqD22BxDW2H/AErYYnIgz5zpJ1lhlHIaGqPB20g3LVwldtMy5Tz1Oq+496U77YO5T1NVwva6yVBvBrLHSHVonyaNfcA+VW+Extu6Jturj/CQY9elZtwbtLdH6m6BftMIKXSCfZ2MH39qIsFwfxg2L12y4H/TurJA6Ak+JfKWohYxHHMGF8UoqgXF4tGNtmtPcAJVSrJ3ijmr5iJ6rEj0gmxwPFEdd8rDRlbRlPMEfx2NNDgySwpUqVHKipUqVSSKlTUqkkelTUiKkkekKVeZqST1SpqaakkRNPFeRXoGpJFSpE1Cu48AwPrzoSQJYGZMpGo+HxYbyPnXcVYOZCMT1TUhTxVyo9MTT1U9pcW1uwcgJZjlEdNSx/yg/OqJwMySDxjjwOZLUEQZc6j90c/U0OhFkEDqNeZ20jfTT0gDnPXAFdZEgaDU7eY6zpXI4lVuzoE/FyUwRr+U+dc6y9GY45YQcPgZ4Bj37bqoJWNp9dTXjDWjcBOYATEnX00+X9xS4rjxBQXFYmPhIMAGZJG20e/yqrPFu7OxZDBIEBg2msHfbUeVALrnqJVfqlGlFcAniTcdba2wUxqJB8v4cqrOJYE4W82JRQy6i6hHhIO5gf2NKkY3iLX4OUBYKgbzOrGRpOg0G0c5r1e4wSndsgMiMxPLqVj+NUfmMLx+4xBWrN/UjHD4e4A1lsoIk22PiWfwsYkesetX3AuKlLQtYpDcsD4LgBJtkcjzWPmKl/Z7h7d6xct3EVltuAkgSAVnfcbx7Gp93hJwt0XLMm08BkbUTyEnkdgTsY5GtQR15zxLMm4LAB0Bt4g3LR1C3AtxdOhEMCPXSrWysaQZHMmdP2jvULhuBW2xe1pbuwxXkG5MBykaEenSrOa0IAB1KnqlSpU2VFSpUqqSKlSpVJIqVMKgcfxRt2HZTDGEU7wzkIp9iwPtVE4GZBzOVvjAfE9yolQrFn5ZlIBUek6nrpyNWtDvZrDDvHcfCirbB6tOa5rzM5ZPWaIapCSMmEwAOI9NT01FBjVE4pxO1YTPdcIvnuT0AGpPpUyhntnw83msECTbZ3GimGgASH8JGvzjzoWOBLUZOJGxnbtYAsYe9cZiAuZciGeebUx7VB4f2kD3Gs37Xd3E9xzH8D8tqht2hC3/ANHu27neqSBNqCDEyHtHUZfIgjyqDjLtye8cIwkgMIbMvKG5RzGkSdKleyxtpP8AmMIKrnEtuI8XS7cW2jL4TIzyoc9FbbbSutrjF1bkBnUiWIZgy9IygaesCqzhJXEXxZV7gu5S+S7nysFiRqWQgyNtd+lSsZw+7YygwC8hUZQ4YjoQcytGuWYiOhpGoq2H6TGVsGGCJa4HtYvfQ95SgU5goLZWMZQSqiNJ+dEtjidl/huofRlrPsPh894JcGQt4Qwnwk6Ifa4AD+1V9gMbetL+sU3Etko4IBe2RoCD99TyY+dVXYQOYlyC3EKjfX8Q+dDfa7iiZbeR1bxmQCDrBgHpzojw95XUMplSJHpVB2+tD9HFwgnI6mFjWfCN/MinOu9cZxBBxyIG/pDTFtoB0MAEaydOhj1rnZ7sQLt9UEkfEJJGpOZvPUz5c6gFrlzVmyKFBCodRvu8Sd5iKkYTBorHIoEjUga7nc7kkmgFdVZJC5J7iWY8A8yVZxVgC2Vs3Lp5+ECQQSGi4QrTEgDbypv0t8spYtobbMQC0kgg6AgeBiCNdR61zOMRAoZ1UCNyByI51yPGbILwxbY+BWflr8I9PnTQx8QSx9p2e5ePhzWgrFmBCHQmTlgtqILa6HQ1U58QDrdXQkfBznTnMDSNZ9a7NjrkLFi5JIgtlVdAfMn4Z3riL+IOYG2nWJZjt5R6eqmhLHrMJSezDD7M8awuXUuMssFKgSMxWZ0JOok/Pyo9dAwIIkEQRuCKwjvcSrHKVBBBBCnQaeIeL+4HWtL+zjj9/E27qXzNy0yjN4fGrCQwAGn1qKxPBjh1J3aG/cwtg93cEl0W3nEsuZpYA/ehM8SJ01JoV7PYu7cx1lFuNLLdd5ZjKKMqzqZ8RU+tWn2iYgm7ZtjZFe5PLO36u3+b/P0rz9mVvNcxN0fCpSyp/ZGZt/NhSiN1gHgTWoC0FvJh3SpUq1THFSpUqkkVKlSqpIqg8T8WS3+Nh7BfET9B86m1TJjU753dgAv6tJPxEQXIHOCQKB2AHMJRmWWGw6ooVRCjYD6+pnWeZrvFRcNj7b/C4Mctj12OtQf+aMNmy96J5cw2saRv/v0qB1x3JtY+Jc0oryGp5o4MUVxxKrElZy+IaSZHTzrtNRcVi1tiW21k8gBuT/f5GqPUsTM8fgu+xDX2YA3JZWQHdNBDGDtl18jUXAYi+gK3iXdnBdgNCAIB0HUKB/uTbcWxVtO8zhmgtkCnxBNlMGCpiBLchsaH8Jju8Yk+EEEeNiAo82aCzfz5RNc7T1WtYC3Wc/3OhZYorwB4k/gePZcfhmIKh2A1A0DqUgxsZP1rV8o0JG2o8uVZ52btKri8gBQOXd2MKxE7NrMEz09Kt8f2tIMI09SqyB01YxWzVaquo8nP65mSqmyz7ROuJ4Pmth5hrb3B6o2h+WhHnXaxjCly2zfePdXZ/GNFJHmBvtoetVNrtUYaZObcQpB0A5HTTp5VOtYpLyEE6OoVn10ZfgcjcEGJrDXqq2bjIP5EZZpbKxlhCSygRgq6KRIAGgI3j1mfnVd20/8Ah3T0yEwCdA6EmB0AJqQ+KJs96fit+JgNdU+MCOon5ip1q4GAIMggEHqDtXRHPEzTCcZxhtVtWiSV0npG+UcqqcVjmuiBicrc4LLp08MA9edaR9tHEL6WreHsrlS9m7xljM4GndgbkGZPXbrWLNaOuh038uXtrQhc+YxQo8TSeEcItKlpyikkKZOskrPPfU1aqQpYbTBPuI/8a4cE4fc/RsO9y4ttClqJMkgqACAOUGd6lnE4a2x0a6SIJ+BdCI8/vH5UDWKvZiBprHPAkfKzJAEsp0A5lDpHrH1rsvDbhdXCkKwgk6DX4Tr8v3qa3xu9DCymRJBJRC0EwsFogbeR1qhxHFblxrlrxF7eb4yY0nYa7HTlypQuy21VyZoXQADLNLu9w4LI721IOZfFP7sDlMj0I6V14RiBYu97avW4YaA5wDrqhMaA/Qg+VCr8QL4cXlYB1uAMoA0Vgw5+1RhxWznuI911DqrW7kGLdyCCGAGgkA/PrNUGdgTgcH85jfQpTyYV8Y4n32IvXmjLKQAwJFpEB1g6eMsdYo2+z3h7WcDazgC5cm6+3xXCW+gIHtWScJzYlBbZmRsQEtBipKm4TDRAkggDY/zreLFoIqqNlAA9AIFPqX6iTBvcbQonalSppp8zR6aq/iXHLFj/AKlxVJ2Eyx/dGtUmP7ZakWrRIj438ImNIXc6nYxS3uRBljGJW7dCFZNV2O43YtEh7i5hrkHif/KsmgjGcUv3gRcusVMeBP1a89JXxGZ5np0qtXF2kPdpqwE93aUu8DyXUH1isba8E4RcmPXSEcucQr4h2xcyLNoKP+5cP1FtdSPUihw4m4lxWe4GBDKRBkk5mJ8OkliNN/lr1wfCcXee2otLaDeJu9P6wJ+LIoIVuUNRZwLshaw9zvTcuXbnihrjDwgzoFUBdjG1Carr/v4EMPVV9vJmf9o7t8quhthiSpYfEBodDykj1+dccBjsglbhzyAWQsMh01nTWCeXPzrV+L8Gs4lMl5A6iY3BEiDBGuooT7RfZzbKD9FlGLDNLfd6ydSRA51uoqSlNuMxD2mxsniVdrtTduARecGIBLZZJ1GYLAFRMR23xSoqrdZYuFS7KpO28tOnSqduxPELV3uxYdwWjMpBU7GZkAepjWrbG9muIC4pFlntiZHgmdSCImeVaQVZeYkjB4l3hO1eIyZnvCNNcqc9jotDvbrjl5GU962aNPKZDQNgdvp0rxiLF8W4vobbiJV8yzlMqQdJA8utVlzD/pHdFpzCZkggtJJE9Jj50TIpXAlK2DmRsFgmdFu3FuOS8nZiOkg9d6LeD8EtnxOqoqjM4IUkDeNNAdtgT51C4UcuYg+H7wMfEQAAOo0O5q+Nt2wy5AJuMWOv3QYX8gay6pAiZXkngCaKbGZgp4Hk+ZDx3EDdYD4ba/Co0EdSBzjXy/PticL3eZoIUiZ0gLoTr0/rvXD/AIfHxOi7az/OKaLKDncI1jZfltXEbRvnLnA/JnXexAAKzn9CecLhS4BPhUCS239n8q6jiDZlFmQFmOWbzIO49fWvF93uDXRRrlE7DnH3vy6UrmF8EjYmATvPUDb+9JpxdK1wvXkns/qIsuJODyfA8D8mFXBeK6yRAJAdfOIDDy0+VWWAR7E2yC9qSUYalFOuVhvA5EUIcMvi33aA6FXUqT8IgksSdhIO9SeOduhbAAdU0EncseZA5CfKmaXUfSc5/HvMNtLZH9zj27vu2IQESiKHQgiGDeE7HmZ/yigHE8PNpsQVObvNSmXSDmjWddWzR/ho7Fh8bbD2wHe2ZBXKMyXJJI5SGE8vibnVB2m4XdsAFlTM8+BGDXBH4hoFB2mavfYbNwH0mOXZswexKG3xg/ogZBraK2/FqZUJrH9eVNjeN25wzocwdH75WGaGMWych0BBDMpEbiqtEKu6toWmV3BJ0iBz1r3YYKysGUlDmAZZGmkERqI0jz6xWn00ByBF72Ycmbb2QwqXsAitEODIWRBBjroQVB0568zWcdoeBGzi7qliYYsDIBIbXl5NRf8AZj2otXLZw7ZUfM7IJgOGYkhZ1kHl0oj4t2ct3r1u8R4kIkGCGUSdQRqeVVYhZQy9wEfYxDdTKcN2fe5lyDR2KA/dzASRPprFd+J9gjbRWuXAHZ2XLAgZTBAkgtIKtOmh251rlnhNtS5AkO6vHIMuxHTagzt3iBcxQUGe4t5TEaPdyk+chRbPvQtWa1JB9sQ0f1HAx+5D7D4M3cXazgN+jWu8mQP1jfq005wM8TtpWnihD7N8Ivd3b8a3bhWYIlbcgb7jMWovFaa1wgERcQXOIIcS7auLr2rOHLZCytcd1VQRpIUSzCfSqjG8UxN3MLl8hDHht/qwIGvjHiIPrVx2k4Hdlrtm2LnPICA2bnGbSOfudKg8O7JYq7DX3SyNPBbl2jWZeRB220rDZ807FV4HvNCGhVBPJlLCWoEqs8t2P8WnqKfCWcTiP/j4Z2Ex3l39WnrDeJgI5fxo54P2RwuHJdbee4wAa4/iYxHsNhsBtV3FXXoB3YcmU+rPSDEB8J2ALw2LxDMJk27U20jozfE2s9KJcJhMNhbZe2iW0gSyjVtlBLCS3LrQv23+0FbDvhrCC7eAh5kokjaF1Y+WnryoX4L2wxqWmtXkV7JBBDLDw24BmOuhHvWtFVBhREtvfljNP4Oe8a5e5Mcq/sr+Ws/KrShDh3ERhwmVs+HvKGt3DsJH3j1HP2PJqu7XFCD4xI6jl7c6EWonBglCeRLWlVJju0NtNMyr+1JJ/dGtLCcfDfhbrlMEeeVv51XzVe7bmT0nxnEu4pRXOzdDAMpkGulaBAjMoO4ms/8AtI4Tas93iUBVmurnCgQxAzBo6+CPOtCoS+0y3OHtEGCLygdNVcf360aHDCVAazhVbvbaaMCAZ6/dJ9QIkdKscQ5GGwuYbWspg6ZlgN9QflQzwfFkXxmJ8YyNJ1lNP4T71fcKxPf2LllhFyzca4oO7W5hiPQmfcVn143VhsdGPoLK3Bni0yk66HTl561Y2OHsSDAysNGJHKTtvsB0rhcxyOoGQws5cg019YH15UlvXScqSPwg+IwPFsfCSdetcNrn8DH5M6Aqtcck4/wJZJhLdpWa40suoJ8I3LLoDBMyNZOlVuNx5ua5YIkknpOnh/8A112Nc3wj3IuGbjEwCdSNto0A9P4VLxNjuJeRGWADrDHX6b+oFAq72+o5MataVDnuVPGuIDDowGtxpzbyWOuUk9N284HKhC7mYl3aSeZ/vbyrvjcUb9wkCYJAHIDz8zzqz4BwwEM93UnRRpA84jf+VdqqsquZz7rhnJk/svx27h7PdocpI8RiGUZmZSJ0iG38uVT1CspkyfPWTuTJ/vShzi7kGWEOJhhqHXbUcjqINNgeJIFUjTSCD0Ex6+0UwoNuBML7mO6ee0dkLcUoNhMHXSfpHlVUbIBnUw0aaQToN+v97USXgHQ+IE7biQBOx9pqpu2ysmRtoPCJYbjbr+YpbEjgTVQQynd4nHaYkZW0jnoDII21B18q2T7Pu0ZxVkq5m7ahXP4gZyN6mCD5jzrHUt580bAcwNCIkEx0YEetd+A8dfD3Eu2nKsIkA6MARKsOhj60dbcSWrzmfQLNAms3xfD+9d8QLoXvmFwgpmg5QgAOcToFAHlSxXbxsQAqjuxCkgNJJOaRO8eE6RTcAQXb9m2FYoSS4GoXJqJ/wnwj350u/exAWVRYqE57h32cwK2MPZtLsqLuZJJ1JnnqTVkK8qIr1WsDAiSc8xRSinpVcqKmbanpjUkmG43D4kPiGkXe7cl2ZchdSSwZcp2MzvpUbhuBTFOytfuKFGkQwkmBr0P8KN+2/CjbbMB+qbn4iRtKk66dBt0oc4XhsjlioTvArDlKgsPpP12ri23vXuGMHxOtVUliq2ZJwGJt4dTg3vF0QlkLgrlLmSFbZgNx+0eWlEPBeJ6ZGYEAaHy6efl8uWtOt9u9csgyplRSYYQ2pIPMk7+QqUmHsCWAAOuqgCJ30G/X+VZ21OT9XcI0ccTz2hts91jbUMyWwzwdYJOUxudj/lqBhcfqIaGGoI5VcdmrYtl1chndi2bqugUSdRHTlpVPxjAi1eJGgYz5f3z9Sapwp5EpTg7TDHs9xXWToDAccgTorj30P9KKhWY8DxMXFEkhjlI6g6Efka0Xhtwm2smTEEnmV8J+oNdL4faWUqfExamva2ZLoa+0RAcIZ5XLbf5Wn+FEhoF+0LiZa7awqToRcuH1zKg89MzH0FdNexMsDOH8Ns3Lnfqx32G2YidonmNKm8Q4ffwKfpMZiGLKQdUz6lXHNdAPflUrgXDzDXioRVuAQPvZSBm0O0ZfPyrtx/jSJh3W42c3QwCR1BhR+KNJPrrtRWsMbR/MJAc5iwF2zjk72wQt0CblonUHmR1BPPb0M16L92o/VutxRl1BIOkaGYFUf2WcMDXrr3FPhtjKdRqzbg6EHw7jrR6MK0Ke9JmJzAMNRJiIMzG5O9ef1VKo5A/1OjXqCVAbxBixjmtgwpYnXQxB577jTaqvthxFsiqd8uoMSJGZgY5yVX2NG1/CvDZnGVNdF1gCdZPrWZ9qcQbl1jrPIDUkmSfqaDSoC/WIdtivyoxKfCtAJWNdcrHY+TcxU7Ah8Qy27YyHYkM0HWNhA1MDeKrbeGdtI+RH896POwPCwo7xgIHgXTRmAImOkT7t5V1LrRWmQZjCbjyJc8B+znCn/rvcuuNcpbIp15BdY8poT+0HgyYTGkW0Fu1cRXSBoPusB11Wf3h1o7v8T7nUnxDbqR5+W4PpXDtlw9eI4EXk0u2Zb0A/6i+kDMPQUnS6r1RtPY/uSyhkAbHBgHgbiusHLJMZjA+o/sRXC/Y+6xUwWBMhRGhWJOmjEe1c+HXANCsgTofbX1510vNLNAgkKwO+gLBvX4p9vKnMDncYCEAlQP8ApnBMNqzZlllIIDowJAbKd+sDbmate032e4jCTcQG9Z3zqPGu3xIPzGnpVfhLJiAwPimNipkOdDsADJNbvgrodEcEEMqsCNjIBmjr5JxLsJwDMD4Fh7t28qWUZnkGFG0SATyA151qHYvs22HuNnutnQwQFIUggE+LY6t6+GaLrGDtoWKIqlzLFVALHqSBr711FsTMa7TzppTOMxIbGZ0ApxTUqODHpUqVSSKlSpGpJBrt1iytk21OrBiddlX+sfKgDijv3tuVhVQKPTl+Q+VE/aLGC4zOTozi2vmlsgmP2nj2U1F4LwZcbfuNczZLSZFIJHjaNZ5kQdNtvKuHeTdftX2nV05FVe4ykFs3MqgxqAfQayPqPen4j+qzZCSANjzP9muvEcI+Gusr7jn+IHYjyMH61VXmJ0k9SfyFYdhDYPidBcN9QPBl7bxoy5w0svi0EEdQBz/pXrHY0X2toFzbOwGwRZJJPnMRvE1C4O6ggMpk6a7Hb+E1YY+2uGe2wGtwFSY2AIyBv8UH3y9d3ade/YTLqFCkSPewYtXEyAwSIGpgjfWtG4K8255Fnj5n+M0BY26vdljErBXXc6x9Pp6Vd9ieMkRYuHQibbdTuyn3n5GtmksVbcHzMd6MyZ9oZTWcdpsQrYy7dEkIqp+0wBEDrqx+VGXaTiBs2GKRnbwpPInc+wk+1AGNZVCsSSVBAXqY3J9K7ta5+qc8nxFbx91FuKmqiW5ED8UzoZmCPXahFADiHlQpU5QsTBHISTp01o77O4cXcLduZQIa6o8wFH8ZNCXGLGTFzt3iq3v8B/Kl5HqRo+2En2e4iTeJGWIHyLwffT+xRMuI8P7P/if6UJ9jPDcvlhuFAg8lLRvzGaJohS6viBI3PTnqfzrz3xWxhqCo/E10JlIuM34tXTIA7u5z2IBj55qzDtCD3o0MMAQYOu+g9KL+1PEAbaWwdW1aJ+7AG/8Aik/u0OWsU6oEEZeUiSFn110HT51NHuQbm7mg0kjiRcFg3GXvSVzHRfvRsWYnYActztR1ex6W07q0IUDQ/wAddzOsnrQZZYk5m1JgyflRx2V4bbvqQ2pe2QrGDkcbkfQx6Ud4NrKvvD2LUhdhmReH8Me/cQOSmeTmYHxenrGh8qLuAYArZuWLlvLqVJGzqwiQfn6aVJ4fw/8AVWheA7y1GqkwMp016QBoap+0/aE5Dbw7gEyGeCY/Z258/lW6jTijJb+Pec7UaprcZ4HtMz4XgUUsrnMUdkPKcpiY31Imrf8A4fZY5guU5pBBIIIkacudQsNgGtOBcQEa/rEJ31PiHM+dW9kjcGflr60btjqc93O7IMhdwi3CDEMBHhRSWBM5ioEjQQNtDR92L4jKmyfuCU/ZO49ifkfKgLiKqSrFspQqdBoQNwfVZHvV32O4iDjLSr94PPmMjN+YFXSTu5jdxODk/maQK9V5U17Fa4UanpUqkkVIUqVSSeRVP2n4uLFo/jYEKPzPtI9yKsMdi1tIXcwB/YHqaBMfau4+8VQCd2J+FEBOUSN9Z9SG2FZdRaQNifcY6msMctwBK69be8bVi143IAnkDrmP+FRr8+p10fhPD1sWltrEKBJ6n7xPqdaidnuz9vDLp4rjCGcjU+Q6Dyq4FDpNOaxub7jD1Fwc7V6H9ym7UcGXEWjuHQMUIiZjbzBMaeVZoOGXFMZG0Plvz3O/9K2NjG9AnG8Wge46/DJPr/udqy/EUUYYeY7R3OuVE48FwAWLl5gMvwgxCn1PxN6bcpMU/aLiFk2XRQ5cxHgIXN92S0aenUxUTh2Gdv1t5zm3VR8NsHp1O8n5RUPiuLDNA2BHvrJ/L61iGrCD00Ax5moUmxtzGV63Sy76pv78x5awen5d8JfKxBjKcwPQjUfkPlUXEpzUwSI+mv8AtXbDWiV0BY5dPNuXtNUPqIK9mPICg56lrxTj7Yq+o2FtQsdXIzXCPbKPKDUHjuwI1JEECd9SBHX+VcMLhP0a2z3Gz3GOuSdC28Dc6845+tdsF+uY4bxO0jYFTJ1AnrG5nryr1daslYVu559yC+V6hJ2BScD+01388v8ACqLjHCu8KXRvaBJ9JA+hafQGjPs/wkYbDixM5GfXTUsxY/Uke1R+DYcZ4YSpzIwOxBBU/nWRnxYDGAZUwEXHJbi5M2zIJGvoR5ZgJ9anXeJBbwswVZwSD4YOSSRIJkx9IqHxLgPcX7mFIItBZUEaMHYsGDddwQea6VVcSwd8vbZrgYWFCKxGsKSwLD7xggTzCj3XqtGt7+of5j6dS1a7BJfFbk3SJkLA9dMx/wBRNRWuj5RSxBJYt+LX5xXqxg81cxtqzvohwJ5D7UWfZ9xjur3dN8N2B+y3I++3yofs8PdpyoTGp8gNyeg2q6uWbWFULKteuKjq6sR3akSd+fQ+/IAlUSzgqJm1lla1lWMJO1HHQxNm22gMOw+8eayOXWh29cAGp2jpvUa0PDyED10GkVA4jjbaRDS0EgCdTOuvLetpyWz5nmCN5kjFY7ktwCOokGq7G8VDAjQnqOszUE3GuGFSSfUx59K84vg91bZuMRpuo1gbTI09qrCg/V3GpTxI+NxxOgIHpz/pV79nl1Uxdly0sXCgCdM4Kb7Trt5UMATV92cw7znDkMpBXTQNyMf2afwsJuBN1Q17qJwzFC7aS4PvqD6HmPYyPapdNEqPSpUquSNSpUjUkgX9ofFij2bKicxDEddcqz0HxH90VO7AJNl7sg947Eei+EfMyfeoXajgr38bay5RCAmdQQrMWkAyNGj96inh2BSzbW3bXKq7DffU6nesiVk3Fz+poZwKwokqnpVxxF3Ks89gPOtczyBx3EgIyzuI/p8qCsUgZwv4QD78p9Br+8OlEHGrmhJ1g/PafmSB7VTYq33dpmnXUsep5xXn/iTlnwJ0tIgAzK/iWOyrlHvVnwTs4uIwWZYFy48lmEwqMRlEdRJ96FXJYywI8jvWg/Z3cnDET8LsPmAar4fUpcqw8TTrMpUCh8iV1rsA0jNeBEk6KdtfPfUVX8WwK4a+tlAWQW87O0SHYwBpsMoY+9aTWT/agzXL1wWztkRt9YUk/Ugf2a7dGlrrbcB1OU99jjaxnt8WPiF21G/WfeYmi7sZwXu079x+suaifuIdh5E7n2FZPwPBtcvWsOZK3biqRIOkjNE+U1vq1rezcMRJTbKy78b+tRcGsZiPxN+ZqxvYNixIIM8jIj31n6VxweEaDIC6nSQSPlWNlJPUZkYg59paxh0xAQsUOVsvIHmegDDf/FWe4fHriFZXhZJHUn0rcLVoKMpIMzpG456SZrH+1PZ84TFd2i5kcd5bMEZVJIIMb5SP/wCetaUZhgShiQkslmgcv4US8H7OXHV4HiVQ4Vg0mfLSPL8qr0QZQV8JRpM8xDEgk8t/lWldn7StatXVIOezbEjmAJB+tcw6Ji53dTpP8RJTCcTlwvg9tWFxAAty2FdTrJgQdfKQfWsjvXC164ScsO4lpyjUqqyNljw9YArdgKx7ilhRj8QmRcjXHEGIB3OnmSfnWv01Tqcx7CQSZHe3iHZLC25e4QFhyFJgkiW20zHfrvRPh/s9w9i0b2JZrrqslQctvNyAA8R1ganppVFwy1bw+KsXFzSLiggkkZWJRh8iY849tD7WGbaJyZ9fRQT+cVGYBCwg1AHGIDYbDaBEULMwAIrtwoKbyK4DIxyMDsVbwmfY1fcJwQN1NNJP5Gqe3giGIjUEj3B/pXM5BDfmbuDkQT7ZdmDgsRkkm08tbbyn4SfxDn6g86mcFvgiQVkaHKY665TqCdPKtN4zwZMfhQj6MQGVuaXAInz1JBFZHh17q41u4hFy22SBoSZiMwjT+ldBxkTC4yJqnYHGZ7LL+ByB6Nr+c/OiUGsk4Jirlvxq9xST+IkxOxnb0o67M8eN493cjONQRs3X3FFXZ/5MBXGcQjpV5Bp6fDipGnqDxe+UtnL8TQq+raD+ftVMcDMsDJnHhYzvcvH7xyL+wmn1aflVmK44SyLaKg2UAfKu9UowJCcmKo+KsBhuRH97c6kUxFERmVA7tHaJw7TqwBb0IOYfIxVPw24btrKVMeIgnUaHSJ89fajTj2FQYe6cuyOdzyBIoItYnuwip+JgP3idPmRXB+IrstUjz/udTSturIkrt/w1luC8qnu2QBiB8LLI1jYFco/d9KfsFxMW1KxqSZHXXceY29qORalArAHSCDqDpr61nnF+HHCXyo0tnxWz0HMecH6RTdVW1J9ZPfmTT2i1PRf+Jo1q8GUMD4SJnyrI+8LXbpbxd+9y4SfuTlhfXWi/B8byYC/cY6pIEdXgKB+81DWEwq5cw+8ZI13225GuzpHFiBvec61DWxWSOwnAgcat7MYtq5j/ABMMg19yfWtOFC3YK0Fsm64ym6dAfwrI+pn6Vf3+I203ceg1PyFE5GYIyZ6xeJyAmJAUsfyqg4PxdrjNOjGdBEeXy/vyusPNy2xYQWkEdBsBPP1HWhzA4bu8Qw5pMxtroD7zWW1iGGI2tQQRLpGZnUzqfX+9iflUTt1g89g3RvZlzpPgjxfLRv3ancNkvy2P8PzqxuoGBU7EEH0Ohp1ZIGYDdzFOIWmaxkZ1LkwSh05soI5SIPzrRfsxvZsBa/wl19IYn8iKDePcHUC9bXwMTM6xmWQJnYakadaK/sqRlwjK6lSLrGDroVQiDzG+vlTnB7ggjGBC8VknahMuNxAGh7wGT1ZVOg861ysv7e2WXHuViWtWzrtrmTcc/CaQ3UFupSuGa9ZjNrdQeUZgJjeZjWtV4xw1rpWGACzp1Jj+QrK8AxGIsSB4btqTpHxo3t/vWyQeX1oQocEGWhKiVOB4S6OrEiAZOs/LSn/4JLsxIEsxESdz5xVtbVuZHtSVDMzp0/rVeimMYh72zmeMLh8i5ZJ31Mc/ShLtr2GGKuC/ZYJdgBgdFcDYmBIblOs6dKNKVM2DGIOZit27esXTavoUYAHkZB2Ohgjz8qs8BxFrbC4IlDMnaRoQRvrWg8f4FaxVsq6jMAcj81PWeYnkazLFIbJZWUrcUwVbfNG/mIIM9Ky2LsOYspkjaOTNZwWMW6gdCCp/PmPUVJmgD7PExFu63eNNm4mYBonOCIygDQETpR+tPqsDrkRzoUODPVRr+HDOjE/BJA5EkRPsJ+dSaVNIzAjU9KmLVJI9KlXO9dCiSQAOtQkDuSV/ae4Fwt4n8DD56D6mg3sfg+9xCyPDaBc/tSAv1M/u1e8exffDIJFuZOmrRt6CdflT9isGLffQfvKvpAzf+X0rkWOt+qUDkCb0zVQ2ezCYVUdqOGC/ZI0zr4kPRhynodqssRdyqW3gTuB9TQhx7j5ugWrRWGnXfaJ05a7Fumx57NXdWiFW8zNQjs4K+IGYvGFUNqdLhVmU/wD1kkR55j9DV1wPDFrQiCrMRvy2J32mafAdnrV7MSqhkbKCJIbQHVWzAwST71ccE4S3f92zeHKX0H4WAjy1P51n+H6pFArzzNGrUsxaGNm0FAUCAAAB0Ap2tg7gcvpqK9ClnHWunMUj47NkhBqYHSAdz7Car/8Ahj2/ghgSC0/EY230MVcg0s1A1YY5MsMRKrDYwI5S5CnQ/PbXmJ/jVrXM2FzBoGYaAwJj15V0NWoIGDKY5mT9r+IMMVdAEKrGCeZ+9M7CdPaib7OsYX7wGRIRgD5zqDznT5Vx7V4XDG61whc6SSogm45ywSpkQJGsbnyFduy+IjEtLAh0XLMSARnAB6E5vkOgrOdYvqbI/wBAlN4hlQL2ww9xr7NkIUBFDRoREwDzhifnRZxbENbTMrIsESXIUR6nSg7tBj3uAhf1gEiTokt4fDEZt/qCdYADU3ivjEBKDZxKI2IIJA8JDAxrIMj61quEu50VoIzKrQdxInnQCOztsENLAjUDMTqNRuPSj/B3c6K34lBodHqFsYgSWU+mBzmdhTBAJ869V5ZgNzFb4qehSpUqkkY1m3b3gN79MGKBTuvDmE+IhQAdOmm9aTFDvajghuo7L4jBOUmBoDHrB5Gsur3emdoyY2kjeMnEEcbxp0vAKYy5SBt0P9K0qxcDKGGzAEeh1rGbyg3NSTovU8gR51qvZG+Xw1sncAqf3TA+lZPh5Ckp7jM0apeAZEXthb/A3+mk3bG2PuP/AKf50qVJ+cu95RqT2jf85W/wP/p/nXK/2nsvllXGVg2gt6kRG889dIOlKlU+cu95XpL7ST/zbb/A/wDp/nVRjeIW2YsGuanNDBWAJ6eIRt9aVKhvucpyZaKA0i3MUQYVt+RSAPfOT/c1Y8B4nbsIRkOp5a+5JOppUqzadiLeJptANcj8X4j37NJIQAALE8gZIzRMk8ulVP6KI+NtOgUfQClSpGptdrDkw6PpTiS8BiBaUjMzSxMkCddN58qscLxZVYsQfhgRGhlTOp8qVKhoYi0EQLgCJLTtGhJBDzAP3Y6Hn5U69obU/Dc5/h/nSpV1hqLPeZCone12iQaZWj2/nTW+O21ZyFfxEMfh3CqunsgpUqP5mzHcXtE6HtRb/A/0/nTN2ot/gf6fzpUqH5mz3l7BBDFWXLFs3iljJ13ZWO46gV64ahtXrbliQrGRO4Ez066U1KuejtvHPmdA/Yf1LDj979IZXBZVSABodeZggieh30qI9uQCblwgcv1Y29EpUqlzsznJlV8IMSR+lnzPqaueGccKW1VkkgRIbkNuVNSqaF2VziKuAI5kv/mH/wCv/V/SuOL4uHADWzAZTo0aqQw5bSB8qVKth1l3vM4rX2nb/mDl3f8Aq/8AWkePn/tj/N/60qVT5u7Hcnpr7R/+Ot/2x/nP/wCa8YviTujKLajMCJznSQRPwU1Kq+atI5Mv01zBa72acmRkEkk6sSfcr5UQdn3fD2+7Kq2pM5iN/LLSpUOnYhgRG2crzP/Z"
                    alt="Back Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                />
            </div>
            <div
                onClick={handleCardClick}
                style={{
                    width: '100%',
                    height: '50vh',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0px 0px 9px 6px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px',
                    margin: '10px',
                }}
            >
                <div style={{ margin: 10 }}>

                    <p>
                        Para hablar de la vestimenta típica de los aztecas, es importante tener en cuenta que se trataba de un imperio que ofrecía una gran competencia en lo que a moda se refiere. La ropa era una forma de expresar una gran variedad de detalles dentro de su cultura.
                    </p>
                </div>
            </div>


        </ReactCardFlip>
    );
};

