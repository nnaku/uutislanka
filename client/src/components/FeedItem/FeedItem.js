import React from 'react';
import cl from 'classnames';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShowLessIcon from '@material-ui/icons/ExpandLess';
import ShowMoreIcon from '@material-ui/icons/ExpandMore';
import SecondaryText from './SecondaryText';
import PrimaryText from './PrimaryText';

const useStyles = makeStyles(theme => ({
  listItemContainer: {
    backgroundColor: theme.palette.background,
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.selected,
    },
  },
  listItemSecondaryAction: {
    backgroundColor: theme.palette.background,
  },
}));

function FeedItem({ item, toggleExpandedView, expanded, setPreview }) {
  const classes = useStyles();

  return (
    <ListItem
      key={item.guid}
      classes={{
        container: cl(classes.listItemContainer, {
          [classes.active]: expanded,
        }),
      }}
    >
      <ListItemText
        className={classes.listItemText}
        disableTypography
        primary={
          <PrimaryText expanded={expanded} setPreview={setPreview} {...item} />
        }
        secondary={<SecondaryText expanded={expanded} {...item} />}
      />
      <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
        <IconButton
          onClick={toggleExpandedView}
          aria-label={expanded ? 'Collapse' : 'Expand'}
        >
          {expanded ? <ShowLessIcon color="secondary" /> : <ShowMoreIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default FeedItem;
