import Reader from './Reader'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Reader.css'

Reader.propTypes = {
  classes:PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Reader)