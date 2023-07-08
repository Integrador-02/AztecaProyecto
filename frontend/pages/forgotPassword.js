import React, { useState } from "react";
import Base from "@layouts/Baseof";
import Image from "next/image";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCodeSubmitted, setIsCodeSubmitted] = useState(false);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Por favor, completa todos los campos");
      return;
    }
    axios.post("http://localhost:4000/api/resetPasword", { email })
      .then(async () => {
        // Manejo de errores en caso de que falle la solicitud al backend
        alert("se envio un codigo a tu correo");
        
        setIsCodeSubmitted(true);
      })
      .catch(async (error) => {
        console.log(error);
        // Manejo de errores en caso de que falle la solicitud al backend
        alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      });
    
  };

  const handleSubmitCode = (e) => {
    e.preventDefault();

    if (newPassword!== confirmPassword) {
      alert("La contraseña y la confirmación de contraseña no coinciden");
      return;
    }
    axios.post("http://localhost:4000/api/newPassword", { code,newPassword })
      .then(async () => {
        // Manejo de errores en caso de que falle la solicitud al backend

        alert("se cambio la contraseña correctamente");

        
        window.location.href = "/contact";
      })
      .catch(async (error) => {
        console.log(error);
        // Manejo de errores en caso de que falle la solicitud al backend
        alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      });

  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para cambiar la contraseña
  };

  return (
    <Base>
      <div className="flex h-screen items-center justify-center">
        <Image
          src="/images/Login.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={70}
          className="absolute left-0 top-0 h-full w-full object-cover"
          style={{ zIndex: -1 }}
        />
        <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow">
          {!isCodeSubmitted ? (
            <>
              <h2 className="mb-4 text-2xl font-bold text-[#49B675]">
                Olvidé mi contraseña
              </h2>
              <form onSubmit={handleSubmitEmail}>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="my-4 w-full rounded-md bg-[#49B675] p-3 text-center text-white"
                >
                  Enviar código de recuperación
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="mb-4 text-2xl font-bold text-[#49B675]">
                Código de recuperación
              </h2>
              <form onSubmit={handleSubmitCode}>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Codigo"
                    id="code"
                    className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Nueva contraseña"
                    id="newPassword"
                    className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    id="confirmPassword"
                    className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="my-4 w-full rounded-md bg-[#49B675] p-3 text-center text-white"
                >
                  Cambiar contraseña
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </Base>
  );
};

export default ForgotPassword;
