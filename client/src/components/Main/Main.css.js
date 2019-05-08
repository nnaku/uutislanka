import { drawerWidth, headerHeight } from 'styles/vars.css'
export default theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 8,
    width:'100%',
    minHeight:`calc(100vh - ${headerHeight}px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  list:{
    padding: 0,
    maxWidth:'100%'
  },

})