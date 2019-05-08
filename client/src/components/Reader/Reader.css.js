export default theme => ({
  paper: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '100%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      height: '80%'
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      height: '80%'
    },
    maxWidth: 620,
  }
})