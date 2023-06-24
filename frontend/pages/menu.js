import React, { useEffect, useState } from "react";
import { FaUser, FaAngleDown } from 'react-icons/fa';
import Avatar from 'react-avatar';
import Cookies from "js-cookie";
import { useRouter } from "next/router";

// Componente donde se muestra el icono del usuario, nombre y diferentes configuraciones
const MenuComponent = () => {
  const router = useRouter();
  const [email, setEmail] = useState(''); // Estado para almacenar el correo electrónico
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú desplegable está abierto

  useEffect(() => {
    // Obtener el correo electrónico almacenado en una cookie y establecerlo como valor inicial del estado
    const user = Cookies.get('clave');
    setEmail(user);
  }, []);

  const handleLogout = () => {
    Cookies.remove('clave'); // Eliminar la cookie de sesión
    router.push('/'); // Redirigir al inicio de sesión
  };

  const handlePerfil = () => {
    router.push('/profile'); // Redirigir a la página de perfil
  };

  const handleClick = () => {
    setIsOpen(!isOpen); // Alternar el estado del menú desplegable
  };

  const handleContraseña = () => {
    router.push('/forgotPassword2'); // Redirigir a la página de cambio de contraseña
  };

  const options = [
    { label: 'Perfil', value: 'perfil' },
    { label: 'Logout', value: 'logout' },
    { label: 'Contraseña', value: 'contraseña' },
    { label: 'Estadística', value: 'estadistica' }
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div onClick={handleClick} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <Avatar name={email} size={50} round={true} />
        <FaAngleDown style={{ marginLeft: '5px' }} onClick={handleClick} />
      </div>
      {isOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1 }}>
          <div style={{ background: 'white', borderRadius: '4px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)' }}>
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  if (option.value === 'perfil') {
                    handlePerfil();
                  } else if (option.value === 'logout') {
                    handleLogout();
                  } else if (option.value == 'contraseña') {
                    handleContraseña();
                  }
                }}
                style={{ cursor: 'pointer', padding: '5px' }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
