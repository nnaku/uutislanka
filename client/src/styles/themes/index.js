import { createMuiTheme } from '@material-ui/core/styles';
import overrides from './overrides';
import { darkPalette, lightPalette } from './palette';

export const darkTheme = createMuiTheme({
  overrides,
  typography: {
    useNextVariants: true,
    lineHeight: 1,
  },
  palette: darkPalette,
});

export const lightTheme = createMuiTheme({
  overrides,
  typography: {
    useNextVariants: true,
  },
  palette: lightPalette,
});

export default lightTheme;
