import React, { useState } from 'react';
import cl from 'classnames'
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import ShowLessIcon from '@material-ui/icons/ExpandLess'
import ShowMoreIcon from '@material-ui/icons/ExpandMore'
import SecondaryText from './SecondaryText'
import PrimaryText from './PrimaryText'

function FeedItem({ classes, item, toggleExpandedView, expanded }) {

  return (
    <ListItem key={item.guid} classes={{ container: cl(classes.listItemContainer, {[classes.active]:expanded}) }}>
      <ListItemText
        className={classes.listItemText}
        disableTypography
        primary={<PrimaryText expanded={expanded} {...item} />}
        secondary={<SecondaryText expanded={expanded} {...item} />}
      />
      <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
        <IconButton onClick={toggleExpandedView} aria-label={expanded ? 'Collapse' : 'Expand'}>
          {expanded ? <ShowLessIcon color="secondary"/> : <ShowMoreIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default FeedItem;
