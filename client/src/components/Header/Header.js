import React from 'react';
import cl from 'classnames';
import { NavLink } from 'react-router-dom'
import {AppBar,Toolbar,Typography,IconButton,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings'
//import SearchIcon from '@material-ui/icons/Search';
import { toCapitalCase } from 'utils/string';

function Header({ classes, toggleDrawer, category }) {
  category = category ? category : 'tuoreimmat';
  return (
    <AppBar position="fixed" elevation={0} className={cl(classes.root)}>
      <Toolbar variant="dense">
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" color="inherit" className={classes.grow}>
          {toCapitalCase(category)}
        </Typography>

        <IconButton
          component={NavLink}
          to='/settings'
          color="inherit"
          aria-label="Settings"
        ><SettingsIcon/>
        </IconButton>

        {/*
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
         <Button color="inherit">Login / User</Button>
         */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
