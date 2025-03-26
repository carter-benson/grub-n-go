import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // primary color
    },
    secondary: {
      main: '#acacac', // secondary color
    },
    background: {
      default: '#ffffff', // background color
      paper: '#ffffff', // paper background color
    },
    text: {
      primary: '#000000', // text color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;