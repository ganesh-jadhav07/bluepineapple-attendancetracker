import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import logo from "./../assets/logo.png"
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
function Navbar() {

    const navigate = useNavigate();

    function redirect() {
      navigate("/",{replace:true});
    }
  

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <AppBar position="static" sx={{backgroundColor:"White",mb:"50px"}} >
        <Toolbar sx={{justifyContent:"space-between"}}>
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={handleClick}
          > <img src={logo} height={52} width={250}/>
          </IconButton>
         <Button onClick={redirect}><LogoutIcon /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
