import { drawerWidth, headerHeight } from 'styles/vars.css'
export default theme => ({
  root: {
    display:'flex',
    flexDirection:'column',
    
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      width: drawerWidth,
      height: `calc(100vh - ${headerHeight}px)`,
    }
  },
  listRoot:{
    height: '100vh',
    [theme.breakpoints.up('md')]: {
      height: `calc(100vh - ${headerHeight}px)`,
    }
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      top:theme.spacing.unit * 6
    },
  },
})
