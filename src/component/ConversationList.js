import React from 'react'

// import Avatar from "@mui/material/Avatar";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemText from "@mui/material/ListItemText";
// import Tooltip from "@mui/material/Tooltip";
// import Divider from "@mui/material/Divider";
// import { Box } from '@mui/material';
// import Typography from '@mui/material';



import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

import Box from '@mui/material';
import Typography from '@mui/material';
const convs = [
    {
        name: 'Person',
        phone: '03462278394',
        text: "I'll be in the neighbourhood this week.",
        person: '/user.jpg',
    },
    {
      name: 'Person',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
    {
      name: 'Person',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
    {
      name: 'Person',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
    {
      name: 'Person',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
    {
      name: 'Person',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
    {
      name: 'Person',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
    {
      name: 'Person',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
    {
      name: 'Person',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
    {
      name: 'Person',
        phone: '03462278394',
        text: "I'll be in the neighbourhood this week.",
        person: '/user.jpg',
    },
    {
      name: 'Person',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
    {
      name: 'Person',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
    {
      name: 'Person',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
    {
      name: 'Person',
      time: '12:00 pm',
      phone: '03462278394',
      text: "I'll be in the neighbourhood this week.",
      person: '/user.jpg',
    },
  ];
  
  
  
  
  
  

  export default function ConversationList() {
  return (
    <List sx={{ backgroundColor: 'white', mb: 0, overflow: 'auto', borderRight: '5px solid gainsboro', borderRightWidth: 'thin' }}>
    {convs.map((c, index) => (
        <Box key={c.phone}>
            <ListItem button selected={index === 3}>
                <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={c.person} />
                </ListItemAvatar>
                <ListItemText primary={c.name === '' ? c.phone : c.name} secondary={
                    <Tooltip id={c.phone} sx={{ maxWidth: '20rem' }} placement="bottom" enterDelay={1000} title={c.text}>
                        <Box style={{ overflow: "hidden", textOverflow: "ellipsis", width: '15rem' }}>
                            <Typography noWrap component="span" variant="body2" color="textPrimary">
                                {c.text}
                                {c.time}
                            </Typography>
                        </Box>
                    </Tooltip>
                } />
            </ListItem>
            <Divider />
      </Box>
    ))}

</List>
  )
}

 