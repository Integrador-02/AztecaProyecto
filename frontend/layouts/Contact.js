import { useState } from 'react';
import { Header2 } from "./partials/Header";
import Image from "next/image";
import axios from 'axios';
import Link from 'next/link';
import Base from './Baseof';
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import Cookies from 'js-cookie';


const usuario = {
  userId2 :'',
 email2 : ''

}

const Contact = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [linkHref, setLinkHref] = useState("#");
  const [user,setUser] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos al backend
    // por ejemplo, usando una función de envío o una llamada a la API
    // utilizando el valor de 'email' y 'password'
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };



  const handleIncorrectCredentials = () => {
    // Aquí puedes mostrar el cuadro de diálogo o realizar otras acciones necesarias
    alert("Credenciales incorrectas");
  };

{/*  const handleSubmit = async (e) => {
    fetch('https://desback-backs.vercel.app/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email, password })
})
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    window.location.href = "/categories";
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
    handleIncorrectCredentials();
  });
}
*/}


const handleSubmit = async (e) => {
  e.preventDefault();

  // Validar los campos de correo electrónico y contraseña
  if (!email || !password) {
    alert("Por favor, completa todos los campos");
    return;
  }

  try {
    const url = "https://happy-fly-loincloth.cyclic.app/api/login";
    const respuest = await axios.post(url, { email, password });

   console.log( usuario);
    const isAuthorized = respuest.data.respuesta === "ok";




    if (isAuthorized) {
      ;
      // Si la autenticación es exitosa, redirige al usuario a la página de categorías
      window.location.href = "/categories";
      const token = respuest.data.t;
    const [header, payload, signature] = token.split(".");
    const decodedPayload = atob(payload);
    const payloadObject = JSON.parse(decodedPayload);
    const userId2 = payloadObject.userId;
    const email2 = payloadObject.email;
    usuario.userId2= String(userId2);
    usuario.email2= String(email2);
      Cookies.set('clave',email2);
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error
      alert("Credenciales incorrectas");
    }
  } catch (error) {
    console.log(error);
    // Manejo de errores en caso de que falle la solicitud al backend
    alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
  <div className="w-full lg:w-1/2 h-full bg-[#ffffff] flex flex-col p-8 lg:p-15 justify-between space-y-2 border-2 border-gray-300 rounded-lg my-2">
    <div className="w-full flex flex-col max-w-[550px] mb-4">
      <div className="w-full flex flex-col mb-4">
        <div className="flex items-center justify-center mb-4">
          <AiOutlineUser className="text-6xl text-[#49B675]" />
        </div>
        <div className="w-full flex flex-col mb-4 text-center">
          <h3 className="text-5xl text-[#49B675] font-semibold mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
            Bienvenidos!
          </h3>
          <p className="text-sm text-[#49B675] mb-2">
            Conoce sobre la civilización azteca.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col space-y-2 my-1">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={handlePasswordChange}
        className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
      />
    </div>
    <div className="w-full flex items-center justify-between">
      <p className="text-sm font-medium text-[#49B675] whitespace-nowrap cursor-pointer underline underline-offset-2 mb-4">
        Olvidé mi contraseña
      </p>
      <div>
        <button
          className="py-2 px-2 bg-[#49B675] text-white rounded hover:bg-[#3F9256]"
          onClick={handleSubmit}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  </div>
</div>
  );
};
export default Contact;
export { usuario };
