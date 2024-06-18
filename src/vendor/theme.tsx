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
      main: '#282828'
    },
    secondary: {
      main: '#EDEEEE'
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
      fontFamily: 'Benzin'
    },
    h2: {
      fontSize: 20,
      fontWeight: 400,
      fontFamily: 'Benzin'
    },
    h3: {
      fontSize: 12,
      fontWeight: 400,
      fontFamily: 'Inter'
    },
    h5: {
      fontSize: 12,
      fontWeight: 400,
      fontFamily: 'Benzin'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1024,
      xl: 1440
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
