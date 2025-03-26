import * as React from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './components/ResponsiveAppBar.js';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  return (

    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 0,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Carter Benson
        </Typography>

        <Typography
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            width: { sm: '100%', md: '80%' },
          }}
        >
          Currently studying computer science at Mercer University, located in Macon, Georgia.
        </Typography>

        <ResponsiveAppBar />

        <div>
          <Button variant="contained" color="primary">
            Welcome to Grub N Go, home of the Grub Burger.
          </Button>
        </div>
      </Box>
    </Container>
  );
}

export default App;