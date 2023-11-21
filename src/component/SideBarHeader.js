import React from "react";

import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import SideDrawer from './SideDrawer';

import { useContext } from "react";
import { DrawerContext } from "@/context/Drawercontext";

export default function SideBarHeader({ openProfile }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


 

  const { toggleDrawer } =  useContext(DrawerContext);

  
  
  return (
    <AppBar
      elevation={0}
      position="static"
      color="default"
      sx={{
        backgroundColor: "#F0F2F5",
        width: "100%",
        borderRight: "5px solid gainsboro",
        borderRightWidth: "thin",
      }}
    >
      <Toolbar sx={{ minWidth: "100px" }}>
        <IconButton onClick={toggleDrawer}>
           <Avatar alt="profile" src="/User.jpg"  />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <SideDrawer />
        <Box>
          <IconButton>
            <GroupsIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
        </Box>

        <Box>
          <IconButton>
            <MapsUgcIcon />
          </IconButton>
        </Box>

        <Box>
          <IconButton>
            <AddCommentIcon />
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
      <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>New group</MenuItem>
      <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>New community</MenuItem>
      <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>Starred messages</MenuItem>
      <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>Select chats</MenuItem>
      <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>Settings</MenuItem>
      <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>Log out</MenuItem>
      
    </Menu>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
}

