import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, color:'text.secondary' }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Restraunt
        </Typography>
        <Typography variant="h5" component="div" color="inherit">
          Restraunt Name
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Serves: FoodGroupName</Typography>
        <Typography variant="body2">
          Ratings:
        </Typography>
        <Rating name="read-only" value={3} readOnly />
      </CardContent>
    </Card>
  );
}