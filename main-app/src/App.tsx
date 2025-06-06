import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './components/ResponsiveAppBar.tsx';
import Card from './components/Card.tsx';
import ComboBox, { FoodGroupOption } from './components/ComboBox.tsx';
import TitleBanner from './components/TitleBanner.tsx';
import HomeComponent from './components/Home.tsx';
import AboutComponent from './components/About.tsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [selectedFoodGroup, setSelectedFoodGroup] = useState<FoodGroupOption | null>(null);
  const [restaurants, setRestaurants] = React.useState<any[]>([]);

  const handleFetchRestaurants = async () => {
    // stop if no food group
    if (!selectedFoodGroup) return;

    // fetch restaurants from selected food group
    try {
      const response = await fetch(`https://9jyxoz760g.execute-api.us-east-2.amazonaws.com/prod/restaurants?food_group=${encodeURIComponent(selectedFoodGroup.label)}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      console.log(data);
      setRestaurants(data);
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          marginTop: 0,
          marginBottom: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ResponsiveAppBar />

        <TitleBanner />

        <div id="home">
          <HomeComponent />
        </div>

        <div id="about">
          <AboutComponent />
        </div>

        <div id="restaurants">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginTop: 4,
            }}
          >
            <Typography variant="h4" color="text.secondary" component="h1" sx={{ marginBottom: 2 }}>
              Find your favorite foods.
            </Typography>

            <ComboBox value={selectedFoodGroup} onChange={setSelectedFoodGroup} />

            <Button
              onClick={handleFetchRestaurants}
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Search for Restaurants
            </Button>
          </Box>

          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              flexWrap: 'wrap',
              marginBottom: 6
            }}
          >
            {restaurants.slice(0, 2).map((restaurant, index) => (
              <Box key={index} sx={{ width: 300 }}>
                <Card
                  name={restaurant.name}
                  rating={restaurant.rating}
                  priceRange={restaurant.price_range}
                />
              </Box>
            ))}
          </Box>
        </div>
      </Box>

    </ThemeProvider>
  );
}

export default App;
