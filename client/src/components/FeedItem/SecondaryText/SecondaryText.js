import React from 'react';
import moment from 'utils/moment'
import { Collapse, Typography, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom'

import { toCapitalCase } from 'utils/string'

function SecondaryText({ classes, expanded, contentSnippet, isoDate, categories, feeds }) {
  function createInfoRow(items) {
    return items.map((item, index) => (
      <Typography variant="caption" key={item} inline color="textSecondary">
        {index < 2 ? toCapitalCase(item) : <Link className={classes.categoryLink} to={`/${item}`}>{toCapitalCase(item)}</Link>}
        {' '}
      </Typography>
    ))
  }
  
  const date = moment().isSame(isoDate, 'day') 
  ? moment(isoDate).format('LT') 
  : moment(isoDate).format('DoM H:mm ')

  return (
    <div className={classes.root}>
      <Collapse in={expanded} collapsedHeight="1rem">
        {createInfoRow([date, feeds[0].publisher, ...categories])}
        <Divider/>
        <Typography paragraph variant="body1" className={classes.contentSnippet}>
          {contentSnippet}
        </Typography>
      </Collapse>
    </div>
  )
}

export default SecondaryText;