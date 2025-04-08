import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './components/ResponsiveAppBar.tsx';
import Card from './components/Card.tsx';
import ComboBox, { FoodGroupOption } from './components/ComboBox.tsx';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [selectedFoodGroup, setSelectedFoodGroup] = React.useState<FoodGroupOption | null>(null);
  const [restaurants, setRestaurants] = React.useState<any[]>([]);

  const handleFetchRestaurants = async () => {
    // stop if no food group
    if (!selectedFoodGroup) return;

    // fetch restaurants from selected food group
    try {
      const response = await fetch('https://https://9jyxoz760g.execute-api.us-east-2.amazonaws.com/prod/restaurants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ food_group: selectedFoodGroup.label })
      });

      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

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
          <ResponsiveAppBar />

          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Grub N' Go
          </Typography>

          <ComboBox value={selectedFoodGroup} onChange={setSelectedFoodGroup} />

          <Button
            onClick={handleFetchRestaurants}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Search for Restaurants
          </Button>

          <Card />

          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Find your favorite foods.
          </Typography>

          <div>
            <Button variant="contained" color="primary">
              Welcome to Grub N Go, home of the Grub Burger.
            </Button>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;