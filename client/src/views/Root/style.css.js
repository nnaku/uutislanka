import { drawerWidth, headerHeight } from 'styles/vars.css'

export default theme => ({
  root: {
    display:'flex'
  },
  mainPaper: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    marginTop: headerHeight,
    width:'100%',
    minHeight:`calc(100vh - ${headerHeight}px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
})