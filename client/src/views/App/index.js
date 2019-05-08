import App from './App'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './App.css'


App.propTypes = {
  classes:PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(App)