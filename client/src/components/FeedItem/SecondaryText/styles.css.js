export default theme => ({
  displayRow:{
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    '&:first-of-type':{
      marginLeft: 0,
    },
    '&:last-of-type':{
      marginRight: 0,
    },
  },
  categoryLink:{
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover':{
      textDecoration:'underline'
    }
  }
});