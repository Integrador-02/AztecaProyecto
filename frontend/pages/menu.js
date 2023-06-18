import React, { useEffect, useState } from "react";
import Dropdown from 'react-dropdown-select';
import { FaUser, FaAngleDown } from 'react-icons/fa';
import Avatar from 'react-avatar';
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const MenuComponent = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const user = Cookies.get('clave');
    setEmail(user);
  }, []);

  const handleLogout = () => {
    Cookies.remove('clave');
    router.push('/');
  };

  const handlePerfil = () => {
    router.push('/profile');
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { label: 'Perfil', value: 'perfil' },
    { label: 'Logout', value: 'logout' },
    { label: 'Configuración', value: 'configuracion' },
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

