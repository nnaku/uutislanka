import { createMuiTheme } from '@material-ui/core/styles';

import overrides from './overrides'

export const darkTheme = createMuiTheme({
  overrides,
  typography: {
    useNextVariants: true,
    lineHeight: 1
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

