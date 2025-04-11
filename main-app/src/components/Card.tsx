import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { SxProps } from '@mui/material/styles';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

type CardProps = {
  name: string;
  rating: number;
  priceRange: number;
  sx?: SxProps;
}

export default function RestaurantCard({ name, rating, priceRange, sx}: CardProps) {
  return (
    <Card sx={{ width: "100%", color:'text.secondary' }}>
      <CardContent>
        <Typography variant="h5" component="div" color="text.secondary">
          {name}
        </Typography>

        <Typography variant="body2">
          Rating:
        </Typography>

        <Rating name="read-only" value={rating} readOnly />

        <Typography variant="body2" sx={{ mt: 1, mb: 1.5 }} color="text.secondary">
          Price Range: {"$".repeat(Number(priceRange))}
        </Typography>
      </CardContent>
    </Card>
  );
}