import SecondaryText from './SecondaryText'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.css'

SecondaryText.propTypes = {
  classes:PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(SecondaryText)
