import { createTheme } from '@mui/material/styles';

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
      main: '#111'
    },
    secondary: {
      main: '#fff'
    },
    error: {
      main: '#A52D2D'
    }
  },
  typography: {
    fontFamily: 'Inter',
    htmlFontSize: 16,
    fontSize: 16,

    h1: {
      fontSize: 24,
      fontFamily: 'Benzin',
      fontWeight: 400
    },
    h2: {
      fontSize: 18,
      fontWeight: 400,
      fontFamily: 'Benzin'
    },
    h3: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Inter'
    },
    h4: {
      fontSize: 12,
      fontWeight: 400,
      fontFamily: 'Benzin'
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Inter'), url('./fonts/InterRegular.woff') format('woff');
            }
            `
    }
  }
});

export default theme;
