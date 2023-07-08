import { useState } from "react";
import { Base1 } from "@layouts/Baseof";
import Cookies from "js-cookie";
import { useEffect } from "react";
import Avatar from "react-avatar";
import axios from "axios";

const UserProfilePage = () => {
  const [_id, setIds] = useState('')
  const [name, setName] = useState("Proyecto Integrador");
  const [email, setEmail] = useState("integrador@gmail.com");
  const [profileImage, setProfileImage] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  
  useEffect(() => {
    const user = Cookies.get('clave');
    setEmail(user);
    const nameUs =  Cookies.get('name');
    setName(nameUs);
    const iden = Cookies.get('identif');
    setIds(iden);
    Cookies.set('fotico',profileImage);
  }, []);
  
  useEffect(() => {
    const generateInitialImage = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const size = 100; // Tamaño de la imagen
      const fontSize = 50; // Tamaño de la fuente
      const fontFamily = 'Arial';
      const backgroundColor = '#ccc'; // Color de fondo
      const textColor = '#fff'; // Color del texto

      canvas.width = size;
      canvas.height = size;
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, size, size);
      context.font = `${fontSize}px ${fontFamily}`;
      context.fillStyle = textColor;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(name.charAt(0).toUpperCase(), size / 2, size / 2);

      const dataURL = canvas.toDataURL('image/png');
      setProfileImage(dataURL);
    };

    generateInitialImage();
  }, [name]);


  const handleNameChange = (e) => {
    setName(e.target.value);
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
    if (!name || !email) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    axios.post("https://happy-fly-loincloth.cyclic.app/api/resetDatos", {_id, name, email, profileImage })
      .then(async () => {
        // Manejo de errores en caso de que falle la solicitud al backend
        alert("se cambio la contraseña correctamente");
        
      })
      .catch(async (error) => {
        console.log(error);
        // Manejo de errores en caso de que falle la solicitud al backend
        alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      });
    console.log("Nombre:", name);
    console.log("Correo electrónico:", email);
    console.log("Imagen de perfil:", profileImage);
   
      Cookies.set('clave',email);
      Cookies.set('name',name);
 
   
    setIsEditMode(false);
  };

  return (
    <Base1>
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
                className={`mb-2 w-full rounded-md border border-gray-300 p-2 ${isEditMode ? "" : "bg-white"
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
                className={`mb-2 w-full rounded-md border border-gray-300 p-2 ${isEditMode ? "" : "bg-white"
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
    </Base1>
  );
};

export default UserProfilePage;
