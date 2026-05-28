import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';

const theme = createTheme({
  typography: {
    fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#B20600',
    },
    gradient: {
      main: 'linear-gradient(to top, red, #000)',
    },
    text: {
      main: '#121212',
      secondary: '#454F5B',
      gray: '#9A9EA6',
    },
  },
  overrides: {
    MuiFormLabel: {
      asterisk: {
        color: 'red',
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
