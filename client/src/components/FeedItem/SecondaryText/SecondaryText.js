import React from 'react';
import moment from 'utils/moment'
import { Collapse, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

import { toCapitalCase } from 'utils/string'




function SecondaryText({ classes, expanded, contentSnippet, isoDate, categories, feeds }) {

  function createInfoRow(items) {
    return items.map((item, index) => (
      <Typography key={item} className={classes.displayRow} inline color="textSecondary">
        {index < 2 ? toCapitalCase(item) : <Link className={classes.categoryLink} to={`/${item}`}>{toCapitalCase(item)}</Link>}
      </Typography>
    ))
  }
  
  const date = moment().isSame(isoDate, 'day') 
  ? moment(isoDate).format('LT') 
  : moment(isoDate).format('LT l')

  return (
    <div className={classes.root}>
      <Collapse in={expanded} collapsedHeight="20px">
        {createInfoRow([date, feeds[0].publisher, ...categories])}
        <Typography color="textSecondary">
          {contentSnippet}
        </Typography>
      </Collapse>
    </div>
  )
}

export default SecondaryText;