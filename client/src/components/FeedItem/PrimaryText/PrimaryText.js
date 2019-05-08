import React, { useState } from 'react';
import { Typography, Link } from '@material-ui/core';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

function PrimaryText ({ theme,classes, expanded, link, title }) {
  const downXS = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Typography variant="subtitle1" className={classes.root} noWrap={!downXS && !expanded}>
      <Link classes={{ root: classes.link }} href={link} target="_blank" rel="noopener">{title}</Link>
    </Typography>
  )
}

export default PrimaryText;
