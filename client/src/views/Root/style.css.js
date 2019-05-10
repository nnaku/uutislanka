import { drawerWidth, headerHeight } from 'styles/vars.css'

export default theme => ({
  "@global": {
    html: {
      fontSize: 16,
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
      }
    }
  },
  root: {
    display:'flex'
  },
  mainPaper: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    marginTop: headerHeight,
    width:'100%',
    minHeight:`calc(100vh - ${headerHeight}px)`,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
})
