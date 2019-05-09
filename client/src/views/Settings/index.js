import Settings from './Settings'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './style.css'


Settings.propTypes = {
  classes:PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Settings)