import { useState } from "react";
import Base from "@layouts/Baseof";

const UserProfilePage = () => {
  const [name, setName] = useState("Proyecto Integrador");
  const [username, setUsername] = useState("PI");
  const [email, setEmail] = useState("integrador@gmail.com");
  const [profileImage, setProfileImage] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  const handleEditButtonClick = () => {
    setIsEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username || !email) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    console.log("Nombre:", name);
    console.log("Usuario:", username);
    console.log("Correo electrónico:", email);
    console.log("Imagen de perfil:", profileImage);
    setIsEditMode(false);
  };

  return (
    <Base>
      <div
        className="flex h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("/images/Login.jpg")` }}
      >
        <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-[#49B675]">
            Perfil de Usuario
          </h2>
          <div className="mb-4 flex items-center justify-center">
            <div className="relative">
              {profileImage && (
                <img
                  src={profileImage}
                  alt="Foto de perfil"
                  className="profile-image rounded-full"
                />
              )}
              {isEditMode && (
                <label htmlFor="profileImage" className="change-profile-image">
                  Cambiar Foto de Perfil
                </label>
              )}
              {isEditMode && (
                <input
                  type="file"
                  id="profileImage"
                  className="hidden"
                  onChange={handleProfileImageChange}
                />
              )}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className={`mb-2 w-full rounded-md border border-gray-300 p-2 ${
                  isEditMode ? "" : "bg-white"
                }`}
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label htmlFor="username" className="mb-2 block">
                Usuario:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className={`mb-2 w-full rounded-md border border-gray-300 p-2 ${
                  isEditMode ? "" : "bg-white"
                }`}
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className={`mb-2 w-full rounded-md border border-gray-300 p-2 ${
                  isEditMode ? "" : "bg-white"
                }`}
                disabled={!isEditMode}
              />
            </div>
            {isEditMode ? (
              <div className="flex justify-between">
                <button
                  className="mr-2 mt-4 rounded-md bg-[#49B675] px-4 py-2 text-white"
                  type="submit"
                >
                  Guardar
                </button>
                <button
                  className="mt-4 rounded-md bg-[#999999] px-4 py-2 text-white hover:bg-[#666666]"
                  type="button"
                  onClick={() => setIsEditMode(false)}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <button
                className="mt-4 rounded-md bg-[#49B675] px-4 py-2 text-white"
                type="button"
                onClick={handleEditButtonClick}
              >
                Editar
              </button>
            )}
          </form>
        </div>
      </div>
    </Base>
  );
};

export default UserProfilePage;