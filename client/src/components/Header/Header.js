import React from 'react';
import cl from 'classnames'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



function Header({ classes, toggleDrawer }) {

  return (
    <AppBar position="fixed" className={cl(classes.root)}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>Uutis lanka</Typography>
        <Button color="inherit">Login / User</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header