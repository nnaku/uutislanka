import FeedItem from './FeedItem'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './FeedItem.css'

FeedItem.propTypes = {
  classes:PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(FeedItem)