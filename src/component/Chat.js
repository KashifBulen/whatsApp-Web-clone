import React from 'react';
import { Box, Divider } from '@mui/material';
import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatInput from './ChatInput';




export default function Chat() {

    

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#ededed', flexGrow: 1}}>
            <ChatHeader />
            <Divider />
            <ChatMain />
            <ChatInput />
        </Box>
    )
}
