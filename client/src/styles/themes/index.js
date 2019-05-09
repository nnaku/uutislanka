import { createMuiTheme } from '@material-ui/core/styles';

import overrides from './overrides'

export const darkTheme = createMuiTheme({
  overrides,
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark',
  }
})

export const lightTheme = createMuiTheme({
  overrides,
  typography: {
    useNextVariants: true,
  }
});

export default lightTheme

