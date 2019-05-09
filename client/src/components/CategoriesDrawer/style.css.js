import { drawerWidth, headerHeight } from 'styles/vars.css'
export default theme => ({
  root: {
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    minHeight: `calc(100vh - ${headerHeight}px)`,

  },
  drawerPaper: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 8,
    },
    width: drawerWidth,
    backgroundColor: theme.palette.background,
  },
  listItem: {
    '&:last-of-type': {
      marginTop: 'auto'
    }
  },
})
