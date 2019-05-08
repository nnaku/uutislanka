import Main from './Main'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Main.css'

Main.propTypes = {
  classes:PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Main)