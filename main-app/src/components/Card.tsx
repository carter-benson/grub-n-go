import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { SxProps } from '@mui/material/styles';

type CardProps = {
  name: string;
  rating: number;
  priceRange: number;
  sx?: SxProps;
}

export default function RestaurantCard({ name, rating, priceRange, sx }: CardProps) {
  return (
    <Card sx={{ borderTop: '15px solid #ffa200', borderBottom: '5px solid #ffa200', width: "100%", color: 'text.secondary' }}>
      <CardContent>
        <Typography sx={{ marginBottom: 1, fontWeight: 'bold' }} variant="h5" component="div" color="text.secondary">
          {name}
        </Typography>

        <Typography variant="body2">
          Rating:
        </Typography>

        <Rating name="read-only" value={rating} readOnly />

        <Typography variant="body2" sx={{ marginY: 0 }} color="text.secondary">
          {(() => {
            switch (priceRange) {
              case 1:
                return "Price: $1 - $10";
              case 2:
                return "Price: $10 - $20";
              case 3:
                return "Price: $20 - $30";
              default:
                return "Price: N/A";
            }
          })()}
        </Typography>
      </CardContent>
    </Card>
  );
}