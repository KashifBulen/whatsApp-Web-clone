import React from "react";
import { useState } from "react";
import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";





function SideBarHeader({ openProfile }) {
 

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
          <Avatar alt="profile" src="/User.jpg" />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />

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
        
      >
        <MoreVertIcon />
      </IconButton>
    
          
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default SideBarHeader;