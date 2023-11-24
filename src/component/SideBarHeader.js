import React from "react";

import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Typography} from "@mui/material";



import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";




import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// import SideDrawer from './SideDrawer';

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


 
  const [isOpen, setOpen] = useState(false);

  //  const { toggleDrawer } =  useContext(DrawerContext);

  
  
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

        <IconButton onClick={() => openProfile(true)}>
           <Avatar alt="profile" src="/User.jpg"  />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
       {/*<SideDrawer/>*/}
        <Box>
          <IconButton>
            <GroupsIcon  />
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
      <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={() => setOpen(true)}>Settings</MenuItem>
      <MenuItem sx={{fontSize:'0.8rem', fontFamily:'Arial'}} onClick={handleClose}>Log out</MenuItem>
      
    </Menu>
          
        </Box>
       
      </Toolbar>
      
     
      {isOpen && (
       <Box
      boxShadow={2}
      zIndex="tooltip"
      position="absolute"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "94%",
        backgroundColor: "white",
        width: "390px",
        overflow: 'hidden', // or 'scroll' depending on your preference
        overflowY: 'auto',
      }}
    >
      <Box
        pt={7.6}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#008069",
        }}
      >
        <Box
          sx={{
            ml: 3,
            marginTop: "auto",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <IconButton onClick={() => setOpen(false)}>
            {/* Assuming you have imported the ArrowBackIcon */}
            <ArrowBackIcon sx={{ color: "#ffffff" }} />
          </IconButton>
          <Typography
            component="h1"
            color="#ffffff"
            sx={{ fontSize: "16px", marginTop: "0.6rem", marginLeft: "20px", fontWeight: "600" }}
          >
            Settings
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <List
          sx={{
            backgroundColor: "white",
            mb: 0,
            overflow: "auto",
            borderRight: "5px solid gainsboro",
            borderRightWidth: "thin",

            // Set a specific height for larger screens and adjust for smaller screens
            height: "100%", // Adjust as needed
            width: "100%",
          }}
        >
          <Box>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src="user.jpg" />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <Tooltip>
                    <Box
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "6rem",
                      }}
                    >
                      <Typography noWrap component="span" variant="body2" color="textPrimary">
                        nfvdfdkgvbd
                      </Typography>
                    </Box>
                  </Tooltip>
                }
              />
            </ListItem>

            <Divider />
          </Box>
        </List>
      </Box>
    </Box>
     )}
      
      
      
    </AppBar>
  );
}

