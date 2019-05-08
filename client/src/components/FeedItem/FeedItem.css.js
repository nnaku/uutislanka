export default theme => ({
  secondaryGridItem: {
    marginRight: theme.spacing.unit * 2
  },
  upperCased: {
    textTransform: 'capitalize'
  },
  listItemContainer: {
    [theme.breakpoints.up('sm')]: {
      maxHeight: theme.spacing.unit * 20
    },
    backgroundColor: theme.palette.background,
    '&:nth-of-type(odd)': {
      backgroundColor: '#eee'
    }
  },
  listItemText: { /* wrapper inside li */
    marginRight: theme.spacing.unit * 2, 
  },
  primaryTypography: {

  },
  secondaryText: {
    color: theme.palette.text.secondary,
  },
  noWrap: {
    [theme.breakpoints.up('sm')]: {
      whiteSpace: 'nowrap',
    },
    
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  expand:{
    whiteSpace: 'normal',
    display: 'block'
  },
  link:{
    color: theme.palette.text.primary,
    '&:visited':{
      color: theme.palette.grey[500]
    }
  },

});