import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const useStyles = makeStyles(theme => ({
  root: {},
  link: {
    color: theme.palette.text.primary,
    '&:visited': {
      color: theme.palette.grey[500],
    },
  },
}));

function PrimaryText({ expanded, link, title, setPreview }) {
  const classes = useStyles();
  const downXS = useMediaQuery(theme => theme.breakpoints.down('xs'));

  function handleLinkClick(e) {
    const openTo = localStorage.getItem('openTo') || 'tab';
    console.log(openTo === 'dialog');
    if (openTo === 'dialog') {
      e.preventDefault(e);
      setPreview(link);
    }
  }

  return (
    <Typography
      variant="body1"
      className={classes.root}
      noWrap={!downXS && !expanded}
    >
      <Link
        onClick={handleLinkClick}
        classes={{ root: classes.link }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    </Typography>
  );
}

export default PrimaryText;
