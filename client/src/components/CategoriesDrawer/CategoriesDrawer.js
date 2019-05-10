import React from 'react';
import cl from 'classnames'
import { NavLink } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

import { toCapitalCase } from 'utils/string';

const categories = ['kotimaa','ulkomaat','politiikka','urheilu','esports','viihde','tekniikka']

function DrawerList({selected, classes}) {
  return (
    <List disablePadding classes={{root:classes.listRoot}}>
      <ListItem
        button
        component={NavLink} to='/'
        classes={{root:classes.listItem, selected:classes.selected}}
        selected={'/' === selected}>
        <ListItemText primaryTypographyProps={{variant:"h6"}}  primary="Tuoreimmat" />
      </ListItem>
      {
        categories.map(tag=>(
          <ListItem
            key={tag}
            button 
            component={NavLink} to={`/${tag}`}
            classes={{root:classes.listItem,selected:classes.selected}}
            selected={`/${tag}` === selected}>
            <ListItemText primaryTypographyProps={{variant:"h6"}} primary={toCapitalCase(tag)} />
          </ListItem>
        ))
      }
    </List>
  )
}

function CategoriesDrawer({ location, classes, isOpen, setDrawer }) {
  const openDrawer = () => setDrawer(true)
  const closeDrawer = () => setDrawer(false)

  return (
    <nav className={cl('CategoriesDrawer', classes.root)}>
      <Hidden mdUp implementation="css">
        <SwipeableDrawer
          open={isOpen}
          variant="temporary"
          onClose={closeDrawer}
          onOpen={openDrawer}
          classes={{ paper: classes.drawerPaper, }}
        >
          <div tabIndex={0} role="button" onClick={closeDrawer} onKeyDown={closeDrawer}>
            <DrawerList  classes={classes} selected={location.pathname}/>
          </div>
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          open
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          elevation="0"
        >
          <DrawerList classes={classes} selected={location.pathname}/>
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default CategoriesDrawer