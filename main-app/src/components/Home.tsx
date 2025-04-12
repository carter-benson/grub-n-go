import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HomeComponent() {
    return (
        <Box
            sx={{
                borderBottom: '5px solid #ffa200',
                width: "100%",
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                px: 12,
                py: 4,
                gap: 2,
                marginBottom: 5
            }}
        >
            <Typography
                variant="h2"
                color="text.secondary"
                sx={{
                    m: 0,
                    zIndex: 1,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }
                }}
            >
                Home
            </Typography>

            <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                    m: 0,
                    zIndex: 1,
                    fontWeight: '300',
                    textAlign: 'center',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                }}
            >
                We are the Grub N Go team. Our mission is to help you find the foods you love. We've curated a list of restaurants
                in the Macon area so that you can plan your next meal with ease.
            </Typography>
        </Box>
    );
}