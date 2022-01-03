import { AppBar, Toolbar ,Typography} from "@material-ui/core";
import React from "react";
import Cart from './SimpleCart ';
import { Link } from 'react-router-dom';
export default function Header() {
  const displayDesktop = () => {
    return ( <Toolbar>
        <Link to="/">
    <Typography variant='h4' id='tittle' >
           KHALID HAMEDI STORE
          </Typography>
        
          </Link>
      </Toolbar>
    )    
  };
  
  return (
    <header id='nav-bar'>
      <AppBar id='nav-bar'>
        {displayDesktop()}
        <Cart />
      </AppBar>
    </header>
  );
}