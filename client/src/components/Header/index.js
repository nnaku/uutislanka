import Header from './Header'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Header.css'

Header.propTypes = {
  classes:PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Header)