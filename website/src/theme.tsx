'use client';
import { Roboto } from 'next/font/google';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

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

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF6D1F',
      contrastText: '#fff',
    },
    secondary: {
      main: '#101B1E',
    },
    background: {
      default: '#fff',
    },
    grey: {
      100: '#f8f9fa',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
      A700: '#101B1E',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '10.65rem',
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 300,
      letterSpacing: '0.06em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 400,
      letterSpacing: '0.02em', 
      color: 'rgba(0, 0, 0, 0.87)',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    }
  }
});

export default theme;
