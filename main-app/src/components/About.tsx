import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AudioPlayer from './AudioPlayer';

export default function AboutComponent() {
    return (
        <Box
            sx={{
                borderBottom: '5px solid #ffa200',
                width: "100%",
                position: 'relative',
                height: '300px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
                gap: 4,
                marginBottom: 5
            }}
        >
            <Typography
                variant="h2"
                color="text.secondary"
                sx={{
                    zIndex: 1,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }
                }}
            >
                About Us
            </Typography>

            <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                    zIndex: 1,
                    fontWeight: '300',
                    textAlign: 'center',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                }}
            >
                We are the Grub N Go team. Our mission is to help your find the foods you love.
            </Typography>

            <AudioPlayer />
        </Box>
    );
}
