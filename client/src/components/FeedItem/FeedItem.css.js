export default theme => ({
  listItemContainer: {
    backgroundColor: theme.palette.background,
    borderColor: theme.palette.secondary,
    borderBottom: 1,
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.selected
    }
  },
  listItemSecondaryAction:{
    backgroundColor: theme.palette.background,
  },
});