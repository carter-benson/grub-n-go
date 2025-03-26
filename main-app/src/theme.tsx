import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#cc8811', // primary color
    },
    secondary: {
      main: '#acacac', // secondary color
    },
    background: {
      default: '#ffffff', // background color
      paper: '#ffffff', // paper background color
    },
    text: {
      primary: '#ffffff', // primary text color
      secondary: '#ffaa00', // secondary text color
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