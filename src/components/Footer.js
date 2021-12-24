import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

export default function Footer() {
  return (
    <>
     
      <ButtonAppBar />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar  position='static' id='footer'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'></IconButton>

       
          <h3>all Rights reserved @ KHALID HAMEDI 2021</h3>
          <a href="https://www.linkedin.com/in/khalid-hamedi-3176b0139/" target="_blank" rel="noreferrer"><img src='https://ricardoreadingmouse.com.au/wp-content/uploads/2018/04/linkedin-logo-copy.png' className='img' width='30px' height= '30px'  alt='LinkedIn'/></a>
        <a href="https://github.com/khalidsy90" target='_blank' rel="noreferrer"><img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'  alt='GitHub' className='img2' width='30px' height= '30px' /></a>
     
      
        </Toolbar>
      </AppBar>
    </div>
  );
}