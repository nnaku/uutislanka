import PrimaryText from './PrimaryText'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.css'

PrimaryText.propTypes = {
  classes:PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(PrimaryText)

