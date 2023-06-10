import { useState } from 'react';
import { Header2 } from "./partials/Header";
import axios from 'axios';
import Link from 'next/link';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar los campos de correo electrónico y contraseña
    if (!email || !password) {
      alert("Por favor, completa todos los campos");
      return;
    }

    try {
      const url = "https://happy-fly-loincloth.cyclic.app/api/login";
      const respuesta = await axios.post(url, { email, password });
      const isAuthorized = respuesta.data === "ok";

      if (isAuthorized) {
        // Si la autenticación es exitosa, redirige al usuario a la página de categorías
        window.location.href = "/categories";
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
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: 'url("/images/Login.jpg")',
        backgroundSize: "cover",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96 md:w-120 lg:w-144">
        <div className="text-center mb-4">
          <h3 className="text-3xl text-[#49B675] font-semibold mb-4">Bienvenidos!</h3>
          <p className="text-sm text-[#49B675] mb-2">Conoce sobre la civilización azteca.</p>
        </div>
        <form className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="text-black py-3 px-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            className="text-black py-3 px-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
          />
          <div className="flex justify-between">
            <p className="text-sm font-medium text-[#49B675] whitespace-nowrap cursor-pointer underline underline-offset-2">
              Olvidé mi contraseña
            </p>
          </div>
          <div className="flex flex-col my-4">
            <button
              className="text-white my-2 bg-[#49B675] rounded-md py-3 px-4 text-center"
              onClick={handleSubmit}
            >
              Iniciar sesión
            </button>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-sm font-normal text-[#49B675]">
              ¿No tienes cuenta?{" "}
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                <Link href="/registro">Regístrate</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
