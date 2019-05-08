import { createMuiTheme } from '@material-ui/core/styles';

import overrides from './overrides'

export default createMuiTheme({
  overrides,
  typography: {
    useNextVariants: true,
  }
});