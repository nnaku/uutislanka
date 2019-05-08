import React from 'react';
import cl from 'classnames'
import {Link} from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import Home from '@material-ui/icons/Home'



function DrawerList() {
  return (
    <List component="nav">
      <ListItem button component={Link} to='/'>
      <ListItemIcon>
        <Home/>
      </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Bbbbb" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Ccccc" />
      </ListItem>
    </List>
  )
}

function CategoriesDrawer({ classes, isOpen, setDrawer }) {
  const openDrawer = () => setDrawer(true)
  const closeDrawer = () => setDrawer(false)

  return (
    <nav className={cl('CategoriesDrawer', classes.root)}>
      <Hidden smUp implementation="css">
        <SwipeableDrawer
          open={isOpen}
          variant="temporary"
          onClose={closeDrawer}
          onOpen={openDrawer}
          classes={{ paper: classes.drawerPaper, }}
        >
          <div tabIndex={0} role="button" onClick={closeDrawer} onKeyDown={closeDrawer}>
            <DrawerList />
          </div>
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          open
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
        >
          <DrawerList />
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default CategoriesDrawer