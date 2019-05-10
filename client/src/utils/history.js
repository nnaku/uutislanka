import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-139977545-1');
const history = createBrowserHistory();
const unlisten = history.listen((location, action) => ( 
  history.action === 'PUSH' && ReactGA.pageview(location.pathname + location.search)
  ))
export default history