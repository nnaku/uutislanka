import React, { useState, useEffect } from 'react';

import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';

import ShowLessIcon from '@material-ui/icons/ExpandLess'
import ShowMoreIcon from '@material-ui/icons/ExpandMore'

import SecondaryText from './SecondaryText'
import PrimaryText from './PrimaryText'


function FeedItem({ classes, item }) {
  const [expanded, setExpanded] = useState(false)
  const toggle = () => setExpanded(!expanded)
  return (
    <ListItem key={item.guid} classes={{ container: classes.listItemContainer }}>
      <ListItemText
        className={classes.listItemText}
        disableTypography
        primary={<PrimaryText expanded={expanded} {...item} />}
        secondary={<SecondaryText expanded={expanded} {...item} />}
      />
      <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
        <IconButton onClick={toggle} aria-label={expanded ? 'Collapse' : 'Expand'}>
          {expanded ? <ShowLessIcon /> : <ShowMoreIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default FeedItem;