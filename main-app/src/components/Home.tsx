import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HomeComponent() {
    return (
        <Box
            sx={{
                width: "100%",
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                px: { xs: 2, sm: 6, md: 18 },
                py: 4,
                gap: 2,
                marginBottom: 0
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
                    fontSize: { xs: '2rem', sm: '4rem', md: '4rem' }
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
                Welcome to Grub N' Go. Here, you can plan your next meal with just a button. Simply choose a food group from our curated list.
            </Typography>
        </Box>
    );
}