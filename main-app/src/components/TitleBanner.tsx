import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TitleBanner() {
    return (
        <Box
            sx={{
                borderBottom: '5px solid #ffa200',
                width: "100%",
                position: 'relative',
                height: '300px',
                backgroundImage: 'url(https://i.ibb.co/1fgbYxN8/banner.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 0
            }}
        >
            <Typography
                variant="h2"
                color="text.primary"
                sx={{
                    mt: 7,
                    position: 'absolute',
                    zIndex: 1,
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }
                }}
            >
                Easy, Convenient, and Fast
            </Typography>

            <Typography
                variant="h5"
                color="text.primary"
                sx={{
                    mt: 22,
                    position: 'absolute',
                    zIndex: 1,
                    fontWeight: '300',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                }}
            >
                Discover restaurants that match your tastes.
            </Typography>
        </Box>
    );
}
