import Feed from './Feed'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './style.css'

Feed.propTypes = {
  classes:PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Feed)