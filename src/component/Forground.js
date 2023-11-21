import React from 'react'
import { Container, Box } from '@mui/material';


export default function Foreground(props) {
    return (
        <Container maxWidth='lg' sx={{ marginTop: '17px', marginBottom: '20px' }}>
            <Box boxShadow={1} component="div" sx={{  overflow: 'hidden',  height: '100%' }} >
                {props.children}
            </Box>
        </Container>
    )
}
