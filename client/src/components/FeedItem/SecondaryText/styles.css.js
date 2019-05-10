export default theme => ({
  categoryLink:{
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover':{
      textDecoration:'underline'
    }
  },
  contentSnippet:{
    marginTop: theme.spacing.unit
  }
});