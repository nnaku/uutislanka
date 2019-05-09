import CategoriesDrawer from './CategoriesDrawer'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './style.css'

CategoriesDrawer.propTypes = {
  classes:PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(CategoriesDrawer)