import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
const history = createBrowserHistory();
const dev = 'UA-139977545-2';
const heroku = 'UA-139977545-1';

if (process.env.NODE_ENV === 'development') {
  ReactGA.initialize(dev, { debug: true });
} else {
  ReactGA.initialize(heroku);
}

/* const unlisten = */ history.listen(
  (location, action) =>
    history.action === 'PUSH' &&
    ReactGA.pageview(location.pathname + location.search)
);
export default history;
