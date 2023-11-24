import React from 'react'
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ChatHeader() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <AppBar elevation={0} position="static" color="default" sx={{ backgroundColor: '#ededed', borderLeft: '5px solid gainsboro', borderLeftWidth: 'thin' }} >
            <Toolbar >
                <IconButton>
                    <Avatar alt="Person" src="/user.jpg" />
                </IconButton>
                <Box>
                    <Typography noWrap component="h1" color="textPrimary">
                        Person
                    </Typography>
                    <Typography noWrap component="span" variant="body2" color="#919191">
                        last seen today at 7:33 PM
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Box>
                <Box>
                <IconButton
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
              <MoreVertIcon />
              </IconButton>
              <Menu
              sx={{top:'2.5rem', left:'2rem'}}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>Group info</MenuItem>
                <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>Select messages</MenuItem>
                <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>Close Chats</MenuItem>
                <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>Mute notifications</MenuItem>
                <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>Clear chat</MenuItem>
                <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>Exit group</MenuItem>
                
              </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    )
}