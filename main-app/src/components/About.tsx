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
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                px: { xs: 2, sm: 6, md: 18 },
                py: 3,
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
                    fontSize: { xs: '2rem', sm: '4rem', md: '4rem' }
                }}
            >
                About Us
            </Typography>

            <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                    width: "90%",
                    m: 0,
                    zIndex: 1,
                    fontWeight: '300',
                    textAlign: 'center',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    marginBottom: 3
                }}
            >
                We are the Grub N' Go team. Our mission is to help you find the foods you love. We've curated a list of restaurants
                in the Macon area so that you can plan your next meal with ease.
            </Typography>

            <Box
                sx={{
                    border: '5px solid #ffa200',
                    width: { md:'400px', sm: '360px' },
                    borderRadius: '8px',
                    position: 'relative',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    px: { xs: 2, sm: 6, md: 18 },
                    py: 3,
                    gap: 2,
                    marginBottom: 5
                }}
            >
                <Typography
                    variant="h5"
                    color="primary.main"
                    sx={{
                        width: "200%",
                        m: 0,
                        zIndex: 1,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' }
                    }}
                >
                    Listen to our story:
                </Typography>

                <AudioPlayer />
            </Box>
        </Box>
    );
}
