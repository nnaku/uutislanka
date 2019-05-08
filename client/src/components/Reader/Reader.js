import React from 'react';
import Iframe from 'react-iframe'
import { Dialog, Toolbar, Button, AppBar, Hidden } from '@material-ui/core';
import BackArrowIcon from '@material-ui/icons/ArrowBack';

function Reader({ classes, url, setReader, theme }) {
  const handleClose = () => setReader(null)
  
  return (
    <Dialog open={!!url} fullScreen={!!theme.breakpoints.up('sm')} onClose={handleClose} classes={{ paper: classes.paper, }}>
      <Hidden smUp>
        <AppBar>
          <Toolbar>
            <Button onClick={handleClose}><BackArrowIcon />Close</Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Hidden>

      <Iframe url={url}
        height="100%"
        width="100%"
        display="initial"
        position="relative" />
    </Dialog>
  )
}

export default Reader;