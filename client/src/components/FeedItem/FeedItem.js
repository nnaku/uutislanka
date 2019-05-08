import React, { useState } from 'react';
import cl from 'classnames'
import { Link } from '@material-ui/core';

import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


/*
function parseIsoDate(isoDate) {
  const today = new Date().toLocaleDateString()
  const pubDate = new Date(isoDate).toLocaleDateString()
  const pubTime = new Date(isoDate).toLocaleTimeString().slice(0, -3)
  return today === pubDate ? pubTime : `${pubTime} ${pubDate}`
}
*/

function SecondaryText({ contentSnippet }) {
  return contentSnippet
}


function FeedItem({ classes, item }) {
  const [expanded, setExpanded] = useState(false)
  const expandToggle = (e) => {
    console.log({ expanded });
    setExpanded(!expanded)
  }
  


  return (
    <ListItem key={item.guid} classes={{ container: classes.listItemContainer }}>
      <ListItemText
        className={classes.listItemText}
        classes={{
          primary: cl(classes.noWrap, classes.primaryTypography),
        }}
        primary={<Link classes={{ root: classes.link }} href={item.link} target="_blank" rel="noopener">{item.title}</Link>}
        secondary={<SecondaryText classes={cl(classes.noWrap, classes.itemText, classes.secondaryText)} expanded={expanded} {...item} />}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={expandToggle} aria-label={expanded ? 'Collapse' : 'Expand'}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default FeedItem;