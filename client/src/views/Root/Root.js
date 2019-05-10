import React, { Fragment, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Paper } from '@material-ui/core';
import cl from 'classnames';
import history from 'utils/history';
import { lightTheme, darkTheme } from 'styles/themes'
import Header from 'components/Header';
import CategoriesDrawer from 'components/CategoriesDrawer';
import Feed from 'components/Feed';
import Settings from 'views/Settings'


function Root({ classes }) {
  const [drawer, setDrawer] = useState(false);
  const [category, setCategory] = useState(false);
  const [isLight, setLight] = useState(true)
  const toggleTheme = () => setLight(!isLight)
  const toggleDrawer = () => setDrawer(!drawer);
  return (
    <Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={isLight ? lightTheme : darkTheme}>
        <div className={cl(classes.root)}>
          <Router history={history}>
            <Route render={p => <Header {...p} category={category} toggleDrawer={toggleDrawer} />} />
            <Route render={p => <CategoriesDrawer {...p} isOpen={drawer} setDrawer={setDrawer} />} />
            <Paper square elevation="0" className={cl(classes.mainPaper)}>
              <Switch>
                <Route path="/settings" render={p => <Settings setCategory={setCategory} theme={{isLight,toggleTheme}} {...p} />} />
                <Route exact path="/" render={p => <Feed setCategory={setCategory} {...p} />} />
                <Route path="/:category" render={p => <Feed setCategory={setCategory} {...p} />} />

              </Switch>
            </Paper>
          </Router>
        </div>
      </MuiThemeProvider>
    </Fragment>
  );
}

export default Root;
