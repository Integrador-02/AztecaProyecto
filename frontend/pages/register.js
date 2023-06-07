import { useState } from "react";
import Image from "next/image";
import Base from "@layouts/Baseof";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!fullName || !username || !email || !password || !confirmPassword) {
      alert("Por favor, completa todos los campos");
      return;
    }

    // Validar que la contraseña coincida con la confirmación de contraseña
    if (password !== confirmPassword) {
      alert("La contraseña y la confirmación de contraseña no coinciden");
      return;
    }

    // Aquí puedes realizar la lógica para enviar los datos de registro al backend
    // por ejemplo, usando una función de envío o una llamada a la API
    // utilizando los valores de 'fullName', 'username', 'email' y 'password'
    console.log("Nombre completo:", fullName);
    console.log("Usuario:", username);
    console.log("Email:", email);
    console.log("Contraseña:", password);
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
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        />
        <div className="mx-auto max-w-lg rounded-lg bg-white p-4 shadow-lg">
          <h1
            className="mb-4 text-center text-3xl font-semibold text-[#49B675] md:text-5xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Crea tu cuenta
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre completo"
              value={fullName}
              onChange={handleFullNameChange}
              className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
            />
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={handleUsernameChange}
              className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="my-2 w-full border-b border-black bg-transparent px-4 py-2 text-black outline-none focus:outline-none"
            />
            <button
              className="my-4 mx-auto w-40 rounded-md bg-[#49B675] p-3 text-center text-white"
              style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </Base>
  );
};

export default Register;
