import { createTheme } from '@mui/material';
import { cyan, grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[200],
      light: cyan[100],
      dark: cyan[500],
    },
    background: {
      default: grey[200],
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          left: '1rem',
          right: '1rem',
          top: '1rem',
          width: 'auto',
          opacity: '0.8',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorLeft: {
          top: '6rem',
          left: '1rem',
          bottom: '1rem',
          height: 'auto',
        },
        paperAnchorRight: {
          top: '6rem',
          right: '1rem',
          bottom: '1rem',
          height: 'auto',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: grey[100],
          opacity: '0.5!important',
        },
      },
    },
  },
});
export { theme };
