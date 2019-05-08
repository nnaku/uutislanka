import React, { Fragment, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';

import cl from 'classnames';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'styles/themes'
import Header from 'components/Header';
import CategoriesDrawer from 'components/CategoriesDrawer';
import Main from 'components/Main';


function App({ classes }) {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer(!drawer);
  return (
    <Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <div className={cl('App', classes.root)}>
          <Router history={history}>
            <Route render={p => <Header {...p} toggleDrawer={toggleDrawer} />} />
            <Route render={p => <CategoriesDrawer {...p} isOpen={drawer} setDrawer={setDrawer} />} />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/:category" component={Main} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
