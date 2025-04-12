import React, { useRef } from 'react';
import { Button, Stack } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function AudioPlayerComponent() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const handlePause = () => {
        audioRef.current?.pause();
    };

    const handleRestart = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return (
        <div>
            <audio ref={audioRef} src="/grub_n_go_story.mp3" preload="auto" />
            <Stack direction="row" spacing={2} mt={2}>
                <Button variant="contained" startIcon={<PlayArrowIcon />} onClick={handlePlay}>
                    Play
                </Button>
                <Button variant="contained" startIcon={<PauseIcon />} onClick={handlePause}>
                    Pause
                </Button>
                <Button variant="outlined" startIcon={<RestartAltIcon />} onClick={handleRestart}>
                    Restart
                </Button>
            </Stack>
        </div>
    );
};