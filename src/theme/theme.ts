import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#141414', // fundo principal
      paper: '#1f1f1f',    // componentes/card
    },
    primary: {
      main: '#e50914', // vermelho Netflix
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
  },
});

export default theme;