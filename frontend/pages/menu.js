import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FaUser } from 'react-icons/fa';
import Avatar from 'react-avatar';
import Cookies from "js-cookie";
import { useRouter } from "next/router";




const MenuComponent = () => {
  const router = useRouter();

    const [email, setEmail] = useState('');
    useEffect(() => {
        const user = Cookies.get('clave');
        setEmail(user);
      }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    Cookies.remove('clave');
    router.push('/');
  
  };

  return (
    <div>
    <Avatar name={email} size={50} round={true}  onClick={handleClick}/>

    
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>configuracion</MenuItem>
        <MenuItem onClick={handleClose}>Estadistica</MenuItem>
        <MenuItem  onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuComponent;

