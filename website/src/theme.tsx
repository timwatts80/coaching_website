'use client';
import { Roboto, Kalam } from 'next/font/google';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
    kalamTypography: {
      fontFamily: string;
      h1: {
        fontSize: string;
        fontWeight: number;
        textTransform: string;
      };
      // Add more styles as needed
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    kalamTypography?: {
      fontFamily?: string;
      h1?: {
        fontSize?: string;
        fontWeight?: number;
        textTransform?: string;
      };
      // Add more styles as needed
    };
  }
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const kalam = Kalam({
  weight: ['400', '700'],
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
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.53)',
      disabled: 'rgba(0, 0, 0, 0.38)',
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
      fontSize: '6rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 400,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '1.5rem',
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
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    body2: {
      fontSize: '.87rem',
      fontWeight: 300,
      color: 'rgba(0, 0, 0, 0.63)',
    },
  },
  kalamTypography: {
    fontFamily: kalam.style.fontFamily,
    h1: {
      fontSize: '4.5rem', // Example customization for Kalam
      fontWeight: 700, // Example customization for Kalam
      textTransform: 'none', // Example customization for Kalam
    },
    // Add more custom styles for different headings or text elements as needed
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
