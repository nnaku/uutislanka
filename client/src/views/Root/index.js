import Root from './Root'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './style.css'


Root.propTypes = {
  classes:PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Root)