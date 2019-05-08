import React from 'react';
import moment from 'utils/moment'
import { Collapse, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

import { toCapitalCase } from 'utils/string'




function SecondaryText({ classes, expanded, contentSnippet, isoDate, categories, feeds }) {

  function createInfoRow(items) {
    return items.map((item, index) => (
      <Typography className={classes.displayRow} inline color="textSecondary">
        {index < 2 ? toCapitalCase(item) : <Link className={classes.categoryLink} to={`/${item}`}>{toCapitalCase(item)}</Link>}
      </Typography>
    ))
  }

  return (
    <div className={classes.root}>
      <Collapse in={expanded} collapsedHeight="20px">
        {createInfoRow([feeds[0].publisher, moment(isoDate).calendar(), ...categories])}
        <Typography color="textSecondary">
          {contentSnippet}
        </Typography>
      </Collapse>
    </div>
  )
}

export default SecondaryText;