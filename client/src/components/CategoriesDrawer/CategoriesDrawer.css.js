import { drawerWidth } from 'styles/vars.css'
export default theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 8,
    },
    width: drawerWidth,
    backgroundColor: theme.palette.background,
  },
  active:{
    backgroundColor: theme.palette.grey[200]
  }
})
