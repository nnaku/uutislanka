export default theme => ({
  listItemContainer: {
    backgroundColor: theme.palette.background,
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.selected
    }
  },
  listItemSecondaryAction:{
    backgroundColor: theme.palette.background,
  },
});