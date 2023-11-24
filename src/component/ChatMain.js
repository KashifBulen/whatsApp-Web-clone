import { Box } from '@mui/material';
import React from 'react';

export default function ChatMain() {
    return (
        <Box sx={{
            display: 'flex', flexGrow: 1, backgroundColor: 'rgba(229,221,213,1)'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundImage: 'url("bg.png")', opacity: 0.1, flexGrow: 1, }}>

            </Box>
        </Box>
    )
}